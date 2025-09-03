export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Creative Director",
      company: "Designly",
      companyLogo: "D",
      quote: "These AI tools have revolutionized our creative process. What used to take our team hours now happens in minutes, with consistently professional results.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      bgColor: "#FFF5F5"
    },
    {
      name: "Jordan Kim",
      role: "Marketing Specialist",
      company: "GrowthTech",
      companyLogo: "G", 
      quote: "The AI background removal and image generation tools are incredible. Our social media engagement has increased 60% since using these professional tools.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b95b4a65?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      bgColor: "#F0F9FF"
    },
    {
      name: "Sam Chen",
      role: "Content Creator",
      company: "Studio Pro",
      companyLogo: "S",
      quote: "As a freelance creator, having access to these professional AI tools has been game-changing. The quality and speed help me serve more clients effectively.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      bgColor: "#F0FDF4"
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16" style={{background: '#F5F1EA'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4" style={{color: '#111111'}}>
            Trusted by professionals
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#666666'}}>
            Professionals across industries rely on our AI tools to enhance their creative workflows
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border"
              style={{background: testimonial.bgColor}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3 shadow-md"
                  />
                  <div>
                    <div className="font-medium text-sm" style={{color: '#111111'}}>{testimonial.name}</div>
                    <div className="text-xs" style={{color: '#666666'}}>{testimonial.role}</div>
                  </div>
                </div>
                
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                  style={{background: '#111111'}}
                >
                  {testimonial.companyLogo}
                </div>
              </div>
              
              <blockquote className="mb-4 leading-relaxed text-sm" style={{color: '#333333'}}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium" style={{color: '#666666'}}>
                  {testimonial.company}
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 text-xs mr-1">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-xs font-medium" style={{color: '#111111'}}>5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm mb-4" style={{color: '#666666'}}>
            Join 50,000+ professionals using our AI tools
          </p>
          <button className="px-8 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-900 transition-colors">
            Explore AI Tools
          </button>
        </div>
      </div>
    </section>
  )
}