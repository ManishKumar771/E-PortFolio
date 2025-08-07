import { useEffect, useState } from 'react';
import { Code, Database, Brain, Terminal, Shield, Zap, Award, Clock, Users, Target, CheckCircle } from 'lucide-react';

// Looping typing effect hook (same as in Hero)
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

const About = () => {
  const expertise = [
    { icon: Code, title: 'Python Mastery', description: 'Forging digital solutions with precision and elegance' },
    { icon: Database, title: 'Data Architectures', description: 'Building robust foundations for information warfare' },
    { icon: Terminal, title: 'Linux Systems', description: 'Command line warrior, system architect' },
    { icon: Brain, title: 'AI & ML', description: 'Crafting intelligent systems that learn and adapt' },
    { icon: Shield, title: 'Data Science', description: 'Extracting wisdom from the chaos of information' },
    { icon: Zap, title: 'Performance', description: 'Optimizing systems for maximum efficiency' }
  ];

  const achievements = [
    { icon: Award, title: '50+ Projects', description: 'Successfully delivered across various domains' },
    { icon: Clock, title: '3+ Years', description: 'Professional experience in software development' },
    { icon: Users, title: '100+ Clients', description: 'Satisfied customers worldwide' },
    { icon: Target, title: '99% Success', description: 'Project completion rate' }
  ];

  const values = [
    { icon: CheckCircle, title: 'Quality First', description: 'Every line of code meets the highest standards' },
    { icon: CheckCircle, title: 'Innovation', description: 'Constantly exploring new technologies and approaches' },
    { icon: CheckCircle, title: 'Reliability', description: 'Delivering on time, every time' },
    { icon: CheckCircle, title: 'Collaboration', description: 'Working seamlessly with teams and clients' }
  ];

  const quote = useLoopingTypingEffect(
    '"In the realm of code, as in life, true mastery comes not from the power to create, but from the wisdom to know what should be created."',
    24, // typing speed
    1800, // pause after typing
    12, // erase speed
    900 // pause after erasing
  );

  // Timeline data without years
  const journey = [
    {
      title: 'The Beginning',
      subtitle: 'Started the journey into Python development and AI',
      description: 'First steps into the digital realm, learning the fundamentals of programming and machine learning.'
    },
    {
      title: 'Deep Learning',
      subtitle: 'Mastered neural networks and data science',
      description: 'Advanced into the depths of AI, working with TensorFlow, PyTorch, and complex data pipelines.'
    },
    {
      title: 'System Mastery',
      subtitle: 'Linux administration and DevOps expertise',
      description: 'Expanded into system administration, automation, and deployment strategies.'
    },
    {
      title: 'Full Stack Warrior',
      subtitle: 'Complete digital solution architect',
      description: 'Now crafting end-to-end solutions, from AI models to production-ready applications.'
    }
  ];

  return (
    <div className="w-full py-20">
      <div className="text-center mb-20">
        <h2 className="professional-heading text-[#a68b5b] mb-8 tracking-wider">
          OPERATOR MANIFEST
        </h2>
        <div className="w-32 h-2 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-12" />
        <p className="text-xl text-[#918f8f] max-w-3xl mx-auto">
          Unveiling the digital warrior behind the code - a journey through expertise, achievements, and philosophy
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
        {/* Manifesto Text */}
        <div className="space-y-8">
          <div className="professional-card">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Digital Warrior's Creed</h3>
            <p className="professional-subheading text-[#bfbfbf] leading-relaxed mb-8">
              In the vast digital wilderness, I am a silent architect of intelligent systems. 
              Each line of code is forged with the precision of ancient craftsmanship, 
              every algorithm tempered by the fires of countless iterations.
            </p>
            <p className="professional-subheading text-[#bfbfbf] leading-relaxed mb-8">
              My journey through the realms of <span className="text-[#a68b5b] font-semibold">Artificial Intelligence</span> and 
              <span className="text-[#a68b5b] font-semibold"> Data Science</span> is marked by the pursuit of elegance 
              within complexity. Like a warrior who understands that true strength comes from restraint, 
              I build systems that are both powerful and refined.
            </p>
            <p className="professional-subheading text-[#bfbfbf] leading-relaxed">
              From the command lines of <span className="text-[#a68b5b] font-semibold">Linux</span> to the neural networks 
              that learn and adapt, I navigate the digital landscape with the wisdom of experience and 
              the hunger for continuous growth.
            </p>
          </div>

          {/* Values Section */}
          <div className="professional-card">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <value.icon className="w-5 h-5 text-[#a68b5b] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-[#bfbfbf] font-semibold mb-1">{value.title}</h4>
                    <p className="text-[#918f8f] text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="space-y-8">
          <div className="professional-card">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-6">Technical Arsenal</h3>
            <div className="grid grid-cols-1 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 bg-[#0d0d0d] border border-[#a68b5b]/20 rounded-lg hover:border-[#a68b5b]/60 transition-all duration-300"
                >
                  <div className="p-3 bg-[#a68b5b]/20 rounded-xl group-hover:bg-[#a68b5b]/30 transition-colors">
                    <item.icon className="w-8 h-8 text-[#a68b5b]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#918f8f] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#a68b5b] mb-4">Battle Achievements</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-xl hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105"
            >
              <achievement.icon className="w-12 h-12 text-[#a68b5b] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#bfbfbf] mb-2">{achievement.title}</div>
              <div className="text-[#918f8f]">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#a68b5b] mb-4">Digital Journey</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto" />
        </div>
        <div className="space-y-12">
          {journey.map((step, idx) => (
            <div className="flex items-center" key={idx}>
              <div className="w-6 h-6 bg-[#a68b5b] rounded-full z-10"></div>
              <div className="ml-8 bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg p-6 flex-1">
                <h4 className="text-xl font-bold text-[#a68b5b] mb-2">{step.title}</h4>
                <p className="text-[#bfbfbf] mb-2">{step.subtitle}</p>
                <p className="text-[#918f8f] text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Quote */}
      <div className="text-center">
        <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-xl p-12 backdrop-blur-sm max-w-5xl mx-auto">
          <blockquote className="text-3xl lg:text-4xl text-[#a68b5b] font-medium italic mb-6 leading-relaxed min-h-[3.5em]">
            {quote}
            <span className="inline-block w-2 h-8 bg-[#a68b5b] align-middle animate-blink ml-1" style={{verticalAlign: 'middle'}}></span>
          </blockquote>
          <div className="text-xl text-[#918f8f]">— Digital Warrior's Creed</div>
        </div>
      </div>
    </div>
  );
};

export default About;