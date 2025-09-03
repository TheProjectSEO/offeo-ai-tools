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

    // Add character-specific context to the prompt
    const characterPrompt = `Character design: ${cleanPrompt}`
    safeLog('generate-character prompt:', truncate(cleanPrompt))
    const result = await generateImage(characterPrompt, 'character')

    return NextResponse.json({
      success: true,
      imageUrl: result.imageUrl,
      prompt: prompt,
      provider: result.provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Character generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate character',
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
