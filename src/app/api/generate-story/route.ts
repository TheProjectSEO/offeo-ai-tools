import { NextRequest, NextResponse } from 'next/server'
import { sanitizePrompt, safeLog, truncate } from '@/lib/security'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)

async function generateStoryWithGemini(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const enhancedPrompt = `You are a creative storyteller. Write an engaging, complete story based on the following idea.

Instructions:
- Create a story between 200-800 words
- Include a clear beginning, middle, and end
- Develop interesting characters with distinct personalities
- Use vivid descriptions and engaging dialogue
- Create tension and resolution
- Make it age-appropriate and family-friendly
- Use proper paragraph formatting

Story prompt: ${prompt}

Write the complete story:`
    
    const result = await model.generateContent(enhancedPrompt)
    const response = await result.response
    const text = response.text()
    
    return text
  } catch (error) {
    console.error('Gemini story generation error:', error)
    throw new Error('Failed to generate story with Gemini')
  }
}

async function generateStoryWithMistral(prompt: string): Promise<string> {
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
            content: 'You are a creative storyteller. Write engaging, well-structured stories with vivid descriptions, compelling characters, and interesting plots. Make them captivating and immersive with a clear beginning, middle, and end.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.8
      })
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('Mistral story generation error:', error)
    throw new Error('Failed to generate story with Mistral')
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

    safeLog('Generating story for prompt:', truncate(cleanPrompt))

    let story: string
    let provider = 'gemini'

    try {
      story = await generateStoryWithGemini(cleanPrompt)
    } catch (geminiError) {
      console.log('Gemini failed, trying Mistral fallback')
      try {
        story = await generateStoryWithMistral(prompt)
        provider = 'mistral'
      } catch (mistralError) {
        console.log('Both APIs failed, using demo story')
        story = `Once upon a time, there was a story about: "${prompt}"\n\nThis is a demonstration story. In this tale, our protagonist faces challenges, discovers something important about themselves, and ultimately grows from their experience.\n\nThe adventure unfolds with unexpected twists and turns, leading to a satisfying conclusion that ties together all the story elements.\n\nThis demo story would be replaced with an actual AI-generated narrative when the APIs are properly configured.\n\nThe End.`
        provider = 'demo'
      }
    }

    return NextResponse.json({
      success: true,
      story: story,
      prompt: prompt,
      provider: provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Story generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate story',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Story Generator API is running',
    providers: ['gemini', 'mistral'],
    gemini_configured: !!process.env.GOOGLE_GEMINI_API_KEY,
    mistral_configured: !!process.env.MISTRAL_API_KEY
  })
}
