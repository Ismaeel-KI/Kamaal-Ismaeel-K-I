import React from 'react';
import { ArrowDown, Code, Database, Cpu } from 'lucide-react';
import portfolioData from '../../data/mock';

const Hero = ({ isDark }) => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    } transition-colors`}>
      {/* Grid Background */}
      <div className={`absolute inset-0 opacity-5 ${
        isDark ? 'opacity-10' : 'opacity-5'
      }`}>
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className={`font-bold uppercase tracking-wide mb-4 transition-colors ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`} style={{
            fontSize: 'clamp(60px, 15vw, 280px)',
            lineHeight: '1',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif'
          }}>
            {personal.name}
          </h1>
          <div className={`font-sans text-4xl md:text-6xl lg:text-8xl font-normal mb-6 ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`} style={{
            fontSize: 'clamp(32px, 6vw, 84px)',
            lineHeight: '1.07'
          }}>
            {personal.title}
          </div>
        </div>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{
          fontSize: 'clamp(16px, 2.5vw, 30px)',
          lineHeight: '1.2'
        }}>
          {personal.year} specializing in <span className={isDark ? 'text-green-400' : 'text-green-600'}>full-stack development</span>, 
          <span className={isDark ? 'text-green-400' : 'text-green-600'}> data analysis</span>, and 
          <span className={isDark ? 'text-green-400' : 'text-green-600'}> AI solutions</span>
        </p>

        {/* Tech Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          <div className={`p-4 border rounded-none transition-all hover:scale-110 ${
            isDark 
              ? 'border-gray-700 text-green-400 hover:bg-gray-800' 
              : 'border-gray-300 text-green-600 hover:bg-gray-100'
          }`}>
            <Code size={24} />
          </div>
          <div className={`p-4 border rounded-none transition-all hover:scale-110 ${
            isDark 
              ? 'border-gray-700 text-green-400 hover:bg-gray-800' 
              : 'border-gray-300 text-green-600 hover:bg-gray-100'
          }`}>
            <Database size={24} />
          </div>
          <div className={`p-4 border rounded-none transition-all hover:scale-110 ${
            isDark 
              ? 'border-gray-700 text-green-400 hover:bg-gray-800' 
              : 'border-gray-300 text-green-600 hover:bg-gray-100'
          }`}>
            <Cpu size={24} />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button
            onClick={() => scrollToAbout()}
            className={`px-8 py-4 border-2 rounded-none font-mono text-xs font-normal uppercase tracking-wider transition-all hover:scale-105 ${
              isDark ? 'bg-green-400 text-gray-900 border-green-400 hover:bg-green-500' : 'bg-green-600 text-white border-green-600 hover:bg-green-700'
            }`}
          >
            EXPLORE MY WORK
          </button>
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 border rounded-none font-mono text-xs font-normal uppercase tracking-wider transition-all hover:opacity-70 ${
              isDark 
                ? 'border-gray-700 text-gray-100 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-900 hover:bg-gray-100'
            }`}
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className={`animate-bounce p-2 rounded-full transition-colors ${
            isDark ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'
          }`}
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;