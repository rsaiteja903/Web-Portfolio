import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../utils/mockData';

const Skills = () => {
  const SkillBar = ({ name, level }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{name}</span>
        <span className="text-emerald-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical proficiencies and core competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
              Programming Languages
            </h3>
            <div className="space-y-6">
              {skills.languages.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>

          {/* Frameworks */}
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
              Frameworks & Libraries
            </h3>
            <div className="space-y-6">
              {skills.frameworks.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>

          {/* Tools */}
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
              Tools & Technologies
            </h3>
            <div className="space-y-6">
              {skills.tools.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>

          {/* Cloud */}
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
              Cloud & AWS
            </h3>
            <div className="space-y-6">
              {skills.cloud.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>

          {/* Databases */}
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
              Databases
            </h3>
            <div className="space-y-6">
              {skills.databases.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>

          {/* Competencies */}
          <Card className="bg-gray-900/50 border-gray-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.competencies.map((competency, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors duration-300 text-sm px-4 py-2"
                >
                  {competency}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
