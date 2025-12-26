const Services = () => {
  const services = [
    {
      title: 'Social Media Management',
      icon: '📱',
      description: 'Eye-catching posts, stories, and carousel designs optimized for Instagram, LinkedIn, and Facebook.',
      bullets: [
        'Custom design per platform',
        'Brand-aligned templates',
        'Unlimited revisions',
      ],
      turnaround: '3-5 days',
      price: '$50-150',
    },
    {
      title: 'Creative Posters & Banners',
      icon: '🎨',
      description: 'High-converting banner ads for websites, landing pages, and email campaigns.',
      bullets: [
        'Multiple sizes & formats',
        'A/B testing variants',
        'Responsive design',
      ],
      turnaround: '2-3 days',
      price: '$100-200',
    },
    {
      title: 'Paid Ads & Promotions',
      icon: '📊',
      description: 'Strategic ad designs and promotional materials to boost visibility and conversions.',
      bullets: [
        'Platform-optimized designs',
        'High-converting creatives',
        'Performance tracking',
      ],
      turnaround: '2-3 days',
      price: '$75-200',
    },
    {
      title: 'Brand Strategy & Growth',
      icon: '🚀',
      description: 'Comprehensive brand strategy and ongoing content creation for consistent growth.',
      bullets: [
        '8-12 posts per month',
        'Content calendar included',
        'Priority support',
      ],
      turnaround: 'Ongoing',
      price: '$500-1000/mo',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
            Services Built for Growth
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto">
            Tailored design and marketing solutions to help your brand stand out and convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="text-5xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 inline-block">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[--text-color] mb-3 transition-colors duration-300 group-hover:text-[--accent-start]">{service.title}</h3>
              <p className="text-[--text-secondary] mb-6">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-[--text-secondary] transition-all duration-300 group-hover:translate-x-1">
                    <span className="text-[--accent-start] font-bold text-lg">✓</span>
                    <span className="text-[--text-color]">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[--border-color] pt-6 flex justify-between items-end">
                <div>
                  <p className="text-xs text-[--text-secondary] uppercase tracking-wide mb-1">Turnaround</p>
                  <p className="text-[--text-color] font-semibold">{service.turnaround}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[--text-secondary] uppercase tracking-wide mb-1">Starting at</p>
                  <p className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[--text-secondary] mb-6">Need something custom? Let's talk about your specific needs.</p>
          <a href="mailto:kscreativelab@gmail.com" className="btn-gold inline-block">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

