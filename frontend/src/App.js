import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Achievements from './components/Sections/Achievements';
import Contact from './components/Sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors ${
      isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Grid Background Pattern */}
      <div className={`fixed inset-0 pointer-events-none z-0 ${
        isDark ? 'opacity-10' : 'opacity-5'
      }`}>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${isDark ? '#374151' : '#6B7280'} 1px, transparent 1px),
              linear-gradient(to bottom, ${isDark ? '#374151' : '#6B7280'} 1px, transparent 1px)
            `,
            backgroundSize: '47.6px 47.6px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Achievements isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
        
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;