import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-gray-50/95 border-gray-200'
    } backdrop-blur-sm border-b`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`font-mono text-2xl font-normal uppercase tracking-wider transition-colors ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            ISMAEEL K.
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-mono text-xs font-normal uppercase tracking-wider transition-opacity hover:opacity-70 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-none border transition-all hover:opacity-70 ${
                isDark 
                  ? 'border-gray-700 text-gray-100 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-none border transition-all hover:opacity-70 ${
                isDark 
                  ? 'border-gray-700 text-gray-100 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden mt-6 pt-6 border-t ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 font-mono text-xs font-normal uppercase tracking-wider transition-opacity hover:opacity-70 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;