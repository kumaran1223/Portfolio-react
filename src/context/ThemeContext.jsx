import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    updateThemeStyles(theme);
  }, [theme]);

  const updateThemeStyles = (currentTheme) => {
    const isDark = currentTheme === 'dark';

    // Premium dark-gold palette
    const accentColor = isDark ? '#D4AF37' : '#D4AF37';
    const softGold = isDark ? '#E6CFA0' : '#E6CFA0';
    const textColor = isDark ? '#FFFFFF' : '#0F1115';
    const bgColor = isDark ? '#0F1115' : '#F5F3F0';
    const cardColor = isDark ? '#1A1A1F' : '#FFFFFF';
    const borderColor = isDark ? '#2A2A2F' : '#E0DDD8';
    const mutedText = isDark ? '#B9BEC3' : '#6B6B6B';

    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--text-color', textColor);
    document.documentElement.style.setProperty('--card-color', cardColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
    document.documentElement.style.setProperty('--soft-gold', softGold);
    document.documentElement.style.setProperty('--border-color', borderColor);
    document.documentElement.style.setProperty('--muted-text', mutedText);
    document.documentElement.style.setProperty('--neon-color', accentColor);

    document.documentElement.style.setProperty(
      '--neon-color-rgba-light',
      isDark ? 'rgba(212, 175, 55, 0.3)' : 'rgba(212, 175, 55, 0.2)'
    );
    document.documentElement.style.setProperty(
      '--neon-color-rgba-mid',
      isDark ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0.1)'
    );
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

