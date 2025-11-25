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
        sans: ['Inter var', 'Inter', 'sans-serif'],
      },
      colors: {
        // Premium dark-gold palette
        'gold': '#D4AF37',
        'soft-gold': '#E6CFA0',
        'dark-bg': '#0F1115',
        'card-dark': '#1A1A1F',
        'border-dark': '#2A2A2F',
        'text-white': '#FFFFFF',
        'muted-text': '#B9BEC3',
        'light-bg': '#F5F3F0',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'tilt': 'tilt 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        tilt: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(5deg) rotateY(5deg)' },
        },
      },
    }
  },
  plugins: [],
}

