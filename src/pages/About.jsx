import React from 'react';
import { 
  ArrowRight
} from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function About({ embedded = false }) {
  useDocumentTitle('About Us | TECHNO MECH TOOLINGS (TMT)', !embedded);
  const { openQuoteModal } = useQuote();

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

      {/* 3. EXECUTIVE LEADERSHIP & FOUNDER'S VISION (S. MURUGAN, M.D.) (Gray Background) */}
      <section className="w-full bg-[#F3F4F6] py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column (4 cols): Executive Portrait Card */}
            <div className="lg:col-span-4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <div className="relative rounded-xl overflow-hidden bg-white aspect-[4/5] border border-gray-100 shadow-sm mb-5 flex items-center justify-center p-2">
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
            <div className="lg:col-span-8 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center shadow-sm">
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
        </div>
      </section>

      {/* 4. RE-CYCLING & TOOLING COST-SAVING TECHNOLOGY SECTION (Brand Yellow Background) */}
      <section className="bg-[#F5B800] text-[#111827] py-14 border-t border-amber-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-[#111827]">
                Innovative Re-cycling &amp; Cost Saving Concepts for Industry
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#111827]/85 font-medium leading-relaxed">
                <p>
                  Techno Mech Toolings provides our customers with <strong className="font-bold text-[#111827]">Value added services through Re-cycling of all used cutting tools</strong> using proven, innovative re-sharpening technology. Today, Techno Mech Toolings represents the full spectrum of what Solid Carbide Tool technology can offer in Manufacturing &amp; Re-sharpening.
                </p>
                <p>
                  Our advanced engineering techniques and dedicated facility ensure that almost all regular and innovative cutting tools can be precision re-sharpened, micro-honed, and then <strong className="font-bold text-[#111827]">suitably thin-film PVD coated (AlTiN, TiAlN, or DLC)</strong>.
                </p>
                <p>
                  Today we cater to the re-sharpening requirements of businesses ranging from <strong className="font-bold text-[#111827]">Small scale workshops to Large scale Tier-1 manufacturing plants</strong>, maintaining unwavering standards in Quality, Quantity, and In-Time Delivery.
                </p>
              </div>

              {/* CTA button */}
              <div className="pt-3">
                <button
                  onClick={() => openQuoteModal({ productName: 'Re-Sharpening & Re-Cycling Cost Saving Program' })}
                  className="bg-[#111827] hover:bg-black text-white hover:text-[#F5B800] font-bold text-xs px-6 py-3 rounded-md shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Request a Tool Re-cycling Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Machine Showcase Column */}
            <div className="lg:col-span-5">
              <div className="bg-[#111827] border border-black/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
                <h3 className="text-lg font-bold text-white mb-4">
                  Ecogrind 5-Axis CNC Tool &amp; Cutter Grinder
                </h3>

                {/* Real Ecogrind Machine Photo */}
                <div className="bg-white rounded-xl p-4 flex items-center justify-center border border-gray-700 aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/about/ecogrind-lx-machine.png" 
                    alt="Ecogrind LX Plus 5 Axis CNC Tool and Cutter Grinder Machine" 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-300">
                  <span>Sub-micron Wheel Resolution</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
