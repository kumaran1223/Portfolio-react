import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[--card-color]/80 backdrop-blur-md sticky top-0 z-50 w-full shadow-lg transition-colors duration-500 border-b border-[--border-color]">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold font-serif text-[--accent-color] hover:text-[--soft-gold] transition-all duration-300 hover:scale-110"
        >
          Kumaran S
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-all duration-300 relative pb-1 ${
                activeSection === link.href.substring(1)
                  ? 'text-[--accent-color] border-b-2 border-[--accent-color]'
                  : 'text-[--text-color] hover:text-[--accent-color] hover:border-b-2 hover:border-[--accent-color]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[--border-color] text-[--text-color] hover:text-[--accent-color] hover:border-[--accent-color] transition-all duration-300 text-lg hover:scale-110 hover:shadow-lg"
            title="Toggle Theme"
            aria-label="Toggle dark/light theme"
          >
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
        </div>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[--text-color] text-3xl"
        >
          <span>{mobileMenuOpen ? '×' : '☰'}</span>
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-[--card-color] shadow-xl transition-colors duration-500 border-t border-[--border-color]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-center py-3 text-sm font-medium transition duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-[--accent-color] bg-[--border-color]/30'
                  : 'text-[--text-color] hover:text-[--accent-color]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-full text-center text-[--text-color] py-3 text-sm font-medium hover:text-[--accent-color] transition duration-300 border-t border-[--border-color]"
            aria-label="Toggle dark/light theme"
          >
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'} mr-2`}></i> Theme
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

