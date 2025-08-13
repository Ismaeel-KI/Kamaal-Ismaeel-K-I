import React from 'react';
import { Trophy, Calendar, Award, Target } from 'lucide-react';
import portfolioData from '../../data/mock';

const Achievements = ({ isDark }) => {
  const { achievements } = portfolioData;

  const AchievementCard = ({ achievement, index }) => (
    <div className={`p-8 border rounded-none transition-all hover:translate-y-[-2px] hover:shadow-lg ${
      isDark 
        ? 'border-gray-700 bg-gray-900 hover:shadow-green-400/10' 
        : 'border-gray-200 bg-white hover:shadow-green-600/10'
    }`}>
      {/* Number Badge */}
      <div className={`w-12 h-12 border-2 rounded-none flex items-center justify-center mb-6 ${
        isDark ? 'border-green-400 text-green-400' : 'border-green-600 text-green-600'
      }`}>
        <span className="font-mono text-lg font-bold">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className={`text-xl font-normal mb-2 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`} style={{
            fontSize: 'clamp(16px, 2.5vw, 30px)',
            lineHeight: '1.2'
          }}>
            {achievement.title}
          </h3>
          <p className={`font-mono text-xs uppercase tracking-wider ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            {achievement.type}
          </p>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <Calendar size={16} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
          <span className={`text-sm font-mono ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {achievement.year}
          </span>
        </div>
      </div>

      <p className={`text-sm mb-4 ${
        isDark ? 'text-gray-300' : 'text-gray-700'
      }`} style={{
        fontSize: 'clamp(14px, 1.8vw, 18px)',
        lineHeight: '1.33'
      }}>
        {achievement.description}
      </p>

      <p className={`text-sm ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {achievement.details}
      </p>

      {/* Result Badge */}
      <div className="mt-6">
        <span className={`inline-flex items-center space-x-2 px-3 py-1 border rounded-none text-xs font-mono uppercase tracking-wider ${
          isDark 
            ? 'border-gray-600 text-gray-300 bg-gray-800' 
            : 'border-gray-300 text-gray-700 bg-gray-50'
        }`}>
          <Award size={12} />
          <span>{achievement.result}</span>
        </span>
      </div>
    </div>
  );

  return (
    <section id="achievements" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    } transition-colors`}>
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <p className={`font-mono text-xs font-normal uppercase tracking-wider mb-4 ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            MILESTONES
          </p>
          <h2 className={`font-bold uppercase tracking-wide ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`} style={{
            fontSize: 'clamp(40px, 8vw, 150px)',
            lineHeight: '1',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif'
          }}>
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={achievement.id} 
              achievement={achievement} 
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`p-8 border-2 rounded-none ${
          isDark ? 'border-green-400 bg-gray-800' : 'border-green-600 bg-gray-50'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                5+
              </div>
              <p className={`font-mono text-xs uppercase tracking-wider ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                PROJECTS COMPLETED
              </p>
            </div>

            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                2+
              </div>
              <p className={`font-mono text-xs uppercase tracking-wider ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                HACKATHONS PARTICIPATED
              </p>
            </div>

            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                3+
              </div>
              <p className={`font-mono text-xs uppercase tracking-wider ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                YEARS EXPERIENCE
              </p>
            </div>

            <div className="text-center">
              <div className={`text-4xl font-bold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                10+
              </div>
              <p className={`font-mono text-xs uppercase tracking-wider ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                TECHNOLOGIES MASTERED
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;