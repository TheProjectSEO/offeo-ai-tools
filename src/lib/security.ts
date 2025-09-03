export function isDev() {
  return process.env.NODE_ENV !== 'production'
}

export function truncate(str: string, max = 160) {
  if (!str) return ''
  return str.length > max ? `${str.slice(0, max)}…` : str
}

export function sanitizePrompt(input: unknown, maxLen = 800): string {
  const s = typeof input === 'string' ? input : ''
  const cleaned = s.replace(/\s+/g, ' ').trim()
  return cleaned.slice(0, maxLen)
}

export function safeLog(...args: any[]) {
  if (isDev()) {
    // eslint-disable-next-line no-console
    console.log(...args)
  }
}

