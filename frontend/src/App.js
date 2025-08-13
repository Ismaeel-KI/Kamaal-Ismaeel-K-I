import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Achievements from './components/Sections/Achievements';
import Contact from './components/Sections/Contact';
import GameBackground from './components/GameBackground/GameBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-x-hidden">
      {/* Animated Game Background */}
      <GameBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>

      {/* Cyberpunk scan lines overlay */}
      <div className="fixed inset-0 pointer-events-none z-5 opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;