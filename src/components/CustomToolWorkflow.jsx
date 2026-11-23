import React, { useState } from 'react';
import { 
  FileText, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function CustomToolWorkflow() {
  const { openQuoteModal } = useQuote();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Blueprint & CAD Analysis',
      subtitle: 'Component Print Evaluation',
      badge: 'Step 1 &bull; 24-Hour Review',
      desc: 'Our design desk analyzes your component CAD model or 2D technical drawing. We verify critical hole tolerances, step depths, chamfer angles, and workpiece machinability (hardness, tensile strength).',
      deliverables: ['CAD Geometry Assessment', 'Recommended Helix & Rake Angles', 'Direct Cost Estimate']
    },
    {
      num: '02',
      title: '3D Simulation & Program',
      subtitle: '5-Axis Toolpath Modelling',
      badge: 'Step 2 &bull; Digital Twin',
      desc: 'Tool flute forms, clearance angles, core web taper, and coolant hole exit ports are simulated in specialized 3D CAM software with complete kinematic collision checks for the SAACKE 5-axis grinding wheel pack.',
      deliverables: ['Flute Cross-Section Modeling', 'Grinding Wheel Dressing Path', 'Optical Metrology Master File']
    },
    {
      num: '03',
      title: 'CNC Diamond Grinding',
      subtitle: 'SAACKE UW I F Precision',
      badge: 'Step 3 &bull; Sub-Micron Pass',
      desc: 'Using ultra-fine European sintered carbide rods, tools are CNC ground with synthetic diamond wheels under continuous chilled oil flood. Followed by robotic micro-edge honing to eliminate microscopic burrs.',
      deliverables: ['± 0.002 mm Dimensional Control', 'Mirror-Polished Flutes (Ra < 0.1 µm)', 'K-Factor Controlled Edge Honing']
    },
    {
      num: '04',
      title: 'PVD Coating & Optical QA',
      subtitle: '100% Inspection Certificate',
      badge: 'Step 4 &bull; Dispatch Ready',
      desc: 'Tools undergo multi-stage ultrasonic degreasing before thin-film PVD coating (TiN, AlTiN, AlCrN, or DLC). 100% of finished tools are certified on high-magnification optical profile projectors prior to laser engraving.',
      deliverables: ['100% Optical Inspection Report', 'Laser Engraved Tool ID / Batch Code', 'Secure Protective Packaging']
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-[#12161C] text-white border-t border-[#2D333B] font-sans relative overflow-hidden">
      {/* Background industrial grid */}
      <div className="absolute inset-0 industrial-grid-dark opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F5B800] mb-2 bg-[#1C222B] px-3.5 py-1 rounded-full border border-gray-800">
            <Cpu className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>CUSTOM ENGINEERING LIFECYCLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            From Blueprint to Finished Tooling
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            How Techno Mech Toolings transforms customer component blueprints into sub-micron solid carbide cutting tools in 4 precision stages.
          </p>
        </div>

        {/* 4 Steps Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-[#1C222B] border-[#F5B800] ring-2 ring-[#F5B800]/20 shadow-lg'
                  : 'bg-[#181D24] border-gray-800 hover:border-gray-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xl font-black font-mono ${
                    activeStep === idx ? 'text-[#F5B800]' : 'text-gray-500'
                  }`}>
                    {st.num}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    activeStep === idx ? 'bg-[#F5B800] text-[#1E2227] font-bold' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {st.subtitle}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                  {st.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-xs">
                <span className={`text-[11px] font-semibold ${
                  activeStep === idx ? 'text-[#F5B800]' : 'text-gray-500'
                }`}>
                  {activeStep === idx ? 'Viewing Details' : 'Click to View'}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                  activeStep === idx ? 'text-[#F5B800] translate-x-1' : 'text-gray-600'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Highlight Showcase Card */}
        <div className="bg-[#181D24] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F5B800] font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STAGE {steps[activeStep].num}: {steps[activeStep].subtitle.toUpperCase()}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                {steps[activeStep].desc}
              </p>

              {/* Deliverables Checklist */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block mb-2">
                  Key Verification Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div key={i} className="bg-[#12161C] border border-gray-800 p-2.5 rounded-lg flex items-center gap-2 text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B800] shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <div className="lg:col-span-4 bg-[#12161C] border border-gray-800 p-6 rounded-xl text-center space-y-3">
              <h4 className="text-sm font-bold text-white">Have a Workpiece Blueprint?</h4>
              <p className="text-xs text-gray-400">
                Send us your CAD file (.step, .dwg) or PDF drawing. Our application engineers provide free feasibility &amp; tooling recommendations.
              </p>
              <button
                onClick={() => openQuoteModal({ productName: 'Custom Tooling Blueprint Submission' })}
                className="w-full bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs py-2.5 rounded-md shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <span>Upload Blueprint / Request Drawing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
