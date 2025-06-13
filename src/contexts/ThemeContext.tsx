'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// 테마 타입 정의
type Theme = 'light' | 'dark';

// Context 타입 정의
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Context 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Context Provider Props 타입 정의
interface ThemeProviderProps {
  children: React.ReactNode;
}

// Context Provider 컴포넌트
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');

  // 테마 변경 함수
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  // 초기 테마 설정
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Context 사용을 위한 Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 