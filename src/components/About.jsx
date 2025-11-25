const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-serif font-bold text-center text-[--accent-color] mb-16 transition-colors duration-500">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-[--text-color] leading-relaxed mb-6 transition-colors duration-500">
            I'm Kumaran S — a creative designer who turns product stories into scroll-stopping visuals. I build banners, social campaigns and PDF templates that help brands convert and connect.
          </p>
          <p className="text-lg text-[--text-color] leading-relaxed mb-6 transition-colors duration-500">
            With a passion for design and a keen eye for detail, I specialize in creating high-converting content that resonates with audiences. Every project is an opportunity to blend creativity with strategy.
          </p>
          <p className="text-lg text-[--text-color] leading-relaxed transition-colors duration-500">
            I'm driven by the challenge of solving complex design problems and delivering results that matter to your business.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-[--accent-color] mb-8 text-center">Experience</h3>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-[--accent-color] mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-xl font-bold text-[--text-color] mb-1">TechnoHacks Internship</h4>
                  <p className="text-sm text-[--muted-text] mb-2">Creative Design Intern</p>
                  <p className="text-[--text-color]/80">Gained hands-on experience in social media design, web banners, and brand content creation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Skills */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-[--accent-color] mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Photoshop', 'HTML/CSS', 'React', 'JavaScript', 'Canva'].map((tool) => (
              <div key={tool} className="glass-card px-6 py-3 text-center">
                <p className="text-[--text-color] font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

