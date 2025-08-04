import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Database, Brain, Terminal, Zap, Filter, Play, Code2 } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Neural Prophecy Engine",
      subtitle: "AI-Powered Predictive Analytics",
      description: "A sophisticated machine learning system that analyzes market patterns and predicts future trends with unprecedented accuracy. Built with TensorFlow and deployed on AWS for scalable inference.",
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
      icon: Brain,
      status: "Active",
      category: "ai-ml",
      demoUrl: "https://demo.neuralprophecy.com",
      githubUrl: "https://github.com/ManishKumar771/neural-prophecy",
      metrics: {
        accuracy: "94.2%",
        processing: "10k+ req/day",
        latency: "< 100ms"
      },
      features: [
        "Real-time data processing pipeline",
        "Advanced neural network architectures",
        "Automated model retraining",
        "Comprehensive monitoring dashboard"
      ]
    },
    {
      id: 2,
      title: "DataForge Pipeline",
      subtitle: "Distributed Data Processing",
      description: "A robust ETL pipeline that processes terabytes of data daily, transforming raw information into actionable insights. Handles complex data transformations with fault tolerance and monitoring.",
      technologies: ["Python", "Apache Spark", "Docker", "Kubernetes", "MongoDB"],
      icon: Database,
      status: "Production",
      category: "data-science",
      demoUrl: "https://dataforge-demo.com",
      githubUrl: "https://github.com/ManishKumar771/dataforge",
      metrics: {
        throughput: "5TB/day",
        uptime: "99.9%",
        efficiency: "87%"
      },
      features: [
        "Distributed processing architecture",
        "Real-time data validation",
        "Automated error recovery",
        "Performance optimization"
      ]
    },
    {
      id: 3,
      title: "Command Center OS",
      subtitle: "Linux System Automation",
      description: "A comprehensive system administration toolkit that automates deployment, monitoring, and maintenance of Linux servers. Features custom scripts and monitoring dashboards.",
      technologies: ["Python", "Bash", "Linux", "Docker", "Prometheus"],
      icon: Terminal,
      status: "Maintained",
      category: "devops",
      demoUrl: "https://command-center-demo.com",
      githubUrl: "https://github.com/ManishKumar771/command-center",
      metrics: {
        servers: "500+",
        automation: "95%",
        incidents: "-75%"
      },
      features: [
        "Automated server provisioning",
        "Custom monitoring solutions",
        "Security compliance checks",
        "Performance optimization tools"
      ]
    },
    {
      id: 4,
      title: "Quantum Insight API",
      subtitle: "High-Performance Analytics",
      description: "A lightning-fast API that serves complex analytical queries across massive datasets. Optimized for sub-second response times with intelligent caching strategies.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Nginx"],
      icon: Zap,
      status: "Scaling",
      category: "web-dev",
      demoUrl: "https://quantum-insight-api.com",
      githubUrl: "https://github.com/ManishKumar771/quantum-insight",
      metrics: {
        queries: "100k+ daily",
        response: "< 50ms",
        availability: "99.95%"
      },
      features: [
        "Advanced query optimization",
        "Intelligent caching layer",
        "Real-time analytics",
        "Horizontal scaling support"
      ]
    },
    {
      id: 5,
      title: "Budget Planner",
      subtitle: "ML Linear Regression Model",
      description: "A pure machine learning working linear regression model for budget planning with intuitive interface and accurate predictions.",
      technologies: ["pandas", "numpy", "scikit-learn", "Flask", "HTML/CSS"],
      icon: Code2,
      status: "Active",
      category: "ai-ml",
      demoUrl: "https://budget-planner-demo.com",
      githubUrl: "https://github.com/ManishKumar771/modelml",
      metrics: {
        accuracy: "92%",
        users: "1k+",
        predictions: "5k+"
      },
      features: [
        "Predicts budget based on input data",
        "Easy to use and extend",
        "Open source on GitHub",
        "Web interface included"
      ]
    },
    {
      id: 6,
      title: "LinkedIn Automation Bot",
      subtitle: "Automate LinkedIn Features",
      description: "Comprehensive automation solution for LinkedIn tasks including connection requests, messaging, and profile optimization.",
      technologies: ["Python", "Selenium", "requests", "Flask", "SQLite"],
      icon: ExternalLink,
      status: "Active",
      category: "automation",
      demoUrl: "https://linkedin-bot-demo.com",
      githubUrl: "https://github.com/ManishKumar771/linkedinpython",
      metrics: {
        connections: "500+",
        messages: "2k+",
        efficiency: "85%"
      },
      features: [
        "Automates LinkedIn tasks",
        "Uses web automation and APIs",
        "Open source on GitHub",
        "Configurable automation rules"
      ]
    },
    {
      id: 7,
      title: "Instagram Automation Bot",
      subtitle: "Automate Instagram Tasks",
      description: "Advanced Instagram automation tool for posting, liking, following, and engagement optimization with safety features.",
      technologies: ["Python", "Instabot", "Pillow", "SQLite", "Schedule"],
      icon: ExternalLink,
      status: "Active",
      category: "automation",
      demoUrl: "https://instagram-bot-demo.com",
      githubUrl: "https://github.com/ManishKumar771/instapython",
      metrics: {
        posts: "1k+",
        followers: "10k+",
        engagement: "12%"
      },
      features: [
        "Automates Instagram posts and likes",
        "Requires Instabot library",
        "Open source on GitHub",
        "Safety rate limiting included"
      ]
    },
    {
      id: 8,
      title: "Phone Call Automation",
      subtitle: "Make Phone Calls with Python",
      description: "Innovative solution for making phone calls using Python, reducing dependency on external applications.",
      technologies: ["Python", "OS", "Time", "datetime", "subprocess"],
      icon: ExternalLink,
      status: "Active",
      category: "automation",
      demoUrl: "https://phone-call-demo.com",
      githubUrl: "https://github.com/ManishKumar771/Callpython",
      metrics: {
        calls: "100+",
        success: "98%",
        efficiency: "90%"
      },
      features: [
        "Initiate phone calls from scripts",
        "Simple and lightweight",
        "Open source on GitHub",
        "Cross-platform compatibility"
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'ai-ml', label: 'AI & ML', icon: Brain },
    { id: 'data-science', label: 'Data Science', icon: Database },
    { id: 'web-dev', label: 'Web Development', icon: Code2 },
    { id: 'devops', label: 'DevOps', icon: Terminal },
    { id: 'automation', label: 'Automation', icon: Zap }
  ];

  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter);
    setFilteredProjects(filtered);
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(166,139,91,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#a68b5b] mb-3 tracking-wider">
            ENCRYPTED ARCHIVES
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-6" />
          <p className="text-lg text-[#918f8f] max-w-2xl mx-auto">
            Digital artifacts forged in the crucible of innovation and battle-tested in production
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#a68b5b]/20 border-[#a68b5b] text-[#a68b5b]'
                  : 'bg-[#1a1a1a]/50 border-[#a68b5b]/30 text-[#918f8f] hover:border-[#a68b5b]/60 hover:text-[#bfbfbf]'
              }`}
            >
              <filter.icon className="w-3 h-3" />
              <span className="text-xs font-medium">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg overflow-hidden hover:border-[#a68b5b]/60 transition-all duration-500 hover:scale-[1.02] shadow-lg flex flex-col"
              style={{ animationDelay: `${index * 100}ms`, minHeight: '320px', padding: '1.5rem', boxShadow: '0 4px 20px 0 rgba(166,139,91,0.05)' }}
            >
              {/* Project Header */}
              <div className="pb-4 border-b border-[#a68b5b]/20">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-[#a68b5b]/20 rounded-md group-hover:bg-[#a68b5b]/30 transition-colors">
                      <project.icon className="w-5 h-5 text-[#a68b5b]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#918f8f] text-xs">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                    project.status === 'Active'
                      ? 'bg-[#a68b5b]/20 text-[#a68b5b] border border-[#a68b5b]/40'
                      : project.status === 'Production'
                        ? 'bg-green-900/20 text-green-400 border border-green-400/40'
                        : 'bg-[#832c2c]/20 text-[#832c2c] border border-[#832c2c]/40'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-[#bfbfbf] text-sm leading-relaxed mb-3 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-md text-xs text-[#a68b5b] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-md text-xs text-[#a68b5b] font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Metrics */}
              {Object.keys(project.metrics).length > 0 && (
                <div className="py-3 border-b border-[#a68b5b]/20">
                  <h4 className="text-sm font-bold text-[#a68b5b] mb-3">Metrics</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-[#bfbfbf]">{String(value)}</div>
                        <div className="text-xs text-[#918f8f] capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Features */}
              <div className="py-3 flex-1 flex flex-col justify-between">
                <h4 className="text-sm font-bold text-[#a68b5b] mb-3">Features</h4>
                <ul className="space-y-1.5">
                  {project.features.slice(0, 3).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#a68b5b] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[#bfbfbf] text-xs">{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-xs text-[#918f8f] italic">
                      +{project.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Project Actions */}
              <div className="pt-3 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#a68b5b]/20 border border-[#a68b5b]/40 rounded-md text-[#a68b5b] hover:bg-[#a68b5b]/30 transition-all duration-300 group"
                    >
                      <Github className="w-3 h-3" />
                      <span className="text-xs font-medium">Source</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#832c2c]/20 border border-[#832c2c]/40 rounded-md text-[#832c2c] hover:bg-[#832c2c]/30 transition-all duration-300 group"
                    >
                      <Play className="w-3 h-3" />
                      <span className="text-xs font-medium">Demo</span>
                    </a>
                  )}
                  <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#1a1a1a]/50 border border-[#918f8f]/30 rounded-md text-[#918f8f] hover:border-[#a68b5b]/40 hover:text-[#a68b5b] transition-all duration-300 group">
                    <ExternalLink className="w-3 h-3" />
                    <span className="text-xs font-medium">Details</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#a68b5b] to-[#832c2c] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Archive Footer */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-lg p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Archive Status</h3>
            <p className="text-lg text-[#bfbfbf] leading-relaxed">
              These projects represent the culmination of technical mastery and strategic thinking.
              Each solution has been battle-tested in production environments, serving millions of
              requests and processing vast amounts of data with unwavering reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;