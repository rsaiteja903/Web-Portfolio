import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card } from './ui/card';
import { education } from '../utils/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational journey and the foundation of my technical expertise
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-600 to-transparent hidden lg:block"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg shadow-emerald-500/50"></div>
                </div>

                {/* Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <Card className="bg-gray-800/50 border-gray-700 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-500/10 rounded-lg">
                        <GraduationCap className="text-emerald-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-emerald-400 font-medium mb-3">
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-3 text-sm">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Award size={16} />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
