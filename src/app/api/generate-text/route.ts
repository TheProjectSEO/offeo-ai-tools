import { NextRequest, NextResponse } from 'next/server'
import { sanitizePrompt, safeLog, truncate } from '@/lib/security'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)

async function generateTextWithGemini(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const enhancedPrompt = `You are a professional content writer. Create high-quality, engaging text based on the following request. 

Instructions:
- Keep the response between 100-500 words
- Make it natural, well-structured, and appropriate for the context
- Use clear, engaging language
- Provide practical and useful content
- Format with proper paragraphs if needed

Request: ${prompt}

Generate the text:`
    
    const result = await model.generateContent(enhancedPrompt)
    const response = await result.response
    const text = response.text()
    
    if (!text || text.trim().length === 0) {
      throw new Error('Generated text is empty')
    }
    
    return text.trim()
  } catch (error) {
    console.error('Gemini text generation error:', error)
    throw new Error(`Failed to generate text with Gemini: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

async function generateTextWithMistral(prompt: string): Promise<string> {
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
            content: 'You are a professional content writer. Create high-quality, engaging text that is natural, well-structured, and appropriate for the context.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('Mistral text generation error:', error)
    throw new Error('Failed to generate text with Mistral')
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

    // Check if API keys are available
    if (!process.env.GOOGLE_GEMINI_API_KEY && !process.env.MISTRAL_API_KEY) {
      return NextResponse.json(
        { error: 'No API keys configured. Please configure GOOGLE_GEMINI_API_KEY or MISTRAL_API_KEY.' },
        { status: 500 }
      )
    }

    safeLog('Generating text for prompt:', truncate(cleanPrompt))

    let text: string
    let provider = 'gemini'

    try {
      text = await generateTextWithGemini(cleanPrompt)
    } catch (geminiError) {
      console.log('Gemini failed, trying Mistral fallback')
      try {
        text = await generateTextWithMistral(prompt)
        provider = 'mistral'
      } catch (mistralError) {
        return NextResponse.json(
          { error: 'Both AI services are currently unavailable. Please try again later.' },
          { status: 503 }
        )
      }
    }

    return NextResponse.json({
      success: true,
      text: text,
      prompt: prompt,
      provider: provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Text generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate text',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Text Generator API is running',
    providers: ['gemini', 'mistral'],
    gemini_configured: !!process.env.GOOGLE_GEMINI_API_KEY,
    mistral_configured: !!process.env.MISTRAL_API_KEY
  })
}
