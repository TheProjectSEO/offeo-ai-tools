#!/usr/bin/env node
/* Simple secrets scanner: scan provided files (or entire repo if none) for risky patterns. */
const { execSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const patterns = [
  /AIza[0-9A-Za-z\-_]{35}/g, // Google API Key
  /(?i)secret\s*[:=]\s*['\"][^'\"]+['\"]/g,
  /(?i)api[_-]?key\s*[:=]\s*['\"][^'\"]+['\"]/g,
  /(?i)token\s*[:=]\s*['\"][^'\"]+['\"]/g,
  /MISTRAL_API_KEY\s*=\s*.+/g,
  /GOOGLE_GEMINI_API_KEY\s*=\s*.+/g,
  /N8N_WEBHOOK_URL\s*=\s*.+/g,
]

function getStagedFiles() {
  try {
    const out = execSync('git diff --cached --name-only --diff-filter=ACM', { stdio: ['ignore', 'pipe', 'ignore'] }).toString()
    return out.split('\n').filter(Boolean)
  } catch {
    return []
  }
}

function scanFile(file) {
  try {
    const rel = path.relative(process.cwd(), file)
    if (/node_modules|\.git|\.next|dist|build/.test(rel)) return []
    const content = fs.readFileSync(rel, 'utf8')
    const matches = []
    for (const rx of patterns) {
      const found = content.match(rx)
      if (found) matches.push({ pattern: rx.toString(), samples: found.slice(0, 3) })
    }
    return matches
  } catch {
    return []
  }
}

function main() {
  const args = process.argv.slice(2)
  let files = args
  if (files.length === 0) {
    // default to staged files; fallback to repo files
    files = getStagedFiles()
    if (files.length === 0) {
      try {
        const out = execSync('git ls-files', { stdio: ['ignore', 'pipe', 'ignore'] }).toString()
        files = out.split('\n').filter(Boolean)
      } catch {
        files = []
      }
    }
  }

  let failed = false
  for (const f of files) {
    const res = scanFile(f)
    if (res.length) {
      failed = true
      console.error(`Potential secrets in ${f}:`)
      for (const m of res) {
        console.error('  pattern:', m.pattern)
        console.error('  samples:', m.samples.join(', '))
      }
    }
  }

  if (failed) {
    console.error('\nSecret scan failed. Remove secrets before committing.')
    process.exit(1)
  } else {
    console.log('No secrets detected in scanned files.')
  }
}

main()

