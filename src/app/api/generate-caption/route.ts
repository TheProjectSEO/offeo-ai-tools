import { NextRequest, NextResponse } from 'next/server'
import { sanitizePrompt, safeLog, truncate } from '@/lib/security'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)

async function generateCaptionsWithGemini(prompt: string): Promise<string[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const enhancedPrompt = `You are a social media expert and content creator. Create 5-6 engaging social media captions for the following content. Each caption should be optimized for maximum engagement and include relevant hashtags. Make them varied in style - some short and punchy, some longer and storytelling, some with questions to encourage interaction:\n\n${prompt}\n\nFor each caption, include:
- Engaging text that matches the content
- Relevant hashtags (3-8 per caption)
- Call-to-action when appropriate
- Different tones (professional, casual, inspiring, fun)

Format each caption on separate lines with clear separation.`
    
    const result = await model.generateContent(enhancedPrompt)
    const response = await result.response
    const text = response.text()
    
    // Parse captions - look for clear separators or numbered items
    const captions = text.split(/\n\s*\n|\n\d+[\.\)]\s*/)
      .map(caption => caption.trim())
      .filter(caption => caption.length > 10)
      .slice(0, 6) // Limit to 6 captions
    
    return captions.length > 0 ? captions : ['Great content! 👍 #awesome #content #social']
  } catch (error) {
    console.error('Gemini caption generation error:', error)
    throw new Error('Failed to generate captions with Gemini')
  }
}

async function generateCaptionsWithMistral(prompt: string): Promise<string[]> {
  try {
    if (!process.env.MISTRAL_API_KEY) {
      throw new Error('Mistral API key not configured')
    }
    
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [
          {
            role: 'system',
            content: 'You are a social media expert and content creator. Create engaging social media captions optimized for maximum engagement. Include relevant hashtags (3-8 per caption) and vary the styles - some short and punchy, some longer storytelling, some with questions. Each caption should be clearly separated.'
          },
          {
            role: 'user',
            content: `Create 5-6 social media captions for: ${prompt}`
          }
        ],
        max_tokens: 800,
        temperature: 0.8
      })
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`)
    }

    const data = await response.json()
    const text = data.choices[0].message.content
    
    // Parse captions
    const captions = text.split(/\n\s*\n|\n\d+[\.\)]\s*/)
      .map((caption: string) => caption.trim())
      .filter((caption: string) => caption.length > 10)
      .slice(0, 6)
    
    return captions.length > 0 ? captions : ['Great content! 👍 #awesome #content #social']
  } catch (error) {
    console.error('Mistral caption generation error:', error)
    throw new Error('Failed to generate captions with Mistral')
  }
}

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()
    const cleanPrompt = sanitizePrompt(prompt)
    if (!cleanPrompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }
    if (cleanPrompt.length > 800) {
      return NextResponse.json({ error: 'Prompt too long' }, { status: 413 })
    }

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      )
    }

    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 500 }
      )
    }

    safeLog('Generating captions for prompt:', truncate(cleanPrompt))

    let captions: string[]
    let provider = 'gemini'

    try {
      captions = await generateCaptionsWithGemini(prompt)
    } catch (geminiError) {
      console.log('Gemini failed, trying Mistral fallback')
      try {
        captions = await generateCaptionsWithMistral(prompt)
        provider = 'mistral'
      } catch (mistralError) {
        return NextResponse.json(
          { error: 'Failed to generate captions with available AI services' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({
      success: true,
      captions: captions,
      prompt: prompt,
      provider: provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Caption generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate captions',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Caption Generator API is running',
    providers: ['gemini', 'mistral'],
    gemini_configured: !!process.env.GOOGLE_GEMINI_API_KEY,
    mistral_configured: !!process.env.MISTRAL_API_KEY
  })
}
