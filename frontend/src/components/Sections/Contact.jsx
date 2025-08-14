import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Github, ExternalLink, Send, CheckCircle, Calendar } from 'lucide-react';
import portfolioData from '../../data/mock';

const Contact = () => {
  const { contact, personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'cyan',
      description: 'Best for detailed project discussions'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: contact.linkedin,
      color: 'blue',
      description: 'Professional networking & updates'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: contact.github,
      color: 'purple',
      description: 'Open source contributions & projects'
    },
    {
      icon: Calendar,
      label: 'Schedule Call',
      value: 'Book a meeting',
      href: contact.calendly,
      color: 'green',
      description: 'Quick 15-30 minute consultation'
    }
  ];

  const availability = [
    { label: 'Response Time', value: contact.responseTime, icon: Clock },
    { label: 'Timezone', value: contact.timezone, icon: MapPin },
    { label: 'Working Hours', value: contact.workingHours, icon: Clock },
    { label: 'Availability', value: contact.availability, icon: CheckCircle }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Send size={16} className="text-cyan-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-wider">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400">
            Get In Touch
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary together.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.label !== 'Email' ? '_blank' : undefined}
              rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`group bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 hover:border-${method.color}-500/50 hover:bg-gray-700/40 transition-all duration-300 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-${method.color}-500/20 to-${method.color}-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon size={24} className={`text-${method.color}-400`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{method.label}</h3>
                <p className={`text-${method.color}-400 font-medium mb-2 group-hover:text-${method.color}-300 transition-colors`}>
                  {method.value}
                </p>
                <p className="text-gray-500 text-sm">{method.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-green-400/20 rounded-lg">
                  <Send size={20} className="text-cyan-400" />
                </div>
                <span>Start a Conversation</span>
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 mb-6">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white focus:border-cyan-500/50 focus:outline-none transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500/50 focus:outline-none transition-colors resize-vertical"
                      placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-cyan-500 to-green-400 text-gray-900 font-semibold rounded-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-900/20 border-t-gray-900 rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Availability & Info */}
          <div className="space-y-8">
            
            {/* Availability Status */}
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-lg">
                  <CheckCircle size={20} className="text-green-400" />
                </div>
                <span>Availability</span>
              </h4>

              <div className="space-y-4">
                {availability.map((item, index) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-gray-700/50 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <item.icon size={16} className="text-cyan-400" />
                      <span className="text-gray-300">{item.label}</span>
                    </div>
                    <span className="text-white font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Currently Available</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Open for new projects and collaborations. Let's build something amazing together!
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-6">Why Work With Me?</h4>
              
              <div className="space-y-4">
                {[
                  { stat: '24h', label: 'Average Response Time', color: 'cyan' },
                  { stat: '100%', label: 'Client Satisfaction Rate', color: 'green' },
                  { stat: '15+', label: 'Projects Completed', color: 'purple' },
                  { stat: '3+', label: 'Years of Experience', color: 'pink' }
                ].map((item, index) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 rounded-lg flex items-center justify-center border border-${item.color}-500/30`}>
                      <span className={`text-${item.color}-400 font-bold text-sm`}>{item.stat}</span>
                    </div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center space-x-3">
                <MapPin size={20} className="text-purple-400" />
                <span>Location</span>
              </h4>
              <div className="space-y-2">
                <p className="text-gray-300">📍 {contact.location}</p>
                <p className="text-gray-300">🌍 {contact.timezone}</p>
                <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;