import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Design', progress: 100, icon: 'fa-palette', iconType: 'fas' },
    { name: 'Figma', progress: 90, icon: 'fa-figma', iconType: 'fab' },
    { name: 'HTML/CSS', progress: 100, icon: 'fa-html5', iconType: 'fab' },
    { name: 'JavaScript', progress: 85, icon: 'fa-js', iconType: 'fab' },
    { name: 'React', progress: 90, icon: 'fa-react', iconType: 'fab' },
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
                iconType={skill.iconType}
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

const SkillBar = ({ name, progress, isVisible, icon, iconType = 'fas' }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    // Stage 1: Animate to 100%
    let current = 0;
    const fillInterval = setInterval(() => {
      current += 3;
      if (current >= 100) {
        current = 100;
        clearInterval(fillInterval);
        setDisplayProgress(100);
        setDisplayPercent(100);

        // Stage 2: Pause at 100%, then drop to actual
        setTimeout(() => {
          let dropCurrent = 100;
          const step = (100 - progress) / 25;

          const dropInterval = setInterval(() => {
            dropCurrent -= step;
            if (dropCurrent <= progress) {
              dropCurrent = progress;
              clearInterval(dropInterval);
            }
            setDisplayProgress(Math.round(dropCurrent));
            setDisplayPercent(Math.round(dropCurrent));
          }, 25);
        }, 800); // 0.8 second pause at 100%
      } else {
        setDisplayProgress(current);
        setDisplayPercent(current);
      }
    }, 15);

    return () => clearInterval(fillInterval);
  }, [isVisible, progress]);

  return (
    <div className="glass-card p-5 hover:shadow-lg transition-all duration-300 hover:border-[--accent-color]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && <i className={`${iconType} ${icon} text-[--accent-color] text-xl`}></i>}
          <span className="text-[--text-color] font-semibold text-lg">{name}</span>
        </div>
        <span className="text-[--accent-color] font-bold text-lg">{displayPercent}%</span>
      </div>
      <div className="w-full bg-[--border-color] rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${displayProgress}%`,
            background: 'linear-gradient(90deg, var(--accent-start) 0%, var(--accent-end) 100%)',
            transition: 'width 0.1s ease-out',
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;

