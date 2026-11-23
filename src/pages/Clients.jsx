import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ChevronRight, 
  Award,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { clients, clientSectors } from '../data/clients';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Clients({ embedded = false }) {
  useDocumentTitle('Our Esteemed Customers | Client Partners | TECHNO MECH TOOLINGS', !embedded);
  const { openQuoteModal } = useQuote();

  // Duplicate client list 3 times to ensure a seamless infinite scroll loop
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <div className={`font-sans text-[#1F2937] ${embedded ? 'py-4' : 'bg-white pb-16'}`}>
      
      {/* -------------------------------------------------------------
          KEYFRAMES: CONTINUOUS SMOOTH LEFT-TO-RIGHT MARQUEE ANIMATION
          ------------------------------------------------------------- */}
      <style>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-ltr {
          animation: scrollLeftToRight 35s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Trail (Standalone only) */}
        {!embedded && (
          <nav className="flex items-center space-x-2 text-xs font-mono text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-900 font-semibold">Clients</span>
          </nav>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1E2227] tracking-tight uppercase">
                Our Esteemed Customers :-
              </h2>
            </div>
            
            {/* Accent Underline */}
            <div className="flex items-center gap-1 mt-1.5 mb-2.5">
              <div className="w-12 h-1 bg-[#0284C7] rounded-full"></div>
              <div className="w-4 h-1 bg-[#F5B800] rounded-full"></div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl font-medium leading-relaxed">
              Supplying high-reliability solid carbide cutting tools and reconditioning services to Tier-1 automotive and precision engineering leaders across India.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal({ productName: 'OEM Tooling Vendor Supply Inquiry' })}
            className="bg-[#1E2227] hover:bg-black text-white font-bold text-xs px-4 py-2.5 rounded-md shadow-xs transition-all flex items-center gap-2 self-start md:self-auto shrink-0 cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>Inquire OEM Vendor Supply</span>
          </button>
        </div>

      </div>

      {/* =============================================================
          SMALL BOXES MOVING LEFT TO RIGHT ANIMATION (INFINITE MARQUEE)
          ============================================================= */}
      <div className="relative w-full overflow-hidden py-3 my-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        
        <div className="flex items-center gap-4 sm:gap-6 w-max animate-marquee-ltr">
          {marqueeList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => openQuoteModal({ productName: `Tooling for ${item.name} (${item.sector})` })}
              title={`${item.name} — ${item.group} (${item.sector})`}
              className="w-40 sm:w-48 h-20 sm:h-24 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#F5B800] p-3 flex flex-col items-center justify-center shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 group select-none relative"
            >
              {/* Logo Frame */}
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-10 sm:max-h-12 max-w-[125px] sm:max-w-[140px] object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Sub-label visible on hover */}
              <div className="absolute inset-x-1 bottom-1 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <span className="text-[9px] font-bold text-gray-600 bg-white/95 px-1.5 py-0.5 rounded shadow-2xs truncate block">
                  {item.group || item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Standalone Extra Content: Application Sectors & Contact Audit */}
      {!embedded && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          
          {/* Primary Industrial Sectors Strip */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-4 sm:p-5 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="shrink-0">
                <span className="text-[11px] font-mono font-bold text-[#D97706] uppercase tracking-wider block">
                  Primary Industrial Sectors
                </span>
                <h3 className="text-sm font-extrabold text-gray-900 mt-0.5">
                  Precision Applications Served
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 flex-1 max-w-3xl text-xs">
                {clientSectors.map((sector, sIdx) => (
                  <div 
                    key={sIdx}
                    className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded flex items-center gap-1.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="text-[11px] font-medium">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OEM Vendor Supply Audit Strip */}
          <div className="bg-[#1E2227] text-white rounded-lg p-5 sm:p-6 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">
                Planning a Tooling Audit or Batch Trial for Your Production Line?
              </h4>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-300">
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
              className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-5 py-2.5 rounded shadow-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>Request Plant Audit / Batch Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
