import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, CheckCircle } from 'lucide-react';
import portfolioData from '../../data/mock';

const Projects = ({ isDark }) => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  const ProjectCard = ({ project, onClick }) => (
    <div 
      className={`border rounded-none overflow-hidden cursor-pointer transition-all hover:translate-y-[-4px] hover:shadow-xl ${
        isDark 
          ? 'border-gray-700 bg-gray-900 hover:shadow-green-400/10' 
          : 'border-gray-200 bg-white hover:shadow-green-600/10'
      }`}
      onClick={() => onClick(project)}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`font-mono text-xs font-normal uppercase tracking-wider ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            {project.year}
          </span>
          <div className="flex items-center space-x-1">
            <CheckCircle size={12} className={isDark ? 'text-green-400' : 'text-green-600'} />
            <span className={`text-xs font-mono uppercase tracking-wider ${
              isDark ? 'text-green-400' : 'text-green-600'
            }`}>
              {project.status}
            </span>
          </div>
        </div>
        
        <h3 className={`text-xl font-normal mb-3 ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`} style={{
          fontSize: 'clamp(16px, 2.5vw, 30px)',
          lineHeight: '1.2'
        }}>
          {project.title}
        </h3>
        
        <p className={`text-sm mb-4 ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`} style={{
          fontSize: 'clamp(14px, 1.8vw, 18px)',
          lineHeight: '1.33'
        }}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider border rounded-none ${
                isDark 
                  ? 'border-gray-600 text-gray-300 bg-gray-800' 
                  : 'border-gray-300 text-gray-700 bg-gray-50'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={`px-3 py-1 text-xs font-mono uppercase tracking-wider ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-3">
          <button className={`flex items-center space-x-2 px-4 py-2 border rounded-none font-mono text-xs uppercase tracking-wider transition-all hover:opacity-70 ${
            isDark 
              ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
          }`}>
            <ExternalLink size={12} />
            <span>DEMO</span>
          </button>
          <button className={`flex items-center space-x-2 px-4 py-2 border rounded-none font-mono text-xs uppercase tracking-wider transition-all hover:opacity-70 ${
            isDark 
              ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-100'
          }`}>
            <Github size={12} />
            <span>CODE</span>
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto border rounded-none ${
        isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className={`text-3xl font-normal mb-2 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {project.title}
              </h2>
              <div className="flex items-center space-x-4">
                <span className={`font-mono text-xs uppercase tracking-wider ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>
                  {project.year}
                </span>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={14} className={isDark ? 'text-green-400' : 'text-green-600'} />
                  <span className={`text-sm ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className={`p-2 border rounded-none transition-all hover:opacity-70 ${
                isDark 
                  ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              ×
            </button>
          </div>
          
          <div className="aspect-video mb-6 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className={`text-lg mb-6 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {project.longDescription}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className={`font-mono text-xs uppercase tracking-wider mb-4 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                TECHNOLOGIES USED
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 text-sm border rounded-none ${
                      isDark 
                        ? 'border-gray-600 text-gray-300 bg-gray-800' 
                        : 'border-gray-300 text-gray-700 bg-gray-50'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={`font-mono text-xs uppercase tracking-wider mb-4 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                KEY FEATURES
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className={`flex items-start space-x-2 text-sm ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <CheckCircle size={16} className={`mt-0.5 flex-shrink-0 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className={`flex items-center space-x-2 px-6 py-3 border-2 rounded-none font-mono text-sm uppercase tracking-wider transition-all hover:scale-105 ${
              isDark 
                ? 'bg-green-400 text-gray-900 border-green-400 hover:bg-green-500' 
                : 'bg-green-600 text-white border-green-600 hover:bg-green-700'
            }`}>
              <ExternalLink size={16} />
              <span>VIEW DEMO</span>
            </button>
            <button className={`flex items-center space-x-2 px-6 py-3 border rounded-none font-mono text-sm uppercase tracking-wider transition-all hover:opacity-70 ${
              isDark 
                ? 'border-gray-700 text-gray-300 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}>
              <Github size={16} />
              <span>VIEW CODE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    } transition-colors`}>
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <p className={`font-mono text-xs font-normal uppercase tracking-wider mb-4 ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            SELECTED WORK
          </p>
          <h2 className={`font-bold uppercase tracking-wide ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`} style={{
            fontSize: 'clamp(40px, 8vw, 150px)',
            lineHeight: '1',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif'
          }}>
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
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