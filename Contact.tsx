
import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Building, ArrowRight, User } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    enquiryType: 'Quotation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Construct professional email body
    const emailBody = `VeloFibre Network Enquiry Brief
------------------------------
Client Name: ${formData.name}
Organization: ${formData.company}
Contact Email: ${formData.email}
Phone: ${formData.phone}
Priority: ${formData.enquiryType}

Detailed Brief:
${formData.message}

------------------------------
Sent via VeloFibre Online Portal`;

    // Recipient address
    const recipient = 'enquiries@velofibre.net';
    const subject = `[ENQUIRY] ${formData.enquiryType} | ${formData.company}`;
    
    // Construct mailto link
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Trigger system email client
    window.location.href = mailtoUrl;

    // Show confirmation UI
    setTimeout(() => {
      setSubmitted(true);
      setIsSending(false);
      setFormData({ name: '', email: '', company: '', phone: '', enquiryType: 'Quotation', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl lg:text-7xl font-black heading-font uppercase mb-6">Contact <span className="text-orange-600">Us</span>.</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
               Connect with our UK engineering and sales teams. All enquiries are forwarded directly to our project office for immediate review.
            </p>
         </div>
         <div className="absolute inset-0 industrial-pattern opacity-10"></div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info Side */}
            <div className="lg:col-span-4 space-y-12">
               {/* Department Directory */}
                <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
                  <h3 className="text-xl font-black heading-font uppercase text-slate-900 mb-4 flex items-center">
                    <Building className="w-5 h-5 mr-3 text-orange-600" /> Contact Us
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    For all enquiries including sales, technical advice, or account queries, please reach out via the email below. Our team ensures every message is reviewed promptly.
                  </p>
                  <a 
                    href="mailto:enquiries@velofibre.net" 
                    className="text-orange-600 font-bold text-sm hover:underline"
                  >
                    enquiries@velofibre.net
                  </a>
                </div>

               {/* HQ Info */}
               <div className="bg-slate-900 text-white p-8 rounded-sm shadow-xl">
                  <h3 className="text-xl font-black heading-font uppercase mb-6 flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-orange-600" /> Head Office
                  </h3>
                  <address className="not-italic text-slate-300 text-sm leading-relaxed mb-6 border-l-2 border-orange-600 pl-4">
                     VeloFibre Network Limited<br/>
                     26-28 Paddenswick Road, The Curtis Building<br/>
                     W6 0UB London<br/>
                     United Kingdom
                  </address>
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Main Contact:</span>
                        <span className="font-bold">+44 7721 273139</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-8 mt-12 lg:mt-0">
              <div className="bg-white rounded-sm shadow-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex items-center justify-between">
                   <h3 className="font-black heading-font text-xl uppercase text-slate-800">Submit Project Brief</h3>
                   <span className="text-xs font-bold text-orange-600 uppercase tracking-widest flex items-center">
                     <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                     Secure Direct Link
                   </span>
                </div>
                
                <div className="p-8 lg:p-12">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-black heading-font text-slate-900 uppercase mb-4">Brief Ready for Sending</h3>
                      <p className="text-slate-500 font-medium text-lg max-w-md mx-auto mb-10">
                        The enquiry details have been bundled. If your local mail application didn't launch, please use the directory links to contact us directly.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-orange-600 transition-all text-sm">
                        Start New Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                            <input 
                              type="text" 
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-medium text-sm transition-all"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Business Email <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-medium text-sm transition-all"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Company Name</label>
                          <div className="relative">
                            <Building className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                            <input 
                              type="text" 
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-medium text-sm transition-all"
                              placeholder="Organization Ltd"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                            <input 
                              type="tel" 
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-medium text-sm transition-all"
                              placeholder="+44 (0) ..."
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Department / Subject</label>
                        <select 
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({...formData, enquiryType: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-medium text-sm transition-all appearance-none"
                        >
                          <option value="Quotation">Sales: Request Quotation</option>
                          <option value="Technical">Engineering: Technical Advice</option>
                          <option value="Installation">Services: Installation Enquiry</option>
                          <option value="Accounts">Accounts & Billing</option>
                          <option value="Other">General Enquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Project Details <span className="text-red-500">*</span></label>
                        <textarea 
                          rows={6}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 font-medium text-sm transition-all resize-none"
                          placeholder="Please provide specifics: cable types, desired lengths, and target site location..."
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit" 
                          disabled={isSending}
                          className="w-full bg-orange-600 text-white py-4 rounded-sm font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-lg flex items-center justify-center text-sm group disabled:opacity-50"
                        >
                          {isSending ? 'Syncing with Email Client...' : 'Dispatch Enquiry'} <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-4 italic">
                          Selecting dispatch will synchronize your local mail application to forward this brief directly to our engineering desk.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
