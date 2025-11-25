# Portfolio React - Premium Creative Designer Portfolio

A modern, premium single-page portfolio website for Kumaran S, a creative designer specializing in high-converting visuals, social content, and web design.

## 🎨 Features

### Design & Styling
- **Premium Dark-Gold Theme**: Elegant color palette (#0F1115, #D4AF37, #E6CFA0)
- **Modern UI**: Glass cards, 3D effects, smooth animations
- **Responsive Design**: Mobile-first approach with optimized breakpoints
- **Accessibility**: WCAG AA compliant with ARIA labels and semantic HTML

### Sections
- **Hero**: Full-screen with 3D rotating carousel of projects
- **Projects**: 3-project grid with interactive case study modals
- **About**: Personal narrative, experience timeline, tools list
- **Skills**: Animated progress bars with soft skills badges
- **Services**: 4 service offerings with pricing and turnaround times
- **Pricing**: Transparent pricing tiers (One-Time & Monthly)
- **Testimonials**: Client testimonials with ratings
- **Contact**: Contact form with EmailJS integration
- **Footer**: Quick links, CV download, social links

### Functionality
- ✅ Contact form with EmailJS email integration
- ✅ Google Form integration for pricing inquiries
- ✅ 3D carousel with auto-play and manual controls
- ✅ Case study modals with detailed project information
- ✅ Smooth scroll navigation
- ✅ Theme toggle (dark/light mode)
- ✅ Lazy loading for images
- ✅ SEO optimized with meta tags and schema.org

## 🚀 Tech Stack

- **React** 18.3.1 - UI framework
- **Vite** 6.0.3 - Build tool
- **Tailwind CSS** 3.4.17 - Styling
- **EmailJS** - Email service integration
- **Font Awesome** 6.0 - Icons
- **Google Fonts** - Playfair Display & Inter

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/kumaran1223/Portfolio-react.git
cd Portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

### EmailJS Setup
1. Create account at https://www.emailjs.com/
2. Get your Public Key from Account → API Keys
3. Create Email Service and get Service ID
4. Create Email Template and get Template ID
5. Update `src/components/Contact.jsx` with your credentials:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...});
```

See `EMAILJS_SETUP.md` for detailed instructions.

### Environment Variables (Optional)
Create `.env.local` for sensitive data:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── context/
│   └── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🔗 External Links

- **Portfolio**: https://portfolio-mfbe.vercel.app/
- **E-Commerce AI**: https://ecommerce-ai-rho.vercel.app/
- **StayFinder**: https://stayfinder1.netlify.app/
- **Admin Dashboard**: https://fancy-piroshki-bbd2f1.netlify.app/
- **CV**: [Google Drive Link](https://drive.google.com/file/d/1YEyd8EjTcIdHQznDrw_DU1h7GmDBr0fm/view?usp=drive_link)
- **Email**: kscreativelab@gmail.com

## 📊 Performance

- **CSS**: 17.52 kB (gzip: 4.29 kB)
- **JS**: 178.11 kB (gzip: 55.21 kB)
- **HTML**: 2.56 kB (gzip: 1.03 kB)
- **Build Time**: ~1.5 seconds

## 🎯 Services & Pricing

### Services
- Social Creatives: $50-150
- Web Banners: $100-200
- Website Design: $500-1500
- Monthly Content: $500-1000/mo

### Pricing Tiers
- **One-Time**: $250-$500
- **Monthly Retainer**: $200-$450/month

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Kumaran S** - Creative Designer & Brand Developer
- Email: kscreativelab@gmail.com
- LinkedIn: [linkedin.com/in/kumarans311221](https://www.linkedin.com/in/kumarans311221)
- GitHub: [github.com/kumaran1223](https://github.com/kumaran1223)

---

**Status**: ✅ Production Ready | **Last Updated**: 2024

