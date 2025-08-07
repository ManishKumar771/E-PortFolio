import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Database, Brain, Terminal, Code, Download, ArrowRight, Award, Clock, Users, Star } from 'lucide-react';

// Looping typing effect hook
function useLoopingTypingEffect(text: string, speed: number = 50) {
  const [displayed, setDisplayed] = useState('');
  const [i, setI] = useState(0);
  useEffect(() => {
    let timeout: number;
    if (i < text.length) {
      timeout = window.setTimeout(() => {
        setDisplayed(text.slice(0, i + 1));
        setI(i + 1);
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [text, speed, i]);
  return displayed;
}

const PARTICLE_COUNT = 200;

const Hero = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number; size: number; vx: number; vy: number }>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 50, y: 50 });
  const animationRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.2,
        size: Math.random() * 4 + 1,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1
      });
    }
    setParticles(newParticles);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Animate particles with mouse interaction
  useEffect(() => {
    let running = true;
    function animate() {
      setParticles(prevParticles =>
        prevParticles.map(p => {
          // Move particle
          let { x, y, vx, vy } = p;
          // Mouse repulsion
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let ax = 0, ay = 0;
          if (dist < 20) {
            // Repel from mouse
            ax = dx / dist * 0.5;
            ay = dy / dist * 0.5;
          } else {
            // Gentle return to original velocity
            ax = (Math.random() - 0.5) * 0.01;
            ay = (Math.random() - 0.5) * 0.01;
          }
          vx += ax * 0.1;
          vy += ay * 0.1;
          // Damping
          vx *= 0.98;
          vy *= 0.98;
          // Move
          x += vx;
          y += vy;
          // Keep in bounds
          if (x < 0) { x = 0; vx *= -1; }
          if (x > 100) { x = 100; vx *= -1; }
          if (y < 0) { y = 0; vy *= -1; }
          if (y > 100) { y = 100; vy *= -1; }
          return { ...p, x, y, vx, vy };
        })
      );
      if (running) animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Mouse move handler
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseRef.current = { x, y };
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ManishKumar771', label: 'GitHub', color: 'hover:text-[#333]' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/manish-kumar-1820852bb', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: Mail, href: 'mailto:manishbissau04@gmail.com', label: 'Email', color: 'hover:text-[#ea4335]' }
  ];

  const skillIcons = [
    { icon: Brain, label: 'AI & Machine Learning', description: 'Neural Networks & Deep Learning' },
    { icon: Database, label: 'Data Science', description: 'Analytics & Visualization' },
    { icon: Terminal, label: 'Linux & DevOps', description: 'System Administration' },
    { icon: Code, label: 'Python Development', description: 'Full-Stack Solutions' }
  ];

  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Brain, value: '∞', label: 'Ready to Learn' },
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Looping typing effect for subtitle
  const subtitle = useLoopingTypingEffect(
    'Silent warrior of code, operating through digital chaos with the precision of ancient craftsmanship',
    30, // typing speed
    1200, // pause after typing
    18, // erase speed
    800 // pause after erasing
  );

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" onMouseMove={handleMouseMove} style={{ scrollBehavior: 'auto' }}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,139,91,0.25),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(166,139,91,0.15)_49%,rgba(166,139,91,0.15)_51%,transparent_52%)]" />
        </div>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-[#a68b5b] rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20">
        {/* Profile Image and Name Side by Side */}
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center justify-center mb-16 w-full gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#a68b5b]/40 shadow-lg backdrop-blur-sm flex-shrink-0">
              <img 
                src="/profile.jpg.jpg" 
                alt="Manish Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Image failed to load:', e.currentTarget.src);
                  e.currentTarget.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-full bg-gradient-to-br from-[#a68b5b] to-[#832c2c] flex items-center justify-center text-white font-bold text-sm';
                  placeholder.textContent = 'MK';
                  e.currentTarget.parentNode?.appendChild(placeholder);
                }}
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight px-4 mt-8">
                <span className="block bg-gradient-to-r from-[#a68b5b] via-[#bfbfbf] to-[#a68b5b] bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  MANISH
                </span>
                <span className="block bg-gradient-to-r from-[#bfbfbf] via-[#a68b5b] to-[#bfbfbf] bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  KUMAR
                </span>
              </h1>
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }} />
            </div>
          </div>

          {/* Typing Effect Subtitle */}
          <div className={`typing-container transition-all duration-1000 delay-300 h-[40px] md:h-[48px] flex items-center justify-center overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <span className="text-lg md:text-xl font-semibold text-[#bfbfbf] px-4 whitespace-nowrap" style={{letterSpacing: '0.01em'}}>
              {subtitle}
              <span className="inline-block w-2 h-5 bg-[#a68b5b] align-middle animate-blink ml-1" style={{verticalAlign: 'middle'}}></span>
            </span>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-4 bg-[#1a1a1a]/80 border border-[#a68b5b]/20 rounded-lg hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#a68b5b]/20"
              >
                <stat.icon className="w-6 h-6 text-[#a68b5b] group-hover:text-[#bfbfbf] transition-colors mb-2 mx-auto" />
                <div className="text-xl font-bold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#918f8f] group-hover:text-[#bfbfbf] transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Skill Icons */}
          <div className={`flex flex-wrap justify-center gap-6 mb-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 bg-[#1a1a1a]/80 border border-[#a68b5b]/20 rounded-lg hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#a68b5b]/20 min-w-[240px]"
              >
                <skill.icon className="w-12 h-12 text-[#a68b5b] group-hover:text-[#bfbfbf] transition-colors mb-3" />
                <span className="block text-base text-[#918f8f] group-hover:text-[#bfbfbf] transition-colors font-medium mb-1">
                  {skill.label}
                </span>
                <span className="block text-xs text-[#666] group-hover:text-[#918f8f] transition-colors">
                  {skill.description}
                </span>
              </div>
            ))}
          </div>

          {/* Enhanced Social Links */}
          <div className={`flex justify-center space-x-12 px-4 mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 bg-[#1a1a1a]/80 border border-[#a68b5b]/30 rounded-full hover:border-[#a68b5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#a68b5b]/20 backdrop-blur-sm ${link.color}`}
                onMouseEnter={() => window.dispatchEvent(new CustomEvent('bubble-burst'))}
              >
                <link.icon className="w-10 h-10 text-[#a68b5b] group-hover:text-[#bfbfbf] transition-colors" />
                <span className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-sm text-[#918f8f] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className={`flex flex-col sm:flex-row justify-center gap-8 px-4 mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => scrollToSection('projects')}
              className="professional-button group flex items-center gap-3 text-lg px-8 py-4"
            >
              View My Work
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="professional-button bg-transparent border border-[#a68b5b] text-[#a68b5b] hover:bg-[#a68b5b] hover:text-[#0d0d0d] group flex items-center gap-3 text-lg px-8 py-4">
              <Download className="w-6 h-6" />
              Download Resume
            </button>
          </div>

          {/* Additional Info Section */}
          <div className={`bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-xl p-8 backdrop-blur-sm max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Digital Warrior's Arsenal</h3>
            <p className="text-lg text-[#bfbfbf] leading-relaxed mb-6">
              Specializing in AI, Machine Learning, and Data Science with expertise in Python, Linux systems, 
              and full-stack development. Every project is crafted with precision and optimized for performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-[#a68b5b]/20 border border-[#a68b5b]/40 rounded-full text-sm text-[#a68b5b] font-medium">
                Python Expert
              </span>
              <span className="px-4 py-2 bg-[#a68b5b]/20 border border-[#a68b5b]/40 rounded-full text-sm text-[#a68b5b] font-medium">
                AI/ML Specialist
              </span>
              <span className="px-4 py-2 bg-[#a68b5b]/20 border border-[#a68b5b]/40 rounded-full text-sm text-[#a68b5b] font-medium">
                Data Scientist
              </span>
              <span className="px-4 py-2 bg-[#a68b5b]/20 border border-[#a68b5b]/40 rounded-full text-sm text-[#a68b5b] font-medium">
                Linux Administrator
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div 
          className="group cursor-pointer transition-all duration-500 hover:scale-110"
          onClick={() => scrollToSection('about')}
        >
          <div className="w-8 h-16 border-2 border-[#a68b5b]/60 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-2 h-6 bg-[#a68b5b] rounded-full mt-2 animate-scroll-indicator" />
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-[#a68b5b]/60 font-medium tracking-wider group-hover:text-[#a68b5b] transition-colors">SCROLL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;