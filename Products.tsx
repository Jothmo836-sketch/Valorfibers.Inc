
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Activity, Cpu, 
  Box, CheckCircle, Settings, ChevronRight
} from 'lucide-react';

// --- EDIT ALL PRODUCT PAGE IMAGES HERE ---
const IMAGES = {
  HEADER_BG: "https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=2400",
  FABRICATION_LAB: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1200"
};

const Products: React.FC = () => {
  const categories = [
    {
      title: "Fibre Optic Products",
      icon: <Layers className="w-10 h-10" />,
      description: "Comprehensive optical solutions for backbone infrastructure and field deployment. Specialising in G.652.D single-mode and high-speed OM4/OM5 multi-mode interconnects. Engineered for <0.3dB insertion loss.",
      items: [
        "Pre-terminated Patch Leads",
        "Tactical & Deployable Spools",
        "Armoured CST Bulk Cable",
        "MTP/MPO High Density Links",
        "Splicing Enclosures",
        "Optical Pigtail Bundles"
      ]
    },
    {
      title: "Copper Solutions",
      icon: <Activity className="w-10 h-10" />,
      description: "High-integrity copper systems from Cat6 to Cat8 standards. Our tactical PUR-jacketed cables provide extreme abrasion resistance and oil/cold flexibility for harsh industrial environments.",
      items: [
        "Cat6a / Cat7 Patch Leads",
        "Ruggedised PUR Assemblies",
        "Shielded Trunk Cabling",
        "UHD 12G-SDI Coaxial",
        "RJ45 Industrial Field Plugs",
        "IP-Rated Inline Couplers"
      ]
    },
    {
      title: "Network Hardware",
      icon: <Cpu className="w-10 h-10" />,
      description: "Industrial-grade active equipment including wide-temp optical transceivers, hardened media converters, and ruggedised PoE distribution nodes for secure facility management.",
      items: [
        "Vendor-Compatible SFP / SFP+",
        "Industrial Media Converters",
        "Hardened PoE Switches",
        "19\" Rack Enclosures",
        "Vertical PDU Systems",
        "Brush Cable Management"
      ]
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="bg-slate-950 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HEADER_BG}
            alt="Hardware Components"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Equipment Catalog</span>
           <h1 className="text-5xl lg:text-8xl font-black heading-font uppercase tracking-tighter leading-none mb-8">Hardware <br/><span className="text-orange-600">Supply</span>.</h1>
           <p className="text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
             Engineered components for mission-critical networks. All hardware meets strict international standards for attenuation and signal integrity.
           </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 lg:space-y-48">
          {categories.map((cat, idx) => (
            <div key={idx} className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-5 bg-slate-50 p-8 lg:p-12 border-t-8 border-orange-600 shadow-xl rounded-sm">
                <div className="text-orange-600 mb-8">{cat.icon}</div>
                <h2 className="text-3xl lg:text-4xl font-black heading-font uppercase text-slate-950 mb-6">{cat.title}</h2>
                <p className="text-slate-600 font-medium mb-10 text-sm lg:text-base leading-relaxed">{cat.description}</p>
                <Link to="/contact" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 hover:text-orange-600 transition-colors border-b-2 border-orange-600 pb-2">
                  Request Volume Pricing <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                 {cat.items.map((item, i) => (
                   <div key={i} className="flex items-center p-5 lg:p-7 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                     <CheckCircle className="w-5 h-5 text-orange-600 mr-4 shrink-0" />
                     <span className="font-black text-slate-800 text-xs lg:text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Lab Section */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <Settings className="w-12 h-12 text-orange-600 mb-6" />
                  <h2 className="text-3xl font-black heading-font uppercase mb-6 text-white">Custom Fabrication Lab</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    Off-the-shelf solutions don't always fit. Our UK fabrication lab allows us to build custom cable assemblies, metalwork, and patch panels to your exact specifications. 
                  </p>
                  <Link to="/contact" className="text-white border-b-2 border-orange-600 hover:text-orange-600 transition-colors uppercase tracking-widest font-bold text-sm">Submit Technical Drawing</Link>
               </div>
               <div className="md:w-1/2">
                  <img src={IMAGES.FABRICATION_LAB} className="rounded-sm border-2 border-slate-700 w-full object-cover h-[400px]" alt="Engineering Lab" />
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-40 bg-slate-950 text-center relative">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Box className="w-16 h-16 text-orange-600 mx-auto mb-10" />
          <h2 className="text-4xl lg:text-6xl font-black text-white heading-font uppercase mb-8 tracking-tighter">Bulk Supply <br/>& <span className="text-orange-600">Distribution</span></h2>
          <p className="text-slate-400 mb-12 text-lg font-medium leading-relaxed">
            We hold extensive inventory in our London facility for rapid dispatch. Open a project account today for preferential volume rates.
          </p>
          <Link to="/contact" className="inline-block bg-orange-600 text-white px-12 lg:px-16 py-5 lg:py-6 rounded-sm font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-slate-900 transition-all text-xs lg:text-sm active:scale-95">
            Open Trade Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
