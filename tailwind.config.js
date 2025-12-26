/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather', 'serif'],
        sans: ['Inter', 'Poppins', 'DM Sans', 'sans-serif'],
      },
      colors: {
        // Modern SaaS palette
        'primary': '#1A202C',
        'secondary': '#2D3748',
        'accent-start': '#667EEA',
        'accent-end': '#764BA2',
        'success': '#48BB78',
        'warning': '#ED8936',
        'light-bg': '#F7FAFC',
        'card-light': '#FFFFFF',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(102, 126, 234, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(102, 126, 234, 0)' },
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
      },
    }
  },
  plugins: [],
}

