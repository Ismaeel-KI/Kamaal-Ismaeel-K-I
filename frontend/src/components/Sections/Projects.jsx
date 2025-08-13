import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, CheckCircle, Star, Zap } from 'lucide-react';
import portfolioData from '../../data/mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectCard = ({ project, onClick }) => (
    <div 
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-none overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
      onClick={() => onClick(project)}
    >
      {/* Image Container */}
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-gray-900/80 border border-green-500/30 rounded-none px-3 py-1">
          <CheckCircle size={12} className="text-green-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-green-400">
            {project.status}
          </span>
        </div>
        
        {/* Year Badge */}
        <div className="absolute top-4 left-4 bg-gray-900/80 border border-cyan-500/30 rounded-none px-3 py-1">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            {project.year}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-normal text-gray-200 group-hover:text-cyan-400 transition-colors" style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            lineHeight: '1.2'
          }}>
            {project.title}
          </h3>
          <Zap size={16} className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <p className="text-sm text-gray-400 leading-relaxed" style={{
          fontSize: 'clamp(13px, 1.8vw, 14px)',
          lineHeight: '1.5'
        }}>
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs font-mono uppercase tracking-wider border border-gray-600 text-gray-300 bg-gray-800/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-mono uppercase tracking-wider text-gray-500">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3 pt-2">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 text-gray-300 font-mono text-xs uppercase tracking-wider transition-all hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10">
            <ExternalLink size={12} />
            <span>DEMO</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 text-gray-300 font-mono text-xs uppercase tracking-wider transition-all hover:border-green-400 hover:text-green-400 hover:bg-green-400/10">
            <Github size={12} />
            <span>CODE</span>
          </button>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-500/30 rounded-none">
        {/* Modal Header */}
        <div className="p-8 border-b border-gray-700">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h2 className="text-3xl font-normal text-gray-100">
                  {project.title}
                </h2>
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-none">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-sm text-green-400 font-mono">{project.status}</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span className="font-mono text-cyan-400">{project.year}</span>
                <div className="flex items-center space-x-2">
                  <Star size={14} className="text-yellow-400" />
                  <span className="text-gray-400">Featured Project</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 border border-gray-600 rounded-none text-gray-400 hover:border-red-500 hover:text-red-400 transition-all"
            >
              ×
            </button>
          </div>
        </div>
        
        {/* Modal Content */}
        <div className="p-8">
          {/* Project Image */}
          <div className="aspect-video mb-8 overflow-hidden border border-gray-700">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Description */}
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            {project.longDescription}
          </p>
          
          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Technologies */}
            <div className="bg-gray-800/40 border border-gray-700 rounded-none p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider mb-4 text-cyan-400 flex items-center">
                <Code size={16} className="mr-2" />
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm border border-gray-600 text-gray-300 bg-gray-800/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-gray-800/40 border border-gray-700 rounded-none p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider mb-4 text-green-400 flex items-center">
                <Star size={16} className="mr-2" />
                KEY FEATURES
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-400 text-gray-900 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:scale-105">
              <ExternalLink size={16} />
              <span>VIEW LIVE DEMO</span>
            </button>
            <button className="flex items-center space-x-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider transition-all hover:border-cyan-400 hover:bg-cyan-500/10">
              <Github size={16} />
              <span>VIEW SOURCE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"></div>
            <p className="font-mono text-xs font-normal uppercase tracking-wider mx-4 text-purple-400 bg-gray-900 px-4 py-1 border border-purple-500/30">
              MISSION ARCHIVE
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent flex-1"></div>
          </div>
          <h2 className="font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400"
              style={{
                fontSize: 'clamp(36px, 8vw, 120px)',
                lineHeight: '1',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
              }}>
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid - More Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;