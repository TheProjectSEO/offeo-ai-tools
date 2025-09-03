import { NextRequest, NextResponse } from 'next/server'
import { sanitizePrompt, safeLog, truncate } from '@/lib/security'
import { generateImage } from '@/lib/image-generation'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()
    const cleanPrompt = sanitizePrompt(prompt)
    if (!cleanPrompt) return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      )
    }

    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      )
    }

    // Add logo-specific context to the prompt
    const logoPrompt = `Professional logo design: ${cleanPrompt}`
    safeLog('generate-logo prompt:', truncate(cleanPrompt))
    const result = await generateImage(logoPrompt, 'logo')

    return NextResponse.json({
      success: true,
      imageUrl: result.imageUrl,
      prompt: prompt,
      provider: result.provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Logo generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate logo',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  const isDev = process.env.NODE_ENV !== 'production'
  return NextResponse.json(isDev ? { status: 'dev' } : { status: 'OK' })
}
