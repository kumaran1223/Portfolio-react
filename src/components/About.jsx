const About = () => {
  const tools = [
    { name: 'Figma', icon: 'fa-figma' },
    { name: 'Photoshop', icon: 'fa-image' },
    { name: 'HTML/CSS', icon: 'fa-code' },
    { name: 'React', icon: 'fa-react' },
    { name: 'JavaScript', icon: 'fa-js' },
    { name: 'Canva', icon: 'fa-palette' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
            About Me
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto">
            Creative designer helping brands grow through strategic design and marketing
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-[--text-color] leading-relaxed mb-6">
            I'm Kumaran S — a creative designer who turns brand stories into scroll-stopping visuals that drive real business results.
          </p>
          <p className="text-lg text-[--text-color] leading-relaxed mb-6">
            I specialize in creating high-converting social content, strategic banners, and marketing materials that help small businesses and startups stand out in a crowded market.
          </p>
          <p className="text-lg text-[--text-color] leading-relaxed">
            Every project is a partnership. I combine creativity with strategy to deliver designs that don't just look good—they perform.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--text-color] mb-8 text-center">Experience</h3>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 border-l-4 border-[--accent-start] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[--accent-start] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-[--text-color] mb-1">TechnoHacks Internship</h4>
                  <p className="text-sm text-[--text-secondary] mb-2">Creative Design Intern</p>
                  <p className="text-[--text-secondary]">Gained hands-on experience in social media design, web banners, and brand content creation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Skills */}
        <div>
          <h3 className="text-2xl font-bold text-[--text-color] mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="glass-card px-6 py-3 text-center hover:border-[--accent-start] hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-2 justify-center">
                  <i className={`fas ${tool.icon} text-[--accent-color] text-lg group-hover:text-[--accent-start] transition-colors duration-300`}></i>
                  <p className="text-[--text-color] font-medium text-sm">{tool.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

