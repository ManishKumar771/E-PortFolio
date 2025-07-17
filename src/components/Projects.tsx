import React from 'react';
import { ExternalLink, Github, Database, Brain, Terminal, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Neural Prophecy Engine",
      subtitle: "AI-Powered Predictive Analytics",
      description: "A sophisticated machine learning system that analyzes market patterns and predicts future trends with unprecedented accuracy. Built with TensorFlow and deployed on AWS for scalable inference.",
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL", "Redis"],
      icon: Brain,
      status: "Active",
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
      title: "Budget planner",
      subtitle: "ML Linear Regression Model",
      description: "A pure machine learning working linear regression model for budget planning.",
      technologies: ["pandas", "numpy", "scikit-learn"],
      icon: ExternalLink,
      status: "Active",
      features: [
        "Predicts budget based on input data",
        "Easy to use and extend",
        "Open source on GitHub"
      ],
      metrics: {},
      github: "https://github.com/ManishKumar771/modelml"
    },
    {
      id: 6,
      title: "Linked automation bot",
      subtitle: "Automate LinkedIn features",
      description: "Automate every feature in LinkedIn using Python.",
      technologies: ["webbrowser", "requests", "Flask"],
      icon: ExternalLink,
      status: "Active",
      features: [
        "Automates LinkedIn tasks",
        "Uses web automation and APIs",
        "Open source on GitHub"
      ],
      metrics: {},
      github: "https://github.com/ManishKumar771/linkedinpython"
    },
    {
      id: 7,
      title: "Instagram automation bot",
      subtitle: "Automate Instagram tasks",
      description: "Automate nearly every task in Instagram including uploading and liking posts.",
      technologies: ["Instabot", "Python"],
      icon: ExternalLink,
      status: "Active",
      features: [
        "Automates Instagram posts and likes",
        "Requires Instabot library",
        "Open source on GitHub"
      ],
      metrics: {},
      github: "https://github.com/ManishKumar771/instapython"
    },
    {
      id: 8,
      title: "Phone call using python",
      subtitle: "Make phone calls with Python",
      description: "Make phone calls using Python, reducing the use of unwanted applications.",
      technologies: ["OS", "Time", "datetime"],
      icon: ExternalLink,
      status: "Active",
      features: [
        "Initiate phone calls from scripts",
        "Simple and lightweight",
        "Open source on GitHub"
      ],
      metrics: {},
      github: "https://github.com/ManishKumar771/Callpython"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(166,139,91,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#a68b5b] mb-4 tracking-wider">
            ENCRYPTED ARCHIVES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8" />
          <p className="text-xl text-[#918f8f] max-w-2xl mx-auto">
            Digital artifacts forged in the crucible of innovation and battle-tested in production
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg overflow-hidden hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#a68b5b]/10"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-[#a68b5b]/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#a68b5b]/20 rounded-lg group-hover:bg-[#a68b5b]/30 transition-colors">
                      <project.icon className="w-6 h-6 text-[#a68b5b]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#918f8f] text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Active'
                      ? 'bg-[#a68b5b]/20 text-[#a68b5b] border border-[#a68b5b]/40'
                      : project.status === 'Production'
                        ? 'bg-green-900/20 text-green-400 border border-green-400/40'
                        : 'bg-[#832c2c]/20 text-[#832c2c] border border-[#832c2c]/40'
                      }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-[#bfbfbf] leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-full text-xs text-[#a68b5b] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Metrics */}
              <div className="p-6 border-b border-[#a68b5b]/20">
                <h4 className="text-lg font-semibold text-[#a68b5b] mb-4">Battle Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-[#bfbfbf]">{value}</div>
                      <div className="text-xs text-[#918f8f] capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Features */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#a68b5b] mb-4">Core Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-[#a68b5b] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#bfbfbf] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Actions */}
              <div className="p-6 pt-0">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-[#a68b5b]/20 border border-[#a68b5b]/40 rounded-lg text-[#a68b5b] hover:bg-[#a68b5b]/30 transition-all duration-300 group">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Source</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-[#832c2c]/20 border border-[#832c2c]/40 rounded-lg text-[#832c2c] hover:bg-[#832c2c]/30 transition-all duration-300 group">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Deploy</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#a68b5b] to-[#832c2c] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Archive Footer */}
        <div className="mt-16 text-center">
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