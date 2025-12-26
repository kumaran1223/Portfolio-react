import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

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
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 px-6 bg-[--bg-color] transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto">
            Real feedback from real clients who've seen results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card p-8 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[--accent-start] text-lg">★</span>
                ))}
              </div>

              <p className="text-[--text-color] mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 pt-6 border-t border-[--border-color]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-[--text-color] text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-[--text-secondary]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

