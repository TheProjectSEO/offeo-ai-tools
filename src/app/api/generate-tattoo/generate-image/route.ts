import { NextRequest, NextResponse } from 'next/server'
import { generateImage } from '@/lib/image-generation'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

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

    const result = await generateImage(prompt, 'image')

    return NextResponse.json({
      success: true,
      imageUrl: result.imageUrl,
      prompt: prompt,
      provider: result.provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Image generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate image',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Image Generator API is running',
    providers: ['gemini', 'mistral', 'fallback'],
    gemini_configured: !!process.env.GOOGLE_GEMINI_API_KEY,
    mistral_configured: !!process.env.MISTRAL_API_KEY
  })
}