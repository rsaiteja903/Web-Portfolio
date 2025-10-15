import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../utils/mockData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-4">
              <p className="text-emerald-400 text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-400 font-light">
                {personalInfo.title}
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={20} />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg group transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className={`hidden lg:flex justify-center transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className="text-gray-500 mt-2">Your Photo Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
