import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import portfolioData from '../../data/mock';

const About = ({ isDark }) => {
  const { personal } = portfolioData;

  return (
    <section id="about" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    } transition-colors`}>
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <p className={`font-mono text-xs font-normal uppercase tracking-wider mb-4 ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            WHO I AM
          </p>
          <h2 className={`font-bold uppercase tracking-wide ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`} style={{
            fontSize: 'clamp(40px, 8vw, 150px)',
            lineHeight: '1',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif'
          }}>
            ABOUT ME
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio Content */}
          <div>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`} style={{
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              lineHeight: '1.33'
            }}>
              {personal.bio}
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className={`p-6 border rounded-none ${
                isDark 
                  ? 'border-gray-700 bg-gray-900' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <GraduationCap className={`mb-3 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} size={24} />
                <h3 className={`font-mono text-xs font-normal uppercase tracking-wider mb-2 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  EDUCATION
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {personal.year}<br />Computer Science
                </p>
              </div>

              <div className={`p-6 border rounded-none ${
                isDark 
                  ? 'border-gray-700 bg-gray-900' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <MapPin className={`mb-3 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} size={24} />
                <h3 className={`font-mono text-xs font-normal uppercase tracking-wider mb-2 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  LOCATION
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {personal.location}
                </p>
              </div>

              <div className={`p-6 border rounded-none ${
                isDark 
                  ? 'border-gray-700 bg-gray-900' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                <Calendar className={`mb-3 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} size={24} />
                <h3 className={`font-mono text-xs font-normal uppercase tracking-wider mb-2 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  EXPERIENCE
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  3+ Years<br />Development
                </p>
              </div>
            </div>
          </div>

          {/* Image/Professional Photo Placeholder */}
          <div className="relative">
            <div className={`aspect-[4/5] border rounded-none overflow-hidden ${
              isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-100'
            }`}>
              <div className={`w-full h-full flex items-center justify-center ${
                isDark ? 'text-gray-500' : 'text-gray-400'
              }`}>
                <div className="text-center">
                  <GraduationCap size={48} className="mx-auto mb-4" />
                  <p className="font-mono text-xs uppercase tracking-wider">
                    PROFESSIONAL PHOTO
                  </p>
                </div>
              </div>
            </div>

            {/* Accent Element */}
            <div className={`absolute -bottom-4 -right-4 w-24 h-24 border-2 rounded-none ${
              isDark ? 'border-green-400' : 'border-green-600'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;