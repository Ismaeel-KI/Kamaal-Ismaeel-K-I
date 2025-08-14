import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Users, TrendingUp, Zap, Calendar, Award, ChevronRight } from 'lucide-react';
import portfolioData from '../../data/mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = ['all', 'Full-Stack Web', 'AI/ML', 'Data Visualization', 'AI/Chatbot', 'Desktop App'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-cyan-400 font-semibold">{project.category} • {project.year}</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 text-gray-900 rounded-lg hover:bg-cyan-400 transition-colors">
                <ExternalLink size={16} />
                <span>Demo</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 transition-colors">
                <Github size={16} />
                <span>Code</span>
              </button>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {project.longDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Metrics</h4>
              <div className="space-y-3">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-cyan-400 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Features</h4>
              <div className="space-y-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Code size={16} className="text-cyan-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-wider">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400">
            Featured Projects
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real-world applications with measurable impact and cutting-edge technology
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl border font-semibold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                  : 'bg-gray-800/40 border-gray-700/50 text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:bg-gray-700/30 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                  {project.status}
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-colors transform hover:scale-110"
                  >
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-3 bg-gray-800/90 text-white rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                    <Github size={16} />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="bg-gray-900/40 border border-gray-700/30 rounded-lg p-3">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </p>
                      <p className="text-cyan-400 font-bold text-sm">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 border border-gray-600/50 rounded text-xs text-gray-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center space-x-2 py-3 border border-gray-600/50 text-gray-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 group/btn"
                >
                  <span>View Details</span>
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Code className="text-cyan-400" size={24} />
                <p className="text-3xl font-bold text-cyan-400">{projects.length}+</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">Projects</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="text-green-400" size={24} />
                <p className="text-3xl font-bold text-green-400">50K+</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">Users Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="text-purple-400" size={24} />
                <p className="text-3xl font-bold text-purple-400">100%</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Award className="text-pink-400" size={24} />
                <p className="text-3xl font-bold text-pink-400">5★</p>
              </div>
              <p className="text-gray-400 text-sm font-mono uppercase">Avg Rating</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4 bg-gradient-to-r from-gray-800/40 via-gray-800/20 to-gray-800/40 border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white">Like What You See?</h3>
            <p className="text-gray-400 max-w-md">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-400 text-gray-900 font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <Zap size={20} />
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;