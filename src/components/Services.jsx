const Services = () => {
  const services = [
    {
      title: 'Social Creatives',
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
      title: 'Web Banners',
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
      title: 'Website Design',
      description: 'Complete website design and development from concept to launch.',
      bullets: [
        'Responsive & mobile-first',
        'SEO-optimized',
        'Fast performance',
      ],
      turnaround: '2-4 weeks',
      price: '$500-1500',
    },
    {
      title: 'Monthly Content Package',
      description: 'Ongoing content creation and design for consistent brand presence.',
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
        <h2 className="text-4xl font-serif font-bold text-center text-[--accent-color] mb-16 transition-colors duration-500">
          Services
        </h2>
        <p className="text-lg text-[--muted-text] text-center max-w-3xl mx-auto mb-16">
          Tailored design solutions to elevate your brand and drive results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8">
              <h3 className="text-2xl font-bold text-[--accent-color] mb-3">{service.title}</h3>
              <p className="text-[--text-color] mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-[--text-color]">
                    <span className="text-[--accent-color] font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[--border-color] pt-4 flex justify-between items-end">
                <div>
                  <p className="text-sm text-[--muted-text] mb-1">Turnaround</p>
                  <p className="text-[--text-color] font-semibold">{service.turnaround}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[--muted-text] mb-1">Starting at</p>
                  <p className="text-2xl font-bold text-[--accent-color]">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[--muted-text] mb-4">Need something custom?</p>
          <a href="mailto:kscreativelab@gmail.com" className="btn-gold">
            Request Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

