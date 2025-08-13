import React from 'react';
import { Code, Database, BarChart3, Wrench } from 'lucide-react';
import portfolioData from '../../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const SkillBar = ({ skill }) => (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-sm font-normal uppercase tracking-wider text-gray-200 group-hover:text-cyan-400 transition-colors">
          {skill.name}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-400 font-mono">
            {skill.experience}
          </span>
          <span className="text-xs text-cyan-400 font-mono font-bold">
            {skill.level}%
          </span>
        </div>
      </div>
      <div className="relative h-3 bg-gray-800 border border-gray-700 rounded-none overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-green-400 transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${skill.level}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-pulse"></div>
        </div>
        {/* Skill level markers */}
        <div className="absolute top-0 right-0 bottom-0 w-px bg-cyan-400 opacity-60"></div>
      </div>
    </div>
  );

  const SkillCategory = ({ title, skillList, icon: Icon, accentColor, bgGradient }) => (
    <div className={`relative p-8 bg-gradient-to-br ${bgGradient} border border-gray-700/50 rounded-none transition-all duration-300 hover:border-${accentColor}-500/50 hover:scale-[1.02] group`}>
      {/* Category Header */}
      <div className="flex items-center mb-8">
        <div className={`p-3 bg-gray-800 border border-${accentColor}-500/30 rounded-none mr-4 group-hover:border-${accentColor}-400 transition-all duration-300`}>
          <Icon size={24} className={`text-${accentColor}-400`} />
        </div>
        <h3 className={`font-mono text-sm font-normal uppercase tracking-wider text-${accentColor}-400`}>
          {title}
        </h3>
      </div>
      
      {/* Progress Bars */}
      <div className="space-y-1">
        {skillList.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
      
      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-${accentColor}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );

  const specializations = [
    {
      title: "FULL-STACK WEB DEVELOPMENT",
      description: "End-to-end web application development with modern frameworks and databases",
      icon: "🚀",
      color: "cyan"
    },
    {
      title: "DATA VISUALIZATION",
      description: "Interactive dashboards and analytics with Python libraries and React charts",
      icon: "📊",
      color: "green"
    },
    {
      title: "AI INTEGRATION",
      description: "Building intelligent applications with AI/ML capabilities and NLP features",
      icon: "🤖",
      color: "purple"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-green-400/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1"></div>
            <p className="font-mono text-xs font-normal uppercase tracking-wider mx-4 text-green-400 bg-gray-900 px-4 py-1 border border-green-500/30">
              SKILL TREE
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1"></div>
          </div>
          <h2 className="font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400"
              style={{
                fontSize: 'clamp(36px, 8vw, 120px)',
                lineHeight: '1',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
              }}>
            ABILITIES
          </h2>
        </div>

        {/* Skills Grid - More Compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <SkillCategory 
            title="BACKEND DEVELOPMENT" 
            skillList={skills.backend} 
            icon={Database}
            accentColor="cyan"
            bgGradient="from-gray-800 to-gray-900"
          />
          <SkillCategory 
            title="FRONTEND DEVELOPMENT" 
            skillList={skills.frontend} 
            icon={Code}
            accentColor="green"
            bgGradient="from-gray-800 to-gray-900"
          />
          <SkillCategory 
            title="DATA ANALYSIS" 
            skillList={skills.dataAnalysis} 
            icon={BarChart3}
            accentColor="purple"
            bgGradient="from-gray-800 to-gray-900"
          />
          <SkillCategory 
            title="TOOLS & OTHERS" 
            skillList={skills.tools} 
            icon={Wrench}
            accentColor="pink"
            bgGradient="from-gray-800 to-gray-900"
          />
        </div>

        {/* Specialization Cards - More Compact */}
        <div className="mb-12">
          <h3 className="font-mono text-sm font-normal uppercase tracking-wider mb-8 text-center text-yellow-400">
            SPECIALIZATION MODULES
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gray-800/60 border border-gray-700/50 rounded-none p-6 text-center transition-all duration-300 hover:border-cyan-500/50 hover:scale-105 group">
                <div className="text-3xl mb-4">{spec.icon}</div>
                <h4 className="font-mono text-xs font-normal uppercase tracking-wider mb-3 text-gray-200 group-hover:text-cyan-400 transition-colors">
                  {spec.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {spec.description}
                </p>
                {/* Progress indicator */}
                <div className="mt-4 h-1 bg-gray-700 rounded-none overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-${spec.color}-500 to-${spec.color}-400 w-full transition-all duration-1000 delay-${index * 200}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gaming Style Stats Summary */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-2 border-cyan-500/30 rounded-none p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">10+</div>
              <p className="font-mono text-xs uppercase text-gray-400 group-hover:text-gray-300 transition-colors">Technologies</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">3+</div>
              <p className="font-mono text-xs uppercase text-gray-400 group-hover:text-gray-300 transition-colors">Years XP</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">5+</div>
              <p className="font-mono text-xs uppercase text-gray-400 group-hover:text-gray-300 transition-colors">Projects</p>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">∞</div>
              <p className="font-mono text-xs uppercase text-gray-400 group-hover:text-gray-300 transition-colors">Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;