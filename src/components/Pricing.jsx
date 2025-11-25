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
        <h2 className="text-4xl font-serif font-bold text-center text-[--accent-color] mb-16 transition-colors duration-500">
          Pricing
        </h2>
        <p className="text-lg text-[--muted-text] text-center max-w-3xl mx-auto mb-16">
          Transparent pricing for every budget. Custom quotes available for larger projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`glass-card p-8 ${pkg.featured ? 'ring-2 ring-[--accent-color] transform md:scale-105' : ''}`}
            >
              {pkg.featured && (
                <div className="bg-[--accent-color] text-[--bg-color] px-4 py-1 rounded-full inline-block mb-4 text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[--text-color] mb-2">{pkg.type}</h3>
              <p className="text-[--muted-text] mb-6">{pkg.description}</p>
              
              <div className="mb-8">
                <p className="text-4xl font-bold text-[--accent-color]">{pkg.range}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[--text-color]">
                    <span className="text-[--accent-color]">✓</span>
                    <span>{item}</span>
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
          <p className="text-[--muted-text]">
            <span className="text-[--accent-color] font-semibold">Custom quote on request</span> for enterprise projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

