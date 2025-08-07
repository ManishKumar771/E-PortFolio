import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Copy } from 'lucide-react';

// Looping typing effect hook (same as in Hero/About/Blog)
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

const mainText =
  'These journal entries represent more than technical documentation—they are philosophical explorations of the intersection between code and consciousness. Each piece challenges the reader to think beyond syntax and algorithms, to find meaning in the craft of creation.';

const warriorLine =
  'A true digital warrior forges meaning, not just solutions.';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Direct Transmission",
      value: "manishbissau04@gmail.com",
      description: "Primary communication channel",
      action: () => copyToClipboard("manishbissau04@gmail.com", "email")
    },
    {
      icon: MessageSquare,
      label: "Secure Channel",
      value: "Encrypted messaging available",
      description: "For sensitive communications",
      action: () => window.open("mailto:manishbissau04@gmail.com", "_blank")
    }
  ];

  const socialChannels = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ManishKumar771",
      description: "Code repositories and contributions",
      color: "hover:text-[#333]"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/manish-kumar-1820852bb",
      description: "Professional network and updates",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/manishxsirswa?igsh=dHRlbGgyMmJrcWZ5",
      description: "Connect and get in touch",
      color: "hover:text-[#e4405f]"
    }
  ];

  const typedMain = useLoopingTypingEffect(mainText, 50);
  const typedWarrior = useLoopingTypingEffect(warriorLine, 50);

  return (
    <section id="contact" className="py-6 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(166,139,91,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-2 lg:px-4 relative z-10">
        {/* Warrior Style Heading */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-[#a68b5b] drop-shadow-lg" style={{letterSpacing: '0.08em'}}>
            Quick Contact Links
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mt-2 mb-2 rounded-full" />
        </div>
        <div className={`grid lg:grid-cols-2 gap-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Contact Form */}
          <div>
            <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-3 hover-lift mb-2">
              <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Initialize Communication</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-[#bfbfbf] mb-2">Message Transmitted!</h4>
                  <p className="text-[#918f8f]">Thank you for reaching out. I'll respond within 24-48 hours.</p>
                </div>
              ) : (
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
                        className={`w-full px-2 py-2 bg-[#0d0d0d] border rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-[#a68b5b]/30 focus:border-[#a68b5b]'
                        }`}
                        placeholder="Enter your name"
                        required
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.name}
                        </p>
                      )}
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
                        className={`w-full px-2 py-2 bg-[#0d0d0d] border rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-[#a68b5b]/30 focus:border-[#a68b5b]'
                        }`}
                        placeholder="your.email@domain.com"
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
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
                      className={`w-full px-2 py-2 bg-[#0d0d0d] border rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500' : 'border-[#a68b5b]/30 focus:border-[#a68b5b]'
                      }`}
                      placeholder="Brief description of your inquiry"
                      required
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
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
                      className={`w-full px-2 py-2 bg-[#0d0d0d] border rounded-lg text-[#bfbfbf] placeholder-[#918f8f] focus:outline-none transition-colors resize-vertical ${
                        errors.message ? 'border-red-500' : 'border-[#a68b5b]/30 focus:border-[#a68b5b]'
                      }`}
                      placeholder="Detailed message content..."
                      required
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-bold transition-all duration-300 group ${
                      isSubmitting
                        ? 'bg-[#918f8f] text-[#0d0d0d] cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#a68b5b] to-[#832c2c] text-[#0d0d0d] hover:from-[#832c2c] hover:to-[#a68b5b] hover:shadow-lg hover:shadow-[#a68b5b]/30'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0d0d0d] border-t-transparent rounded-full animate-spin" />
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>TRANSMIT MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            {/* Digital Codex below the form card */}
            <div className="w-full flex justify-center py-2">
              <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-xl p-3 max-w-3xl w-full text-center">
                <h2 className="text-xl font-bold text-[#a68b5b] mb-2">Digital Codex</h2>
                <div className="min-h-[2.5em]">
                  <span className="text-[#bfbfbf] text-sm md:text-base leading-relaxed">
                    {typedMain}
                    <span className="inline-block w-2 h-5 bg-[#a68b5b] align-middle animate-blink ml-1" style={{verticalAlign: 'middle'}}></span>
                  </span>
                </div>
                <div className="mt-2 min-h-[1.2em]">
                  <span className="text-[#a68b5b] text-base italic font-medium">
                    {typedWarrior}
                    <span className="inline-block w-2 h-5 bg-[#a68b5b] align-middle animate-blink ml-1" style={{verticalAlign: 'middle'}}></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Contact Information */}
          <div className="space-y-3">
            {/* Direct Channels */}
            <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-3 hover-lift">
              <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Direct Channels</h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-lg hover:border-[#a68b5b] transition-all duration-300">
                    <div className="p-3 bg-[#a68b5b]/20 rounded-lg group-hover:bg-[#a68b5b]/30 transition-colors">
                      <method.icon className="w-6 h-6 text-[#a68b5b]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#bfbfbf] mb-1">
                        {method.label}
                      </h4>
                      <p className="text-[#a68b5b] font-medium mb-1">
                        {method.value}
                      </p>
                      <p className="text-[#918f8f] text-sm mb-3">
                        {method.description}
                      </p>
                      <button
                        onClick={method.action}
                        onMouseEnter={() => window.dispatchEvent(new CustomEvent('bubble-burst'))}
                        className="flex items-center space-x-2 text-sm text-[#a68b5b] hover:text-[#bfbfbf] transition-colors"
                      >
                        {copiedField === "email" ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy email</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Networks */}
            <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-3 hover-lift">
              <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Network Nodes</h3>

              <div className="space-y-4">
                {socialChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-4 p-4 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-lg hover:border-[#a68b5b] transition-all duration-300 hover:transform hover:scale-105 ${channel.color}`}
                    onMouseEnter={() => window.dispatchEvent(new CustomEvent('bubble-burst'))}
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

            {/* Response Protocol */}
            <div className="bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-3 hover-lift">
              <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Response Protocol</h3>
              <div className="space-y-4 text-[#bfbfbf]">
                <div className="flex items-center justify-between p-3 bg-[#0d0d0d] rounded-lg">
                  <span>Standard Inquiries:</span>
                  <span className="text-[#a68b5b] font-medium">24-48 hours</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#0d0d0d] rounded-lg">
                  <span>Project Collaborations:</span>
                  <span className="text-[#a68b5b] font-medium">1-3 days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#0d0d0d] rounded-lg">
                  <span>Emergency Support:</span>
                  <span className="text-[#832c2c] font-medium">Same day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Open for Collaboration - compact margin */}
        <div className="mt-4 text-center">
          <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-lg p-4 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-2">Open for Collaboration</h3>
            <p className="text-base text-[#bfbfbf] leading-relaxed">
              Whether you're seeking to forge new digital solutions, explore the depths of AI innovation, or simply wish to exchange knowledge with a fellow warrior of code, all transmissions are welcome. Together, we can build systems that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;