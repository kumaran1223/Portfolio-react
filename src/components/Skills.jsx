import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Design', progress: 100, icon: 'fa-palette' },
    { name: 'Figma', progress: 90, icon: 'fa-drafting-compass' },
    { name: 'HTML/CSS', progress: 100, icon: 'fa-code' },
    { name: 'JavaScript', progress: 85, icon: 'fa-js' },
    { name: 'React', progress: 90, icon: 'fa-react' },
  ];

  const softSkills = [
    'Communication',
    'Deadline-driven',
    'Problem-solving',
    'Adaptability',
    'Creativity',
    'Leadership',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-[--bg-color] transition-colors duration-500"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-serif font-bold text-center text-[--accent-color] mb-16 transition-colors duration-500">
          Skills & Expertise
        </h2>

        {/* Skill Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[--text-color] mb-8 text-center">Core Competencies</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                progress={skill.progress}
                isVisible={isVisible}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-[--text-color] mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="glass-card px-6 py-3">
                <p className="text-[--text-color] font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, progress, isVisible, icon }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = progress / 100;
        const interval = setInterval(() => {
          current += increment;
          if (current >= progress) {
            current = progress;
            clearInterval(interval);
          }
          setCurrentProgress(Math.round(current));
        }, 15);

        return () => clearInterval(interval);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible, progress]);

  return (
    <div className="glass-card p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          {icon && <i className={`fas ${icon} text-[--accent-color] text-lg`}></i>}
          <span className="text-[--text-color] font-medium">{name}</span>
        </div>
        <span className="text-[--accent-color] font-bold">{currentProgress}%</span>
      </div>
      <div className="w-full bg-[--border-color] rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[--accent-color] to-[--soft-gold] h-full rounded-full transition-all duration-500"
          style={{ width: isVisible ? `${progress}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;

