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
      question: "How much can I increase image resolution?",
      answer: "Our AI upscaling can increase image resolution by 2x to 4x the original size. For example, a 512x512 image can be enhanced to 2048x2048 pixels while maintaining quality and adding fine details."
    },
    {
      question: "What image formats are supported?",
      answer: "We support JPG, PNG, and WebP formats. Images up to 10MB can be uploaded and processed. The output is provided in high-quality PNG format to preserve all enhanced details."
    },
    {
      question: "How long does the upscaling process take?",
      answer: "Most images are processed within 15-60 seconds, depending on the original size and complexity. Larger images or those requiring more enhancement may take slightly longer, but rarely exceed 2 minutes."
    },
    {
      question: "Will upscaling work well for all types of images?",
      answer: "Our AI works best with photographs, artwork, graphics, and screenshots. It excels at enhancing portraits, landscapes, product photos, and digital art. Very low-quality or heavily compressed images may have limitations."
    },
    {
      question: "Is the enhanced image quality really better than traditional upscaling?",
      answer: "Yes! Traditional upscaling methods like bicubic interpolation just make images bigger and blurrier. Our AI analyzes patterns, enhances details, reduces noise, and creates new pixel information intelligently."
    },
    {
      question: "Can I use upscaled images for commercial purposes?",
      answer: "Yes, you have full rights to use the enhanced versions of your images for any purpose, including commercial projects, printing, marketing materials, and professional publications."
    },
    {
      question: "What happens to the original image quality during upscaling?",
      answer: "The process is completely lossless - your original image is never modified. We create an enhanced version with higher resolution and improved quality while preserving all the characteristics of your original image."
    },
    {
      question: "Can I upscale images multiple times for even higher resolution?",
      answer: "While technically possible, we recommend single-pass upscaling for best results. Multiple upscaling passes may introduce artifacts. Our 4x upscaling in one pass typically provides optimal quality enhancement."
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
            Everything you need to know about AI-powered image upscaling and enhancement
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
            Still have questions about image upscaling?
          </p>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}