
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, ClipboardCheck, Truck, 
  Lightbulb, Network, Ruler, ChevronRight, Siren, ExternalLink,
} from 'lucide-react';



// --- EDIT ALL SERVICES PAGE IMAGES HERE ---
const IMAGES = {
  HERO_BG: "https://images.unsplash.com/photo-1581092162384-8987c1d64726?auto=format&fit=crop&q=80&w=2400",
  RAPID_RESPONSE: "https://plus.unsplash.com/premium_photo-1673483585941-fe3535a0b04f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  CONSULTANCY_BG: "https://plus.unsplash.com/premium_photo-1673483585941-fe3535a0b04f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
};

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply & Logistics",
      desc: "We hold extensive stock of fibre, copper, and hardware for rapid UK-wide delivery. From bulk drums to pre-terminated assemblies, our logistics network ensures your project stays on schedule.",
      points: ["Next-day UK Delivery", "Global Export Capabilities", "Bulk & Cut-to-Length Service"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installation & Termination",
      desc: "Our field engineers are qualified to install and terminate critical infrastructure in challenging environments, including tactical deployments and secure facilities.",
      points: ["Fusion Splicing", "Copper Termination", "Site Testing & Certification"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Bespoke Cabling Solutions",
      desc: "We design and manufacture custom cable assemblies tailored to specific operational requirements, including ruggedised deployable reels and hybrid cables.",
      points: ["Custom Breakout Assemblies", "Tactical Reels", "Hybrid Fibre/Copper Links"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Technical Consultancy",
      desc: "Leverage our decades of experience. We offer advice on network design, cable specification, and compliance to ensure your infrastructure meets future demands.",
      points: ["Network Design Review", "Compliance Audits", "Product Specification"]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Project Planning",
      desc: "We assist project managers with detailed bills of materials (BOM), cost estimation, and phased delivery schedules for large-scale rollouts.",
      points: ["BOM Creation", "Cost Value Engineering", "Phased Logistics"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Testing & Diagnostics",
      desc: "Ensure network integrity with our comprehensive testing services, including OTDR testing for fibre and Fluke testing for copper networks.",
      points: ["OTDR Analysis", "Insertion Loss Testing", "Fault Finding"]
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden border-b border-orange-600">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG} 
            alt="Valorfibres Inc Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl lg:text-9xl font-black heading-font uppercase mb-6"> <span className="text-orange-600">Services</span></h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Beyond component supply, Valorfibres Inc delivers professional installation, testing, and consultancy services for mission-critical networks.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((service, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm border border-slate-200 hover:border-orange-600 transition-all group flex flex-col h-full">
                <div className="w-14 h-14 bg-slate-100 rounded-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-5xl font-black heading-font uppercase text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <ul className="space-y-3 mt-auto">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rapid Response Unit */}
      <section className="py-24 bg-orange-50 border-y border-orange-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <img src={IMAGES.RAPID_RESPONSE} className="w-full h-[350px] object-cover rounded-sm shadow-xl" alt="Emergency Repair" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white p-3 rounded-full animate-pulse shadow-lg">
                    <Siren className="w-8 h-8" />
                  </div>
               </div>
               <div>
                  <h2 className="text-3xl font-black heading-font uppercase text-slate-900 mb-6">Rapid Response Unit</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Network failure is not an option. Valorfibres Inc provides a 24/7 emergency fibre repair service for mission-critical infrastructure. Our rapid response vehicles are fully equipped to locate and fix breaks immediately.
                  </p>
                  <Link to="/contact" className="inline-block bg-slate-900 text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-red-600 transition-colors">
                    Emergency Contact
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Consultancy Spotlight */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.CONSULTANCY_BG} className="w-full h-full object-cover opacity-10" alt="Consultancy" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2">
             <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Strategic Partnership</span>
             <h2 className="text-4xl lg:text-5xl font-black heading-font uppercase mb-6">Network <br/>Consultancy</h2>
             <p className="text-slate-300 text-lg leading-relaxed mb-8">
               Large-scale infrastructure projects require meticulous planning. Our consultancy team works alongside your architects and project managers to ensure cable routes are optimized.
             </p>
             <Link to="/contact" className="inline-flex items-center text-orange-600 font-black uppercase tracking-widest hover:text-white transition-colors">
               Speak to a Consultant <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
           </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
           <div className="mb-8 md:mb-0 text-white">
             <h3 className="text-3xl font-black heading-font uppercase">Need a Specialist Engineer?</h3>
             <p className="opacity-90 mt-2">We provide on-site technical support for complex installations.</p>
           </div>
           <Link to="/contact" className="bg-slate-900 text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors shadow-xl rounded-sm">
             Book a Consultation
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
