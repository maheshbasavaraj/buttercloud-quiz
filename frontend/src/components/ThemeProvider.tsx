'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  primaryHue: number;
  setPrimaryHue: (hue: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [primaryHue, setPrimaryHue] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const savedHue = localStorage.getItem('primaryHue');
      return savedHue ? parseFloat(savedHue) : 217.2; // Default blue hue
    }
    return 217.2; // Default for SSR
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('primaryHue', primaryHue.toString());
      document.documentElement.style.setProperty('--primary-hue', primaryHue.toString());
    }
  }, [primaryHue]);

  return (
    <ThemeContext.Provider value={{ primaryHue, setPrimaryHue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
