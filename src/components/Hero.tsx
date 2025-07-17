import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Database, Brain, Terminal, Code } from 'lucide-react';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 8000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  const skillIcons = [
    { icon: Brain, label: 'AI' },
    { icon: Database, label: 'Data' },
    { icon: Terminal, label: 'Linux' },
    { icon: Code, label: 'Python' }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,139,91,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(166,139,91,0.05)_49%,rgba(166,139,91,0.05)_51%,transparent_52%)]" />
        </div>
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#a68b5b] rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animation: `float ${Math.random() * 10 + 10}s infinite linear`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-[#bfbfbf] mb-4 tracking-wider">
            MANISH
            <br />
            <span className="text-[#a68b5b]">KUMAR</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8" />
        </div>

        <p className="text-xl md:text-2xl text-[#918f8f] mb-8 max-w-2xl mx-auto leading-relaxed">
          Silent warrior of code, operating through digital chaos with the precision of ancient craftsmanship
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="group relative p-4 bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg hover:border-[#a68b5b]/60 transition-all duration-300 hover:transform hover:scale-105"
            >
              <skill.icon className="w-8 h-8 text-[#a68b5b] group-hover:text-[#bfbfbf] transition-colors" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-[#918f8f] opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group relative p-3 bg-[#1a1a1a] border border-[#a68b5b]/30 rounded-full hover:border-[#a68b5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#a68b5b]/20"
            >
              <link.icon className="w-6 h-6 text-[#a68b5b] group-hover:text-[#bfbfbf] transition-colors" />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-[#918f8f] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#a68b5b]/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#a68b5b] rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;