import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Clock, 
  Target 
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function IndustrySolutions() {
  const { openQuoteModal } = useQuote();
  const [activeSectorId, setActiveSectorId] = useState('automotive');

  const sectors = [
    {
      id: 'automotive',
      title: 'Automotive & EV Powertrain',
      badge: 'Tier-1 High Volume',
      workpieceComponents: 'Crankshaft deep oil holes, transmission valve blocks, steering knuckles, EV rotor housings, brake disc carriers',
      commonMaterials: 'Grey Iron (GG25), Ductile Iron (GGG40), Forged Steel (42CrMo4), Aluminium (A356/A380)',
      targetRa: 'Ra < 0.4 µm',
      cycleTimeGain: '32% Faster Cycle Time',
      recommendedTools: ['Two-Step Carbide Oil-Hole Drills', 'Burnishing Reamers with Through-Coolant', 'Custom Form Chamfer Cutters'],
      description: 'Engineered for continuous multi-spindle transfer lines and CNC machining centers demanding maximum tool life per corner with zero thermal deformation.'
    },
    {
      id: 'aerospace',
      title: 'Aerospace & Defense',
      badge: 'Sub-Micron Tolerances',
      workpieceComponents: 'Turbine blisks, landing gear struts, titanium structural ribs, aero-engine heat shield casings',
      commonMaterials: 'Titanium Ti-6Al-4V, Inconel 718, Stainless 15-5PH, Monel, 7075-T6 Aerospace Aluminum',
      targetRa: 'Ra < 0.2 µm',
      cycleTimeGain: '40% Extended Edge Life',
      recommendedTools: ['AlCrN-Coated Multi-Flute Roughers', 'Micro-Radius Ballnose End Mills', 'Through-Coolant Gun Drills'],
      description: 'Precision diamond-ground tool geometries designed to suppress harmonic chatter, resist work-hardening, and maintain micro-edge integrity in tough heat-resistant superalloys.'
    },
    {
      id: 'die-mold',
      title: 'Die & Mold Manufacturing',
      badge: 'Hard Machining < 65 HRC',
      workpieceComponents: 'Plastic injection molds, hot-forging dies, progressive stamping punches, blow mold cavity cores',
      commonMaterials: 'NAK80, SKD11, SKD61, H13 Tool Steel (pre-hardened to 52-62 HRC), Tungsten Carbide Preforms',
      targetRa: 'Ra < 0.1 µm Mirror Finish',
      cycleTimeGain: '45% Less Manual Polishing',
      recommendedTools: ['High-Feed Bullnose Cutters', 'Long-Neck Rib Processing End Mills', 'Hard-Steel Diamond Coated Drills'],
      description: 'Micro-honed cutting edges combined with high-temperature AlTiN nano-coatings enable direct CNC milling of hardened tool steels, eliminating secondary EDM electrodes.'
    },
    {
      id: 'hydraulics',
      title: 'Hydraulics & Heavy Precision',
      badge: 'H7 Bore Tolerance',
      workpieceComponents: 'Proportional hydraulic valve bodies, high-pressure pump manifolds, excavator boom cylinders, subsea connectors',
      commonMaterials: 'Cast Carbon Steel (WCB), Stainless Steel 316L, Bronze, Spheroidal Graphite Iron',
      targetRa: 'Ra < 0.3 µm',
      cycleTimeGain: '50% Savings vs Single Reamer',
      recommendedTools: ['Hole Mill Cum Reamer Combination', 'Multi-Margin Helical Reamers', 'Woodruff Keyway Cutters'],
      description: 'Simultaneous drilling, step chamfering, and bore sizing in a single CNC cycle, eliminating multi-tool indexing and guaranteeing coaxial concentricity below 0.003 mm.'
    }
  ];

  const currentSector = sectors.find(s => s.id === activeSectorId) || sectors[0];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-gray-200 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] mb-2">
              <Target className="w-4 h-4 text-[#F5B800]" />
              <span>APPLICATION-SPECIFIC ENGINEERING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
              Specialized Tooling by Industry Sector
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl">
              From mass-production automotive crankshafts to high-temp aerospace alloys, TMT custom solid carbide tools are tailored for specific chip evacuation and thermal challenges.
            </p>
          </div>
        </div>

        {/* 4 Industry Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {sectors.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSectorId(sec.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeSectorId === sec.id
                  ? 'bg-[#1E2227] text-white border-[#F5B800] shadow-md ring-2 ring-[#F5B800]/20'
                  : 'bg-[#F8FAFC] hover:bg-gray-100 text-gray-800 border-gray-200'
              }`}
            >
              <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                activeSectorId === sec.id ? 'bg-[#F5B800] text-[#1E2227]' : 'bg-gray-200 text-gray-700'
              }`}>
                {sec.badge}
              </span>
              <h3 className="text-sm font-bold mt-2.5 leading-snug">
                {sec.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Industry Deep-Dive Panel */}
        <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: Technical parameters */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                  {currentSector.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                {currentSector.description}
              </p>

              {/* Workpiece & Material Info */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="bg-white border border-gray-200 p-3.5 rounded-lg">
                  <span className="font-bold text-gray-900 block mb-1">Key Workpiece Components:</span>
                  <span className="text-gray-600 leading-relaxed">{currentSector.workpieceComponents}</span>
                </div>

                <div className="bg-white border border-gray-200 p-3.5 rounded-lg">
                  <span className="font-bold text-gray-900 block mb-1">Workpiece Materials:</span>
                  <span className="text-gray-600 leading-relaxed font-mono">{currentSector.commonMaterials}</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Metrics & Recommended Tooling Lineup */}
            <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-5">
              <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                Target Performance Benchmarks
              </h4>

              {/* 2 Key Metric Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-amber-50/70 border border-amber-200 p-3 rounded-lg text-center">
                  <span className="text-[10px] text-[#D97706] uppercase font-mono block">Surface Finish</span>
                  <span className="text-base font-black text-gray-900 font-mono mt-0.5 block">{currentSector.targetRa}</span>
                </div>
                <div className="bg-emerald-50/70 border border-emerald-200 p-3 rounded-lg text-center">
                  <span className="text-[10px] text-emerald-700 uppercase font-mono block">Productivity Gain</span>
                  <span className="text-base font-black text-emerald-900 font-mono mt-0.5 block">{currentSector.cycleTimeGain}</span>
                </div>
              </div>

              {/* Recommended Tool Lineup */}
              <div>
                <span className="text-xs font-bold text-gray-900 block mb-2">Recommended TMT Tool Lineup:</span>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {currentSector.recommendedTools.map((tool, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B800] shrink-0" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal({ productName: `Industry Solution Inquiry: ${currentSector.title}` })}
                  className="w-full bg-[#1E2227] hover:bg-black text-white text-xs font-bold py-2.5 rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Engineering Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B800]" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
