import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Activity, 
  Mail, 
  Phone, 
  MapPin,
  Hexagon,
  ChevronRight,
  Linkedin
} from 'lucide-react';

import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Industries from './Industries';
import Resources from './Resources';
import Contact from './Contact';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <div className={`relative flex items-center justify-center ${className} group`}>
    <Hexagon className="absolute inset-0 text-slate-950 fill-slate-950 w-full h-full transform group-hover:rotate-90 transition-transform duration-700" />
    <Hexagon className="absolute inset-0 text-orange-600 w-full h-full scale-90 border-2" />
    <Activity className="relative z-10 text-white w-1/2 h-1/2 group-hover:scale-110 transition-transform duration-500" />
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Sectors', path: '/industries' },
    { name: 'Library', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isOpen ? 'bg-slate-950 py-3 shadow-lg border-b border-orange-500/10' : (scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-orange-500/10' : 'bg-transparent py-6')}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo className="w-10 h-10 lg:w-11 lg:h-11" />
            <div className="flex flex-col">
              <span className={`text-xl lg:text-2xl font-black heading-font tracking-tighter leading-none transition-colors duration-500 ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-slate-900'}`}>
                VELO<span className="text-orange-600">FIBRE</span>
              </span>
              <span className={`text-[8px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${!scrolled && location.pathname === '/' ? 'text-slate-200' : 'text-slate-700'}`}>NETWORK LIMITED</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-orange-600 relative py-2 group ${
                  location.pathname === link.path 
                    ? 'text-orange-600' 
                    : (!scrolled && location.pathname === '/' ? 'text-white' : 'text-slate-700')
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <Link to="/contact" className="bg-orange-600 text-white px-7 py-3 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg active:scale-95">
              Request Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors ${!scrolled && location.pathname === '/' ? 'text-white' : 'text-slate-900'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-slate-950/100 z-40 transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-6 px-4 pb-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-black uppercase tracking-widest text-white">Back</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu" className="text-orange-500 hover:text-white transition-colors">
              <ChevronRight className="w-7 h-7 rotate-180" />
            </button>
          </div>
          <div className="flex-grow space-y-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-4xl font-black heading-font text-white uppercase tracking-tighter hover:text-orange-600 transition-colors flex items-center justify-between group ${index===0 ? 'mt-4' : ''}`}
              >
                {link.name}
                <ChevronRight className="w-8 h-8 text-orange-600 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            ))}
          </div>
          <div className="space-y-6 border-t border-slate-800 pt-8">
            <a href="tel:+441215550123" className="flex items-center text-slate-400 font-bold uppercase tracking-widest text-xs">
              <Phone className="w-5 h-5 mr-3 text-orange-600" /> +44 (0) 121 555 0123
            </a>
            <Link to="/contact" className="block w-full bg-orange-600 text-white text-center py-5 font-black uppercase tracking-widest text-sm rounded-sm">
              Get Project Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t-8 border-orange-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full industrial-pattern opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Column 1: Logo + Description + Socials */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-black heading-font text-white tracking-tighter uppercase">
                VELO<span className="text-orange-600">FIBRE</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium text-sm">
              Engineering absolute reliability since 1995. We provide the critical physical layer infrastructure that powers global connectivity and national security.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/bright-richard70"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:info@velofibre.com"
                className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Network Solutions */}
          <div>
            <h4 className="text-white font-black heading-font uppercase tracking-widest mb-10 text-xs border-l-4 border-orange-600 pl-4">
              Network Solutions
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Optical Fibre Bulk</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">Pre-terminated Links</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Site Engineering</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Fault Diagnostics</Link></li>
            </ul>
          </div>

          {/* Column 3: The Enterprise */}
          <div>
            <h4 className="text-white font-black heading-font uppercase tracking-widest mb-10 text-xs border-l-4 border-orange-600 pl-4">
              The Enterprise
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Company Profile</Link></li>
              <li><Link to="/resources" className="hover:text-orange-500 transition-colors">Technical Library</Link></li>
              <li><Link to="/industries" className="hover:text-orange-500 transition-colors">Strategic Sectors</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Column 4: Global Hub */}
          <div>
            <h4 className="text-white font-black heading-font uppercase tracking-widest mb-10 text-xs border-l-4 border-orange-600 pl-4">
              Global Hub
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                <span className="font-semibold text-slate-300">
                  VeloFibre House, Innovation Way<br/>
                  Birmingham, West Midlands<br/>
                  B4 7ET, United Kingdom
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="font-semibold text-slate-300">+44 7721 273139</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-slate-900 pt-10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
          &copy; 1995–{new Date().getFullYear()} VeloFibre Network Limited | ISO 9001:2015 Certified | Precision Physical Infrastructure
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-orange-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;