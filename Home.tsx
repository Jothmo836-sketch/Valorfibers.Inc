
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, 
  Activity, Layers, Radio, Truck, 
  Cpu, Repeat, Boxes, Building2, Globe, CheckCircle2, Leaf, Handshake, ChevronRight
} from 'lucide-react';

// --- EDIT ALL HOMEPAGE IMAGES HERE --
const IMAGES = {
  HERO_BACKGOUND: "https://images.unsplash.com/photo-1607723619307-260d7a1e1f12?w=600&auto=format&fit=crop&q=60",
  INTRO_SIDE_IMAGE: "https://plus.unsplash.com/premium_photo-1764695563447-c2e8cbaf896b?w=600&auto=format&fit=crop&q=60",
  SUSTAINABILITY_IMAGE: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
  // Capabilities Grid
  FIBRE: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=800",
  NODES: "https://images.unsplash.com/photo-1652715564391-38cc4475b7f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHxpbmR1c3RyaWFsJTIwc2ZwJTIwcmVjZWl2ZXJ8ZW58MHx8MHx8fDA%3Dg",
  COPPER: "https://cdn.txfmedia.com/assets/Images/Thumbnails/400/7560_bigstock_Rolled_Copper_On_Railroad_Carr_473759875__2___002_.jpg",
  RAPID_DEPLOY: "https://tfoca-tactical-fiber.com/images/tfoca-spools-infield.jpg",
  CONTAINMENT: "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
  CUSTOM_BUILDS: "https://images.unsplash.com/photo-1570181998225-0c1bfcb3e226?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0",
  // Industry Marquee
  DEFENCE: "https://telecom.samm.com/Data/EditorFiles/savunma_fotolar__/Ba__lant__n__n_Gucu_Milli_Sistemlerde_Fiber_ve_Konnektor_Teknolojileri.webp",
  DATA_CENTRE: "https://plus.unsplash.com/premium_photo-1742710726634-18e31a278fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  BROADCAST: "https://images.unsplash.com/photo-1767474833531-c1be2788064a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0",
  COMMERCIAL: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  INDUSTRIAL: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
};

const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current!);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const productCategories = [
    { title: "Fibre Optics", icon: <Layers className="w-6 h-6" />, desc: "Tactical, armoured, and hyperscale spools for critical links.", img: IMAGES.FIBRE },
    { title: "Network Nodes", icon: <Cpu className="w-6 h-6" />, desc: "Industrial SFP transceivers and secure rack management.", img: IMAGES.NODES },
    { title: "Copper Infrastructure", icon: <Activity className="w-6 h-6" />, desc: "Mission-critical Cat6a to Cat8 copper deployment links.", img: IMAGES.COPPER },
    { title: "Rapid Deployment", icon: <Truck className="w-6 h-6" />, desc: "Tactical reels for defense and field communications.", img: IMAGES.RAPID_DEPLOY },
    { title: "Containment", icon: <Boxes className="w-6 h-6" />, desc: "Secure enclosures, patch panels, and breakout systems.", img: IMAGES.CONTAINMENT },
    { title: "Custom Builds", icon: <Repeat className="w-6 h-6" />, desc: "Bespoke termination and specialist cable fabrication.", img: IMAGES.CUSTOM_BUILDS }
  ];

  const industriesList = [
    { title: "Defence & Government", img: IMAGES.DEFENCE, icon: <ShieldCheck /> },
    { title: "Data Centres", img: IMAGES.DATA_CENTRE, icon: <Globe /> },
    { title: "Broadcast & AV", img: IMAGES.BROADCAST, icon: <Radio /> },
    { title: "Commercial", img: IMAGES.COMMERCIAL, icon: <Building2 /> },
    { title: "Industrial", img: IMAGES.INDUSTRIAL, icon: <Boxes /> }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[100vh] lg:min-h-[140vh] flex items-center justify-start bg-slate-900 overflow-hidden pt-16 lg:pt-20 group cursor-default">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BACKGOUND} 
            alt="VeloFibre Backbone" 
            className="w-full h-full object-cover brightness-[1] scale-[1.05] transition-transform duration-[6000ms] ease-out group-hover:scale-115 group-hover:translate-x-4 group-hover:-translate-y-4 group-focus-within:scale-115 group-focus-within:translate-x-4 group-focus-within:-translate-y-4 group-active:scale-115 group-active:translate-x-4 group-active:-translate-y-4 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10 pointer-events-none"></div>
        </div>
        
        <div className="max-w-[4500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">
          <ScrollReveal className="max-w-4xl space-y-8 lg:space-y-12 md:pl-4 lg:pl-14 xl:pl-20">
            <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] xl:text-[10rem] font-black text-white heading-font tracking-tighter leading-[0.85] uppercase">
              VeloFibre <br/><span className="text-orange-600">Network</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed font-bold max-w-2xl border-l-4 lg:border-l-8 border-orange-600 pl-6 lg:pl-10">
              High-reliability fibre + copper for secure networks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6">
              <Link to="/products" className="group/btn bg-orange-600 text-white px-8 lg:px-12 py-4 lg:py-6 font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all shadow-xl active:scale-95">
                Explore Catalog
                <ArrowRight className="ml-4 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="bg-white/10 text-white border-2 border-white/20 px-8 lg:px-12 py-4 lg:py-6 font-black uppercase tracking-widest text-xs flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all backdrop-blur-md">
                Technical Query
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce opacity-100">
          <div className="w-1 h-12 bg-gradient-to-b from-orange-400 to-transparent"></div>
        </div>
      </section>

      {/* Strategic Workflow */}
      <section className="py-20 lg:py-32 bg-red-300 border-t border-slate-100">
        <div className="max-w-[4500px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Expert assessment of project topology and physical constraints." },
                { step: "02", title: "Spec Design", desc: "Selecting the optimal glass and jacket types for operational environments." },
                { step: "03", title: "Logistics", desc: "Rapid dispatch from UK hubs with global shipping capabilities." },
                { step: "04", title: "Certification", desc: "End-to-end testing ensuring 100% compliance with ISO/IEEE standards." }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 100} className="border-t-2 border-slate-100 pt-8 group cursor-default">
                   <div className="text-4xl lg:text-5xl font-black text-slate-100 group-hover:text-orange-600 transition-colors mb-4 heading-font">{item.step}</div>
                   <h3 className="text-lg font-black uppercase text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-14 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[4500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <ScrollReveal>
              <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">The Precision Layer</span>
              <h2 className="text-4xl lg:text-7xl font-black text-slate-900 heading-font uppercase leading-[0.9] mb-10">Beyond the <br/><span className="text-orange-600">Standard</span>.</h2>
              <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed mb-12">
                VeloFibre Network isn't just a supplier. We are an engineering partner. From deep-trench armoured fibre to tactical field nodes, we ensure that the physical infrastructure underpinning your data is indestructible.
              </p>
              
              <div className="grid grid-cols-2 gap-8 lg:gap-12">
                 <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-black text-slate-900 heading-font">30+</div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em]">Years Engineering</div>
                 </div>
                 <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-black text-slate-900 heading-font">500+</div>
                    <div className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em]">Global Deployments</div>
                 </div>
              </div>

              <Link to="/about" className="inline-flex items-center mt-12 text-slate-950 font-black uppercase tracking-widest text-xs border-b-2 border-orange-600 pb-2 hover:text-orange-600 transition-all">
                The VeloFibre Story <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="relative group">
              <div className="absolute inset-0 bg-slate-900 rounded-sm translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 group-focus-within:translate-x-6 group-focus-within:translate-y-6 group-active:translate-x-6 group-active:translate-y-6 transition-transform"></div>
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img 
                  src={IMAGES.INTRO_SIDE_IMAGE} 
                  alt="Infrastructure" 
                  className="w-full h-full object-cover  group-hover:grayscale-0 group-focus-within:grayscale-0 group-active:grayscale-0 transition-all duration-1000 group-hover:scale-105 group-focus-within:scale-105 group-active:scale-105"
                />
              </div>
              <div className="absolute bottom-6 lg:bottom-10 -left-6 lg:-left-12 bg-orange-600 text-white px-8 lg:px-12 py-6 lg:py-8 font-black heading-font uppercase tracking-widest shadow-2xl text-sm lg:text-base">
                Est. 1995
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-40 bg-white">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 lg:mb-32">
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 heading-font uppercase tracking-tighter">Core <span className="text-orange-600">Capabilities</span></h2>
            <div className="w-24 h-2 bg-orange-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <Link to="/products" className="block relative h-[400px] lg:h-[500px] group overflow-hidden border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl active:scale-95">
                  <div className="absolute inset-0 z-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-focus-within:scale-110 group-active:scale-110" />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 group-focus-within:bg-slate-950/60 group-active:bg-slate-950/60 transition-colors duration-500"></div>
                  </div>
                  
                  <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col items-start text-white">
                     <div className="w-12 h-12 lg:w-14 lg:h-14 bg-orange-600 flex items-center justify-center text-white mb-8 rounded-sm shadow-xl group-hover:rotate-[360deg] group-focus-within:rotate-[360deg] group-active:rotate-[360deg] transition-transform duration-700">
                       {item.icon}
                     </div>
                     <h3 className="text-2xl lg:text-3xl font-black heading-font uppercase mb-4 tracking-tight leading-none">{item.title}</h3>
                     <p className="text-slate-300 text-sm font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 group-active:translate-y-0 transition-all duration-500 delay-100">
                       {item.desc}
                     </p>
                     <div className="mt-auto">
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center border-b-2 border-orange-600 pb-1 w-fit group-hover:text-orange-600 transition-colors">
                          View Specs <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </span>
                     </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="flex items-center space-x-3 mb-6">
                    <Leaf className="w-8 h-8 text-orange-600" />
                    <span className="font-black heading-font uppercase text-xl">Sustainability Commitment</span>
                 </div>
                 <h2 className="text-4xl font-black heading-font uppercase text-slate-900 mb-6">Green <span className="text-orange-600">Infrastructure</span>.</h2>
                 <p className="text-slate-600 font-medium leading-relaxed mb-6">
                   VeloFibre Network is dedicated to reducing the carbon footprint of network deployment. We utilize LSZH (Low Smoke Zero Halogen) materials, recyclable cable reels, and optimized logistics to minimize waste.
                 </p>
                 <ul className="space-y-3">
                   {["100% Recyclable Drum Packaging", "RoHS Compliant Materials", "Carbon-Neutral Shipping Options"].map((item, i) => (
                     <li key={i} className="flex items-center text-slate-700 font-bold text-sm">
                       <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3" /> {item}
                     </li>
                   ))}
                 </ul>
              </div>
              <div className="relative">
                 <img src={IMAGES.SUSTAINABILITY_IMAGE} className="w-full h-[400px] object-cover rounded-sm  hover: transition-all duration-700" alt="Sustainable Network" />
                 <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 shadow-xl max-w-xs">
                    <div className="text-4xl font-black text-orange-600 heading-font">ISO 14001</div>
                    <div className="text-xs font-bold uppercase tracking-widest mt-2">Environmental Management Standards Aligned</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Industries Marquee */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
         <div className="absolute inset-0 industrial-pattern opacity-10 pointer-events-none"></div>
         <div className="max-w-[500px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Sectors We Serve</span>
            <h2 className="text-5xl lg:text-6xl font-black heading-font uppercase">Industrial <span className="text-orange-600">Impact</span>.</h2>
         </div>

         <div className="relative w-full overflow-hidden">
            <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
               {[...industriesList, ...industriesList].map((ind, i) => (
                 <div key={i} className="w-[300px] md:w-[450px] h-[550px] shrink-0 mx-4 relative group overflow-hidden rounded-sm border border-slate-800 cursor-pointer">
                    <img src={ind.img} alt={ind.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 group-hover:scale-110 group-focus-within:scale-110 group-active:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                       <div className="w-12 h-12 bg-orange-600 flex items-center justify-center text-white mb-4 shadow-lg rounded-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-focus-within:translate-y-0 group-active:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-all duration-500">
                         {ind.icon}
                       </div>
                       <h3 className="text-3xl font-black heading-font uppercase mb-2 transform group-hover:-translate-y-2 group-focus-within:-translate-y-2 group-active:-translate-y-2 transition-transform duration-500 drop-shadow-lg">{ind.title}</h3>
                       <Link to="/industries" className="text-xs font-bold uppercase tracking-widest text-orange-500 flex items-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-700 delay-100">
                         View Sector <ArrowRight className="ml-2 w-3 h-3" />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Partners section */}
      <section className="py-24 lg:py-40 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[4500px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Handshake className="w-12 h-12 text-slate-300 mx-auto mb-10" />
           <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-16">Strategic Technology Ecosystem</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-16 items-center justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {["Cisco", "Corning", "CommScope", "Prysmian", "Belden", "Fluke"].map((brand, i) => (
                 <div key={i} className="text-xl lg:text-2xl font-black heading-font text-slate-800 uppercase tracking-tighter hover:text-orange-600 transition-colors cursor-default">
                    {brand}
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-24 lg:py-40 bg-orange-600 relative overflow-hidden text-center">
        <div className="absolute inset-0 industrial-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-[4500px] mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white heading-font uppercase mb-10 leading-[0.9] tracking-tighter">
            Build the <br/><span className="text-slate-900">Next Generation</span>.
          </h2>
          <p className="text-white/90 text-lg lg:text-xl font-bold mb-12 max-w-2xl mx-auto">
            Contact our project office in London to discuss large-scale tenders, technical specifications, and custom infrastructure fabrication.
          </p>
          <Link to="/contact" className="inline-block bg-slate-900 text-white px-12 lg:px-16 py-5 lg:py-6 rounded-sm font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-slate-900 transition-all text-xs lg:text-sm active:scale-95">
            Contact Project Office
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        @keyframes slowZoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slowZoom 25s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
