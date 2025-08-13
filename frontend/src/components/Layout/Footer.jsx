import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import portfolioData from '../../data/mock';

const Footer = ({ isDark }) => {
  const { contact } = portfolioData;

  return (
    <footer className={`border-t ${
      isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
    } transition-colors`}>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className={`font-mono text-2xl font-normal uppercase tracking-wider mb-4 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              ISMAEEL K.
            </div>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Computer Science Student specializing in full-stack development, 
              data analysis, and AI solutions. Building impactful technology 
              solutions for tomorrow.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-mono text-xs font-normal uppercase tracking-wider mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              CONTACT INFO
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className={isDark ? 'text-green-400' : 'text-green-600'} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {contact.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className={isDark ? 'text-green-400' : 'text-green-600'} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {contact.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className={isDark ? 'text-green-400' : 'text-green-600'} />
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`font-mono text-xs font-normal uppercase tracking-wider mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              CONNECT
            </h3>
            <div className="flex space-x-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 border rounded-none transition-all hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-green-400' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-green-600'
                }`}
              >
                <Github size={20} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 border rounded-none transition-all hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-green-400' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-green-600'
                }`}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm font-mono uppercase tracking-wider ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2024 ISMAEEL K. ALL RIGHTS RESERVED.
            </p>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {contact.availability}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;