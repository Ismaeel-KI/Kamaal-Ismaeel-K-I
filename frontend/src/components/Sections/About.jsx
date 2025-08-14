import React, { useState, useEffect } from 'react';
import { User, Target, Award, TrendingUp, Code, Briefcase, GraduationCap } from 'lucide-react';
import portfolioData from '../../data/mock';

const About = () => {
  const { personal, experience } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "3+ years of full-stack development with modern technologies and best practices.",
      color: "cyan"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Delivered 15+ projects with measurable business impact and 100% client satisfaction.",
      color: "green"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Won hackathons, contributed to open source, and recognized for innovative solutions.",
      color: "purple"
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description: "Worked with startups and enterprises, from MVP to scale, across multiple domains.",
      color: "pink"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <User size={16} className="text-cyan-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-wider">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400">
            Crafting Digital Solutions
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate engineer who turns complex problems into elegant, scalable solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Bio & Story */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Professional Bio */}
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-lg">
                  <GraduationCap size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  {personal.bio}
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  Currently pursuing my final year in Computer Science Engineering, I've spent the last 3 years 
                  building real-world applications that solve actual business problems. My passion lies in creating 
                  seamless user experiences backed by robust, scalable architecture.
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700/50">
                <div className="text-center">
                  <p className="text-2xl font-bold text-cyan-400">{personal.projectsCompleted}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">{personal.yearsExperience}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">{personal.clientsSatisfied}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-r from-gray-800/40 via-gray-800/20 to-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-green-500/20 to-cyan-400/20 rounded-lg">
                  <Target size={24} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Current Focus</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="text-white font-medium">AI-Powered Applications</p>
                    <p className="text-gray-400 text-sm">Building intelligent solutions with GPT-4, Machine Learning, and NLP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="text-white font-medium">Scalable Architecture</p>
                    <p className="text-gray-400 text-sm">Designing microservices and cloud-native applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <p className="text-white font-medium">Full-Time Opportunities</p>
                    <p className="text-gray-400 text-sm">Seeking to join innovative teams building the future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights & Values */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* What I Bring */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">What I Bring</h3>
              
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} 
                       className="group bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-gray-700/30 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 bg-gradient-to-r from-${highlight.color}-500/20 to-${highlight.color}-600/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <highlight.icon size={24} className={`text-${highlight.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2">{highlight.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Values */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-400/20 rounded-lg">
                  <Award size={20} className="text-purple-400" />
                </div>
                <span>Core Values</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Quality First", desc: "Clean, maintainable code" },
                  { title: "User-Centric", desc: "Intuitive, accessible design" },
                  { title: "Innovation", desc: "Latest technologies & trends" },
                  { title: "Collaboration", desc: "Team player mindset" },
                  { title: "Continuous Learning", desc: "Always improving skills" },
                  { title: "Problem Solver", desc: "Creative solution finder" }
                ].map((value, index) => (
                  <div key={index} className="group">
                    <div className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                      {value.title}
                    </div>
                    <div className="text-gray-500 text-sm">{value.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-green-400/10 border border-cyan-500/30 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-gray-300">Ready to create something amazing together?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;