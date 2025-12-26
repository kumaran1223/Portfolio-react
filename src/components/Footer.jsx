const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[--card-color] border-t border-[--border-color] transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[--text-color] mb-2">Kumaran S</h3>
            <p className="text-[--text-secondary]">Creative Designer & Brand Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[--text-color] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[--text-secondary]">
              <li><a href="#projects" className="hover:text-[--accent-start] transition-all duration-300 hover:translate-x-1 inline-block">Projects</a></li>
              <li><a href="#services" className="hover:text-[--accent-start] transition-all duration-300 hover:translate-x-1 inline-block">Services</a></li>
              <li><a href="#contact" className="hover:text-[--accent-start] transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold text-[--text-color] mb-4">Get Started</h4>
            <a
              href="https://drive.google.com/file/d/1YEyd8EjTcIdHQznDrw_DU1h7GmDBr0fm/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline inline-block text-sm"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-[--border-color] pt-8 mb-8">
          <div className="flex justify-center gap-8">
            <a
              href="https://www.instagram.com/kscreativelabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label="Instagram"
              title="Follow on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585696467921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label="Facebook"
              title="Follow on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/krish-kscreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label="LinkedIn"
              title="Connect on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a
              href="https://x.com/kscreativelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              aria-label="Twitter/X"
              title="Follow on Twitter/X"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[--text-secondary] mb-4 text-sm">
            &copy; 2024 Kumaran S. All rights reserved.
          </p>
          <a
            href="#home"
            onClick={scrollToTop}
            className="text-[--accent-start] hover:text-[--accent-end] transition duration-300 inline-block text-sm"
            aria-label="Back to top"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

