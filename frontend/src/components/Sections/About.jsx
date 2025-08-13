import React from 'react';
import { GraduationCap, MapPin, Calendar, User, Trophy, Target } from 'lucide-react';
import portfolioData from '../../data/mock';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-green-400/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Gaming HUD Style */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1"></div>
            <p className="font-mono text-xs font-normal uppercase tracking-wider mx-4 text-cyan-400 bg-gray-900 px-4 py-1 border border-cyan-500/30">
              PLAYER PROFILE
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1"></div>
          </div>
          <h2 className="font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400"
              style={{
                fontSize: 'clamp(36px, 8vw, 120px)',
                lineHeight: '1',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: '0 0 30px rgba(56, 255, 98, 0.3)'
              }}>
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Content - Enhanced Gaming Style */}
          <div className="space-y-8">
            {/* Main Bio */}
            <div className="bg-gray-800/40 border border-cyan-500/20 rounded-none p-6 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <User className="text-cyan-400 mr-3" size={20} />
                <h3 className="font-mono text-sm uppercase tracking-wider text-cyan-400">BACKGROUND</h3>
              </div>
              <p className="text-gray-300 leading-relaxed"
                 style={{
                   fontSize: 'clamp(14px, 1.8vw, 16px)',
                   lineHeight: '1.6'
                 }}>
                {personal.bio}
              </p>
            </div>

            {/* Gaming-style Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-none p-6 text-center hover:border-cyan-400 hover:scale-105 transition-all duration-300">
                <GraduationCap className="text-cyan-400 mx-auto mb-3" size={28} />
                <h3 className="font-mono text-xs font-normal uppercase tracking-wider mb-2 text-cyan-400">
                  EDUCATION LVL
                </h3>
                <p className="text-sm text-gray-300 font-semibold">
                  {personal.year}
                </p>
                <p className="text-xs text-gray-400">Computer Science</p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-400/30 rounded-none p-6 text-center hover:border-green-400 hover:scale-105 transition-all duration-300">
                <MapPin className="text-green-400 mx-auto mb-3" size={28} />
                <h3 className="font-mono text-xs font-normal uppercase tracking-wider mb-2 text-green-400">
                  BASE LOCATION
                </h3>
                <p className="text-sm text-gray-300 font-semibold">
                  {personal.location}
                </p>
                <p className="text-xs text-gray-400">Active Zone</p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-400/30 rounded-none p-6 text-center hover:border-purple-400 hover:scale-105 transition-all duration-300">
                <Calendar className="text-purple-400 mx-auto mb-3" size={28} />
                <h3 className="font-mono text-xs font-normal uppercase tracking-wider mb-2 text-purple-400">
                  XP GAINED
                </h3>
                <p className="text-sm text-gray-300 font-semibold">3+ Years</p>
                <p className="text-xs text-gray-400">Development</p>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/60 border border-yellow-500/30 rounded-none p-4 flex items-center space-x-3 hover:border-yellow-400 transition-all duration-300">
                <Trophy className="text-yellow-400" size={24} />
                <div>
                  <p className="font-mono text-xs uppercase text-yellow-400">Hackathon Veteran</p>
                  <p className="text-xs text-gray-400">2+ Competitions</p>
                </div>
              </div>
              <div className="bg-gray-800/60 border border-pink-500/30 rounded-none p-4 flex items-center space-x-3 hover:border-pink-400 transition-all duration-300">
                <Target className="text-pink-400" size={24} />
                <div>
                  <p className="font-mono text-xs uppercase text-pink-400">Project Master</p>
                  <p className="text-xs text-gray-400">5+ Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Character Avatar Section */}
          <div className="relative">
            {/* Main Avatar Container */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-500/30 rounded-none overflow-hidden hover:border-cyan-400 transition-all duration-500 group">
              <div className="aspect-[4/5] flex items-center justify-center relative">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Avatar Placeholder with Gaming Elements */}
                <div className="text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500/20 to-green-400/20 rounded-none border-2 border-cyan-400/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={48} className="text-cyan-400" />
                    </div>
                    {/* Floating particles around avatar */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                      DEVELOPER AVATAR
                    </p>
                    <p className="text-sm text-gray-400">
                      Ready for next mission
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Status Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 p-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-green-400">STATUS: ONLINE</span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-400">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute -top-6 -right-6 bg-gray-800 border border-cyan-500/30 rounded-none p-3">
              <p className="font-mono text-xs text-cyan-400">LVL 21</p>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gray-800 border border-green-400/30 rounded-none p-3">
              <p className="font-mono text-xs text-green-400">XP: 3000+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;