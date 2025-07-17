import React from 'react';
import { Code, Database, Brain, Terminal, Shield, Zap } from 'lucide-react';

const About = () => {
  const expertise = [
    { icon: Code, title: 'Python Mastery', description: 'Forging digital solutions with precision and elegance' },
    { icon: Database, title: 'Data Architectures', description: 'Building robust foundations for information warfare' },
    { icon: Terminal, title: 'Linux Systems', description: 'Command line warrior, system architect' },
    { icon: Brain, title: 'AI & ML', description: 'Crafting intelligent systems that learn and adapt' },
    { icon: Shield, title: 'Data Science', description: 'Extracting wisdom from the chaos of information' },
    { icon: Zap, title: 'Performance', description: 'Optimizing systems for maximum efficiency' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23a68b5b%22 fill-opacity=%220.3%22%3E%3Cpath d=%22M20 20c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#a68b5b] mb-4 tracking-wider">
            OPERATOR MANIFEST
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Manifesto Text */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-lg text-[#bfbfbf] leading-relaxed mb-6">
                In the vast digital wilderness, I am a silent architect of intelligent systems. 
                Each line of code is forged with the precision of ancient craftsmanship, 
                every algorithm tempered by the fires of countless iterations.
              </p>
              <p className="text-lg text-[#bfbfbf] leading-relaxed mb-6">
                My journey through the realms of <span className="text-[#a68b5b] font-semibold">Artificial Intelligence</span> and 
                <span className="text-[#a68b5b] font-semibold"> Data Science</span> is marked by the pursuit of elegance 
                within complexity. Like a warrior who understands that true strength comes from restraint, 
                I build systems that are both powerful and refined.
              </p>
              <p className="text-lg text-[#bfbfbf] leading-relaxed">
                From the command lines of <span className="text-[#a68b5b] font-semibold">Linux</span> to the neural networks 
                that learn and adapt, I navigate the digital landscape with the wisdom of experience and 
                the hunger for continuous growth.
              </p>
            </div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-6 hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#a68b5b]/10"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#a68b5b]/20 rounded-lg mr-4 group-hover:bg-[#a68b5b]/30 transition-colors">
                    <item.icon className="w-6 h-6 text-[#a68b5b]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#918f8f] leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-[#a68b5b] font-medium italic max-w-3xl mx-auto">
            "In the realm of code, as in life, true mastery comes not from the power to create, 
            but from the wisdom to know what should be created."
          </blockquote>
          <div className="mt-4 text-[#918f8f]">— Digital Warrior's Creed</div>
        </div>
      </div>
    </section>
  );
};

export default About;