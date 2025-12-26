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
              <li><a href="#projects" className="hover:text-[--accent-start] transition">Projects</a></li>
              <li><a href="#services" className="hover:text-[--accent-start] transition">Services</a></li>
              <li><a href="#contact" className="hover:text-[--accent-start] transition">Contact</a></li>
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
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/kscreativelabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition duration-300 text-xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585696467921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition duration-300 text-xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/krish-kscreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition duration-300 text-xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/kscreativelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-secondary] hover:text-[--accent-start] transition duration-300 text-xl"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
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

