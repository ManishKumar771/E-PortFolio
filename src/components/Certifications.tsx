import React from 'react';
import { Award, Calendar, Shield, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Professional",
      description: "Advanced cloud architecture and distributed systems design",
      skills: ["Cloud Architecture", "Scalability", "Security", "Cost Optimization"],
      badge: "🏆"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      level: "Professional",
      description: "Data engineering and machine learning on GCP",
      skills: ["Data Pipelines", "BigQuery", "ML Engineering", "Data Security"],
      badge: "⚡"
    },
    {
      title: "Microsoft Azure AI Engineer",
      issuer: "Microsoft",
      date: "2022",
      level: "Associate",
      description: "AI solution development and deployment on Azure",
      skills: ["Azure AI", "Cognitive Services", "MLOps", "Computer Vision"],
      badge: "🧠"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      level: "Professional",
      description: "Kubernetes cluster administration and management",
      skills: ["Container Orchestration", "Cluster Management", "Networking", "Security"],
      badge: "🚀"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2021",
      level: "Professional",
      description: "Deep learning and neural network development",
      skills: ["Neural Networks", "Computer Vision", "NLP", "Time Series"],
      badge: "🔥"
    },
    {
      title: "Linux Professional Institute Certification",
      issuer: "Linux Professional Institute",
      date: "2021",
      level: "Advanced",
      description: "Advanced Linux system administration and security",
      skills: ["System Administration", "Security", "Automation", "Performance"],
      badge: "🛡️"
    }
  ];

  const achievements = [
    { metric: "6+", label: "Professional Certifications", icon: Award },
    { metric: "4", label: "Cloud Platforms", icon: Shield },
    { metric: "2023", label: "Latest Certification", icon: Calendar },
    { metric: "100%", label: "Pass Rate", icon: Star }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(166,139,91,0.1),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#a68b5b] mb-4 tracking-wider">
            REGISTRY LOG
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8" />
          <p className="text-xl text-[#918f8f] max-w-2xl mx-auto">
            Formal recognition of mastery across the digital battlefield
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-6 text-center hover:border-[#a68b5b]/60 transition-all duration-300 hover:transform hover:scale-105"
            >
              <achievement.icon className="w-8 h-8 text-[#a68b5b] mx-auto mb-3" />
              <div className="text-2xl font-bold text-[#bfbfbf] mb-1">{achievement.metric}</div>
              <div className="text-sm text-[#918f8f]">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg overflow-hidden hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#a68b5b]/10"
            >
              {/* Certificate Header */}
              <div className="p-6 border-b border-[#a68b5b]/20">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{cert.badge}</div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.level === 'Professional' 
                        ? 'bg-[#a68b5b]/20 text-[#a68b5b] border border-[#a68b5b]/40'
                        : cert.level === 'Advanced'
                        ? 'bg-[#832c2c]/20 text-[#832c2c] border border-[#832c2c]/40'
                        : 'bg-[#918f8f]/20 text-[#918f8f] border border-[#918f8f]/40'
                    }`}>
                      {cert.level}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#918f8f] text-sm">{cert.issuer}</span>
                  <span className="text-[#a68b5b] text-sm font-medium">{cert.date}</span>
                </div>
                
                <p className="text-[#bfbfbf] text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Skills Section */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-[#a68b5b] mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-full text-xs text-[#a68b5b] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#a68b5b] to-[#832c2c] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Certification Summary */}
        <div className="mt-16 text-center">
          <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-lg p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Mastery Validated</h3>
            <p className="text-lg text-[#bfbfbf] leading-relaxed">
              Each certification represents not just knowledge acquired, but battles fought and 
              challenges overcome. These credentials stand as testament to unwavering dedication 
              and the relentless pursuit of excellence in the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;