import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ChevronRight, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Award,
  Layers
} from 'lucide-react';
import { clients, clientSectors } from '../data/clients';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Clients({ embedded = false }) {
  useDocumentTitle('Our Esteemed Customers | Client Partners | TECHNO MECH TOOLINGS', !embedded);
  const { openQuoteModal } = useQuote();

  return (
    <div className="bg-[#FFFFFF] font-sans text-[#1F2937] pb-16">
      
      {/* 1. COMPACT, CLEAN BREADCRUMB & HEADER */}
      <section className="bg-[#F8FAFC] border-b border-[#E5E7EB] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Trail */}
          {!embedded && (
            <nav className="flex items-center space-x-2 text-xs font-mono text-gray-500 mb-2.5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-black transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900 font-semibold">Clients</span>
            </nav>
          )}

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              {/* Brochure-inspired "OUR ESTEEMED CUSTOMERS :-" Header */}
              <div className="flex items-baseline gap-2">
                <h1 className="text-2xl sm:text-3xl font-black text-[#1E2227] tracking-tight uppercase">
                  Our Esteemed Customers :-
                </h1>
              </div>
              {/* Accent Underline inspired by brochure */}
              <div className="flex items-center gap-1 mt-1.5 mb-2.5">
                <div className="w-12 h-1 bg-[#0284C7] rounded-full"></div>
                <div className="w-4 h-1 bg-[#F5B800] rounded-full"></div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-medium leading-relaxed">
                Supplying high-reliability solid carbide cutting tools and reconditioning services to Tier-1 automotive and precision engineering leaders across India.
              </p>
            </div>

            <button
              onClick={() => openQuoteModal({ productName: 'OEM Tooling Vendor Inquiry' })}
              className="bg-[#1E2227] hover:bg-black text-white font-bold text-xs px-4 py-2.5 rounded-md shadow-xs transition-all flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <Award className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Inquire OEM Vendor Supply</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. THE 11 AUTHENTIC CLIENTS (Simple, Neat 4-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {clients.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#E5E7EB] hover:border-[#F5B800] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              
              {/* Logo Frame (Clean, Pure White Canvas with subtle border) */}
              <div className="h-24 bg-[#FAFAFA] border-b border-gray-100 p-3 flex items-center justify-center group-hover:bg-[#FFFDF5] transition-colors relative">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-12 max-w-[145px] object-contain filter group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-[#D97706] uppercase tracking-wider block">
                    {item.group}
                  </span>
                  <h2 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#D97706] transition-colors leading-tight">
                    {item.name}
                  </h2>
                  <p className="text-[11px] text-gray-500 leading-snug line-clamp-2">
                    {item.sector}
                  </p>
                </div>

                {/* Tooling Supplied Badge & Action */}
                <div className="pt-2 border-t border-gray-100 space-y-2">
                  <div className="text-[10px] font-mono text-gray-600 bg-gray-50 border border-gray-200/80 rounded px-2 py-1 truncate" title={item.toolingSupplied}>
                    <span className="text-gray-400 font-sans">Tooling: </span>{item.toolingSupplied}
                  </div>

                  <button
                    onClick={() => openQuoteModal({ productName: `Tooling for ${item.sector} (${item.name})` })}
                    className="w-full bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-400 text-gray-800 hover:text-[#D97706] font-semibold text-[11px] py-1.5 rounded transition-all flex items-center justify-center gap-1"
                  >
                    <span>Request Similar Tooling</span>
                    <ArrowRight className="w-3 h-3 text-[#D97706]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. COMPACT APPLICATION SECTORS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            <div className="shrink-0">
              <span className="text-[11px] font-mono font-bold text-[#D97706] uppercase tracking-wider block">
                Primary Industrial Sectors
              </span>
              <h3 className="text-sm font-extrabold text-gray-900 mt-0.5">
                Precision Applications Served
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 flex-1 max-w-3xl text-xs font-mono">
              {clientSectors.map((sector, sIdx) => (
                <div 
                  key={sIdx}
                  className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded flex items-center gap-1.5 shadow-2xs"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="text-[11px] font-medium font-sans">{sector}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. SIMPLE, NEAT OEM VENDOR INQUIRY STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-[#1E2227] text-white rounded-lg p-5 sm:p-6 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Planning a Tooling Audit or Batch Trial for Your Production Line?
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
            onClick={() => openQuoteModal({ productName: 'Plant Tooling Audit / Batch Trial' })}
            className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-5 py-2.5 rounded shadow-sm transition-all flex items-center gap-1.5 shrink-0"
          >
            <span>Request Plant Audit / Batch Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}
