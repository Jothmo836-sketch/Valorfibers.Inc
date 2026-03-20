
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Server, Radio, Building2, Tent, Scale, ArrowRight } from 'lucide-react';

// --- EDIT ALL INDUSTRY PAGE IMAGES HERE ---
const IMAGES = {
  HEADER_BG: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2400",
  DEFENCE: "https://images.unsplash.com/photo-1768498950519-d0d991ac3ac2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fE1pbGl0YXJ5JTIwbWFuJTIwd2l0aCUyMGdyYWRlJTIwZmliZXIlMjBjYWJsZXN8ZW58MHx8MHx8fDA%3D",
  DATA_CENTRE: "https://plus.unsplash.com/premium_photo-1740363268539-cd9093c3b5d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  BROADCAST: "https://images.unsplash.com/photo-1723093795493-4cf71800692c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyb2FkY2FzdCUyMCUyNiUyMGF2JTIwZmliZXIlMjBjYWJsZXN8ZW58MHx8MHx8fDA%3D",
  DEPLOYABLE: "https://images.unsplash.com/photo-1639074064849-395cddbeec2d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  COMMERCIAL: "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?q=80&w=612&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",


};

const Industries: React.FC = () => {
  const sectors = [
    {
      title: "Defence & Government",
      icon: <Shield className="w-12 h-12" />,
      description: "We supply approved cabling infrastructure for MOD sites and secure government facilities. Our solutions include ruggedised tactical fibre and secure enclosures designed for deployed environments.",
      image: IMAGES.DEFENCE,
      compliance: "Def Stan 61-12"
    },
    {
      title: "Data Centres",
      icon: <Server className="w-12 h-12" />,
      description: "High-density fibre solutions (MTP/MPO) and pre-terminated assemblies for rapid deployment in hyperscale and colocation data centres. We ensure low-latency performance and organized cable management.",
      image: IMAGES.DATA_CENTRE,
      compliance: "TIA-942"
    },
    {
      title: "Broadcast & AV",
      icon: <Radio className="w-12 h-12" />,
      description: "From stadium links to outside broadcast (OB) trucks, we provide robust fibre and copper solutions capable of handling 4K/8K uncompressed video streams in challenging field conditions.",
      image: IMAGES.BROADCAST,
      compliance: "SMPTE 311M"
    },
    {
      title: "Temporary & Deployable",
      icon: <Tent className="w-12 h-12" />,
      description: "Specialist reusable cable systems for festivals, events, and emergency response. Featuring deployable reels and heavy-duty connectors designed for repeated mating and harsh handling.",
      image: IMAGES.DEPLOYABLE,
      compliance: "IP67 Rated"
    },
    {
      title: "Commercial & Enterprise",
      icon: <Building2 className="w-12 h-12" />,
      description: "Structured cabling for office fit-outs and campus backbones. We supply Cat6/Cat6a systems and fibre uplinks ensuring reliable connectivity for modern business operations.",
      image: IMAGES.COMMERCIAL,
      compliance: "ISO/IEC 11801"
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 border-b border-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HEADER_BG}
            alt="Industry Skyline"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-xs block mb-4">Vertical Markets</span>
           <h1 className="text-5xl lg:text-7xl font-black heading-font uppercase">Industries & <span className="text-orange-600">Sectors</span>.</h1>
           <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
             Tailored connectivity solutions for specialized operational environments.
           </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {sectors.map((sector, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="lg:w-1/2 relative group w-full">
                  <div className="absolute -inset-4 bg-orange-600/10 transform rotate-2 transition-transform group-hover:rotate-0 rounded-sm"></div>
                  <div className="relative h-[450px] w-full overflow-hidden rounded-sm shadow-2xl">
                    <img 
                        src={sector.image} 
                        alt={sector.title} 
                        className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-slate-900/90 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest border-t-2 border-orange-600">
                        Primary Std: {sector.compliance}
                    </div>
                  </div>
               </div>
               <div className="lg:w-1/2 space-y-8">
                  <div className="w-16 h-16 bg-slate-100 flex items-center justify-center text-orange-600 rounded-sm">
                    {sector.icon}
                  </div>
                  <h2 className="text-4xl font-black heading-font uppercase text-slate-900">{sector.title}</h2>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {sector.description}
                  </p>
                  
                  <ul className="space-y-3 border-t border-slate-100 pt-6">
                    <li className="flex items-center text-sm font-bold text-slate-500">
                        <ArrowRight className="w-4 h-4 text-orange-600 mr-3" /> Dedicated Project Management
                    </li>
                    <li className="flex items-center text-sm font-bold text-slate-500">
                        <ArrowRight className="w-4 h-4 text-orange-600 mr-3" /> Specialized Product Inventory
                    </li>
                  </ul>

                  <Link to="/contact" className="inline-block mt-4 bg-slate-900 text-white px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors rounded-sm shadow-lg">
                    Enquire About This Sector
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory Grid */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Scale className="w-16 h-16 text-orange-600 mx-auto mb-6" />
            <h2 className="text-3xl font-black heading-font uppercase mb-6">Regulatory Compliance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Construction</div>
                  <div className="text-sm font-mono text-slate-300">CPR Euroclass B2ca</div>
               </div>
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Marine</div>
                  <div className="text-sm font-mono text-slate-300">DNV-GL Approved</div>
               </div>
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Rail</div>
                  <div className="text-sm font-mono text-slate-300">LUL Section 12</div>
               </div>
               <div className="p-6 border border-slate-700 hover:border-orange-600 transition-colors bg-slate-950/50">
                  <div className="font-bold text-orange-500 mb-2">Defence</div>
                  <div className="text-sm font-mono text-slate-300">Def Stan 61-12</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Industries;
