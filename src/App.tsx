import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  useEffect(() => {
    // Set document title
    document.title = 'Manish Kumar - Digital Warrior | AI & Data Science Expert';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manish Kumar - Software Engineer specializing in AI, Data Science, Python, and Linux. Silent warrior of code, forging digital solutions with precision and ancient wisdom.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#bfbfbf] relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;