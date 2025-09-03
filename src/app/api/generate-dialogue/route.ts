import { NextRequest, NextResponse } from 'next/server'
import { sanitizePrompt, safeLog, truncate } from '@/lib/security'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)

async function generateDialogueWithGemini(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const enhancedPrompt = `You are a professional screenwriter and dialogue specialist. Create natural, engaging dialogue based on the following scenario. Make the conversation realistic, with distinct character voices, appropriate emotions, and natural speech patterns. Format it properly for scripts:\n\n${prompt}\n\nWrite the dialogue with character names followed by their lines, like this format:\nCHARACTER NAME: Their dialogue here\nCHARACTER NAME: Their response here`
    
    const result = await model.generateContent(enhancedPrompt)
    const response = await result.response
    const text = response.text()
    
    return text
  } catch (error) {
    console.error('Gemini dialogue generation error:', error)
    throw new Error('Failed to generate dialogue with Gemini')
  }
}

async function generateDialogueWithMistral(prompt: string): Promise<string> {
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
            content: 'You are a professional screenwriter and dialogue specialist. Create natural, engaging dialogue with distinct character voices, appropriate emotions, and natural speech patterns. Format it properly for scripts with character names followed by their lines.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.8
      })
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('Mistral dialogue generation error:', error)
    throw new Error('Failed to generate dialogue with Mistral')
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

    safeLog('Generating dialogue for prompt:', truncate(cleanPrompt))

    let dialogue: string
    let provider = 'gemini'

    try {
      dialogue = await generateDialogueWithGemini(prompt)
    } catch (geminiError) {
      console.log('Gemini failed, trying Mistral fallback')
      try {
        dialogue = await generateDialogueWithMistral(prompt)
        provider = 'mistral'
      } catch (mistralError) {
        return NextResponse.json(
          { error: 'Failed to generate dialogue with available AI services' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({
      success: true,
      dialogue: dialogue,
      prompt: prompt,
      provider: provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Dialogue generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate dialogue',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Dialogue Generator API is running',
    providers: ['gemini', 'mistral'],
    gemini_configured: !!process.env.GOOGLE_GEMINI_API_KEY,
    mistral_configured: !!process.env.MISTRAL_API_KEY
  })
}
