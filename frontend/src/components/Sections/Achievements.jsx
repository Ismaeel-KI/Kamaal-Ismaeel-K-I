import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, Users, TrendingUp, ExternalLink, Calendar } from 'lucide-react';
import portfolioData from '../../data/mock';

const Achievements = () => {
  const { achievements, testimonials } = portfolioData;
  const [activeTab, setActiveTab] = useState('achievements');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById('achievements');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getAchievementIcon = (type) => {
    switch (type) {
      case 'Hackathon': return Trophy;
      case 'Open Source': return Star;
      case 'Professional': return Award;
      default: return Trophy;
    }
  };

  const getAchievementColor = (result) => {
    if (result.includes('Winner') || result.includes('🏆')) return 'from-yellow-500 to-orange-400';
    if (result.includes('Finalist') || result.includes('🥉')) return 'from-cyan-500 to-blue-400';
    if (result.includes('Stars') || result.includes('⭐')) return 'from-purple-500 to-pink-400';
    return 'from-green-500 to-emerald-400';
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-20 w-80 h-80 bg-gradient-to-r from-yellow-500/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Trophy size={16} className="text-yellow-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-wider">Recognition & Impact</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
            Achievements
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Recognition for technical excellence and contributions to the developer community
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-2 backdrop-blur-sm">
            {[
              { key: 'achievements', label: 'Awards & Recognition', icon: Trophy },
              { key: 'testimonials', label: 'Client Testimonials', icon: Users }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-700/30'
                }`}
              >
                <tab.icon size={16} />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'achievements' ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = getAchievementIcon(achievement.type);
              return (
                <div 
                  key={achievement.id}
                  className={`group bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-gray-700/30 transition-all duration-500 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Achievement Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 bg-gradient-to-r ${getAchievementColor(achievement.result)} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar size={12} />
                            <span>{achievement.year}</span>
                          </div>
                          <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                            {achievement.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold bg-gradient-to-r ${getAchievementColor(achievement.result)} bg-clip-text text-transparent`}>
                        {achievement.result}
                      </div>
                    </div>
                  </div>

                  {/* Achievement Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {achievement.details}
                  </p>

                  {/* Achievement Impact */}
                  <div className="bg-gray-900/40 border border-gray-700/30 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp size={16} className="text-green-400" />
                      <span className="text-green-400 font-semibold text-sm">Impact</span>
                    </div>
                    <p className="text-gray-400 text-sm">{achievement.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-gray-700/30 transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border border-gray-600"
                  />
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Trophy className="text-yellow-400" size={24} />
                <p className="text-3xl font-bold text-yellow-400">{achievements.length}</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="text-orange-400" size={24} />
                <p className="text-3xl font-bold text-orange-400">1000+</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">GitHub Stars</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="text-cyan-400" size={24} />
                <p className="text-3xl font-bold text-cyan-400">500+</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">Developers Helped</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="text-green-400" size={24} />
                <p className="text-3xl font-bold text-green-400">100%</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Recognition Highlights */}
        <div className="mt-16 bg-gradient-to-r from-gray-800/40 via-gray-800/20 to-gray-800/40 border border-gray-700/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Recent Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Hackathon Winner', desc: 'First place among 500+ participants', color: 'yellow' },
              { title: 'Open Source Star', desc: '1000+ GitHub stars earned', color: 'purple' },
              { title: 'Client Favorite', desc: '100% 5-star ratings', color: 'green' },
              { title: 'Tech Mentor', desc: 'Helped 500+ developers', color: 'cyan' }
            ].map((highlight, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-${highlight.color}-500/20 to-${highlight.color}-600/20 rounded-full flex items-center justify-center border border-${highlight.color}-500/30`}>
                  <Trophy size={24} className={`text-${highlight.color}-400`} />
                </div>
                <h4 className="text-white font-semibold mb-1">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;