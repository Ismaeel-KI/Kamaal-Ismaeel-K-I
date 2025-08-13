import React from 'react';
import { ArrowDown, Code, Database, Cpu, Gamepad2, Terminal, Zap } from 'lucide-react';
import portfolioData from '../../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Gaming HUD Style Header */}
        <div className="mb-8 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          {/* Main Name with Glitch Effect */}
          <h1 className="font-bold uppercase tracking-wide mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 relative"
              style={{
                fontSize: 'clamp(48px, 12vw, 200px)',
                lineHeight: '1',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: '0 0 30px rgba(56, 255, 98, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)'
              }}>
            {personal.name}
            {/* Glitch overlay */}
            <span className="absolute inset-0 text-red-500 opacity-20 animate-pulse" style={{clipPath: 'inset(20% 0 30% 0)'}}>
              {personal.name}
            </span>
          </h1>
          
          {/* Gaming-style subtitle */}
          <div className="relative">
            <div className="text-2xl md:text-4xl lg:text-6xl font-normal mb-6 text-gray-200"
                 style={{
                   fontSize: 'clamp(24px, 5vw, 64px)',
                   lineHeight: '1.2',
                   textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                 }}>
              <span className="text-cyan-400">&gt;</span> {personal.title} <span className="text-green-400 animate-pulse">_</span>
            </div>
          </div>
        </div>

        {/* Gaming stats display */}
        <div className="mb-8 flex justify-center">
          <div className="bg-black/40 border border-cyan-500/30 rounded-none p-4 backdrop-blur-sm">
            <p className="font-mono text-sm text-gray-300 mb-2">
              <span className="text-cyan-400">STATUS:</span> ACTIVE DEVELOPER
            </p>
            <p className="font-mono text-sm text-gray-300 mb-2">
              <span className="text-green-400">LEVEL:</span> {personal.year}
            </p>
            <p className="font-mono text-sm text-gray-300">
              <span className="text-purple-400">SPECIALIZATION:</span> FULL-STACK + AI
            </p>
          </div>
        </div>

        {/* Enhanced description */}
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300"
           style={{
             fontSize: 'clamp(16px, 2.5vw, 24px)',
             lineHeight: '1.4'
           }}>
          Mastering <span className="text-cyan-400 font-semibold">full-stack development</span>, 
          <span className="text-green-400 font-semibold"> data analysis</span>, and 
          <span className="text-purple-400 font-semibold"> AI solutions</span> to build the future
        </p>

        {/* Gaming-style tech icons */}
        <div className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Terminal, color: 'text-cyan-400', name: 'CODE' },
            { icon: Database, color: 'text-green-400', name: 'DATA' },
            { icon: Cpu, color: 'text-purple-400', name: 'AI' },
            { icon: Gamepad2, color: 'text-pink-400', name: 'UX' }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="p-4 bg-gray-800/50 border border-gray-700/50 rounded-none transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-700/50 hover:scale-110">
                <item.icon size={28} className={`${item.color} group-hover:drop-shadow-lg`} />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gaming-style CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button
            onClick={() => scrollToAbout()}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-400 text-gray-900 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">ENTER PORTFOLIO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
          >
            CONTACT ME
          </button>
        </div>

        {/* Animated scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="group relative"
        >
          <div className="p-3 border border-cyan-500/30 rounded-full bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/10">
            <ArrowDown size={24} className="text-cyan-400 animate-bounce group-hover:text-cyan-300" />
          </div>
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
    </section>
  );
};

export default Hero;