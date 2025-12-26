const Pricing = () => {
  const packages = [
    {
      type: 'One-Time Projects',
      description: 'Perfect for single projects or campaigns',
      range: '$250 – $500',
      includes: [
        'Social media graphics',
        'Web banners',
        'Email templates',
        'PDF reports',
        'Unlimited revisions',
        'Fast turnaround',
      ],
    },
    {
      type: 'Monthly Retainer',
      description: 'Ongoing design support for your brand',
      range: '$200 – $450/month',
      includes: [
        '8-12 posts per month',
        'Content calendar',
        'Brand consistency',
        'Priority support',
        'Flexible scope',
        'Cancel anytime',
      ],
      featured: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto">
            Choose the plan that works for your business. All plans include unlimited revisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`glass-card p-8 transition-all duration-300 ${pkg.featured ? 'ring-2 ring-[--accent-start] transform md:scale-105 shadow-xl' : 'hover:shadow-lg'}`}
            >
              {pkg.featured && (
                <div className="bg-gradient-accent text-white px-4 py-1 rounded-full inline-block mb-4 text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-[--text-color] mb-2">{pkg.type}</h3>
              <p className="text-[--text-secondary] mb-6 text-sm">{pkg.description}</p>

              <div className="mb-8">
                <p className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">{pkg.range}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[--text-color]">
                    <span className="text-[--accent-start] font-bold">✓</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://forms.gle/vFu7NqLjK6JXbBfn8"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center block ${pkg.featured ? 'btn-gold' : 'btn-gold-outline'}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[--text-secondary]">
            Need something custom? <a href="mailto:kscreativelab@gmail.com" className="text-[--accent-start] font-semibold hover:underline">Let's talk</a> about your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

