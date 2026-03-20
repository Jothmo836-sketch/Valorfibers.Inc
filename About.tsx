
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, Microscope, History, Users } from 'lucide-react';

// --- EDIT ALL ABOUT PAGE IMAGES HERE ---
const IMAGES = {
  HEADER_BG: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000",
  ENGINEERING_DEPOT: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
  GLOBAL_MAP: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2400",
  // Team Headshots
  TEAM_MEMBER_1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  TEAM_MEMBER_2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  TEAM_MEMBER_3: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
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

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-white">
      {/* Immersive Header */}
        <section className="relative min-h-[90vh] md:min-h-[110vh] py-38 lg:py-56 bg-slate-950 text-white overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.HEADER_BG} 
              alt="VeloFibre Operations" 
              className="w-full h-full object-cover opacity-30 grayscale-[0.5] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-transparent to-slate-950"></div>
            <div className="absolute inset-0 industrial-pattern opacity-20"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col justify-center items-center min-h-[60vh]">
            <ScrollReveal>

              <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-xs mb-6 hidden md:block">
                Global Connectivity Vanguard
              </span>

              <h1 className="text-7xl lg:text-9xl font-black heading-font uppercase mb-8 leading-[0.9] tracking-tight">
                ENGINEERING <br/>
                <span className="text-orange-600">LINKS</span>.
              </h1>

              <p className="text-lg lg:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed border-t border-white/10 pt-8">
                Three decades of establishing the physical layer for global telecommunications through high-density networking solutions.
              </p>

            </ScrollReveal>
          </div>
        </section>
      {/* The Core Story */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <ScrollReveal className="space-y-12">
              <div className="w-24 h-4 bg-orange-600 mb-12"></div>
              <h2 className="text-5xl lg:text-8xl font-black text-slate-900 heading-font uppercase leading-none tracking-tighter">Beyond the <br/><span className="text-orange-600">Trench</span>.</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                VeloFibre Network was founded on a singular premise: the digital world is only as robust as the physical cables that bind it. From our early days in regional fiber rollout to our current position as a Tier-1 global supplier, we have focused exclusively on high-performance infrastructure.
              </p>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                We manage the entire lifecycle of high-density cabling—from technical specification and QC laboratory testing to strategic global logistics. Our inventory represents the cutting-edge of optical transmission technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-slate-100">
                <div className="space-y-4 group cursor-default">
                  <div className="bg-slate-950 p-5 rounded-sm w-fit group-hover:bg-orange-600 transition-all duration-500 transform group-hover:-rotate-12">
                    <Microscope className="w-10 h-10 text-orange-500 group-hover:text-white" />
                  </div>
                  <h4 className="text-2xl font-black heading-font uppercase text-slate-900 tracking-widest">QC Lab Testing</h4>
                  <p className="text-slate-500 font-medium">Every kilometer of fiber undergoes OTDR and dispersion analysis before leaving our port.</p>
                </div>
                <div className="space-y-4 group cursor-default">
                  <div className="bg-slate-950 p-5 rounded-sm w-fit group-hover:bg-orange-600 transition-all duration-500 transform group-hover:rotate-12">
                    <ShieldCheck className="w-10 h-10 text-orange-500 group-hover:text-white" />
                  </div>
                  <h4 className="text-2xl font-black heading-font uppercase text-slate-900 tracking-widest">Compliance First</h4>
                  <p className="text-slate-500 font-medium">Adhering to strict ITU-T, TIA/EIA, and IEEE benchmarks for industrial data links.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300} className="relative">
               <div className="absolute -inset-4 bg-slate-900 transform translate-x-8 translate-y-8 -z-10"></div>
               <img 
                 src={IMAGES.ENGINEERING_DEPOT} 
                 alt="VeloFibre Engineering Depot" 
                 className="rounded-sm shadow-3xl w-full h-[700px] object-cover filter brightness-90 hover:brightness-100 transition-all duration-1000"
               />
               <div className="absolute bottom-10 right-10 p-10 bg-orange-600 text-white font-black heading-font uppercase tracking-widest shadow-2xl">
                 Engineering Depot
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <Globe className="w-16 h-16 text-orange-600 mx-auto mb-6" />
           <h2 className="text-4xl lg:text-5xl font-black text-slate-900 heading-font uppercase tracking-tighter mb-6">Global Deployment <span className="text-orange-600">Ready</span></h2>
           <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-16">
             With logistics hubs in the UK and strategic partners in Europe and North America, we deliver infrastructure where it is needed most.
           </p>
           <img 
             src={IMAGES.GLOBAL_MAP} 
             alt="VeloFibre Global Map" 
             className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
           />
        </div>
      </section>
      {/* CAPABILITIES */}
      <section className="py-32 bg-white">

        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">

            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 heading-font uppercase tracking-tighter mb-6">
              Operational <span className="text-orange-600">Capabilities</span>
            </h2>

            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Our infrastructure and operational framework allow us to deliver high-density fibre solutions reliably at global scale.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Capability 1 */}
            <div className="group border border-slate-200 p-10 hover:border-orange-600 transition-all">

              <div className="mb-6">
                <Globe className="w-10 h-10 text-orange-600" aria-hidden="true"/>
              </div>

              <h3 className="text-xl font-black heading-font uppercase text-slate-900 mb-3">
                Global Logistics
              </h3>

              <p className="text-slate-500">
                Strategic distribution hubs enable rapid shipment of fibre infrastructure to projects across Europe and North America.
              </p>

            </div>

            {/* Capability 2 */}
            <div className="group border border-slate-200 p-10 hover:border-orange-600 transition-all">

              <div className="mb-6">
                <Microscope className="w-10 h-10 text-orange-600" aria-hidden="true"/>
              </div>

              <h3 className="text-xl font-black heading-font uppercase text-slate-900 mb-3">
                Fibre Certification
              </h3>

              <p className="text-slate-500">
                Every cable batch is verified through OTDR testing and signal integrity analysis before integration into our supply chain.
              </p>

            </div>

            {/* Capability 3 */}
            <div className="group border border-slate-200 p-10 hover:border-orange-600 transition-all">

              <div className="mb-6">
                <ShieldCheck className="w-10 h-10 text-orange-600" aria-hidden="true"/>
              </div>

              <h3 className="text-xl font-black heading-font uppercase text-slate-900 mb-3">
                Compliance & Standards
              </h3>

              <p className="text-slate-500">
                Infrastructure meets ITU-T, TIA/EIA and IEEE standards ensuring compatibility with global telecommunications networks.
              </p>

            </div>

            {/* Capability 4 */}
            <div className="group border border-slate-200 p-10 hover:border-orange-600 transition-all">

              <div className="mb-6">
                <Users className="w-10 h-10 text-orange-600" aria-hidden="true"/>
              </div>

              <h3 className="text-xl font-black heading-font uppercase text-slate-900 mb-3">
                Rapid Deployment
              </h3>

              <p className="text-slate-500">
                Our engineering teams and logistics partners enable fast infrastructure deployment for telecom operators and contractors.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-center">
         <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-3xl lg:text-4xl font-black text-white heading-font uppercase mb-8">Partner with Industry Leaders</h2>
           <Link to="/contact" className="inline-block bg-orange-600 text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors">
             Discuss Your Project
           </Link>
         </div>
      </section>
    </div>
  );
};

export default About;
