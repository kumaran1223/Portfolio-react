import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const tools = [
    { name: 'Figma', icon: 'fa-figma', iconType: 'fab' },
    { name: 'Photoshop', icon: 'fa-adobe', iconType: 'fab' },
    { name: 'HTML/CSS', icon: 'fa-html5', iconType: 'fab' },
    { name: 'React', icon: 'fa-react', iconType: 'fab' },
    { name: 'JavaScript', icon: 'fa-js', iconType: 'fab' },
    { name: 'Canva', icon: 'fa-pen-nib', iconType: 'fas' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-[--bg-color] transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
            About Me
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto">
            Creative designer helping brands grow through strategic design and marketing
          </p>
        </div>

        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-[--text-color] leading-relaxed mb-6">
            I'm Krish S — a creative designer who turns brand stories into scroll-stopping visuals that drive real business results.
          </p>
          <p className="text-lg text-[--text-color] leading-relaxed mb-6">
            I specialize in creating high-converting social content, strategic banners, and marketing materials that help small businesses and startups stand out in a crowded market.
          </p>
          <p className="text-lg text-[--text-color] leading-relaxed">
            Every project is a partnership. I combine creativity with strategy to deliver designs that don't just look good—they perform.
          </p>
        </div>

        {/* Timeline */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-[--text-color] mb-8 text-center">Experience</h3>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 border-l-4 border-[--accent-start] hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[--accent-start] mt-2 flex-shrink-0 animate-pulse"></div>
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
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-[--text-color] mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className={`glass-card px-6 py-4 text-center hover:border-[--accent-start] hover:shadow-lg hover:scale-110 transition-all duration-500 cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center gap-3 justify-center">
                  <i className={`${tool.iconType} ${tool.icon} text-[--accent-color] text-2xl group-hover:text-[--soft-gold] group-hover:scale-110 transition-all duration-300`}></i>
                  <p className="text-[--text-color] font-semibold group-hover:text-[--accent-color] transition-colors duration-300">{tool.name}</p>
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

