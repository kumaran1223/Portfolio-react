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

    // Modern SaaS palette
    const primaryColor = isDark ? '#1A202C' : '#F7FAFC';
    const secondaryColor = isDark ? '#2D3748' : '#FFFFFF';
    const accentStart = '#667EEA';
    const accentEnd = '#764BA2';
    const textColor = isDark ? '#E2E8F0' : '#1A202C';
    const textSecondary = isDark ? '#A0AEC0' : '#4A5568';
    const borderColor = isDark ? '#4A5568' : '#E2E8F0';
    const successColor = '#48BB78';
    const warningColor = '#ED8936';

    document.documentElement.style.setProperty('--bg-primary', primaryColor);
    document.documentElement.style.setProperty('--bg-secondary', secondaryColor);
    document.documentElement.style.setProperty('--accent-start', accentStart);
    document.documentElement.style.setProperty('--accent-end', accentEnd);
    document.documentElement.style.setProperty('--text-primary', textColor);
    document.documentElement.style.setProperty('--text-secondary', textSecondary);
    document.documentElement.style.setProperty('--border-color', borderColor);
    document.documentElement.style.setProperty('--success-color', successColor);
    document.documentElement.style.setProperty('--warning-color', warningColor);

    // Legacy variables for compatibility
    document.documentElement.style.setProperty('--bg-color', primaryColor);
    document.documentElement.style.setProperty('--text-color', textColor);
    document.documentElement.style.setProperty('--card-color', secondaryColor);
    document.documentElement.style.setProperty('--accent-color', accentStart);
    document.documentElement.style.setProperty('--muted-text', textSecondary);
    document.documentElement.style.setProperty('--border-color', borderColor);
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

