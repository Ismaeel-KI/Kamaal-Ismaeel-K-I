import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, User, MessageSquare, Zap } from 'lucide-react';
import portfolioData from '../../data/mock';

const Contact = () => {
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const ContactInfoCard = ({ icon: Icon, label, value, color, hoverColor }) => (
    <div className={`group flex items-center space-x-4 p-4 bg-gray-800/60 border border-${color}-500/30 rounded-none transition-all duration-300 hover:border-${hoverColor}-400 hover:scale-[1.02]`}>
      <div className={`p-3 bg-${color}-500/20 border border-${color}-500/50 rounded-none group-hover:border-${hoverColor}-400 transition-all duration-300`}>
        <Icon size={20} className={`text-${color}-400 group-hover:text-${hoverColor}-300 transition-colors`} />
      </div>
      <div>
        <p className={`font-mono text-xs uppercase tracking-wider mb-1 text-${color}-400 group-hover:text-${hoverColor}-300 transition-colors`}>
          {label}
        </p>
        <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  const SocialLink = ({ href, icon: Icon, label, color }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-4 bg-gray-800/60 border border-${color}-500/30 rounded-none transition-all duration-300 hover:border-${color}-400 hover:scale-110 hover:bg-${color}-500/10`}
    >
      <Icon size={24} className={`text-${color}-400 group-hover:text-${color}-300 transition-colors`} />
      <div className={`absolute inset-0 bg-${color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Tooltip */}
      <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 border border-${color}-500/50 rounded-none px-2 py-1 text-xs font-mono text-${color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
        {label}
      </div>
    </a>
  );

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-radial from-green-400/10 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1"></div>
            <p className="font-mono text-xs font-normal uppercase tracking-wider mx-4 text-green-400 bg-gray-900 px-4 py-1 border border-green-500/30">
              COMMUNICATION PROTOCOL
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1"></div>
          </div>
          <h2 className="font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400"
              style={{
                fontSize: 'clamp(36px, 8vw, 120px)',
                lineHeight: '1',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                textShadow: '0 0 30px rgba(34, 197, 94, 0.3)'
              }}>
            CONTACT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Mission Brief */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-cyan-500/30 rounded-none p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-green-400 rounded-none">
                  <Zap size={20} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  Ready for collaboration?
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6" style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                lineHeight: '1.6'
              }}>
                I'm always excited to work on interesting projects and collaborate 
                with innovative teams. Let's discuss how we can bring your ideas to life 
                and build something amazing together.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/30 rounded-none">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-green-400">STATUS: AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="font-mono text-sm font-normal uppercase tracking-wider text-cyan-400 mb-6">
                DIRECT CHANNELS
              </h3>
              
              <ContactInfoCard 
                icon={Mail}
                label="EMAIL TRANSMISSION"
                value={contact.email}
                color="cyan"
                hoverColor="cyan"
              />
              
              <ContactInfoCard 
                icon={Phone}
                label="VOICE COMMUNICATION"
                value={contact.phone}
                color="green"
                hoverColor="green"
              />
              
              <ContactInfoCard 
                icon={MapPin}
                label="GEOGRAPHIC COORDINATES"
                value={contact.location}
                color="purple"
                hoverColor="purple"
              />
            </div>

            {/* Social Networks */}
            <div>
              <h3 className="font-mono text-sm font-normal uppercase tracking-wider text-cyan-400 mb-6">
                SOCIAL NETWORKS
              </h3>
              <div className="flex space-x-4">
                <SocialLink 
                  href={contact.github}
                  icon={Github}
                  label="GitHub"
                  color="cyan"
                />
                <SocialLink 
                  href={contact.linkedin}
                  icon={Linkedin}
                  label="LinkedIn"
                  color="green"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 rounded-none p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 border-2 border-green-500/50 rounded-none flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-normal mb-4 text-green-400">
                  TRANSMISSION SUCCESSFUL!
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Your message has been received and processed.
                </p>
                <div className="bg-green-500/10 border border-green-500/30 rounded-none p-4">
                  <p className="font-mono text-xs text-green-400">
                    RESPONSE TIME: 24-48 HOURS
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Form Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-2 bg-green-500/20 border border-green-500/50 rounded-none">
                    <MessageSquare size={20} className="text-green-400" />
                  </div>
                  <h3 className="font-mono text-lg font-bold uppercase tracking-wider text-green-400">
                    SEND MESSAGE
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-cyan-400">
                        SENDER NAME *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded-none text-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 pl-10"
                        />
                        <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-cyan-400">
                        EMAIL ADDRESS *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded-none text-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 pl-10"
                        />
                        <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-cyan-400">
                      MESSAGE SUBJECT *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded-none text-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider mb-2 text-cyan-400">
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-3 bg-gray-900/50 border border-gray-600 rounded-none text-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-400 text-gray-900 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <Send size={16} />
                    <span>TRANSMIT MESSAGE</span>
                    <div className="w-2 h-2 bg-gray-900 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;