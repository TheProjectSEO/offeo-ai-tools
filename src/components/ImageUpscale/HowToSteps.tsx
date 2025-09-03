export default function HowToSteps() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Image",
      description: "Select any image from your device. Supports JPG, PNG, and WebP formats up to 10MB.",
      icon: "📁"
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our AI analyzes your image, identifying details, textures, and areas that need enhancement.",
      icon: "🔍"
    },
    {
      number: "03",
      title: "Smart Upscaling",
      description: "Advanced algorithms enhance resolution while preserving and improving fine details and clarity.",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Download Result",
      description: "Get your high-resolution image, perfect for printing, professional use, or digital display.",
      icon: "⬇️"
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{background: '#FAFAFA'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Upscale images in 4 simple steps
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Transform low-resolution images into high-quality versions with our intelligent AI upscaling technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-xs font-bold mb-2" style={{color: '#9CA3AF'}}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{color: '#111111'}}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{color: '#666666'}}>
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}