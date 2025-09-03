export interface AITool {
  id: string
  name: string
  description: string
  shortDescription?: string
  category: 'image' | 'text' | 'chat' | 'video' | 'audio'
  features: string[]
  icon: string
  gradient: string
  status: 'available' | 'coming-soon' | 'beta'
  href?: string
  isPartner?: boolean
  partnerInfo?: {
    company: string
    website: string
    tagline: string
  }
}

export interface ToolCategory {
  id: string
  name: string
  description: string
  tools: AITool[]
}