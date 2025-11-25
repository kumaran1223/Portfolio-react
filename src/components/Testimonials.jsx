const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechStart',
      text: 'Kumaran transformed our social media presence with stunning visuals. Our engagement increased by 150% in just two months. Highly professional and creative!',
      avatar: 'https://placehold.co/60x60/D4AF37/0F1115?text=SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, E-Commerce Plus',
      text: 'The website design was exactly what we needed. Clean, modern, and conversion-focused. Kumaran understood our brand vision perfectly.',
      avatar: 'https://placehold.co/60x60/D4AF37/0F1115?text=MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Brand Manager, Luxury Goods Co',
      text: 'Working with Kumaran was a game-changer. The design quality is premium, and the attention to detail is exceptional. Highly recommended!',
      avatar: 'https://placehold.co/60x60/D4AF37/0F1115?text=ER',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-serif font-bold text-center text-[--accent-color] mb-16 transition-colors duration-500">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-[--text-color]">{testimonial.name}</h4>
                  <p className="text-sm text-[--muted-text]">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[--accent-color]">★</span>
                ))}
              </div>

              <p className="text-[--text-color] italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

