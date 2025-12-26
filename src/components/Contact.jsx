import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Replace with your public key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          to_email: 'kscreativelab@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or email directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[--bg-color] transition-colors duration-500">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[--text-color] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[--text-secondary] max-w-2xl mx-auto mb-6">
            Let's discuss your project and how I can help your brand grow.
          </p>
          <div className="flex justify-center gap-4 text-sm text-[--text-secondary]">
            <span className="flex items-center gap-1">✓ Quick response</span>
            <span className="flex items-center gap-1">✓ Clear communication</span>
            <span className="flex items-center gap-1">✓ No hidden costs</span>
          </div>
        </div>

        {/* Notification Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4">
            <div className="glass-card p-8 max-w-md w-full text-center">
              <h3 className="text-2xl font-bold text-[--accent-color] mb-4">Thank You!</h3>
              <p className="text-[--text-color] mb-6">
                Your message has been received. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="btn-gold"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto glass-card p-8 mb-12">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-[--text-color] text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[--bg-color] border border-[--border-color] text-[--text-color] focus:outline-none focus:ring-2 focus:ring-[--accent-color] transition-colors duration-500"
              required
              aria-label="Your name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[--text-color] text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[--bg-color] border border-[--border-color] text-[--text-color] focus:outline-none focus:ring-2 focus:ring-[--accent-color] transition-colors duration-500"
              required
              aria-label="Your email"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-[--text-color] text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[--bg-color] border border-[--border-color] text-[--text-color] focus:outline-none focus:ring-2 focus:ring-[--accent-color] transition-colors duration-500"
              required
              aria-label="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="text-center">
          <p className="text-[--muted-text] mb-4">Or reach out directly:</p>
          <a
            href="mailto:kscreativelab@gmail.com"
            className="text-[--accent-color] text-xl font-bold hover:text-[--soft-gold] transition-colors duration-300"
          >
            kscreativelab@gmail.com
          </a>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/krish-kscreative"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-color] hover:text-[--accent-color] transition duration-300 text-2xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/kscreativelabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-color] hover:text-[--accent-color] transition duration-300 text-2xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61585696467921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-color] hover:text-[--accent-color] transition duration-300 text-2xl"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://x.com/kscreativelabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--text-color] hover:text-[--accent-color] transition duration-300 text-2xl"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

