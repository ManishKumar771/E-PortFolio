import React from 'react';
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Entropy of Code",
      subtitle: "Understanding Complexity in Modern Systems",
      excerpt: "In the digital wilderness, entropy is not just a concept—it's a living force that shapes every line of code we write. This exploration delves into the philosophical implications of software entropy and how ancient wisdom can guide modern architecture.",
      date: "2023-12-15",
      readTime: "8 min",
      category: "Philosophy",
      tags: ["Architecture", "Philosophy", "Systems"],
      status: "Featured"
    },
    {
      title: "Debugging the Soul",
      subtitle: "A Developer's Journey Through Technical Meditation",
      excerpt: "Every bug is a teacher, every error a lesson in humility. This introspective piece examines the meditative aspects of debugging and how the pursuit of clean code mirrors the pursuit of inner clarity.",
      date: "2023-11-28",
      readTime: "12 min",
      category: "Reflection",
      tags: ["Debugging", "Mindfulness", "Growth"],
      status: "Popular"
    },
    {
      title: "CI/CD: Code is War",
      subtitle: "Strategic Deployment in the Digital Battlefield",
      excerpt: "Continuous integration and deployment isn't just about automation—it's about strategy, discipline, and the warrior's mindset applied to software delivery. Learn how ancient military tactics inform modern DevOps practices.",
      date: "2023-11-10",
      readTime: "10 min",
      category: "DevOps",
      tags: ["CI/CD", "Strategy", "Automation"],
      status: "Technical"
    },
    {
      title: "Neural Networks: The Digital Unconscious",
      subtitle: "Machine Learning as Digital Psychology",
      excerpt: "Deep learning models mirror the human unconscious in fascinating ways. This exploration examines the psychological parallels between neural networks and the human mind, revealing insights for better AI design.",
      date: "2023-10-22",
      readTime: "15 min",
      category: "AI/ML",
      tags: ["Neural Networks", "Psychology", "AI"],
      status: "Deep Dive"
    },
    {
      title: "The Stoic Programmer",
      subtitle: "Ancient Philosophy for Modern Development",
      excerpt: "Marcus Aurelius would have made an excellent software architect. This piece explores how Stoic principles can guide developers through the chaos of modern software development, finding peace in the storm of deadlines and bugs.",
      date: "2023-10-05",
      readTime: "9 min",
      category: "Philosophy",
      tags: ["Stoicism", "Productivity", "Mindset"],
      status: "Wisdom"
    },
    {
      title: "Database Samurai",
      subtitle: "The Art of Query Optimization",
      excerpt: "Query optimization is more than performance tuning—it's a martial art. This technical deep-dive explores advanced database techniques through the lens of samurai discipline and precision.",
      date: "2023-09-18",
      readTime: "11 min",
      category: "Database",
      tags: ["SQL", "Performance", "Optimization"],
      status: "Technical"
    }
  ];

  const categories = ["All", "Philosophy", "Technical", "AI/ML", "DevOps", "Database"];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_40%,rgba(166,139,91,0.05)_50%,transparent_60%)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#a68b5b] mb-4 tracking-wider">
            ENCRYPTED JOURNAL ENTRIES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#a68b5b] to-transparent mx-auto mb-8" />
          <p className="text-xl text-[#918f8f] max-w-2xl mx-auto">
            Decoded thoughts from the digital battlefield—where code meets consciousness
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg text-[#bfbfbf] hover:border-[#a68b5b]/60 hover:text-[#a68b5b] transition-all duration-300 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-[#1a1a1a] border border-[#a68b5b]/40 rounded-lg overflow-hidden hover:border-[#a68b5b]/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#a68b5b]/10">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="px-4 py-2 bg-[#a68b5b]/20 border border-[#a68b5b]/40 rounded-full text-[#a68b5b] text-sm font-medium">
                  Featured Entry
                </span>
                <div className="flex items-center space-x-4 text-[#918f8f] text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Dec 15, 2023</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-[#bfbfbf] mb-2 hover:text-[#a68b5b] transition-colors cursor-pointer">
                The Entropy of Code
              </h3>
              <p className="text-[#a68b5b] text-lg mb-4">Understanding Complexity in Modern Systems</p>
              
              <p className="text-[#bfbfbf] leading-relaxed mb-6">
                In the digital wilderness, entropy is not just a concept—it's a living force that shapes every line of code we write. This exploration delves into the philosophical implications of software entropy and how ancient wisdom can guide modern architecture.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {["Architecture", "Philosophy", "Systems"].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-full text-xs text-[#a68b5b] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center space-x-2 text-[#a68b5b] hover:text-[#bfbfbf] transition-colors group">
                  <span className="font-medium">Read Entry</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] border border-[#a68b5b]/20 rounded-lg overflow-hidden hover:border-[#a68b5b]/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#a68b5b]/10"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.status === 'Popular' 
                      ? 'bg-[#a68b5b]/20 text-[#a68b5b] border border-[#a68b5b]/40'
                      : post.status === 'Technical'
                      ? 'bg-[#832c2c]/20 text-[#832c2c] border border-[#832c2c]/40'
                      : 'bg-[#918f8f]/20 text-[#918f8f] border border-[#918f8f]/40'
                  }`}>
                    {post.status}
                  </span>
                  <FileText className="w-5 h-5 text-[#a68b5b] opacity-60" />
                </div>

                <h3 className="text-xl font-bold text-[#bfbfbf] group-hover:text-[#a68b5b] transition-colors mb-2 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-[#a68b5b] text-sm mb-3">{post.subtitle}</p>
                
                <p className="text-[#bfbfbf] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-[#918f8f] text-xs mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span className="text-[#a68b5b] text-xs font-medium">{post.category}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-[#0d0d0d] border border-[#a68b5b]/30 rounded-full text-xs text-[#a68b5b] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center space-x-2 text-[#a68b5b] hover:text-[#bfbfbf] transition-colors group">
                  <span className="text-sm font-medium">Decrypt</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#a68b5b] to-[#832c2c] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Journal Summary */}
        <div className="mt-16 text-center">
          <div className="bg-[#1a1a1a]/50 border border-[#a68b5b]/20 rounded-lg p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#a68b5b] mb-4">Digital Codex</h3>
            <p className="text-lg text-[#bfbfbf] leading-relaxed">
              These journal entries represent more than technical documentation—they are philosophical 
              explorations of the intersection between code and consciousness. Each piece challenges 
              the reader to think beyond syntax and algorithms, to find meaning in the craft of creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;