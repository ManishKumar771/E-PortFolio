import React, { useState } from 'react';
import { Code, Database, Terminal, Brain, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Systems', icon: Wrench },
    { id: 'languages', label: 'Languages', icon: Code },
    { id: 'data', label: 'Data & AI', icon: Brain },
    { id: 'systems', label: 'Systems', icon: Terminal },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'cloud', label: 'Cloud', icon: Cloud }
  ];

  const skills = [
    { name: 'Python', level: 95, category: 'languages', description: 'Core language for AI/ML development' },
    { name: 'JavaScript', level: 85, category: 'languages', description: 'Full-stack web development' },
    { name: 'SQL', level: 90, category: 'databases', description: 'Database design and optimization' },
    { name: 'TensorFlow', level: 88, category: 'data', description: 'Deep learning framework' },
    { name: 'PyTorch', level: 85, category: 'data', description: 'Neural network development' },
    { name: 'Pandas', level: 92, category: 'data', description: 'Data manipulation and analysis' },
    { name: 'NumPy', level: 90, category: 'data', description: 'Numerical computing' },
    { name: 'Linux', level: 88, category: 'systems', description: 'System administration and deployment' },
    { name: 'Docker', level: 85, category: 'systems', description: 'Containerization technology' },
    { name: 'PostgreSQL', level: 87, category: 'databases', description: 'Advanced relational database' },
    { name: 'MongoDB', level: 82, category: 'databases', description: 'NoSQL database management' },
    { name: 'AWS', level: 80, category: 'cloud', description: 'Cloud infrastructure and services' },
    { name: 'Scikit-learn', level: 90, category: 'data', description: 'Machine learning algorithms' },
    { name: 'React', level: 83, category: 'languages', description: 'Frontend user interface development' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(166,139,91,0.1)_49%,rgba(166,139,91,0.1)_51%,transparent_52%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#a68b5b] mb-4 tracking-wider">
            NEURAL SYSTEM REGISTRY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8" />
          <p className="text-xl text-[#918f8f] max-w-2xl mx-auto">
            Mastery forged through countless battles in the digital realm
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#a68b5b]/20 border-[#a68b5b] text-[#a68b5b]'
                  : 'bg-[#1a1a1a] border-[#a68b5b]/20 text-[#bfbfbf] hover:border-[#a68b5b]/60 hover:text-[#a68b5b]'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-6 hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#a68b5b]/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm text-[#a68b5b] font-medium">
                  {skill.level}%
                </span>
              </div>
              
              <div className="mb-4">
                <div className="w-full bg-[#0d0d0d] rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#a68b5b] to-[#832c2c] rounded-full transition-all duration-1000 group-hover:from-[#832c2c] group-hover:to-[#a68b5b]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
              
              <p className="text-sm text-[#918f8f] leading-relaxed">
                {skill.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-16 text-center">
          <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-lg p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Battle-Tested Arsenal</h3>
            <p className="text-lg text-[#bfbfbf] leading-relaxed">
              Each skill represents countless hours of dedication, from debugging in the depths of night 
              to architecting solutions that scale across digital kingdoms. This arsenal is not just 
              technical prowess—it's a testament to the warrior's journey through the ever-evolving 
              landscape of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;