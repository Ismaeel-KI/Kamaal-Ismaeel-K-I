import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';
import portfolioData from '../../data/mock';

const Footer = () => {
  const { contact } = portfolioData;

  return (
    <footer className="border-t border-cyan-500/20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-green-400/5"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-none">
                <Zap size={16} className="text-gray-900" />
              </div>
              <div className="font-mono text-xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                KAMAAL K I
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Computer Science Student specializing in full-stack development, 
              data analysis, and AI solutions. Building the digital future 
              one project at a time.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-mono text-xs font-normal uppercase tracking-wider mb-6 text-cyan-400">
              CONTACT PROTOCOL
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Mail size={16} className="text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {contact.email}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono text-xs font-normal uppercase tracking-wider mb-6 text-cyan-400">
              SOCIAL NETWORK
            </h3>
            <div className="flex space-x-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 border border-gray-700 rounded-none transition-all duration-300 hover:border-cyan-500 hover:scale-110"
              >
                <Github size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 border border-gray-700 rounded-none transition-all duration-300 hover:border-green-400 hover:scale-110"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-green-400 transition-colors" />
                <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-mono uppercase tracking-wider text-gray-500">
              © 2024 KAMAAL ISMAEEL K I. ALL SYSTEMS OPERATIONAL.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-gray-400">
                {contact.availability}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-green-400 to-purple-500"></div>
    </footer>
  );
};

export default Footer;