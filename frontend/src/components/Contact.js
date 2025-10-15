import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import { personalInfo } from '../utils/mockData';
import { useTheme } from '../contexts/ThemeContext';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDark } = useTheme();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message Sent!",
          description: response.data.message || "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
              <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className={`p-6 hover:border-emerald-500/50 transition-all duration-300 group ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Mail className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className={`hover:text-emerald-500 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className={`p-6 hover:border-emerald-500/50 transition-all duration-300 group ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Linkedin className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>LinkedIn</p>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:text-emerald-500 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>

              <Card className={`p-6 hover:border-emerald-500/50 transition-all duration-300 group ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Github className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>GitHub</p>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:text-emerald-500 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                      View my work
                    </a>
                  </div>
                </div>
              </Card>

              <Card className={`p-6 hover:border-emerald-500/50 transition-all duration-300 group ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <MapPin className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                    <p className={isDark ? 'text-white' : 'text-gray-900'}>{personalInfo.location}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`p-8 ${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block mb-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={`${isDark ? 'bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500'}`}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={`${isDark ? 'bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500'}`}
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block mb-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className={`${isDark ? 'bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500'}`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={`resize-none ${isDark ? 'bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-emerald-500'}`}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
