import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cpu, Wrench, Cloud, TrendingUp } from 'lucide-react';
import portfolioData from '../../data/mock';

const Skills = () => {
  const { skills } = portfolioData;
  const [visibleBars, setVisibleBars] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('backend');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate skill bars when section becomes visible
          Object.keys(skills).forEach((category, categoryIndex) => {
            skills[category].forEach((skill, skillIndex) => {
              setTimeout(() => {
                setVisibleBars(prev => new Set([...prev, `${category}-${skillIndex}`]));
              }, categoryIndex * 200 + skillIndex * 100);
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [skills]);

  const categories = [
    { key: 'backend', label: 'Backend', icon: Code, color: 'cyan' },
    { key: 'frontend', label: 'Frontend', icon: TrendingUp, color: 'green' },
    { key: 'database', label: 'Database', icon: Database, color: 'blue' },
    { key: 'ai_ml', label: 'AI/ML', icon: Cpu, color: 'purple' },
    { key: 'devops', label: 'DevOps', icon: Cloud, color: 'pink' }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-green-400';
    if (level >= 80) return 'from-cyan-500 to-cyan-400';
    if (level >= 70) return 'from-blue-500 to-blue-400';
    return 'from-gray-500 to-gray-400';
  };

  const getExperienceColor = (experience) => {
    const years = parseFloat(experience);
    if (years >= 3) return 'text-green-400';
    if (years >= 2) return 'text-cyan-400';
    if (years >= 1) return 'text-blue-400';
    return 'text-gray-400';
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-indigo-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Wrench size={16} className="text-cyan-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-wider">Technical Arsenal</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400">
            Skills & Expertise
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical stack with hands-on experience across the entire development lifecycle
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`group flex items-center space-x-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                activeCategory === category.key
                  ? `bg-${category.color}-500/20 border-${category.color}-500/50 text-${category.color}-400`
                  : 'bg-gray-800/40 border-gray-700/50 text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400'
              }`}
            >
              <category.icon size={20} />
              <span className="font-semibold">{category.label}</span>
              <div className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                {skills[category.key]?.length || 0}
              </div>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                {(() => {
                  const category = categories.find(cat => cat.key === activeCategory);
                  return (
                    <>
                      <div className={`p-3 bg-gradient-to-r from-${category.color}-500/20 to-${category.color}-600/20 rounded-lg`}>
                        <category.icon size={24} className={`text-${category.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{category.label} Skills</h3>
                        <p className="text-gray-400 text-sm">
                          {skills[activeCategory]?.length} technologies mastered
                        </p>
                      </div>
                    </>
                  );
                })()}
              </div>
              
              {/* Skills Overview */}
              <div className="hidden md:flex space-x-6 text-sm">
                <div className="text-center">
                  <p className="text-green-400 font-bold">Expert</p>
                  <p className="text-gray-500">90%+</p>
                </div>
                <div className="text-center">
                  <p className="text-cyan-400 font-bold">Advanced</p>
                  <p className="text-gray-500">80-89%</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-400 font-bold">Proficient</p>
                  <p className="text-gray-500">70-79%</p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {skills[activeCategory]?.map((skill, index) => (
                <div key={skill.name} 
                     className="group bg-gray-900/40 border border-gray-700/30 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-gray-800/40 transition-all duration-300">
                  
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-medium ${getExperienceColor(skill.experience)}`}>
                        {skill.experience}
                      </p>
                      <p className="text-xs text-gray-500">
                        {skill.projects} projects
                      </p>
                    </div>
                  </div>

                  {/* Skill Progress Bar */}
                  <div className="relative">
                    <div className="h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                          visibleBars.has(`${activeCategory}-${index}`) ? `w-[${skill.level}%]` : 'w-0'
                        }`}
                        style={{ width: visibleBars.has(`${activeCategory}-${index}`) ? `${skill.level}%` : '0%' }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div 
                      className={`absolute top-0 h-3 w-1 bg-white/60 rounded-full transition-all duration-1000 delay-500 ${
                        visibleBars.has(`${activeCategory}-${index}`) ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ left: visibleBars.has(`${activeCategory}-${index}`) ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>

                  {/* Skill Stats */}
                  <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                    <span>Experience: {skill.experience}</span>
                    <span>{skill.projects} projects completed</span>
                  </div>
                </div>
              )) || []}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-3xl font-bold text-cyan-400">
                {Object.values(skills).reduce((total, category) => total + category.length, 0)}+
              </p>
              <p className="text-gray-400 text-sm font-mono uppercase">Technologies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">3+</p>
              <p className="text-gray-400 text-sm font-mono uppercase">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">50+</p>
              <p className="text-gray-400 text-sm font-mono uppercase">Projects Built</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-pink-400">∞</p>
              <p className="text-gray-400 text-sm font-mono uppercase">Learning Mode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;