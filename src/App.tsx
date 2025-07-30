import { useEffect } from 'react';
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
    <div className="professional-bg min-h-screen text-[#bfbfbf] relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navigation />
      
      {/* Hero Section - Full Screen */}
      <section id="hero" className="professional-hero">
        <Hero />
      </section>

      {/* About Section - Full Screen */}
      <section id="about" className="section-container">
        <div className="full-width-container">
          <About />
        </div>
      </section>

      {/* Skills Section - Full Screen */}
      <section id="skills" className="section-container">
        <div className="full-width-container">
          <Skills />
        </div>
      </section>

      {/* Projects Section - Full Screen */}
      <section id="projects" className="section-container">
        <div className="full-width-container">
          <Projects />
        </div>
      </section>

      {/* Certifications Section - Full Screen */}
      <section id="certifications" className="section-container">
        <div className="full-width-container">
          <Certifications />
        </div>
      </section>

      {/* Blog Section - Full Screen */}
      <section id="blog" className="section-container">
        <div className="full-width-container">
          <Blog />
        </div>
      </section>

      {/* Contact Section - Full Screen */}
      <section id="contact" className="section-container">
        <div className="full-width-container">
          <Contact />
        </div>
      </section>

    </div>
  );
}

export default App;