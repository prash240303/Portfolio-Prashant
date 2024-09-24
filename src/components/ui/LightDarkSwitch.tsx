'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme || 'dark'; // Default theme system
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.toggle('dark', systemTheme === 'dark');
    } else {
      root.classList.toggle('dark', theme === 'dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center ring-2 ring-gray-200 dark:ring-gray-700 rounded-full">
      <button
        onClick={() => toggleTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-white ring-2 ring-gray-200 text-black' : 'text-gray-400 hover:text-white'}`}
        aria-label="Light mode"
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => toggleTheme('system')}
        className={`p-2 rounded-full ${theme === 'system' ? 'text-gray-400 ring-2 ring-gray-200' : 'text-gray-400'} ${theme === 'dark' ? 'hover:text-white' : ''} ${theme === 'light' ? 'hover:text-black' : ''}`}
        aria-label="System theme"
      >
        <Monitor size={16} />
      </button>
      <button
        onClick={() => toggleTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'text-white ring-2 ring-gray-700' : 'text-gray-400'} ${theme === 'system' ? 'hover:text-white' : ''} ${theme === 'light' ? 'hover:text-black' : ''}`}
        aria-label="Dark mode"
      >
        <Moon size={16} />
      </button>
    </div>
  );
};

export default ThemeSwitch;
