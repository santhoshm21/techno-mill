import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ArrowRight, 
  ChevronRight, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { projects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Projects() {
  useDocumentTitle('Recent Developments & Projects | TECHNO MECH TOOLINGS');
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1F2937] pb-20">
      
      {/* 1. CLEAN BREADCRUMB & PAGE HEADER */}
      <section className="bg-[#F8FAFC] border-b border-[#E5E7EB] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Trail */}
          <nav className="flex items-center space-x-2 text-xs font-mono text-gray-500 mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-semibold">Projects</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5B800]" />
                <span>Original Engineering &bull; TMT Tooling</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Recent Developments
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed font-medium">
                Our latest custom-designed solid carbide cutting tools and specialized geometries developed for demanding industrial manufacturing applications.
              </p>
            </div>

            <button
              onClick={() => openQuoteModal({ productName: 'Custom Tooling Development' })}
              className="bg-[#1E2227] hover:bg-black text-white font-bold text-xs px-5 py-2.5 rounded-md shadow-sm transition-all self-start md:self-auto flex items-center gap-2 shrink-0"
            >
              <FileText className="w-4 h-4 text-[#F5B800]" />
              <span>Inquire Custom Development</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. RECENT DEVELOPMENTS CARDS GRID (Simple, Neat 3-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#E5E7EB] hover:border-amber-400 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Card Top Bar with Diameter Badge */}
              <div className="bg-[#F8FAFC] px-4 py-2.5 border-b border-[#E5E7EB] flex items-center justify-between">
                <span className="bg-[#F5B800] text-[#1E2227] font-black font-mono text-xs px-2.5 py-0.5 rounded shadow-2xs">
                  {item.diameter}
                </span>
                <span className="text-[11px] font-mono font-semibold text-gray-500 uppercase tracking-wider">
                  {item.toolType}
                </span>
              </div>

              {/* Photo Frame (Clean White Background with Real Tool Image) */}
              <div className="h-48 bg-white p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-[#FFFDF5] transition-colors border-b border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-base font-bold text-gray-900 group-hover:text-[#D97706] transition-colors leading-snug">
                    {item.name}
                  </h2>

                  {/* Official Brochure Statement */}
                  <p className="text-xs text-gray-600 italic leading-relaxed">
                    &quot;{item.officialDescription}&quot;
                  </p>

                  {/* Concise Technical Specs Box */}
                  <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-3 text-[11px] font-mono space-y-1.5 mt-3">
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="text-gray-400">Diameter:</span>
                      <span className="font-bold text-gray-900">{item.diameter}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="text-gray-400">Substrate:</span>
                      <span className="font-semibold text-gray-800">Sub-Micron Carbide</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span className="text-gray-400">Tolerance:</span>
                      <span className="font-semibold text-[#D97706]">±0.002 mm – ±0.004 mm</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600 pt-1 border-t border-gray-200/60">
                      <span className="text-gray-400">Application:</span>
                      <span className="font-semibold text-gray-800 truncate max-w-[170px]" title={item.specs.application}>
                        {item.specs.application.split(',')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => openQuoteModal({ productName: item.name, sku: item.diameter })}
                    className="w-full bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs py-2.5 rounded-md shadow-2xs transition-all flex items-center justify-center gap-1.5 transform active:scale-95"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Request Tool Quote &amp; Drawing</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. SIMPLE, PROFESSIONAL CAD BLUEPRINT CONSULTATION CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-[#1E2227] text-white rounded-xl p-8 sm:p-10 shadow-sm border border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F5B800]">
                <ShieldCheck className="w-4 h-4" />
                <span>Custom Blueprint Development</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Need a Custom Tool Manufactured to Your Blueprint?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Send your component CAD drawings or step-hole specifications to our engineering department. We evaluate feasibility and supply custom prototype tools in 5 to 7 business days.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => openQuoteModal({ productName: 'Custom Blueprint Development' })}
                className="w-full sm:w-auto bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-6 py-3 rounded-md shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>Upload Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-5 py-3 rounded-md transition-colors text-center border border-white/20"
              >
                Contact Engineering
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
