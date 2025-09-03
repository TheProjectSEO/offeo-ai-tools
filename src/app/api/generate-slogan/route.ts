import { NextRequest, NextResponse } from 'next/server'
import { sanitizePrompt, safeLog, truncate } from '@/lib/security'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!)

async function generateSlogansWithGemini(prompt: string): Promise<string[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    
    const enhancedPrompt = `You are a creative marketing specialist and copywriter. Create exactly 8 catchy, memorable slogans for the following business/product:

Business/Product: ${prompt}

Instructions:
- Each slogan must be 2-8 words maximum
- Make them punchy, memorable, and brandable
- Use different approaches: emotional, benefit-focused, unique positioning
- Avoid clichés and overused phrases
- Make them easy to remember and say
- Ensure they're appropriate for all audiences
- List each slogan on a separate line
- Number each slogan (1. 2. 3. etc.)

Generate exactly 8 slogans:`
    
    const result = await model.generateContent(enhancedPrompt)
    const response = await result.response
    const text = response.text()
    
    // Parse the response into individual slogans
    const slogans = text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.replace(/^[-•*]\s*/, '').replace(/^\d+\.\s*/, ''))
      .filter(line => line.length > 0)
      .slice(0, 10) // Limit to 10 slogans
    
    return slogans.length > 0 ? slogans : ['Your Brand, Your Success']
  } catch (error) {
    console.error('Gemini slogan generation error:', error)
    throw new Error('Failed to generate slogans with Gemini')
  }
}

async function generateSlogansWithMistral(prompt: string): Promise<string[]> {
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
            content: 'You are a creative marketing specialist and copywriter. Create catchy, memorable slogans that are short, impactful, and brandable. Generate diverse slogans focusing on different aspects - benefits, emotions, uniqueness. Each slogan should be no more than 8 words and listed on separate lines.'
          },
          {
            role: 'user',
            content: `Create 8-10 catchy slogans for: ${prompt}`
          }
        ],
        max_tokens: 500,
        temperature: 0.9
      })
    })

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.status}`)
    }

    const data = await response.json()
    const text = data.choices[0].message.content
    
    // Parse the response into individual slogans
    const slogans = text.split('\n')
      .map((line: string) => line.trim())
      .filter((line: string) => line.length > 0)
      .map((line: string) => line.replace(/^[-•*]\s*/, '').replace(/^\d+\.\s*/, ''))
      .filter((line: string) => line.length > 0)
      .slice(0, 10)
    
    return slogans.length > 0 ? slogans : ['Your Brand, Your Success']
  } catch (error) {
    console.error('Mistral slogan generation error:', error)
    throw new Error('Failed to generate slogans with Mistral')
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

    safeLog('Generating slogans for prompt:', truncate(cleanPrompt))

    let slogans: string[]
    let provider = 'gemini'

    try {
      slogans = await generateSlogansWithGemini(cleanPrompt)
    } catch (geminiError) {
      console.log('Gemini failed, trying Mistral fallback')
      try {
        slogans = await generateSlogansWithMistral(prompt)
        provider = 'mistral'
      } catch (mistralError) {
        console.log('Both APIs failed, using demo slogans')
        slogans = [
          `${prompt} - Your Choice`,
          'Excellence Delivered',
          'Innovation You Trust',
          'Quality That Speaks',
          'Beyond Expectations',
          'Your Success Story',
          'Making Dreams Reality',
          'The Future Starts Here'
        ]
        provider = 'demo'
      }
    }

    return NextResponse.json({
      success: true,
      slogans: slogans,
      prompt: prompt,
      provider: provider,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Slogan generation error:', error)
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to generate slogans',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'AI Slogan Generator API is running',
    providers: ['gemini', 'mistral'],
    gemini_configured: !!process.env.GOOGLE_GEMINI_API_KEY,
    mistral_configured: !!process.env.MISTRAL_API_KEY
  })
}
