'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What image formats do you support?",
      answer: "We support JPG, JPEG, PNG, and WebP formats up to 10MB in size. For best results, use high-resolution images with clear subject definition."
    },
    {
      question: "How accurate is the AI background removal?",
      answer: "Our AI achieves 99.9% accuracy in detecting subjects and removing backgrounds. It's particularly effective with people, products, animals, and objects with clear edges."
    },
    {
      question: "Is there a limit on how many images I can process?",
      answer: "Free users can process up to 10 images per day. Premium users get unlimited processing with additional features like batch upload and priority processing."
    },
    {
      question: "Do you store or keep my uploaded images?",
      answer: "No, we prioritize your privacy. Images are processed in real-time and automatically deleted from our servers within 1 hour. We never store or share your content."
    },
    {
      question: "Can I use the images commercially?",
      answer: "Yes! All processed images are yours to use freely for personal and commercial purposes. There are no restrictions or watermarks on the final output."
    },
    {
      question: "What if the AI doesn't detect my subject correctly?",
      answer: "While our AI is highly accurate, complex images with similar colors between subject and background may need manual touch-ups. Premium users get access to our manual editing tools."
    }
  ]

  return (
    <section className="py-12 md:py-16" style={{background: '#FFFDF9'}}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Frequently asked questions
          </h2>
          <p className="text-lg" style={{color: '#666666'}}>
            Everything you need to know about background removal
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium pr-4" style={{color: '#111111'}}>
                    {faq.question}
                  </h3>
                  <div 
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                    style={{background: '#F5F1EA'}}
                  >
                    <svg 
                      className="w-3 h-3" 
                      fill="none" 
                      stroke="currentColor" 
                      style={{color: '#111111'}}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{color: '#666666'}}>
            Still have questions?
          </p>
          <button className="px-8 py-3 border-2 border-gray-200 text-sm font-medium rounded-full hover:border-gray-300 transition-colors" style={{color: '#111111'}}>
            Contact support
          </button>
        </div>
      </div>
    </section>
  )
}