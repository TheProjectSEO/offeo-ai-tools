export default function HowToSteps() {
  const steps = [
    {
      title: "Choose a photo or",
      subtitle: "drag & drop it",
      description: "Select any image from your computer or device. Our AI works with JPG, PNG, and WebP formats up to 10MB.",
      icon: "📁",
      gradient: "linear-gradient(135deg, #FFC4BC, #FFB4A8)"
    },
    {
      title: "Wait for the background",
      subtitle: "to vanish",
      description: "Our advanced AI instantly analyzes your image and removes the background while preserving fine details like hair and edges.",
      icon: "✨",
      gradient: "linear-gradient(135deg, #A6D8FF, #8CC8FF)"
    },
    {
      title: "Download your image",
      subtitle: "in PNG format",
      description: "Get your professional-quality transparent background image ready for use in presentations, designs, or online stores.",
      icon: "⬇️",
      gradient: "linear-gradient(135deg, #E8F5E8, #D4F4D4)"
    }
  ]

  return (
    <section className="py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            How do I make my background transparent?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Remove backgrounds from any image in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{background: '#111111'}}
                >
                  {index + 1}
                </div>
              </div>
              
              {/* Icon */}
              <div 
                className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center text-3xl shadow-lg"
                style={{background: step.gradient}}
              >
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-1" style={{color: '#111111'}}>
                  {step.title}
                </h3>
                <h4 className="text-xl font-medium mb-3" style={{color: '#111111'}}>
                  {step.subtitle}
                </h4>
              </div>
              
              <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{color: '#666666'}}>
                {step.description}
              </p>
              
              {/* Connector arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <div className="text-2xl" style={{color: '#666666'}}>→</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            Try it now for free
          </button>
        </div>
      </div>
    </section>
  )
}