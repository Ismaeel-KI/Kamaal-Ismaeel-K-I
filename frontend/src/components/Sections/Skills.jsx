import React from 'react';
import portfolioData from '../../data/mock';

const Skills = ({ isDark }) => {
  const { skills } = portfolioData;

  const SkillBar = ({ skill, isDark }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className={`font-mono text-sm font-normal uppercase tracking-wider ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {skill.name}
        </span>
        <span className={`text-xs ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {skill.experience}
        </span>
      </div>
      <div className={`h-2 border rounded-none overflow-hidden ${
        isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-200'
      }`}>
        <div 
          className={`h-full transition-all duration-1000 ${
            isDark ? 'bg-green-400' : 'bg-green-600'
          }`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const SkillCategory = ({ title, skillList, isDark }) => (
    <div className={`p-8 border rounded-none ${
      isDark 
        ? 'border-gray-700 bg-gray-900' 
        : 'border-gray-200 bg-white'
    } transition-all hover:translate-y-[-2px] hover:shadow-lg`}>
      <h3 className={`font-mono text-xs font-normal uppercase tracking-wider mb-8 ${
        isDark ? 'text-green-400' : 'text-green-600'
      }`}>
        {title}
      </h3>
      {skillList.map((skill, index) => (
        <SkillBar key={index} skill={skill} isDark={isDark} />
      ))}
    </div>
  );

  return (
    <section id="skills" className={`py-20 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    } transition-colors`}>
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <p className={`font-mono text-xs font-normal uppercase tracking-wider mb-4 ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            WHAT I DO
          </p>
          <h2 className={`font-bold uppercase tracking-wide ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`} style={{
            fontSize: 'clamp(40px, 8vw, 150px)',
            lineHeight: '1',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif'
          }}>
            SKILLS
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory 
            title="BACKEND DEVELOPMENT" 
            skillList={skills.backend} 
            isDark={isDark} 
          />
          <SkillCategory 
            title="FRONTEND DEVELOPMENT" 
            skillList={skills.frontend} 
            isDark={isDark} 
          />
          <SkillCategory 
            title="DATA ANALYSIS" 
            skillList={skills.dataAnalysis} 
            isDark={isDark} 
          />
          <SkillCategory 
            title="TOOLS & OTHERS" 
            skillList={skills.tools} 
            isDark={isDark} 
          />
        </div>

        {/* Technical Focus Areas */}
        <div className="mt-16">
          <h3 className={`font-mono text-xs font-normal uppercase tracking-wider mb-8 text-center ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            SPECIALIZATION AREAS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 border rounded-none text-center transition-all hover:scale-105 ${
              isDark 
                ? 'border-gray-700 bg-gray-800' 
                : 'border-gray-200 bg-white'
            }`}>
              <h4 className={`font-mono text-sm font-normal uppercase tracking-wider mb-3 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                FULL-STACK WEB DEVELOPMENT
              </h4>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                End-to-end web application development with modern frameworks and databases
              </p>
            </div>

            <div className={`p-6 border rounded-none text-center transition-all hover:scale-105 ${
              isDark 
                ? 'border-gray-700 bg-gray-800' 
                : 'border-gray-200 bg-white'
            }`}>
              <h4 className={`font-mono text-sm font-normal uppercase tracking-wider mb-3 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                DATA VISUALIZATION
              </h4>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Interactive dashboards and analytics with Python libraries and React charts
              </p>
            </div>

            <div className={`p-6 border rounded-none text-center transition-all hover:scale-105 ${
              isDark 
                ? 'border-gray-700 bg-gray-800' 
                : 'border-gray-200 bg-white'
            }`}>
              <h4 className={`font-mono text-sm font-normal uppercase tracking-wider mb-3 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                AI INTEGRATION
              </h4>
              <p className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Building intelligent applications with AI/ML capabilities and NLP features
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;