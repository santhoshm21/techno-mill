import React, { useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Info,
  Zap
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function CoatingAndSubstrateMatrix() {
  const { openQuoteModal } = useQuote();
  const [activeTab, setActiveTab] = useState('coatings'); // 'coatings' | 'substrates'
  const [selectedCoatingId, setSelectedCoatingId] = useState('altin');
  const [selectedSubstrateId, setSelectedSubstrateId] = useState('submicron');

  const coatings = [
    {
      id: 'tin',
      name: 'TiN (Titanium Nitride)',
      colorHex: '#FFD700',
      badgeColor: 'bg-amber-400 text-gray-950',
      gradient: 'from-[#FFD700] to-[#B8860B]',
      hardness: '2,300 HV',
      maxTemp: '600 °C',
      frictionCoeff: '0.40',
      coatingThickness: '2 – 4 µm',
      bestFor: 'General Purpose Steels, Brass & Standard Milling',
      description: 'The industry-standard baseline PVD coating offering low friction, high thermal resistance, and exceptional chip flow visibility on drills and end mills.'
    },
    {
      id: 'altin',
      name: 'AlTiN / TiAlN (Titanium Aluminium Nitride)',
      colorHex: '#8A2BE2',
      badgeColor: 'bg-purple-600 text-white',
      gradient: 'from-[#6B21A8] to-[#1E1B4B]',
      hardness: '3,300 HV',
      maxTemp: '900 °C',
      frictionCoeff: '0.35',
      coatingThickness: '3 – 5 µm',
      bestFor: 'Hardened Steels (< 55 HRC), Alloy Steels, Cast Iron & Dry Machining',
      description: 'Forms a self-healing nano-scale aluminium oxide protective layer at high cutting temperatures, dramatically extending tool life in high-speed, dry or minimum quantity lubrication (MQL) milling.'
    },
    {
      id: 'alcrn',
      name: 'AlCrN (Aluminium Chromium Nitride)',
      colorHex: '#94A3B8',
      badgeColor: 'bg-slate-700 text-white',
      gradient: 'from-[#64748B] to-[#334155]',
      hardness: '3,200 HV',
      maxTemp: '1,100 °C',
      frictionCoeff: '0.35',
      coatingThickness: '3 – 6 µm',
      bestFor: 'Heavy Roughing, Stainless Steel (SS304/316), Inconel & Titanium',
      description: 'Superior chemical resistance and hot-hardness up to 1,100°C. Protects against flank wear and crater wear during continuous high-feed milling of tough aerospace alloys.'
    },
    {
      id: 'dlc',
      name: 'DLC (Diamond-Like Carbon)',
      colorHex: '#1E293B',
      badgeColor: 'bg-gray-900 text-[#F5B800]',
      gradient: 'from-[#1E293B] to-[#0F172A]',
      hardness: '5,000+ HV',
      maxTemp: '400 °C',
      frictionCoeff: '0.08',
      coatingThickness: '1.5 – 2.5 µm',
      bestFor: 'Aluminium Alloys (High-Silicon), Copper, Composites & CFRP',
      description: 'Ultra-low friction coefficient (0.08) with near-diamond hardness. Completely prevents built-up edge (BUE) and aluminum chip adhesion on mirror-polished flutes.'
    }
  ];

  const substrates = [
    {
      id: 'submicron',
      grade: 'TMT-SM08 (Sub-Micron Grade)',
      grainSize: '0.6 – 0.8 µm',
      cobaltContent: '8.0 %',
      hardness: '92.5 HRA (1,650 HV30)',
      trs: '3,800 MPa',
      application: 'High-speed solid carbide drills, standard end mills, and step tools for general steel and cast iron machining.'
    },
    {
      id: 'ultrafine',
      grade: 'TMT-UF10 (Ultra-Fine Nano Grade)',
      grainSize: '0.4 – 0.5 µm',
      cobaltContent: '10.0 %',
      hardness: '93.5 HRA (1,850 HV30)',
      trs: '4,200 MPa',
      application: 'Precision micro-drills, high-shear ballnose cutters, and thin-wall aerospace milling where micro-chipping must be zero.'
    },
    {
      id: 'tough',
      grade: 'TMT-TG12 (Heavy-Duty Tough Grade)',
      grainSize: '0.8 – 1.0 µm',
      cobaltContent: '12.0 %',
      hardness: '91.5 HRA (1,520 HV30)',
      trs: '4,500 MPa',
      application: 'Interrupted cutting, heavy broaching, deep-hole gun drills, and un-stabilized workpiece setups requiring extreme fracture toughness.'
    }
  ];

  const currentCoating = coatings.find(c => c.id === selectedCoatingId) || coatings[0];
  const currentSubstrate = substrates.find(s => s.id === selectedSubstrateId) || substrates[0];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#F8FAFC] border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] mb-2">
              <Sparkles className="w-4 h-4 text-[#F5B800]" />
              <span>METALLURGY &amp; SURFACE SCIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Thin-Film PVD Coatings &amp; Sub-Micron Carbide Grades
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl">
              Extended cutting edge durability begins with metallurgy. Explore the specific carbide grain structures and multi-layer PVD thin-films engineered for your exact workpiece alloy.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex bg-white p-1 rounded-lg border border-gray-300 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab('coatings')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'coatings'
                  ? 'bg-[#1E2227] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>PVD Coatings</span>
            </button>
            <button
              onClick={() => setActiveTab('substrates')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'substrates'
                  ? 'bg-[#1E2227] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Carbide Substrates</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PVD COATINGS SELECTOR */}
        {activeTab === 'coatings' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 4 Cards (Buttons) */}
            <div className="lg:col-span-5 space-y-3">
              {coatings.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCoatingId(c.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedCoatingId === c.id
                      ? 'bg-white border-[#F5B800] shadow-md ring-2 ring-[#F5B800]/20'
                      : 'bg-white/80 hover:bg-white border-gray-200 hover:border-gray-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Metallic Color Indicator Ring */}
                    <div 
                      className={`w-9 h-9 rounded-full bg-gradient-to-tr ${c.gradient} shadow-md border-2 border-white shrink-0`}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">
                        {c.name}
                      </h4>
                      <div className="text-[11px] text-gray-500 font-mono mt-0.5">
                        Hardness: {c.hardness} &bull; Max: {c.maxTemp}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    selectedCoatingId === c.id ? 'text-[#D97706] translate-x-1' : 'text-gray-300'
                  }`} />
                </div>
              ))}
            </div>

            {/* Right Detailed Technical Spec Sheet */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentCoating.gradient} border border-gray-300 shadow-inner`} />
                  <div>
                    <h3 className="text-lg font-black text-gray-900">{currentCoating.name}</h3>
                    <span className="text-xs text-gray-500 font-mono">PVD Arc-Evaporation &amp; Magnetron Sputtered</span>
                  </div>
                </div>

                <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full ${currentCoating.badgeColor}`}>
                  TMT Certified PVD
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 mt-4 leading-relaxed font-normal">
                {currentCoating.description}
              </p>

              {/* 4 Technical Parameters Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-3 text-center">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Micro-Hardness</span>
                  <span className="text-sm font-extrabold text-gray-900 font-mono mt-0.5 block">{currentCoating.hardness}</span>
                </div>
                <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-3 text-center">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Max Service Temp</span>
                  <span className="text-sm font-extrabold text-gray-900 font-mono mt-0.5 block">{currentCoating.maxTemp}</span>
                </div>
                <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-3 text-center">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Friction Coeff.</span>
                  <span className="text-sm font-extrabold text-gray-900 font-mono mt-0.5 block">{currentCoating.frictionCoeff}</span>
                </div>
                <div className="bg-[#F8FAFC] border border-gray-200 rounded-lg p-3 text-center">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Layer Thickness</span>
                  <span className="text-sm font-extrabold text-gray-900 font-mono mt-0.5 block">{currentCoating.coatingThickness}</span>
                </div>
              </div>

              {/* Best For Workpiece Application */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/60 border border-amber-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-gray-900 uppercase tracking-wide">Target Workpiece Materials &amp; Applications</h5>
                  <p className="text-xs text-gray-700 mt-0.5 leading-relaxed">{currentCoating.bestFor}</p>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => openQuoteModal({ productName: `Tool Coating Request: ${currentCoating.name}` })}
                  className="bg-[#1E2227] hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-md transition-all flex items-center gap-2"
                >
                  <span>Request Tools With {currentCoating.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B800]" />
                </button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: TUNGSTEN CARBIDE SUBSTRATE GRADES */}
        {activeTab === 'substrates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {substrates.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-gray-200 hover:border-[#F5B800] rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                    <span className="text-[11px] font-mono text-[#D97706] font-bold uppercase">100% Virgin Sintered</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  </div>

                  <h3 className="text-base font-black text-gray-900 group-hover:text-[#D97706] transition-colors">
                    {s.grade}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {s.application}
                  </p>

                  <div className="mt-5 space-y-2.5 pt-4 border-t border-gray-100 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Grain Size:</span>
                      <span className="font-mono font-bold text-gray-800">{s.grainSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cobalt Content (Co):</span>
                      <span className="font-mono font-bold text-gray-800">{s.cobaltContent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Hardness:</span>
                      <span className="font-mono font-bold text-gray-800">{s.hardness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Bending Strength (TRS):</span>
                      <span className="font-mono font-bold text-gray-800">{s.trs}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => openQuoteModal({ productName: `Substrate Grade Inquiry: ${s.grade}` })}
                    className="w-full text-xs font-bold text-[#1E2227] hover:text-[#D97706] bg-gray-50 hover:bg-amber-50 py-2.5 rounded-md border border-gray-200 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Consult on Substrate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
