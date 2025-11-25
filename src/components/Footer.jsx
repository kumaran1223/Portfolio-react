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
            <h3 className="text-2xl font-serif font-bold text-[--accent-color] mb-2">Kumaran S</h3>
            <p className="text-[--muted-text]">Creative Designer & Brand Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[--text-color] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[--muted-text]">
              <li><a href="#projects" className="hover:text-[--accent-color] transition">Projects</a></li>
              <li><a href="#services" className="hover:text-[--accent-color] transition">Services</a></li>
              <li><a href="#contact" className="hover:text-[--accent-color] transition">Contact</a></li>
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

        <div className="border-t border-[--border-color] pt-8 text-center">
          <p className="text-[--muted-text] mb-4">
            &copy; 2024 Kumaran S. All rights reserved.
          </p>
          <a
            href="#home"
            onClick={scrollToTop}
            className="text-[--accent-color] hover:text-[--soft-gold] transition duration-300 inline-block"
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

