import { NextResponse } from 'next/server'

// Simple in-memory rate limiter for API routes (best-effort, per-instance)
// Limits each IP to 60 requests per minute.
const WINDOW_MS = 60 * 1000
const MAX_REQ = 60
const hits = new Map<string, { count: number; reset: number }>()

export function middleware(req: Request) {
  const url = new URL(req.url)
  if (!url.pathname.startsWith('/api/')) return NextResponse.next()

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  const now = Date.now()
  const record = hits.get(ip)

  if (!record || record.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return NextResponse.next()
  }

  if (record.count >= MAX_REQ) {
    const res = NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    res.headers.set('Retry-After', Math.ceil((record.reset - now) / 1000).toString())
    return res
  }

  record.count += 1

  // Optional API key gate (non-breaking): only enforce if env is set
  const requiredKey = process.env.API_GATEWAY_KEY
  if (requiredKey) {
    const clientKey = req.headers.get('x-api-key')
    if (!clientKey || clientKey !== requiredKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
