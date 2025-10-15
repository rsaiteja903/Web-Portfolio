import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../utils/mockData';
import { useTheme } from '../contexts/ThemeContext';

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Work <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional journey and key contributions
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp) => (
            <Card
              key={exp.id}
              className={`p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 ${
                isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Company Logo Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                    <Briefcase className="text-emerald-400" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h3>
                    <p className="text-emerald-500 text-lg font-medium mb-3">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index} className={`flex items-start gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={18} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
