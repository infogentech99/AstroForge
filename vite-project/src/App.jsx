// App.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Rocket, Activity, Globe2, ChevronRight, Shield, 
  Leaf, BarChart, Database, Microscope, Atom, Users, Target,
  RefreshCw, Container, Cpu, Menu, X
} from 'lucide-react';

// Navigation Components
const NavButton = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="relative overflow-hidden group px-6 py-2 bg-transparent"
  >
    <div className="absolute inset-0 w-0 bg-gradient-to-r from-orange-600/20 to-pink-600/20 transition-all duration-300 ease-out group-hover:w-full" />
    <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-orange-600 to-pink-600 transition-all duration-300 ease-out group-hover:h-full" />
    <div className="absolute bottom-0 right-0 w-1 h-0 bg-gradient-to-t from-orange-600 to-pink-600 transition-all duration-300 ease-out group-hover:h-full" />
    <span className="relative z-10 text-sm tracking-widest">{children}</span>
  </button>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="group relative p-8 rounded-lg overflow-hidden cursor-pointer">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 to-pink-900/50 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute inset-0 border border-orange-500/30 rounded-lg group-hover:border-orange-500/70 transition-colors" />
    
    <div className="relative z-10 space-y-4">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { className: "text-orange-400" })}
      </div>
      <h3 className="text-xl font-bold tracking-wider">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </div>
);

// Technology Card Component
const TechnologyCard = ({ title, description, icon }) => (
  <div className="relative group bg-zinc-900/50 p-6 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
    <div className="flex items-center space-x-4 mb-4">
      {React.cloneElement(icon, { className: "text-orange-400 h-8 w-8" })}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </div>
);

// Timeline Item Component
const TimelineItem = ({ year, title, description }) => (
  <div className="relative pl-8 pb-12 group">
    <div className="absolute left-0 top-0 w-0.5 h-full bg-orange-500/20 group-hover:bg-orange-500/40 transition-colors" />
    <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-orange-500 -translate-x-[3px]" />
    <div className="text-sm text-orange-400 mb-2">{year}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Main Application Component
const SpaceMiningWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/video.mp4"
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                ASTRO_X
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'mission', label: 'MISSION' },
                { id: 'technology', label: 'TECH' },
                { id: 'timeline', label: 'TIMELINE' },
                { id: 'resources', label: 'RESOURCES' }
              ].map((item) => (
                <NavButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </NavButton>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96' : 'max-h-0'
            } overflow-hidden`}
          >
            <div className="py-4 space-y-2">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'mission', label: 'MISSION' },
                { id: 'technology', label: 'TECH' },
                { id: 'timeline', label: 'TIMELINE' },
                { id: 'resources', label: 'RESOURCES' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center z-10">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-7xl md:text-8xl font-bold mb-8">
            <span className="inline-block transform hover:scale-105 transition-transform cursor-default">
              BEYOND
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 transform hover:scale-105 transition-transform cursor-default">
              REALITY
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Push the boundaries of what's possible. Join us in revolutionizing space mining technology 
            and shaping humanity's future among the stars.
          </p>

          <button 
            onClick={() => scrollToSection('mission')}
            className="group relative px-8 py-4 overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-orange-500 to-pink-500" />
            <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-gradient-to-r from-orange-700 to-pink-700 opacity-0 group-hover:opacity-100" />
            <div className="relative flex items-center justify-center space-x-2">
              <span>EXPLORE OUR MISSION</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative min-h-screen bg-zinc-950 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-16">
              <div className="space-y-2">
                <h2 className="inline-block text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  OUR MISSION
                </h2>
                <p className="text-xl text-zinc-300">
                  We mine asteroids to extract valuable minerals in space at a lower cost and smaller 
                  carbon footprint than current terrestrial mining methods.
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    Valuable Minerals (PGMs)
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Platinum group metals (PGMs) are integral to a variety of critical technologies, 
                  including catalytic converters, clean energy solutions, and medical instruments.
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  <Leaf className="w-6 h-6 text-orange-500" />
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    Carbon Footprint
                  </h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Traditional mining destroys over 50,000 acres of pristine land annually. Our space 
                  mining technology offers a zero-impact alternative.
                </p>
              </div>
            </div>

            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/asteroid-video.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-br " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative py-32 z-10 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">
              Advanced Technology
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechnologyCard
              icon={<Cpu />}
              title="AI Navigation"
              description="Advanced neural networks for autonomous asteroid approach and docking procedures."
            />
            <TechnologyCard
              icon={<Container />}
              title="Extraction Modules"
              description="Specialized equipment for zero-gravity mineral extraction and processing."
            />
            <TechnologyCard
              icon={<Microscope />}
              title="Analysis Labs"
              description="On-board facilities for real-time mineral composition analysis."
            />
            <TechnologyCard
              icon={<RefreshCw />}
              title="Resource Recycling"
              description="Closed-loop systems for water and air recycling during long-term operations."
            />
            <TechnologyCard
              icon={<Atom />}
              title="Plasma Drilling"
              description="Revolutionary plasma-based drilling technology for efficient mineral extraction."
            />
            <TechnologyCard
              icon={<Database />}
              title="Quantum Computing"
              description="Real-time trajectory calculations and resource optimization."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-32 z-10">
        <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Mission Timeline</h2>
          <div className="space-y-0">
            <TimelineItem
              year="2024"
              title="Technology Development"
              description="Completion of core mining technology and AI navigation systems. Initial prototype testing in simulated environments."
            />
            <TimelineItem
              year="2025"
              title="First Test Mission"
              description="Launch of initial prototype for near-Earth asteroid approach testing and preliminary scanning operations."
            />
            <TimelineItem
              year="2026"
              title="Resource Extraction"
              description="Beginning of automated mineral extraction operations on selected asteroids. Implementation of real-time analysis systems."
            />
            <TimelineItem
              year="2027"
              title="Full Scale Operations"
              description="Deployment of multiple mining units across selected asteroids. Establishment of regular material return missions."
            />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="relative py-24 z-10 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Target Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Platinum", percentage: "78%", value: "High", description: "Essential for hydrogen fuel cells and catalytic converters" },
              { name: "Palladium", percentage: "65%", value: "Very High", description: "Critical for electronic components and green technology" },
              { name: "Iridium", percentage: "45%", value: "Critical", description: "Used in spark plugs and crucial medical equipment" },
              { name: "Rhodium", percentage: "52%", value: "Essential", description: "Key component in solar panels and clean energy tech" }
            ].map((resource, index) => (
              <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{resource.name}</h3>
                <div className="space-y-4">
                  <div className="w-full bg-zinc-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: resource.percentage }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Concentration</span>
                    <span className="text-orange-400">{resource.percentage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Market Value</span>
                    <span className="text-orange-400">{resource.value}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">
                  Join Our Mission
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Whether you're an investor, potential partner, or space enthusiast, we'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Users className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Careers</h3>
                    <p className="text-gray-400">Join our growing team of innovators</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Target className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Partnerships</h3>
                    <p className="text-gray-400">Collaborate on future missions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-lg border border-orange-500/10">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-800/50 border border-orange-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    className="w-full bg-zinc-800/50 border border-orange-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-zinc-800/50 border border-orange-500/20 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500/50"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Rocket className="h-5 w-5 text-orange-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                ASTRO_X
              </span>
            </div>
            <div className="flex space-x-6">
              {['Privacy', 'Terms', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpaceMiningWebsite;