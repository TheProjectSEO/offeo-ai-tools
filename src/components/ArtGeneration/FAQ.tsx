'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index))
    } else {
      setOpenItems([...openItems, index])
    }
  }

  const faqs = [
    {
      question: "What art styles can the AI generate?",
      answer: "Our AI can create art in dozens of styles including Impressionism, Abstract Expressionism, Renaissance, Surrealism, Pop Art, Minimalism, and many more. You can also combine styles or describe custom artistic approaches."
    },
    {
      question: "How detailed should my art prompt be?",
      answer: "The more detailed your prompt, the better the results. Include information about style, colors, mood, composition, subjects, and any specific artistic techniques you want incorporated. However, simple prompts can also yield amazing results."
    },
    {
      question: "Can I use generated art for commercial purposes?",
      answer: "Yes! All artwork generated through our AI art generator comes with full commercial usage rights. You can use your creations for business projects, marketing materials, products, and more without restrictions."
    },
    {
      question: "What resolution are the generated artworks?",
      answer: "Generated artworks are created in high resolution (typically 1024x1024 pixels or higher) suitable for both digital use and printing. You can download your art in PNG format for maximum quality."
    },
    {
      question: "How long does it take to generate art?",
      answer: "Most artworks are generated within 15-30 seconds. Complex prompts or detailed styles might take slightly longer, but you'll rarely wait more than a minute for your masterpiece."
    },
    {
      question: "Can I reference specific artists in my prompts?",
      answer: "Yes, you can reference artistic styles, movements, and techniques in your prompts. For example, 'in the style of Van Gogh's swirling brushstrokes' or 'with Picasso's cubist approach' can help guide the AI's creative process."
    },
    {
      question: "Is there a limit to how many artworks I can generate?",
      answer: "Usage limits depend on your plan. Free users get a certain number of generations per day, while premium users enjoy unlimited or significantly higher limits for continuous creativity."
    },
    {
      question: "Can I edit or modify generated artworks?",
      answer: "While our tool focuses on generation, you can download your artwork and edit it in any image editing software like Photoshop, GIMP, or other tools. You can also regenerate with modified prompts for variations."
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FAFAFA'}}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Frequently asked questions
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Everything you need to know about creating stunning AI-generated artwork
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium pr-8" style={{color: '#111111'}}>
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{color: '#666666'}}>
            Still have questions about AI art generation?
          </p>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}