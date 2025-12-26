const Trust = () => {
  const process = [
    {
      step: '01',
      title: 'Discover',
      description: 'I dive deep into understanding your brand, goals, and target audience to create a solid foundation.',
      icon: '🔍',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Strategic, high-converting designs that align with your brand and resonate with your customers.',
      icon: '🎨',
    },
    {
      step: '03',
      title: 'Launch',
      description: 'Polished, production-ready assets delivered on time with clear communication throughout.',
      icon: '🚀',
    },
    {
      step: '04',
      title: 'Grow',
      description: 'Ongoing support and optimization to ensure your designs continue to drive results.',
      icon: '📈',
    },
  ];

  const trustPoints = [
    {
      icon: '✓',
      title: 'Strategy-Driven Design',
      description: 'Every design decision is backed by strategy, not just aesthetics.',
    },
    {
      icon: '✓',
      title: 'Business-Focused',
      description: 'I design for conversions and growth, not just looks.',
    },
    {
      icon: '✓',
      title: 'Clear Communication',
      description: 'You\'ll always know what\'s happening and why.',
    },
    {
      icon: '✓',
      title: 'Affordable Pricing',
      description: 'Premium quality without the premium price tag.',
    },
  ];

  return (
    <section id="trust" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
            Why Clients Trust Me
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto">
            A proven process that delivers results for small businesses and startups.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-[--text-color] mb-12 text-center">My Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="glass-card p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-[--accent-start] mb-2 uppercase tracking-wider">
                  Step {item.step}
                </div>
                <h4 className="text-xl font-bold text-[--text-color] mb-3">{item.title}</h4>
                <p className="text-[--text-secondary] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-3xl text-[--accent-start] font-bold flex-shrink-0">{point.icon}</div>
              <div>
                <h4 className="text-lg font-bold text-[--text-color] mb-2">{point.title}</h4>
                <p className="text-[--text-secondary]">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;

