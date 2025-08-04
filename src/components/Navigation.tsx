import { useState, useEffect } from 'react';
import { Download, Menu, X, Home, User, Code, FolderOpen, Award, BookOpen, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Check if scrolled for background effect
      setIsScrolled(window.scrollY > 50);

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
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'Manifest', icon: User },
    { id: 'skills', label: 'Registry', icon: Code },
    { id: 'projects', label: 'Archives', icon: FolderOpen },
    { id: 'certifications', label: 'Ledger', icon: Award },
    { id: 'blog', label: 'Journal', icon: BookOpen },
    { id: 'contact', label: 'Interface', icon: MessageSquare }
  ];

  const downloadResume = () => {
    // Simulate resume download
    const link = document.createElement('a');
    link.href = '/path-to-resume.pdf'; // Replace with actual resume path
    link.download = 'Manish_Kumar_Resume.pdf';
    link.click();
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`professional-nav transition-all duration-300 ${
        isScrolled ? 'bg-[#0d0d0d]/98 shadow-lg' : 'bg-[#0d0d0d]/95'
      }`}>
        <div className="full-width-container">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <span className="text-[#a68b5b] font-bold text-base lg:text-lg tracking-wider hover:text-[#bfbfbf] transition-colors cursor-pointer">
                BANNER OF REALMS
              </span>
              <div className="hidden md:flex space-x-4 lg:space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-all duration-300 group flex items-center space-x-1.5 ${
                      activeSection === item.id
                        ? 'text-[#a68b5b]'
                        : 'text-[#bfbfbf] hover:text-[#a68b5b]'
                    }`}
                  >
                    <item.icon className="w-3 h-3" />
                    <span>{item.label}</span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#a68b5b] transition-all duration-300 ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={downloadResume}
                className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-[#a68b5b]/20 to-[#832c2c]/20 border border-[#a68b5b]/40 rounded-md text-[#a68b5b] hover:from-[#a68b5b]/30 hover:to-[#832c2c]/30 transition-all duration-300 group hover:scale-105"
              >
                <Download className="w-3 h-3 group-hover:animate-bounce" />
                <span className="text-xs font-medium">RESUME SCROLL</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[#bfbfbf] hover:text-[#a68b5b] transition-colors p-2 hover:scale-110"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="fixed inset-0 bg-[#0d0d0d]/98 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#a68b5b] mb-2">Navigation</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto" />
            </div>
            
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-3 text-lg font-medium transition-all duration-300 px-6 py-3 rounded-lg w-full justify-center ${
                  activeSection === item.id
                    ? 'text-[#a68b5b] bg-[#a68b5b]/10 border border-[#a68b5b]/30 scale-105'
                    : 'text-[#bfbfbf] hover:text-[#a68b5b] hover:bg-[#a68b5b]/5 hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
            
            <div className="w-full border-t border-[#a68b5b]/20 pt-6 mt-6">
              <button 
                onClick={downloadResume}
                className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#a68b5b]/20 to-[#832c2c]/20 border border-[#a68b5b]/40 rounded-lg text-[#a68b5b] hover:from-[#a68b5b]/30 hover:to-[#832c2c]/30 transition-all duration-300 w-full justify-center group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span className="font-medium text-base">RESUME SCROLL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;