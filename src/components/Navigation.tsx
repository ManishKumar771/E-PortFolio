import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Manifest' },
    { id: 'skills', label: 'Registry' },
    { id: 'projects', label: 'Archives' },
    { id: 'certifications', label: 'Ledger' },
    { id: 'blog', label: 'Journal' },
    { id: 'contact', label: 'Interface' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0d0d0d]/95 via-[#1a1a1a]/95 to-[#0d0d0d]/95 backdrop-blur-md border-b border-[#a68b5b]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <span className="text-[#a68b5b] font-bold text-lg tracking-wider">BANNER OF REALMS</span>
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'text-[#a68b5b]'
                        : 'text-[#bfbfbf] hover:text-[#a68b5b]'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#a68b5b] transition-all duration-300 ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#a68b5b]/20 to-[#832c2c]/20 border border-[#a68b5b]/40 rounded-md text-[#a68b5b] hover:from-[#a68b5b]/30 hover:to-[#832c2c]/30 transition-all duration-300 group">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm font-medium">CV SCROLL</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[#bfbfbf] hover:text-[#a68b5b] transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#a68b5b] scale-110'
                      : 'text-[#bfbfbf] hover:text-[#a68b5b] hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#a68b5b]/20 to-[#832c2c]/20 border border-[#a68b5b]/40 rounded-md text-[#a68b5b] hover:from-[#a68b5b]/30 hover:to-[#832c2c]/30 transition-all duration-300">
                <Download className="w-5 h-5" />
                <span className="font-medium">CV SCROLL</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;