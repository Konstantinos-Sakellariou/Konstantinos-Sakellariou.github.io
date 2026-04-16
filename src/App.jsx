import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Mail, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
 
const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [ballPos, setBallPos] = useState({ x: 0, y: 0 });
 
  // Subtle basketball animation
  useEffect(() => {
    const interval = setInterval(() => {
      setBallPos({
        x: Math.sin(Date.now() / 3000) * 30,
        y: Math.cos(Date.now() / 2500) * 20
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
 
  const projects = [
    {
      title: "NBA Fantasy Analytics Dashboard",
      description: "Comprehensive stats scraping, EDA, and predictive modeling for NBA fantasy sports",
      tech: ["Python", "Pandas", "Scikit-learn"],
      link: "https://github.com/Konstantinos-Sakellariou/NBA_Fantasy",
      highlight: true
    },
    {
      title: "Agentic Emailing System",
      description: "Autonomous AI-powered emailing workflows using Claude and OpenAI agents",
      tech: ["Python", "Claude API", "OpenAI"],
      link: "https://github.com/Konstantinos-Sakellariou/agenic_emailing_system"
    },
    {
      title: "Plant Health Detection CNN",
      description: "Deep learning with TensorFlow + interactive Tkinter GUI for plant classification",
      tech: ["TensorFlow", "Python", "Tkinter"],
      link: "https://github.com/Konstantinos-Sakellariou/Detecting-healthy-plants-CNN-and-GUI-framework-with-Tkinter"
    },
    {
      title: "Hotel Recommendation System",
      description: "Expedia competition: Collaborative filtering and advanced ML for user preferences",
      tech: ["ML", "Jupyter", "Feature Engineering"],
      link: "https://github.com/Konstantinos-Sakellariou/Recommender-system-Expedia-competition"
    },
    {
      title: "No Data Science App",
      description: "Democratizing ML: create models and exploratory reports without coding",
      tech: ["Python", "Web Framework", "ML Automation"],
      link: "https://github.com/Konstantinos-Sakellariou/nodatascienceapp"
    },
    {
      title: "Claude Code Team Kit",
      description: "Optimized tooling and workflows for agentic AI development",
      tech: ["Shell", "Claude Code", "Automation"],
      link: "https://github.com/Konstantinos-Sakellariou/claude-team-kit"
    }
  ];
 
  const backlogItems = [
    "Advanced sports betting models with ML",
    "Multi-agent orchestration systems",
    "Real-time analytics dashboards",
    "LLM fine-tuning experiments",
    "Neural network architecture exploration"
  ];
 
  const skills = [
    { category: "Languages", items: ["Python", "R", "SQL", "Shell"] },
    { category: "ML/AI", items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Claude API"] },
    { category: "Tools", items: ["PostgreSQL", "AWS", "Docker", "Git", "Jupyter"] }
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>
 
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            KS
          </h1>
          
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'projects', 'backlog', 'contact'].map(item => (
              <a
                key={item}
                onClick={() => setActiveSection(item)}
                className="text-sm uppercase tracking-widest hover:text-cyan-400 transition cursor-pointer relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
 
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
 
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-4">
            {['home', 'projects', 'backlog', 'contact'].map(item => (
              <a
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setMobileMenuOpen(false);
                }}
                className="block text-sm uppercase tracking-widest hover:text-cyan-400 transition cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
 
      {/* Main content */}
      <main className="relative pt-20">
        
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl text-center space-y-8 animate-fade-in">
              {/* Basketball animation */}
              <div className="relative h-32 flex justify-center items-center mb-8">
                <div
                  className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg shadow-orange-500/50 transition-transform duration-75"
                  style={{
                    transform: `translate(${ballPos.x}px, ${ballPos.y}px)`,
                  }}
                ></div>
              </div>
 
              <div>
                <h2 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-slow">
                  Kostas Sakellariou
                </h2>
                <p className="text-xl text-slate-400 mb-2">Data Analytics Lead | ML Engineer | AI Explorer</p>
                <p className="text-sm text-slate-500">iGaming | Sports Analytics | Agentic Systems</p>
              </div>
 
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Building intelligent systems at the intersection of data science and AI. 
                Passionate about machine learning, sports analytics, and the future of autonomous agents.
              </p>
 
              <div className="flex justify-center gap-6 pt-4">
                <a
                  href="#projects"
                  onClick={() => setActiveSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition cursor-pointer"
                >
                  View Work
                </a>
                <a
                  href="https://github.com/Konstantinos-Sakellariou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-slate-600 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>
              </div>
 
              <div className="pt-12 animate-bounce">
                <ChevronDown className="mx-auto text-cyan-400" size={28} />
              </div>
            </div>
          </section>
        )}
 
        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Featured Projects
            </h3>
 
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`group relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                    project.highlight
                      ? 'border-cyan-500/50 bg-slate-800/50 hover:border-cyan-400 hover:shadow-cyan-500/20'
                      : 'border-slate-700/50 bg-slate-800/30 hover:border-violet-500 hover:shadow-violet-500/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold group-hover:text-cyan-400 transition">
                      {project.title}
                    </h4>
                    <ExternalLink
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition text-cyan-400"
                    />
                  </div>
 
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
 
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-slate-700/50 rounded border border-slate-600/50 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
 
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    View Repository <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
 
            {/* Skills */}
            <div className="mt-20 pt-12 border-t border-slate-700/50">
              <h4 className="text-2xl font-bold mb-8 text-slate-200">Technical Skills</h4>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <h5 className="text-cyan-400 font-semibold mb-3">{skill.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-slate-800 to-slate-700 rounded-full border border-slate-600/50 hover:border-cyan-500 transition"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
 
        {/* Backlog Section */}
        {activeSection === 'backlog' && (
          <section className="py-20 px-6 max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Project Backlog & Ideas
            </h3>
 
            <p className="text-slate-400 mb-12">
              Always exploring new ideas. Interested in collaborating? Let's chat!
            </p>
 
            <div className="space-y-4">
              {backlogItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-slate-700/50 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 hover:border-violet-500/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 group-hover:bg-cyan-400 transition"></div>
                    <p className="text-slate-300 group-hover:text-slate-200 transition">{item}</p>
                  </div>
                </div>
              ))}
            </div>
 
            <div className="mt-12 p-6 border border-cyan-500/30 bg-cyan-500/5 rounded-lg">
              <p className="text-cyan-300">
                💡 Have an interesting idea or want to collaborate? Reach out—I'm always up for building something cool.
              </p>
            </div>
          </section>
        )}
 
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="py-20 px-6 max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Get in Touch
            </h3>
 
            <p className="text-slate-400 mb-12 text-lg">
              Whether you're interested in collaboration, have a question, or just want to chat—I'd love to hear from you.
            </p>
 
            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/konstantinos-sakellariou-85b155126/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-slate-700/50 rounded-lg hover:border-cyan-500 hover:bg-slate-800/50 transition group"
              >
                <FaLinkedin className="text-cyan-400 group-hover:text-cyan-300" size={28} />
                <div>
                  <p className="font-semibold group-hover:text-cyan-400 transition">LinkedIn</p>
                  <p className="text-sm text-slate-500">Connect and follow my professional journey</p>
                </div>
              </a>
 
              <a
                href="https://github.com/Konstantinos-Sakellariou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-slate-700/50 rounded-lg hover:border-violet-500 hover:bg-slate-800/50 transition group"
              >
                <FaGithub className="text-violet-400 group-hover:text-violet-300" size={28} />
                <div>
                  <p className="font-semibold group-hover:text-violet-400 transition">GitHub</p>
                  <p className="text-sm text-slate-500">Explore my projects and code</p>
                </div>
              </a>
 
              <a
                href="mailto:konstantinossakellariou4@gmail.com"
                className="flex items-center gap-4 p-6 border border-slate-700/50 rounded-lg hover:border-orange-500 hover:bg-slate-800/50 transition group"
              >
                <Mail className="text-orange-400 group-hover:text-orange-300" size={28} />
                <div>
                  <p className="font-semibold group-hover:text-orange-400 transition">Email</p>
                  <p className="text-sm text-slate-500">Send me a message directly</p>
                </div>
              </a>
            </div>
          </section>
        )}
      </main>
 
      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p>Designed & built with React. Hosted on GitHub Pages.</p>
      </footer>
 
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
 
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
 
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
 
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
 
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
 
export default Portfolio;
