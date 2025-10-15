import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../utils/mockData';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 ${
      isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </button>
            <p className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Building innovative solutions with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`transition-colors duration-300 text-sm ${
                      isDark
                        ? 'text-gray-400 hover:text-emerald-400'
                        : 'text-gray-600 hover:text-emerald-600'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect</h3>
            <div className="flex gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-gray-300 hover:text-emerald-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:text-emerald-600 hover:bg-gray-200'
                }`}
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-gray-300 hover:text-emerald-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:text-emerald-600 hover:bg-gray-200'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 text-gray-300 hover:text-emerald-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:text-emerald-600 hover:bg-gray-200'
                }`}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className={`text-sm flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
