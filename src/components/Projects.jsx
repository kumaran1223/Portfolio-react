import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'E-Commerce AI',
      summary: 'AI-powered e-commerce platform with personalized recommendations and secure checkout.',
      image: 'https://placehold.co/500x300/1A1A1F/D4AF37?text=E-Commerce+AI',
      tags: ['Design', 'UI/UX', 'Responsive'],
      link: 'https://ecommerce-ai-rho.vercel.app/',
      challenge: 'Create an intuitive shopping experience that leverages AI to increase conversion rates while maintaining security.',
      role: 'Lead Designer & Frontend Developer',
      solution: 'Designed a clean, modern interface with AI-driven product recommendations, streamlined checkout, and real-time inventory updates.',
      deliverables: 'High-fidelity mockups, responsive design system, interactive prototypes, frontend implementation',
      results: '45% increase in average order value, 30% improvement in checkout completion rate',
    },
    {
      title: 'StayFinder',
      summary: 'Hotel booking platform with real-time availability and seamless search experience.',
      image: 'https://placehold.co/500x300/1A1A1F/D4AF37?text=StayFinder',
      tags: ['Design', 'UI/UX', 'Responsive'],
      link: 'https://stayfinder1.netlify.app/',
      challenge: 'Design a booking platform that simplifies hotel search and reservation process for travelers.',
      role: 'Product Designer & Full-Stack Developer',
      solution: 'Built an intuitive search interface with advanced filters, real-time availability, and one-click booking.',
      deliverables: 'User research, wireframes, design system, responsive web app, backend API',
      results: '60% faster booking process, 40% increase in bookings',
    },
    {
      title: 'Admin Dashboard',
      summary: 'Admin dashboard for managing user accounts, content, and analytics.',
      image: 'https://placehold.co/500x300/1A1A1F/D4AF37?text=Admin+Dashboard',
      tags: ['Design', 'UI/UX', 'Responsive'],
      link: 'https://fancy-piroshki-bbd2f1.netlify.app/',
      challenge: 'Create a user-friendly admin dashboard for managing user accounts, content, and analytics.',
      role: 'UX Designer & Backend Developer',
      solution: 'Designed a minimal, secure interface with clear instructions and real-time validation feedback.',
      deliverables: 'User research, wireframes, design system, responsive web app, backend API',
      results: '98% accuracy in document processing, 95% user satisfaction',
    },
  ];

  return (
    <>
      <section id="projects" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
              Portfolio & Case Studies
            </h2>
            <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto">
              Real projects with real results. See how I've helped brands grow and convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-64 bg-gradient-subtle">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold scale-75 group-hover:scale-100">
                      View Case Study
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[--text-color] mb-2 transition-colors duration-300 group-hover:text-[--accent-start]">{project.title}</h3>
                  <p className="text-[--text-secondary] mb-4 text-sm leading-relaxed">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gradient-subtle text-[--accent-start] px-3 py-1 rounded-full border border-[--border-color] transition-all duration-300 hover:border-[--accent-start] hover:scale-110">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[--card-color] rounded-lg max-w-2xl w-full my-8 border border-[--border-color]">
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-[--border-color] bg-[--card-color]">
              <h2 className="text-3xl font-serif font-bold text-[--accent-color]">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[--muted-text] hover:text-[--accent-color] text-2xl"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <img src={selectedProject.image} alt={selectedProject.title} loading="lazy" className="w-full rounded-lg" />

              <div>
                <h3 className="text-xl font-bold text-[--accent-color] mb-2">Challenge</h3>
                <p className="text-[--text-color]">{selectedProject.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[--accent-color] mb-2">My Role</h3>
                <p className="text-[--text-color]">{selectedProject.role}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[--accent-color] mb-2">Solution</h3>
                <p className="text-[--text-color]">{selectedProject.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[--accent-color] mb-2">Deliverables</h3>
                <p className="text-[--text-color]">{selectedProject.deliverables}</p>
              </div>

              <div className="bg-[--border-color]/30 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-[--accent-color] mb-2">Results</h3>
                <p className="text-[--text-color] font-semibold">{selectedProject.results}</p>
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center block"
              >
                View Live Project →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

