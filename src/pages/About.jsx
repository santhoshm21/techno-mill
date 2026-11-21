import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  ArrowRight
} from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function About({ embedded = false }) {
  useDocumentTitle('About Us | TECHNO MECH TOOLINGS (TMT)', !embedded);
  const { openQuoteModal } = useQuote();

  // Quick technical inquiry form state
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Solid Carbide Drills',
    requirement: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (inquiryForm.name && inquiryForm.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1F2937]">
      
      {/* 1. PAGE HEADER (Crisp Industrial Prestige) */}
      <section className="bg-[#F8FAFC] border-b border-[#E5E7EB] pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Pioneering Precision Solid Carbide Tooling &amp; Re-Sharpening Technology
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
              Techno Mech Toolings (TMT) is a premier Indian manufacturer and re-sharpening specialist of high-performance solid carbide cutting tools. We empower automotive, aerospace, die-mold, and precision engineering industries with custom-engineered tools that deliver superior cutting speeds, extended tool life, and significant cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PANORAMIC SAACKE CNC & TOOLING LINEUP SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm bg-white">
          
          {/* Header Bar */}
          <div className="bg-gray-900 text-white px-6 py-4">
            <h2 className="text-lg font-black tracking-tight">
              SAACKE UW I F 5-Axis CNC Grinding Center &amp; Complete 9-Tool Lineup
            </h2>
          </div>

          {/* Banner Container with exact sky-blue background to match genuine image canvas */}
          <div className="bg-[#5FC8EE] p-4 sm:p-6 lg:p-8 flex items-center justify-center">
            <img 
              src="/images/about/saacke-tooling-banner.png" 
              alt="SAACKE CNC-Grinding Center Model UW I F with 9-Tool Solid Carbide Cutting Tools Lineup" 
              className="w-full max-h-[380px] object-contain drop-shadow-md hover:scale-[1.01] transition-transform duration-300" 
            />
          </div>



        </div>
      </section>

      {/* 3. EXECUTIVE LEADERSHIP & FOUNDER'S VISION (S. MURUGAN, M.D.) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (4 cols): Executive Portrait Card */}
          <div className="lg:col-span-4 bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
            <div className="relative rounded-xl overflow-hidden bg-white aspect-[4/5] border border-gray-200 shadow-sm mb-5 flex items-center justify-center p-2">
              <img 
                src="/images/about/s-murugan-md.png" 
                alt="S. Murugan M.D - Managing Director, Techno Mech Toolings" 
                className="w-full h-full object-contain" 
              />
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-black text-gray-900">S. Murugan</h2>
              <div className="text-xs font-mono font-bold text-[#D97706] mt-0.5">M.D &amp; Chief Technical Director</div>
              <div className="text-xs text-gray-500 mt-1">Founder, Techno Mech Toolings</div>
            </div>
          </div>

          {/* Right Column (8 cols): Executive Vision & Guiding Mission */}
          <div className="lg:col-span-8 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center shadow-sm">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug mb-5">
                &quot;To be India’s Leading Innovator in Precision Solid Carbide Manufacturing &amp; Customized Re-Sharpening Technology.&quot;
              </h3>

              {/* Real Brochure Text verbatim */}
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  <strong>Techno Mech Toolings</strong> is a vision of Solid Carbide cutting tools Manufacturing and Re-Sharpening technology, backed by <strong>over nineteen years of dedicated experience</strong> in the precision engineering industry.
                </p>
                <p>
                  Our vision is to be a leader in Innovation and Introduction of Manufacturing &amp; Re-sharpening of Solid carbide tools — including <strong>Solid Carbide Drills, End Mills, Ballnose Cutters, Bull End Mills, Special Form Tools, and Inserts</strong> — through cutting-edge CNC technology, providing the highest quality tooling solutions to the Indian manufacturing industry with complete customized engineering.
                </p>
                <p>
                  We understand the commercial and operational pressures facing today&apos;s CNC machine shops and mass production plants. Our goal is simple: deliver tools with micron-accurate geometries that reduce cycle times, eliminate chatter, and maximize tool life per corner.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. RE-CYCLING & TOOLING COST-SAVING TECHNOLOGY SECTION */}
      <section className="bg-[#1E2227] text-white py-14 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                Innovative Re-cycling &amp; Cost Saving Concepts for Industry
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>
                  Techno Mech Toolings provides our customers with <strong>Value added services through Re-cycling of all used cutting tools</strong> using proven, innovative re-sharpening technology. Today, Techno Mech Toolings represents the full spectrum of what Solid Carbide Tool technology can offer in Manufacturing &amp; Re-sharpening.
                </p>
                <p>
                  Our advanced engineering techniques and dedicated facility ensure that almost all regular and innovative cutting tools can be precision re-sharpened, micro-honed, and then <strong>suitably thin-film PVD coated (AlTiN, TiAlN, or DLC)</strong>.
                </p>
                <p>
                  Today we cater to the re-sharpening requirements of businesses ranging from <strong>Small scale workshops to Large scale Tier-1 manufacturing plants</strong>, maintaining unwavering standards in Quality, Quantity, and In-Time Delivery.
                </p>
              </div>

              {/* CTA button */}
              <div className="pt-3">
                <button
                  onClick={() => openQuoteModal({ productName: 'Re-Sharpening & Re-Cycling Cost Saving Program' })}
                  className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-6 py-3 rounded-md shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Request a Tool Re-cycling Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Machine Showcase Column */}
            <div className="lg:col-span-5">
              <div className="bg-[#262B31] border border-gray-700 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                <h3 className="text-lg font-bold text-white mb-4">
                  Ecogrind 5-Axis CNC Tool &amp; Cutter Grinder
                </h3>

                {/* Real Ecogrind Machine Photo */}
                <div className="bg-white rounded-xl p-4 flex items-center justify-center border border-gray-600 aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/about/ecogrind-lx-machine.png" 
                    alt="Ecogrind LX Plus 5 Axis CNC Tool and Cutter Grinder Machine" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700/60 text-xs text-gray-300">
                  <span>Sub-micron Wheel Resolution</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DIRECT TECHNICAL INQUIRY / B2B QUOTE FORM (Clean, High-Conversion) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Info Pane */}
            <div className="lg:col-span-5 bg-[#1E2227] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white mb-3">
                  Consult With Our Tooling Specialists
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-normal mb-6">
                  Whether you require custom solid carbide drills for automotive crankshafts, high-shear end mills for aluminum aerospace brackets, or regrinding services for worn tool batches, our engineering desk is ready to assist.
                </p>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#F5B800] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Manufacturing Plant &amp; Office</div>
                      <div className="text-gray-400 text-[11px]">No.12, Industrial Estate, Chennai – 600 098, Tamil Nadu, India</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#F5B800] shrink-0" />
                    <div>
                      <div className="font-bold text-white">Telephone Inquiry</div>
                      <div className="text-gray-400 text-[11px] font-mono">+91 44 2476 0000 / +91 98400 00000</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#F5B800] shrink-0" />
                    <div>
                      <div className="font-bold text-white">Engineering Inquiries</div>
                      <div className="text-gray-400 text-[11px] font-mono">info@technomechtoolings.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-gray-400 font-mono">
                Operating Hours: Mon – Sat (08:30 AM – 06:30 PM IST)
              </div>
            </div>

            {/* Right Form Pane */}
            <div className="lg:col-span-7 p-8 sm:p-10 bg-[#FAFAFA]">
              <div className="mb-6">
                <h4 className="text-xl font-black text-gray-900 tracking-tight">
                  Request a Formal Tooling Quote or Trial
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your requirements below. Our technical department will evaluate your request and reply within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h5 className="font-bold text-base text-gray-900">Inquiry Received Successfully!</h5>
                  <p className="text-xs text-gray-600 max-w-md mx-auto">
                    Thank you, <strong>{inquiryForm.name}</strong>. Our tool engineering desk has logged your request for <strong>{inquiryForm.category}</strong> and will contact you at <strong>{inquiryForm.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setInquiryForm({ name: '', company: '', email: '', phone: '', category: 'Solid Carbide Drills', requirement: '' });
                    }}
                    className="text-xs text-[#D97706] font-bold underline pt-2 inline-block"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-md px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Plant Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Precision Components Ltd."
                        value={inquiryForm.company}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-md px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-md px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-md px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Tooling Category</label>
                    <select
                      value={inquiryForm.category}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, category: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-md px-3.5 py-2 text-xs text-gray-800 focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    >
                      <option value="Solid Carbide Drills">Solid Carbide Drills (Standard / Burnishing / Step)</option>
                      <option value="High-Performance End Mills">High-Performance End Mills (Variable Helix / Roughing)</option>
                      <option value="Ball Nose & Bull Nose Cutters">Ball Nose &amp; Bull Nose Cutters</option>
                      <option value="Precision Reamers">Precision Reamers (H7 Tolerance)</option>
                      <option value="Taper & Woodruff Cutters">Taper End Mills &amp; Woodruff Cutters</option>
                      <option value="Special Blueprint Tooling">Special Blueprint Custom Tooling</option>
                      <option value="Used Tool Re-Sharpening & PVD Coating">Used Tool Re-Sharpening &amp; PVD Coating</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Technical Requirements / Drawing Details</label>
                    <textarea
                      rows={3}
                      placeholder="Please specify diameter, workpiece material (e.g. EN8, SS304, Ti-6Al-4V), flute length, coating preference, or monthly batch quantities..."
                      value={inquiryForm.requirement}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, requirement: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-md px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F5B800] focus:ring-1 focus:ring-[#F5B800]"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">Strict NDA protection for custom blueprints.</span>
                    <button
                      type="submit"
                      className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-6 py-2.5 rounded-md shadow-sm transition-all flex items-center gap-1.5 transform active:scale-95"
                    >
                      <span>Submit Technical Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
