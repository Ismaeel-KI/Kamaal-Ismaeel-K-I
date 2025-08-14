import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Database, Cpu, Gamepad2, Terminal, Zap, Download, Mail, ExternalLink } from 'lucide-react';
import portfolioData from '../../data/mock';

const Hero = () => {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personal.title;

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Years Experience', value: personal.yearsExperience, icon: Terminal },
    { label: 'Projects Completed', value: personal.projectsCompleted, icon: Code },
    { label: 'Client Satisfaction', value: personal.clientsSatisfied, icon: Zap },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden pt-20">
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Glowing orbs with enhanced animations */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-green-400/25 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-pink-500/25 rounded-full blur-xl animate-pulse delay-3000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-cyan-400/40 rotate-45 animate-bounce delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-green-400/40 rotate-12 animate-bounce delay-1500"></div>
        <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-purple-400/40 rotate-45 animate-bounce delay-2500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Professional Introduction */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-mono text-sm text-gray-300">{personal.availability}</span>
          </div>
        </div>

        {/* Main Name with enhanced effects */}
        <div className="mb-8 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-40 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <h1 className="group name-hover-effect font-bold uppercase tracking-wide mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 relative cursor-pointer transition-all duration-500 hover:from-green-400 hover:via-cyan-400 hover:to-pink-400"
              style={{
                fontSize: 'clamp(40px, 10vw, 160px)',
                lineHeight: '1.1',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: '0 0 40px rgba(56, 255, 98, 0.6), 0 0 80px rgba(0, 255, 255, 0.4)'
              }}>
            {personal.name}
            
            {/* Enhanced glitch overlay with hover effects */}
            <span className="absolute inset-0 text-red-500/20 opacity-0 group-hover:opacity-100 group-hover:text-pink-500/40 transition-all duration-500" 
                  style={{clipPath: 'inset(20% 0 30% 0)'}}>
              {personal.name}
            </span>
            
            {/* Hover glow effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(45deg, #06b6d4, #10b981, #8b5cf6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'blur(1px)'
                  }}>
              {personal.name}
            </span>
          </h1>
          
          {/* Professional Title with Typewriter Effect */}
          <div className="relative mb-4">
            <div className="text-xl md:text-3xl lg:text-5xl font-normal text-gray-200"
                 style={{
                   fontSize: 'clamp(20px, 4vw, 48px)',
                   lineHeight: '1.3',
                   textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                 }}>
              <span className="text-cyan-400">&gt;</span> {typedText}
              <span className="text-green-400 slow-pulse">|</span>
            </div>
            <p className="text-lg text-gray-400 mt-2 font-medium">{personal.subtitle}</p>
          </div>
        </div>

        {/* Professional Stats */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {stats.map((stat, index) => (
            <div key={index} 
                 className="group bg-gray-800/40 border border-cyan-500/20 rounded-lg p-4 backdrop-blur-sm hover:border-cyan-400/50 hover:bg-gray-700/40 transition-all duration-300 min-w-[200px]">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded">
                  <stat.icon size={20} className="text-cyan-400" />
                </div>
                <div className="text-left">
                  <p className="font-mono text-2xl font-bold text-white">{stat.value}</p>
                  <p className="font-mono text-xs text-gray-400 uppercase">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bio */}
        <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed text-gray-300 font-light text-center"
           style={{
             fontSize: 'clamp(16px, 2.2vw, 22px)',
             lineHeight: '1.6'
           }}>
          Passionate <span className="text-cyan-400 font-semibold">full-stack engineer</span> with {' '}
          <span className="text-green-400 font-semibold">3+ years of experience</span> building scalable applications. 
          Specialized in <span className="text-purple-400 font-semibold">AI-powered solutions</span> that drive business growth 
          and deliver exceptional user experiences.
        </p>

        {/* Enhanced Tech Stack Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { icon: Terminal, color: 'text-cyan-400', name: 'BACKEND', bg: 'from-cyan-500/20 to-cyan-600/20' },
            { icon: Code, color: 'text-green-400', name: 'FRONTEND', bg: 'from-green-500/20 to-green-600/20' },
            { icon: Database, color: 'text-blue-400', name: 'DATABASE', bg: 'from-blue-500/20 to-blue-600/20' },
            { icon: Cpu, color: 'text-purple-400', name: 'AI/ML', bg: 'from-purple-500/20 to-purple-600/20' },
            { icon: Gamepad2, color: 'text-pink-400', name: 'UX/UI', bg: 'from-pink-500/20 to-pink-600/20' }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className={`p-4 bg-gradient-to-r ${item.bg} border border-gray-600/30 rounded-lg transition-all duration-300 hover:border-${item.color.split('-')[1]}-500/50 hover:scale-110 hover:rotate-3`}>
                <item.icon size={28} className={`${item.color} group-hover:drop-shadow-2xl transition-all duration-300`} />
              </div>
              <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 px-2 py-1 rounded border border-gray-700 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Professional CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button
            onClick={() => scrollToSection('#projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-400 text-gray-900 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 rounded-lg"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <ExternalLink size={16} />
              <span>View My Work</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
          </button>
          
          <button
            onClick={() => window.open(personal.resumeUrl, '_blank')}
            className="group px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 rounded-lg"
          >
            <span className="flex items-center space-x-2">
              <Download size={16} />
              <span>Download Resume</span>
            </span>
          </button>
          
          <button
            onClick={() => scrollToSection('#contact')}
            className="group px-8 py-4 bg-gray-800/50 border-2 border-gray-600/50 text-gray-300 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:border-green-400/50 hover:bg-green-500/10 hover:text-green-400 rounded-lg"
          >
            <span className="flex items-center space-x-2">
              <Mail size={16} />
              <span>Get In Touch</span>
            </span>
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="group relative animate-bounce"
        >
          <div className="p-4 border-2 border-cyan-500/30 rounded-full bg-gray-800/30 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110">
            <ArrowDown size={24} className="text-cyan-400 group-hover:text-cyan-300" />
          </div>
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore Portfolio
          </span>
        </button>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
    </section>
  );
};

export default Hero;