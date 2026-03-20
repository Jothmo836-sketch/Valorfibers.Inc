import React, { useState } from 'react';
import { 
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Cpu,
  Shield,
  Network,
  Settings
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- EDIT ALL RESOURCE PAGE IMAGES HERE ---
const IMAGES = {
  HERO_BG: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2400"
};

const Resources: React.FC = () => {

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 bg-white">

      {/* Hero */}
      <section className="bg-slate-950 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.HERO_BG} 
            alt="Technical Portal"
            loading="lazy"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 industrial-pattern opacity-10 pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] block mb-6">
              Technical Portal
            </span>

            <h1 className="text-5xl lg:text-8xl font-black heading-font uppercase mb-8 leading-none tracking-tighter">
              Engineering <span className="text-orange-600">Expertise</span>.
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed font-medium">
              Specialist fibre infrastructure engineering for hyperscale networks, defence installations, and mission-critical communications systems.
            </p>
          </div>
        </div>
      </section>


      {/* Engineering Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black heading-font uppercase text-slate-950 mb-6">
            Engineering <span className="text-orange-600">Capabilities</span>
          </h2>

          <p className="text-slate-500 font-medium max-w-2xl mx-auto">
            Precision fibre infrastructure design, manufacturing, and deployment for high-performance networks.
          </p>
        </div>


        {/* Capabilities Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Capability 1 */}

          <div className="group border border-slate-200 p-8 rounded-sm hover:shadow-xl transition-all">
            <Cpu className="w-10 h-10 text-orange-600 mb-6" />

            <h3 className="font-black heading-font text-xl uppercase text-slate-950 mb-4">
              Hyperscale Fibre
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              High-density fibre trunk systems up to 3,456 cores designed for hyperscale data centre environments and spine-leaf network architectures.
            </p>
          </div>


          {/* Capability 2 */}

          <div className="group border border-slate-200 p-8 rounded-sm hover:shadow-xl transition-all">
            <Shield className="w-10 h-10 text-orange-600 mb-6" />

            <h3 className="font-black heading-font text-xl uppercase text-slate-950 mb-4">
              Tactical Systems
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Military-grade tactical fibre infrastructure engineered for rapid deployment, extreme environments, and mission-critical defence operations.
            </p>
          </div>


          {/* Capability 3 */}

          <div className="group border border-slate-200 p-8 rounded-sm hover:shadow-xl transition-all">
            <Network className="w-10 h-10 text-orange-600 mb-6" />

            <h3 className="font-black heading-font text-xl uppercase text-slate-950 mb-4">
              Network Planning
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Optical link budget modelling, infrastructure audits, and fibre capacity planning for high-performance communication networks.
            </p>
          </div>


          {/* Capability 4 */}

          <div className="group border border-slate-200 p-8 rounded-sm hover:shadow-xl transition-all">
            <Settings className="w-10 h-10 text-orange-600 mb-6" />

            <h3 className="font-black heading-font text-xl uppercase text-slate-950 mb-4">
              Cleanroom Assembly
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Precision fibre termination and custom cable manufacturing performed in controlled cleanroom environments for maximum reliability.
            </p>
          </div>

        </div>


        {/* Metrics Section */}

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <p className="text-4xl font-black text-slate-950">3,456</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">
              Core Fibre Systems
            </p>
          </div>

          <div>
            <p className="text-4xl font-black text-slate-950">48hr</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">
              Rapid Fabrication
            </p>
          </div>

          <div>
            <p className="text-4xl font-black text-slate-950">ISO</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">
              Quality Certified
            </p>
          </div>

          <div>
            <p className="text-4xl font-black text-slate-950">15+</p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-2">
              Years Experience
            </p>
          </div>

        </div>

      </section>


      {/* FAQ Section */}

      <section className="max-w-8xl mx-auto py-20 lg:py-40 px-4">

        <div className="text-center mb-16 lg:mb-24">
          <HelpCircle className="w-12 h-12 text-orange-600 mx-auto mb-6" />

          <h2 className="text-4xl lg:text-5xl font-black heading-font uppercase text-slate-950">
            Technical <span className="text-orange-600">Knowledge</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {[
              {
                q: "Do you supply custom cable lengths?",
                a: "Yes. We provide precision cut-to-length fibre and copper assemblies for infrastructure projects. Pre-terminated systems are manufactured in controlled cleanroom environments to ensure optimal performance."
              },
              {
                q: "What is your typical lead time?",
                a: "Standard custom fibre assemblies are typically manufactured and dispatched within 3–5 business days. Emergency fabrication for critical infrastructure repairs can often be delivered within 24 hours."
              },
              {
                q: "What fibre types do you support?",
                a: "We support single-mode (OS1/OS2) and multimode (OM3, OM4, OM5) fibre standards for data centre, enterprise, telecom, and defence network environments."
              },
              {
                q: "Do you provide high-density MTP/MPO solutions?",
                a: "Yes. Our hyperscale fibre systems support high-density MTP/MPO trunk architectures designed for modern spine-leaf network topologies and hyperscale data centre environments."
              },
              {
                q: "Can you assist with fibre network design?",
                a: "Our engineering team supports fibre infrastructure planning including optical link budget modelling, route planning, and scalability analysis for large-scale network deployments."
              },
              {
                q: "Do you support tactical or ruggedised installations?",
                a: "Yes. We manufacture ruggedised tactical fibre systems designed for defence operations, rapid deployment networks, and harsh environmental conditions."
              },
              {
                q: "Are your assemblies tested before shipment?",
                a: "Every fibre assembly undergoes optical performance testing including insertion loss and return loss verification to ensure compliance with international performance standards."
              },
              {
                q: "Do you offer infrastructure audits?",
                a: "Yes. Our engineers can conduct fibre infrastructure audits to identify capacity constraints, performance issues, and upgrade opportunities within existing network environments."
              },
              {
                q: "What industries do you typically support?",
                a: "Our fibre infrastructure solutions are used across hyperscale data centres, telecommunications networks, defence infrastructure, smart city deployments, and enterprise network environments."
              }
            ].map((faq, id) => (

            <div
              key={id}
              className={`border border-slate-200 bg-white rounded-sm overflow-hidden transition-all ${
                activeFaq === id
                  ? 'ring-2 ring-orange-600 border-transparent shadow-2xl'
                  : 'hover:border-slate-300'
              }`}
            >

              <button
                onClick={() => setActiveFaq(activeFaq === id ? null : id)}
                className="w-full flex items-center justify-between p-4 lg:p-5 cursor-pointer text-left group"
              >

                <h4 className={`font-black uppercase tracking-tight text-sm lg:text-base ${
                  activeFaq === id ? 'text-orange-600' : 'text-slate-950'
                }`}>
                  {faq.q}
                </h4>

                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-500 ${
                    activeFaq === id
                      ? 'rotate-180 text-orange-600'
                      : 'text-slate-300 group-hover:text-slate-950'
                  }`}
                />

              </button>

              <div className={`transition-all duration-500 overflow-hidden ${
                activeFaq === id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 lg:px-8 pb-8 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-6 font-medium italic">
                  {faq.a}
                </div>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Engineering Support CTA */}

      <section className="py-24 bg-slate-950 text-white relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">

          <div>
            <h3 className="text-4xl lg:text-5xl font-black heading-font uppercase mb-4 tracking-tighter">
              Still have <span className="text-orange-600">Questions</span>?
            </h3>

            <p className="text-slate-400 font-medium max-w-xl">
              Our technical engineering desk is available for deep-dive specification support and infrastructure consultation.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-orange-600 text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-white hover:text-slate-950 transition-all flex items-center shrink-0"
          >
            Contact Engineer
            <ExternalLink className="ml-3 w-4 h-4" />
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Resources;