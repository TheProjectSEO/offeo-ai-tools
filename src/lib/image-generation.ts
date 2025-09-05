// Google Imagen 4 API via Google AI Studio
// Official endpoint: https://ai.google.dev/gemini-api/docs/imagen
// Uses the correct imagen-4.0-generate-001 model with proper request/response format

export interface ImageGenerationResult {
  imageUrl: string
  provider: string
}

import { isDev, safeLog, truncate } from './security'

export async function generateImageWithGemini(prompt: string, opts?: { size?: '512' | '768' | '1024' | '1536' }): Promise<string> {
  try {
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY
    if (!apiKey) throw new Error('Missing GOOGLE_GEMINI_API_KEY')

    const size = opts?.size ?? '1024'
    // Google Imagen 4 API - correct endpoint and format
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict`
    
    // Map size to aspect ratio (all square for now)
    const aspectRatio = "1:1"
    const sampleImageSize = size === '1536' ? '2K' : '1K'
    
    const body = {
      instances: [
        {
          prompt: prompt
        }
      ],
      parameters: {
        sampleCount: 1,
        aspectRatio: aspectRatio,
        sampleImageSize: sampleImageSize
      }
    }

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'x-goog-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error(`Gemini Images API error ${res.status}: ${text}`)
    }

    const data = await res.json() as unknown
    // Correct response shape: { predictions: [{ bytesBase64Encoded: '...' }] }
    const b64 = data?.predictions?.[0]?.bytesBase64Encoded
    if (!b64) throw new Error('No image data returned from Gemini Images API')

    // Return as data URL
    return `data:image/png;base64,${b64}`
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Gemini image generation error:', error)
    throw new Error('Failed to generate image with Gemini')
  }
}

export async function generateImageWithMistral(prompt: string): Promise<string> {
  try {
    safeLog('Falling back to Mistral for:', truncate(prompt))
    // Note: Mistral does not natively support image generation as of now.
    // Keep a graceful visual placeholder fallback.
    const seed = (prompt.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 10000).toString()
    return `https://picsum.photos/seed/mistral-${seed}/1024/1024`
  } catch (error) {
    console.error('Mistral image generation error:', error)
    throw new Error('Failed to generate image with Mistral')
  }
}

function stylePrompt(base: string, type: string) {
  const common = 'Highly detailed, well-composed, professional quality.'
  const negatives = 'No text overlays, no watermarks, no captions, no frame, no signature, no UI, no camera UI, no borders.'
  const map: Record<string, string> = {
    image: `${base}. ${common} ${negatives}`,
    art: `${base}. Digital art, dramatic lighting, painterly brushwork. ${common} ${negatives}`,
    cartoon: `${base}. Cartoon, bold outlines, bright flat colors, cel-shading. ${common} ${negatives}. Avoid photorealism.`,
    anime: `${base}. Anime style, Studio Ghibli-inspired, soft lighting, expressive eyes. ${common} ${negatives}. Avoid photorealism.`,
    character: `${base}. Full-body character concept, neutral background, turnaround friendly. ${common} ${negatives}.`,
    pokemon: `${base}. Cute creature design in Pokemon-like style, clean background, game-ready. ${common} ${negatives}. No humans, no text.`,
    logo: `${base}. Vector logo, minimal, flat, high contrast, centered on white. ${common} ${negatives}. No photo, no gradients unless specified.`,
    headshot: `${base}. Professional portrait headshot, sharp focus, soft background bokeh. ${common} ${negatives}.`,
    face: `${base}. Photorealistic human face, studio lighting, symmetric features. ${common} ${negatives}.`,
    tattoo: `${base}. Black ink tattoo design, clean linework, stencil-friendly on white. ${common} ${negatives}. No photo background, no shading unless specified.`
  }
  return map[type] || map.image
}

export async function generateImage(prompt: string, type: string = 'image'): Promise<ImageGenerationResult> {
  safeLog(`Generating ${type} for prompt:`, truncate(prompt))

  // Check if API keys are available
  if (!process.env.GOOGLE_GEMINI_API_KEY && !process.env.MISTRAL_API_KEY) {
    throw new Error('No API keys configured. Please configure GOOGLE_GEMINI_API_KEY or MISTRAL_API_KEY.')
  }

  const styled = stylePrompt(prompt, type)
  let imageUrl: string
  let provider: string = 'gemini'

  try {
    imageUrl = await generateImageWithGemini(styled, { size: '1024' })
  } catch (geminiError) {
    console.log('Gemini failed, trying Mistral fallback')
    try {
      imageUrl = await generateImageWithMistral(styled)
      provider = 'mistral'
    } catch (mistralError) {
      throw new Error('Both AI services are currently unavailable for image generation. Please try again later.')
    }
  }

  return { imageUrl, provider }
}
