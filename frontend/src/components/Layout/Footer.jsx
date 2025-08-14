import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import portfolioData from '../../data/mock';

const Footer = () => {
  const { personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: contact.github, label: 'GitHub' },
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-gray-700/50">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand & Bio */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-green-400 rounded-lg">
                  <Code size={24} className="text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                    {personal.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{personal.title}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Passionate full-stack developer creating innovative solutions that bridge the gap between 
                complex problems and elegant, user-friendly applications.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <ExternalLink size={16} className="text-cyan-400" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <span>Get In Touch</span>
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-gray-300">{contact.location}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Availability</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700/50"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} {personal.name}.</span>
              <span>Crafted with</span>
              <Heart size={14} className="text-red-400" />
              <span>and</span>
              <Coffee size={14} className="text-yellow-600" />
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Built with React + FastAPI + MongoDB</span>
              <span>•</span>
              <span>Deployed on Emergent</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300"
            >
              <ArrowUp size={14} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-gray-400 group-hover:text-cyan-400 text-sm transition-colors">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Fun Gaming Message */}
        <div className="text-center py-6 border-t border-gray-700/30">
          <div className="inline-flex items-center space-x-2 bg-gray-800/30 border border-gray-700/50 rounded-full px-4 py-2">
            <Code size={14} className="text-cyan-400" />
            <span className="text-gray-400 text-xs font-mono">
              &lt;/&gt; Ready to level up your next project? Let's build something epic! &lt;/&gt;
            </span>
            <Code size={14} className="text-green-400" />
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-green-400 to-purple-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;