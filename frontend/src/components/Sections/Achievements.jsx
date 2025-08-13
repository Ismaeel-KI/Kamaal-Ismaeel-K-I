import React from 'react';
import { Trophy, Calendar, Award, Target, Zap, Star, Crown } from 'lucide-react';
import portfolioData from '../../data/mock';

const Achievements = () => {
  const { achievements } = portfolioData;

  const AchievementCard = ({ achievement, index }) => (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-none p-6 transition-all duration-300 hover:border-yellow-500/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-yellow-500/10">
      {/* Achievement Rank Badge */}
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-gray-900 rounded-none flex items-center justify-center">
        <span className="font-mono text-xs font-bold text-gray-900">
          #{String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Achievement Icon */}
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gray-800 border border-yellow-500/30 rounded-none mr-4 group-hover:border-yellow-400 transition-all duration-300">
          <Trophy size={24} className="text-yellow-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-lg font-normal text-gray-200 group-hover:text-yellow-400 transition-colors">
              {achievement.title}
            </h3>
            <Star size={16} className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-yellow-400">
            {achievement.type}
          </p>
        </div>
      </div>

      {/* Achievement Details */}
      <div className="space-y-4">
        <p className="text-sm text-gray-300 leading-relaxed">
          {achievement.description}
        </p>
        
        <p className="text-sm text-gray-400 leading-relaxed">
          {achievement.details}
        </p>

        {/* Achievement Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center space-x-2">
            <Calendar size={14} className="text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400">{achievement.year}</span>
          </div>
          
          <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-none">
            <Award size={12} className="text-green-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-green-400">
              {achievement.result}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  const StatCard = ({ value, label, icon: Icon, color, delay = 0 }) => (
    <div className={`group text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-${color}-500/30 rounded-none transition-all duration-300 hover:border-${color}-400 hover:scale-105`}
         style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-center mb-4">
        <div className={`p-3 bg-${color}-500/20 border border-${color}-500/50 rounded-none`}>
          <Icon size={24} className={`text-${color}-400`} />
        </div>
      </div>
      <div className={`text-4xl font-bold mb-2 text-${color}-400 group-hover:text-${color}-300 transition-colors`}>
        {value}
      </div>
      <p className="font-mono text-xs uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors">
        {label}
      </p>
      
      {/* Progress Bar */}
      <div className="mt-4 h-1 bg-gray-700 rounded-none overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-400 w-full transition-all duration-1000 delay-${delay}`}></div>
      </div>
    </div>
  );

  return (
    <section id="achievements" className="py-16 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial from-yellow-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
            <p className="font-mono text-xs font-normal uppercase tracking-wider mx-4 text-yellow-400 bg-gray-900 px-4 py-1 border border-yellow-500/30">
              HALL OF FAME
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent flex-1"></div>
          </div>
          <h2 className="font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
              style={{
                fontSize: 'clamp(36px, 8vw, 120px)',
                lineHeight: '1',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: '0 0 30px rgba(251, 191, 36, 0.3)'
              }}>
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Achievements Grid - More Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement} 
              index={index}
            />
          ))}
        </div>

        {/* Gaming Style Stats Dashboard */}
        <div className="relative">
          {/* Stats Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-none">
                <Crown size={20} className="text-gray-900" />
              </div>
              <h3 className="font-mono text-lg font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                PLAYER STATISTICS
              </h3>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard 
              value="5+" 
              label="PROJECTS COMPLETED" 
              icon={Target}
              color="cyan"
              delay={0}
            />
            <StatCard 
              value="2+" 
              label="HACKATHONS ENTERED" 
              icon={Zap}
              color="green"
              delay={200}
            />
            <StatCard 
              value="3+" 
              label="YEARS EXPERIENCE" 
              icon={Calendar}
              color="purple"
              delay={400}
            />
            <StatCard 
              value="10+" 
              label="TECH MASTERED" 
              icon={Trophy}
              color="pink"
              delay={600}
            />
          </div>

          {/* Achievement Progress Bar */}
          <div className="mt-12 p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-2 border-gradient-to-r from-cyan-500/30 via-green-500/30 to-purple-500/30 rounded-none">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-500/20 border border-yellow-500/50 rounded-none">
                  <Star size={20} className="text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-wider text-yellow-400">CAREER PROGRESS</h4>
                  <p className="text-xs text-gray-400">Level: Senior Student Developer</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-mono text-lg font-bold text-green-400">85%</p>
                <p className="text-xs text-gray-400">TO NEXT LEVEL</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-4 bg-gray-700 border border-gray-600 rounded-none overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 via-green-400 to-yellow-400 transition-all duration-2000 ease-out" 
                   style={{ width: '85%' }}>
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-pulse"></div>
              </div>
              {/* Level markers */}
              <div className="absolute top-0 left-1/4 bottom-0 w-px bg-gray-500"></div>
              <div className="absolute top-0 left-1/2 bottom-0 w-px bg-gray-500"></div>
              <div className="absolute top-0 left-3/4 bottom-0 w-px bg-gray-500"></div>
            </div>
            
            {/* XP Points */}
            <div className="flex justify-between mt-2 text-xs font-mono text-gray-400">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
              <span>Expert</span>
              <span>Master</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;