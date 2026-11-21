import React from 'react';
import { 
  FileText, 
  Check, 
  Clock, 
  Phone, 
  Mail,
  ArrowRight,
  ShieldCheck,
  RotateCw
} from 'lucide-react';
import { services } from '../data/services';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Services() {
  useDocumentTitle('Services | Re-Sharpening, Re-Fluting & Coating | TECHNO MECH TOOLINGS');
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1F2937] pb-16">
      
      {/* 1. COMPACT, CLEAN HEADER */}
      <section className="bg-[#F8FAFC] border-b border-[#E5E7EB] py-8 font-['Inter',_sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Services Header */}
              <h1 className="text-2xl sm:text-3xl font-black text-[#1E2227] tracking-tight font-['Inter',_sans-serif]">
                Services
              </h1>

              {/* Subhead with the 3 exact core offerings */}
              <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-2xl font-medium leading-relaxed font-['Inter',_sans-serif]">
                Precision CNC re-sharpening, OD re-fluting, and thin-film PVD recoating for solid carbide cutting tools.
              </p>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => openQuoteModal({ productName: 'Tool Re-sharpening & Recoating Batch' })}
              className="bg-[#1E2227] hover:bg-black text-white font-bold text-xs px-4 py-2.5 rounded-md shadow-xs transition-all flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Inquire Regrinding Batch</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. THE 3 AUTHENTIC SERVICES (Simple, Neat, Professional 3-Column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#E5E7EB] hover:border-[#F5B800] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              
              {/* Top Header Strip */}
              <div className="bg-[#F8FAFC] px-4 py-2.5 border-b border-[#E5E7EB] flex items-center justify-between font-['Inter',_sans-serif]">
                <span className="text-xs font-bold text-black font-['Inter',_sans-serif] uppercase tracking-wide">
                  {item.serviceTag}
                </span>
                <span className="text-[10px] font-['Inter',_sans-serif] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {item.turnaround}
                </span>
              </div>

              {/* Genuine Brochure Tool Photo Frame */}
              <div className="p-4 bg-white border-b border-gray-100">
                <div className={`grid ${item.images.length > 1 ? 'grid-cols-2 gap-2' : 'grid-cols-1'} items-center`}>
                  {item.images.map((img, imgIdx) => (
                    <div 
                      key={imgIdx}
                      className="h-32 bg-[#FAFBFD] border border-gray-200/80 rounded p-2 flex flex-col items-center justify-center relative group/img hover:border-amber-300 transition-colors"
                    >
                      <img 
                        src={img.src} 
                        alt={img.label} 
                        className="max-h-24 max-w-full object-contain filter drop-shadow-xs group-hover/img:scale-105 transition-transform"
                      />
                      <span className="text-[9px] font-['Inter',_sans-serif] text-gray-400 mt-1 truncate max-w-full text-center px-1">
                        {img.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h2 className="text-base font-bold text-gray-900 group-hover:text-[#D97706] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Concise Capabilities List */}
                  <ul className="pt-2 border-t border-gray-100 space-y-1.5 text-xs text-gray-700">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight text-gray-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-2 border-t border-gray-100">
                  <button
                    onClick={() => openQuoteModal({ productName: `${item.title} (${item.serviceTag})` })}
                    className="w-full bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs py-2 rounded shadow-2xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Inquire Re-sharpening</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPACT 4-STEP RECONDITIONING STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-4 sm:p-5 font-['Inter',_sans-serif]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            <div className="shrink-0 font-['Inter',_sans-serif]">
              <span className="text-xs font-bold text-black uppercase tracking-wider block font-['Inter',_sans-serif]">
                Standard Reconditioning Flow
              </span>
              <h3 className="text-base font-extrabold text-black mt-0.5 font-['Inter',_sans-serif]">
                4-Stage CNC Tool Restoration
              </h3>
            </div>

            {/* 4 Linear Step Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 max-w-3xl font-['Inter',_sans-serif]">
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <span className="text-black font-bold block text-xs tracking-wide">01. INSPECTION</span>
                <span className="text-black text-xs mt-0.5 block">Wear land &amp; crack check</span>
              </div>
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <span className="text-black font-bold block text-xs tracking-wide">02. 5-AXIS REGRIND</span>
                <span className="text-black text-xs mt-0.5 block">Diamond wheel sharpening</span>
              </div>
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <span className="text-black font-bold block text-xs tracking-wide">03. PVD COATING</span>
                <span className="text-black text-xs mt-0.5 block">AlTiN / TiAlN thin film</span>
              </div>
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <span className="text-black font-bold block text-xs tracking-wide">04. METROLOGY</span>
                <span className="text-black text-xs mt-0.5 block">Optical profile verify</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SIMPLE, NEAT INQUIRY CALLOUT STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-[#1E2227] text-white rounded-lg p-5 sm:p-6 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Send Worn Tool Batches for Sample Regrinding Trial
            </h4>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-300 font-['Inter',_sans-serif]">
              <a href="tel:+914424760000" className="flex items-center gap-1.5 hover:text-[#F5B800] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#F5B800]" />
                <span>+91 44 2476 0000</span>
              </a>
              <span className="text-gray-600 hidden sm:inline">&bull;</span>
              <a href="mailto:info@technomechtoolings.com" className="flex items-center gap-1.5 hover:text-[#F5B800] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#F5B800]" />
                <span>info@technomechtoolings.com</span>
              </a>
            </div>
          </div>

          <button
            onClick={() => openQuoteModal({ productName: 'Sample Tool Regrinding Trial' })}
            className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-5 py-2.5 rounded shadow-sm transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Request Trial Evaluation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}
