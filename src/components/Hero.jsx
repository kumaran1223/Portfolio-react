import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const projects = [
    {
      title: 'E-Commerce AI',
      image: 'https://placehold.co/400x300/1A1A1F/D4AF37?text=E-Commerce+AI',
      link: 'https://ecommerce-ai-rho.vercel.app/',
    },
    {
      title: 'StayFinder',
      image: 'https://placehold.co/400x300/1A1A1F/D4AF37?text=StayFinder',
      link: 'https://stayfinder1.netlify.app/',
    },
    {
      title: 'Admin Dashboard',
      image: 'https://placehold.co/400x300/1A1A1F/D4AF37?text=Admin+Dashboard',
      link: 'https://fancy-piroshki-bbd2f1.netlify.app/',
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[--bg-color] px-6 py-24 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-[--text-color] mb-6 leading-tight">
              Helping Brands Grow with Design, Content & Ads
            </h1>
            <p className="text-xl text-[--text-secondary] mb-8 leading-relaxed max-w-2xl">
              I create scroll-stopping visuals, strategic content, and high-converting campaigns that help small businesses and startups stand out and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:kscreativelab@gmail.com"
                className="btn-gold inline-block text-center font-semibold"
              >
                Start Your Project
              </a>
              <a
                href="https://portfolio-mfbe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline inline-block text-center font-semibold"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right 3D Carousel */}
          <div className="flex flex-col justify-center items-center">
            <div
              className="relative w-full max-w-sm h-80 perspective"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              style={{ perspective: '1000px' }}
            >
              {projects.map((project, index) => {
                const isActive = index === currentSlide;
                const isPrev = index === (currentSlide - 1 + projects.length) % projects.length;
                const isNext = index === (currentSlide + 1) % projects.length;

                let transform = 'translateX(-50%) rotateY(90deg) scale(0.8)';
                let opacity = 0;
                let zIndex = 0;

                if (isActive) {
                  transform = 'translateX(-50%) rotateY(0deg) scale(1)';
                  opacity = 1;
                  zIndex = 10;
                } else if (isPrev) {
                  transform = 'translateX(-120%) rotateY(-25deg) scale(0.85)';
                  opacity = 0.5;
                  zIndex = 5;
                } else if (isNext) {
                  transform = 'translateX(20%) rotateY(25deg) scale(0.85)';
                  opacity = 0.5;
                  zIndex = 5;
                }

                return (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-1/2 top-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[--bg-color] via-transparent to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-[--accent-color] mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[--muted-text]">Click to view project →</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-[--accent-color] w-8'
                      : 'bg-[--border-color] hover:bg-[--muted-text] w-3'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

