import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../utils/mockData';
import { useTheme } from '../contexts/ThemeContext';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const { isDark } = useTheme();

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my recent work and technical innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`overflow-hidden group hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t opacity-60 ${
                  isDark ? 'from-gray-900 via-gray-900/50' : 'from-white via-white/50'
                } to-transparent`}></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 group-hover:text-emerald-500 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Expandable Description */}
                {expandedProject === project.id && (
                  <div className="mb-4 space-y-3">
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.longDescription}
                    </p>
                    
                    {project.features && (
                      <div>
                        <h4 className={`font-semibold text-sm mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className={`text-sm flex items-start gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              <span className="text-emerald-400 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge
                      variant="secondary"
                      className={`border text-xs ${
                        isDark ? 'bg-gray-700/50 text-gray-400 border-gray-600' : 'bg-gray-200 text-gray-600 border-gray-300'
                      }`}
                    >
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => toggleProject(project.id)}
                    variant="outline"
                    className={`flex-1 text-sm transition-all duration-300 ${
                      isDark
                        ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-emerald-400'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-emerald-600'
                    }`}
                  >
                    {expandedProject === project.id ? (
                      <>
                        Less <ChevronUp size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        More <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </Button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 border rounded-md transition-all duration-300 ${
                      isDark
                        ? 'border-gray-700 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50'
                        : 'border-gray-300 text-gray-700 hover:text-emerald-600 hover:border-emerald-500/50'
                    }`}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 border rounded-md transition-all duration-300 ${
                      isDark
                        ? 'border-gray-700 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/50'
                        : 'border-gray-300 text-gray-700 hover:text-emerald-600 hover:border-emerald-500/50'
                    }`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
