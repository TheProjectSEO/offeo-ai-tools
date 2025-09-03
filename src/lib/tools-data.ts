import { AITool, ToolCategory } from '@/types/tools'

export const aiTools: AITool[] = [
  // Core Offeo Tools
  {
    id: 'background-removal',
    name: 'Background Removal',
    description: 'Remove backgrounds from images instantly with AI precision. Perfect for product photos, portraits, and creating professional visuals.',
    shortDescription: 'Remove backgrounds with AI precision',
    category: 'image',
    features: ['One-click removal', 'Edge detection', 'Batch processing', 'High resolution output'],
    icon: 'Scissors',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    status: 'available',
    href: '/background-removal'
  },
  {
    id: 'image-creation',
    name: 'AI Image Creation',
    description: 'Generate stunning images from text descriptions. Create product mockups, social media content, and marketing visuals.',
    shortDescription: 'Generate images from text',
    category: 'image',
    features: ['Text-to-image', 'Style customization', 'Brand consistency', 'Multiple formats'],
    icon: 'Palette',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    status: 'available',
    href: '/image-creation'
  },
  {
    id: 'text-generation',
    name: 'AI Text Generation',
    description: 'Create compelling copy for your marketing campaigns, social posts, and product descriptions with AI assistance.',
    shortDescription: 'Generate marketing copy with AI',
    category: 'text',
    features: ['Marketing copy', 'Social media posts', 'Product descriptions', 'Multiple tones'],
    icon: 'PenTool',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    status: 'available',
    href: '/text-generation'
  },
  {
    id: 'smart-crop',
    name: 'Smart Crop',
    description: 'Automatically crop images with AI to focus on the most important elements. Perfect for social media and marketing.',
    shortDescription: 'Intelligent image cropping',
    category: 'image',
    features: ['Auto focus detection', 'Multiple aspect ratios', 'Batch processing', 'Platform optimization'],
    icon: 'Crop',
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    status: 'available',
    href: '/smart-crop'
  },
  
  // Partner Tools
  {
    id: 'bubio-chat',
    name: 'AI Girlfriend & Companions',
    description: 'Connect with personalized AI girlfriends and companions designed for meaningful conversations, emotional support, and companionship.',
    shortDescription: 'AI girlfriend and companion chat',
    category: 'chat',
    features: ['Personalized AI girlfriend', 'Emotional conversations', 'Custom personalities', '24/7 companionship'],
    icon: 'MessageCircle',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    status: 'available',
    href: 'https://bubio.ai',
    isPartner: true,
    partnerInfo: {
      company: 'Bubio',
      website: 'bubio.ai',
      tagline: 'Your AI girlfriend awaits - create meaningful connections'
    }
  },
  
  // Coming Soon Tools
  {
    id: 'video-editing',
    name: 'AI Video Editing',
    description: 'Edit videos with AI assistance. Automatic cuts, transitions, and effects for professional video content.',
    shortDescription: 'AI-powered video editing',
    category: 'video',
    features: ['Auto editing', 'Smart transitions', 'Music sync', 'Export optimization'],
    icon: 'Video',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    status: 'coming-soon'
  },
  {
    id: 'voice-synthesis',
    name: 'Voice Synthesis',
    description: 'Generate natural-sounding voice overs for your content with AI. Multiple voices and languages available.',
    shortDescription: 'AI voice generation',
    category: 'audio',
    features: ['Natural voices', 'Multiple languages', 'Custom tone', 'Background music'],
    icon: 'Mic',
    gradient: 'linear-gradient(135deg, #ec4899, #db2777)',
    status: 'coming-soon'
  }
]

export const toolCategories: ToolCategory[] = [
  {
    id: 'image',
    name: 'Image Tools',
    description: 'Transform and enhance your images with AI',
    tools: aiTools.filter(tool => tool.category === 'image')
  },
  {
    id: 'text',
    name: 'Text Tools', 
    description: 'Generate compelling copy and content',
    tools: aiTools.filter(tool => tool.category === 'text')
  },
  {
    id: 'chat',
    name: 'AI Assistants',
    description: 'Intelligent chat and automation tools',
    tools: aiTools.filter(tool => tool.category === 'chat')
  },
  {
    id: 'video',
    name: 'Video Tools',
    description: 'Edit and create video content',
    tools: aiTools.filter(tool => tool.category === 'video')
  },
  {
    id: 'audio',
    name: 'Audio Tools', 
    description: 'Voice and audio generation',
    tools: aiTools.filter(tool => tool.category === 'audio')
  }
]

export const featuredTools = aiTools.filter(tool => 
  ['background-removal', 'image-creation', 'text-generation', 'bubio-chat'].includes(tool.id)
)