import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Cpu, 
  Compass, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  FileText, 
  Search, 
  Sliders, 
  Zap, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { facilityData } from '../data/facility';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Facility({ embedded = false }) {
  useDocumentTitle('Infrastructure & Manufacturing Facility | TECHNO MECH TOOLINGS', !embedded);
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1F2937] pb-20">
      
      {/* 1. TOP HEADER BANNER (Cakrawala Clean Industrial Style) */}
      <div className="bg-[#1E2227] text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F5B800] relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 industrial-grid-dark opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              {/* Cakrawala-style small yellow tag with 3 dots */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-bold tracking-widest uppercase bg-[#F5B800] text-[#1E2227] px-2.5 py-0.5 rounded-sm">
                  {facilityData.header}
                </span>
                <span className="text-[#F5B800] text-sm tracking-wider font-bold">● ● ●</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
                Manufacturing Facility
              </h1>
              <p className="text-sm text-gray-300 mt-2 max-w-2xl font-medium">
                {facilityData.tagline} • Spread over 2000 SFT area with fully automatic CNC grinding machinery &amp; comprehensive quality metrology.
              </p>
            </div>

            {/* Quick Stats Pill Strip */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
              {facilityData.stats.map((st, idx) => (
                <div key={idx} className="bg-[#262B31] border border-gray-700 p-3 rounded text-center min-w-[120px]">
                  <div className="text-base sm:text-lg font-black text-[#F5B800] font-mono leading-tight">
                    {st.value}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 mt-0.5 tracking-wider">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. INFRASTRUCTURE CAPABILITIES OVERVIEW (Cakrawala "Our Offers" / Split Block) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Yellow Accent Block with 5 Core Highlights from Image 1 */}
            <div className="lg:col-span-5 bg-[#F5B800] p-8 sm:p-10 flex flex-col justify-between text-[#1E2227] relative">
              {/* Corner Fold Ribbon Motif */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                <div className="bg-[#E0A800] w-16 h-16 transform rotate-45 translate-x-8 -translate-y-8"></div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#1E2227]/80">
                    Capabilities Snapshot
                  </span>
                  <span className="text-xs font-bold">● ● ●</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight uppercase mb-4">
                  Fully Integrated Tooling Facility
                </h2>
                <p className="text-xs sm:text-sm text-[#1E2227]/90 leading-relaxed mb-6 font-medium">
                  State-of-the-art infrastructure dedicated to solid carbide cutting tools, micro-drills, high-efficiency milling cutters, and custom special form tools.
                </p>

                {/* 5 Real Bullet Points from Image 1 */}
                <div className="space-y-3">
                  {facilityData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/90 p-3 rounded shadow-sm border border-black/5">
                      <div className="w-6 h-6 rounded-full bg-[#1E2227] text-[#F5B800] flex items-center justify-center shrink-0 text-xs font-black mt-0.5">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-black text-gray-900 tracking-tight">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-gray-600 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between text-xs font-bold">
                <span>Member of Tools Association</span>
                <span className="font-mono">TMT INFRASTRUCTURE</span>
              </div>
            </div>

            {/* Right Column: Key Machinery Feature Showcase (Cakrawala "Our News" Style) */}
            <div className="lg:col-span-7 p-8 sm:p-10 bg-[#F8FAFC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D97706] font-mono flex items-center gap-1.5">
                      <span>Primary Machinery Setup</span>
                      <span>● ● ●</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1 uppercase">
                      Manufacturing Machinery
                    </h3>
                  </div>

                  <button
                    onClick={() => openQuoteModal({ productName: 'Manufacturing Facility Capacity Inquiry' })}
                    className="hidden sm:inline-flex items-center gap-1.5 bg-[#1E2227] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded transition-colors"
                  >
                    <span>Inquire Capacity</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {facilityData.machines.map((mach) => (
                    <div 
                      key={mach.id}
                      className="bg-white border-2 border-gray-200 hover:border-[#F5B800] rounded-lg p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative"
                    >
                      {/* Cakrawala signature yellow top corner tab */}
                      <div className="absolute -top-2 -left-2 bg-[#F5B800] text-[#1E2227] text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded shadow">
                        {mach.category}
                      </div>

                      <div>
                        {/* Real Cropped Machine Photo Frame */}
                        <div className="aspect-[4/3] bg-white border border-gray-200 rounded p-2 flex items-center justify-center overflow-hidden mb-4 mt-2">
                          <img 
                            src={mach.image} 
                            alt={mach.name} 
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                          />
                        </div>

                        {/* Machine Name from Image 1 */}
                        <h4 className="font-black text-sm text-gray-900 group-hover:text-[#D97706] transition-colors leading-tight mb-2">
                          {mach.name}
                        </h4>

                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                          {mach.description}
                        </p>

                        <div className="space-y-1.5 border-t border-gray-100 pt-3">
                          {mach.specs.slice(0, 2).map((sp, i) => (
                            <div key={i} className="text-[11px] text-gray-600 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800] shrink-0"></span>
                              <span className="truncate">{sp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                          {mach.badge}
                        </span>
                        <button
                          onClick={() => openQuoteModal({ productName: `Machine Technical Trial: ${mach.name}` })}
                          className="text-xs font-bold text-gray-800 hover:text-[#D97706] flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. QUALITY INSPECTION INSTRUMENTS SECTION (Cakrawala 4-Card Presentation Grid - Hidden on Home Page) */}
      {!embedded && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 border-b-2 border-gray-200 mb-8 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D97706]">
                Non-Destructive &amp; Optical Metrology
              </span>
              <span className="text-[#F5B800] text-sm tracking-wider font-bold">● ● ●</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight">
              Quality Inspection Instruments
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xl">
              100% precision inspection instruments ensuring sub-micron concentricity, relief angles, and surface finish.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-gray-100 px-3 py-1.5 rounded border border-gray-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Calibrated &amp; Traceable Standards</span>
          </div>
        </div>

        {/* 4 Clean Instruments Cards Grid (from Image 1 data & photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityData.instruments.map((inst, idx) => (
            <div 
              key={inst.id}
              className="bg-white border-2 border-gray-200 hover:border-[#F5B800] rounded-lg p-4 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group relative"
            >
              {/* Top Accent Fold Number Tab */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold bg-[#1E2227] text-[#F5B800] px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase">
                  {inst.category}
                </span>
              </div>

              <div>
                {/* Real Cropped Instrument Photo Frame */}
                <div className="aspect-[4/3] bg-white border border-gray-200 rounded p-3 flex items-center justify-center overflow-hidden mb-3 group-hover:bg-[#FFFBEB] transition-colors">
                  <img 
                    src={inst.image} 
                    alt={inst.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>

                {/* Instrument Name from Image 1 */}
                <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#D97706] transition-colors leading-tight mb-1.5 line-clamp-2">
                  {inst.name}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-3">
                  {inst.description}
                </p>
              </div>

              {/* Specs & Inspection Tag */}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <div className="text-[10px] font-mono text-gray-600 bg-gray-50 p-1.5 rounded border border-gray-200 leading-tight">
                  {inst.specs}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>In-House Active</span>
                  </span>
                  <button
                    onClick={() => openQuoteModal({ productName: `Metrology Inspection via ${inst.name}` })}
                    className="text-[11px] font-bold text-[#D97706] hover:underline"
                  >
                    Report Inquiry &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
      )}

      {/* 4. CREDENTIALS SECTION (Cakrawala "Our Four Point" / High-Impact Style - Hidden on Home Page) */}
      {!embedded && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D97706]">
              Core Strengths &amp; Compliance
            </span>
            <span className="text-[#F5B800] text-sm tracking-wider font-bold">● ● ●</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Credentials
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Upholding engineering integrity, skilled craftsmanship, and industry association standards.
          </p>
        </div>

        {/* 5 Credential Cards with Cakrawala Folded-Tab Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {facilityData.credentials.map((cred) => (
            <div 
              key={cred.number}
              className="bg-white border-2 border-gray-200 hover:border-[#F5B800] rounded-lg p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden font-['Inter',_sans-serif]"
            >
              {/* Top Yellow Bar Accent */}
              <div className="h-1.5 bg-[#F5B800] w-full absolute top-0 left-0"></div>

              <div>
                <div className="flex items-center justify-between mb-3 mt-1">
                  {/* Number Badge */}
                  <span className="w-10 h-10 rounded bg-[#1E2227] text-[#F5B800] group-hover:bg-[#F5B800] group-hover:text-[#1E2227] flex items-center justify-center font-black text-sm transition-colors shadow">
                    {cred.number}
                  </span>
                  <Award className="w-5 h-5 text-gray-400 group-hover:text-[#F5B800] transition-colors" />
                </div>

                {/* Relevant Image Frame for Each Box */}
                {cred.image && (
                  <div className="h-28 w-full bg-[#FAFBFD] border border-gray-200/80 rounded-md overflow-hidden mb-3.5 flex items-center justify-center p-2 group-hover:border-amber-300 transition-colors">
                    <img 
                      src={cred.image} 
                      alt={cred.title}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <h3 className="font-black text-sm text-gray-900 mb-2 leading-tight">
                  {cred.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                TMT Standard
              </div>
            </div>
          ))}
        </div>

      </section>
      )}

      {/* 5. CALL TO ACTION STRIP (Cakrawala Style Yellow & Charcoal - Hidden on Home Page) */}
      {!embedded && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#1E2227] text-white rounded-lg p-8 sm:p-10 border-2 border-[#F5B800] relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5B800]">
                  Facility Tour &amp; Supplier Audit
                </span>
                <span className="text-[#F5B800] text-sm">● ● ●</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Inspect Our Manufacturing &amp; Testing Facility
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                We welcome quality audit teams and tooling procurement heads to visit our 2000 SFT plant, review our SAACKE &amp; Ecogrind 5-axis CNC grinding centers, and witness our optical metrology workflows firsthand.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => openQuoteModal({ productName: 'Plant Visit & Supplier Quality Audit Request' })}
                className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-black text-xs sm:text-sm px-6 py-3 rounded shadow-md transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Schedule Plant Audit</span>
              </button>
              
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white border border-gray-600 font-bold text-xs px-5 py-2.5 rounded transition-colors text-center"
              >
                Contact Factory Desk
              </Link>
            </div>

          </div>
        </div>
      </section>
      )}

    </div>
  );
}
