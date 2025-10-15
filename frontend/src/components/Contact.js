import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import { personalInfo } from '../utils/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - in real implementation, this would send to backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Github className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      View my work
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">
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
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">
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
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">
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
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">
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
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
