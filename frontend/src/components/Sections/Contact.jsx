import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import portfolioData from '../../data/mock';

const Contact = ({ isDark }) => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className={`py-20 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    } transition-colors`}>
      <div className="container mx-auto px-6">
        {/* Section Label */}
        <div className="mb-12">
          <p className={`font-mono text-xs font-normal uppercase tracking-wider mb-4 ${
            isDark ? 'text-green-400' : 'text-green-600'
          }`}>
            LET'S CONNECT
          </p>
          <h2 className={`font-bold uppercase tracking-wide ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`} style={{
            fontSize: 'clamp(40px, 8vw, 150px)',
            lineHeight: '1',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif'
          }}>
            CONTACT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className={`text-2xl font-normal mb-8 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`} style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              lineHeight: '1.2'
            }}>
              Ready to build something amazing together?
            </h3>

            <p className={`text-lg mb-12 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`} style={{
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              lineHeight: '1.33'
            }}>
              I'm always excited to work on interesting projects and collaborate 
              with innovative teams. Let's discuss how we can bring your ideas to life.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className={`p-3 border rounded-none ${
                  isDark 
                    ? 'border-gray-700 bg-gray-900 text-green-400' 
                    : 'border-gray-300 bg-gray-50 text-green-600'
                }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className={`font-mono text-xs uppercase tracking-wider mb-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    EMAIL
                  </p>
                  <p className={`text-lg ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`p-3 border rounded-none ${
                  isDark 
                    ? 'border-gray-700 bg-gray-900 text-green-400' 
                    : 'border-gray-300 bg-gray-50 text-green-600'
                }`}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className={`font-mono text-xs uppercase tracking-wider mb-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    PHONE
                  </p>
                  <p className={`text-lg ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`p-3 border rounded-none ${
                  isDark 
                    ? 'border-gray-700 bg-gray-900 text-green-400' 
                    : 'border-gray-300 bg-gray-50 text-green-600'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className={`font-mono text-xs uppercase tracking-wider mb-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    LOCATION
                  </p>
                  <p className={`text-lg ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className={`font-mono text-xs uppercase tracking-wider mb-4 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                SOCIAL PROFILES
              </p>
              <div className="flex space-x-4">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-none transition-all hover:scale-110 ${
                    isDark 
                      ? 'border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-green-400' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-green-600'
                  }`}
                >
                  <Github size={24} />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-none transition-all hover:scale-110 ${
                    isDark 
                      ? 'border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-green-400' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-green-600'
                  }`}
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 border rounded-none ${
            isDark 
              ? 'border-gray-700 bg-gray-900' 
              : 'border-gray-200 bg-gray-50'
          }`}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={48} className={`mx-auto mb-4 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} />
                <h3 className={`text-xl font-normal mb-2 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  Message Sent!
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-none transition-colors focus:outline-none focus:ring-1 ${
                        isDark 
                          ? 'border-gray-600 bg-gray-800 text-gray-100 focus:ring-green-400 focus:border-green-400' 
                          : 'border-gray-300 bg-white text-gray-900 focus:ring-green-600 focus:border-green-600'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 border rounded-none transition-colors focus:outline-none focus:ring-1 ${
                        isDark 
                          ? 'border-gray-600 bg-gray-800 text-gray-100 focus:ring-green-400 focus:border-green-400' 
                          : 'border-gray-300 bg-white text-gray-900 focus:ring-green-600 focus:border-green-600'
                      }`}
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 border rounded-none transition-colors focus:outline-none focus:ring-1 ${
                      isDark 
                        ? 'border-gray-600 bg-gray-800 text-gray-100 focus:ring-green-400 focus:border-green-400' 
                        : 'border-gray-300 bg-white text-gray-900 focus:ring-green-600 focus:border-green-600'
                    }`}
                  />
                </div>
                
                <div>
                  <label className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full p-3 border rounded-none transition-colors focus:outline-none focus:ring-1 resize-none ${
                      isDark 
                        ? 'border-gray-600 bg-gray-800 text-gray-100 focus:ring-green-400 focus:border-green-400' 
                        : 'border-gray-300 bg-white text-gray-900 focus:ring-green-600 focus:border-green-600'
                    }`}
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full flex items-center justify-center space-x-2 px-8 py-4 border-2 rounded-none font-mono text-sm uppercase tracking-wider transition-all hover:scale-105 ${
                    isDark 
                      ? 'bg-green-400 text-gray-900 border-green-400 hover:bg-green-500' 
                      : 'bg-green-600 text-white border-green-600 hover:bg-green-700'
                  }`}
                >
                  <Send size={16} />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;