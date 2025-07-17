import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Direct Transmission",
      value: "manishbissau04@gmail.com",
      description: "Primary communication channel"
    },
    {
      icon: MessageSquare,
      label: "Secure Channel",
      value: "Encrypted messaging available",
      description: "For sensitive communications"
    }
  ];

  const socialChannels = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/manishkumar",
      description: "Code repositories and contributions"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/manishkumar",
      description: "Professional network and updates"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/manishkumar",
      description: "Thoughts and technical insights"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(166,139,91,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#a68b5b] mb-4 tracking-wider">
            SECURE TRANSMISSION INTERFACE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8" />
          <p className="text-xl text-[#918f8f] max-w-2xl mx-auto">
            Establish secure communication channels for collaboration and knowledge exchange
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Initialize Communication</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#bfbfbf] text-sm font-medium mb-2">
                    Operator Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:border-[#a68b5b] focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#bfbfbf] text-sm font-medium mb-2">
                    Transmission ID
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:border-[#a68b5b] focus:outline-none transition-colors"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#bfbfbf] text-sm font-medium mb-2">
                  Mission Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:border-[#a68b5b] focus:outline-none transition-colors"
                  placeholder="Brief description of your inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-[#bfbfbf] text-sm font-medium mb-2">
                  Encrypted Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:border-[#a68b5b] focus:outline-none transition-colors resize-vertical"
                  placeholder="Detailed message content..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-[#a68b5b] to-[#832c2c] rounded-lg text-[#0d0d0d] font-bold hover:from-[#832c2c] hover:to-[#a68b5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#a68b5b]/30 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span>TRANSMIT MESSAGE</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact Methods */}
            <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Direct Channels</h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-[#a68b5b]/20 rounded-lg">
                      <method.icon className="w-6 h-6 text-[#a68b5b]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#bfbfbf] mb-1">
                        {method.label}
                      </h4>
                      <p className="text-[#a68b5b] font-medium mb-1">
                        {method.value}
                      </p>
                      <p className="text-[#918f8f] text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Networks */}
            <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Network Nodes</h3>

              <div className="space-y-4">
                {socialChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-lg hover:border-[#a68b5b] transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="p-2 bg-[#a68b5b]/20 rounded-lg group-hover:bg-[#a68b5b]/30 transition-colors">
                      <channel.icon className="w-5 h-5 text-[#a68b5b]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors">
                        {channel.label}
                      </h4>
                      <p className="text-[#918f8f] text-sm">
                        {channel.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Response Protocol</h3>
              <div className="space-y-4 text-[#bfbfbf]">
                <div className="flex items-center justify-between">
                  <span>Standard Inquiries:</span>
                  <span className="text-[#a68b5b] font-medium">24-48 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Project Collaborations:</span>
                  <span className="text-[#a68b5b] font-medium">1-3 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Emergency Support:</span>
                  <span className="text-[#832c2c] font-medium">Same day</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center">
          <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-lg p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Open for Collaboration</h3>
            <p className="text-lg text-[#bfbfbf] leading-relaxed">
              Whether you're seeking to forge new digital solutions, explore the depths of AI innovation,
              or simply wish to exchange knowledge with a fellow warrior of code, all transmissions are
              welcome. Together, we can build systems that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;