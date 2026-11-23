import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  RotateCw, 
  Gauge, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  SlidersHorizontal 
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export default function MachiningCalculator() {
  const { openQuoteModal } = useQuote();

  const [operation, setOperation] = useState('drilling'); // 'drilling' | 'milling' | 'reaming'
  const [diameter, setDiameter] = useState(10); // in mm
  const [material, setMaterial] = useState('alloy-steel');
  const [flutes, setFlutes] = useState(2);

  const materials = [
    { id: 'mild-steel', name: 'Mild / Low Carbon Steel (< 200 HB)', baseVcDrill: 110, baseVcMill: 140, baseVcReam: 28, fzMultiplier: 1.0 },
    { id: 'alloy-steel', name: 'Alloy / Die Steel (30 - 45 HRC)', baseVcDrill: 75, baseVcMill: 95, baseVcReam: 20, fzMultiplier: 0.8 },
    { id: 'stainless', name: 'Stainless Steel (SS304 / 316L)', baseVcDrill: 60, baseVcMill: 80, baseVcReam: 15, fzMultiplier: 0.7 },
    { id: 'cast-iron', name: 'Cast Iron (Grey / Ductile)', baseVcDrill: 95, baseVcMill: 120, baseVcReam: 24, fzMultiplier: 1.1 },
    { id: 'aluminum', name: 'Aluminium Alloys (6061 / 7075)', baseVcDrill: 280, baseVcMill: 350, baseVcReam: 65, fzMultiplier: 1.5 },
    { id: 'titanium', name: 'Titanium & High-Temp Nickel Alloys', baseVcDrill: 32, baseVcMill: 45, baseVcReam: 10, fzMultiplier: 0.55 }
  ];

  const currentMat = materials.find(m => m.id === material) || materials[1];

  // Calculations
  const calculated = useMemo(() => {
    let vc = currentMat.baseVcDrill;
    let baseFz = 0.08;

    if (operation === 'milling') {
      vc = currentMat.baseVcMill;
      baseFz = 0.045;
    } else if (operation === 'reaming') {
      vc = currentMat.baseVcReam;
      baseFz = 0.12;
    }

    // Diameter factor
    const dFactor = Math.sqrt(diameter / 10);
    const fz = parseFloat((baseFz * currentMat.fzMultiplier * dFactor).toFixed(3));

    // RPM = (Vc * 1000) / (PI * D)
    const rpm = Math.round((vc * 1000) / (Math.PI * diameter));

    // Feed Rate (mm/min) = RPM * fz * z (for drilling, z=1 for revolution feed calculation)
    const effectiveZ = operation === 'drilling' ? 2 : (operation === 'reaming' ? 1 : flutes);
    const feedRate = Math.round(rpm * fz * (operation === 'drilling' ? 1 : effectiveZ));

    // Coolant recommendation
    let coolant = 'Through-Tool Coolant (20–40 bar) Recommended';
    if (material === 'aluminum') {
      coolant = 'Flood Coolant or Emulsion 8–10% Concentration';
    } else if (material === 'alloy-steel' && operation === 'milling') {
      coolant = 'Air Blast / MQL Mist Preferred with AlTiN Coating';
    }

    return {
      vc,
      rpm,
      fz,
      feedRate,
      coolant
    };
  }, [operation, diameter, material, flutes, currentMat]);

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] mb-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Calculator className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>CNC MACHINING PARAMETERS ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            Speeds &amp; Feeds Machining Calculator
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Calculate estimated spindle RPM, surface cutting speed (\(V_c\)), feed per tooth (\(f_z\)), and table feed rate (\(V_f\)) optimized for TMT solid carbide tools.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#12161C] border border-[#2D333B] rounded-2xl shadow-xl overflow-hidden text-white">
          
          {/* Left Inputs Pane (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* 1. Operation Selector */}
            <div>
              <label className="text-xs font-mono text-gray-400 uppercase font-semibold block mb-2">
                1. Select Machining Operation
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'drilling', label: 'Solid Drilling' },
                  { id: 'milling', label: 'Side & End Milling' },
                  { id: 'reaming', label: 'Precision Reaming' }
                ].map((op) => (
                  <button
                    key={op.id}
                    onClick={() => {
                      setOperation(op.id);
                      if (op.id === 'drilling') setFlutes(2);
                      if (op.id === 'milling') setFlutes(4);
                      if (op.id === 'reaming') setFlutes(6);
                    }}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                      operation === op.id
                        ? 'bg-[#F5B800] text-[#1E2227] border-[#F5B800] shadow-md'
                        : 'bg-[#1C222B] text-gray-300 border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {op.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Workpiece Material Selector */}
            <div>
              <label className="text-xs font-mono text-gray-400 uppercase font-semibold block mb-2">
                2. Workpiece Material Group
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full bg-[#1C222B] border border-gray-700 rounded-lg py-2.5 px-3 text-xs text-white focus:outline-none focus:border-[#F5B800]"
              >
                {materials.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Tool Diameter Slider + Quick Pills */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-gray-400 uppercase font-semibold">
                  3. Tool Diameter: <span className="text-[#F5B800] font-black font-mono">Φ {diameter} mm</span>
                </label>
                <span className="text-[11px] text-gray-400 font-mono">Range: 2.0 mm – 32.0 mm</span>
              </div>
              <input
                type="range"
                min="2"
                max="32"
                step="0.5"
                value={diameter}
                onChange={(e) => setDiameter(parseFloat(e.target.value))}
                className="w-full accent-[#F5B800] bg-gray-700 h-2 rounded-lg cursor-pointer"
              />

              {/* Quick Diameter Selection Pills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[3, 6, 8, 10, 12, 16, 20].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiameter(d)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-all ${
                      diameter === d
                        ? 'bg-[#F5B800]/20 text-[#F5B800] border-[#F5B800]'
                        : 'bg-[#1A1F26] text-gray-400 border-gray-800 hover:border-gray-600'
                    }`}
                  >
                    Φ {d} mm
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Number of Flutes (Only if milling or reaming) */}
            {operation === 'milling' && (
              <div>
                <label className="text-xs font-mono text-gray-400 uppercase font-semibold block mb-2">
                  4. Number of Flutes: <span className="text-[#F5B800] font-black">{flutes} Flutes</span>
                </label>
                <div className="flex gap-2">
                  {[2, 3, 4, 6].map((fl) => (
                    <button
                      key={fl}
                      onClick={() => setFlutes(fl)}
                      className={`px-3 py-1.5 text-xs font-mono rounded border transition-all ${
                        flutes === fl
                          ? 'bg-[#F5B800] text-[#1E2227] border-[#F5B800] font-bold'
                          : 'bg-[#1C222B] text-gray-300 border-gray-700'
                      }`}
                    >
                      {fl}F
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Outputs Dashboard (5 cols) */}
          <div className="lg:col-span-5 bg-[#181D24] border-t lg:border-t-0 lg:border-l border-[#2D333B] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                <span className="text-xs font-mono uppercase text-[#F5B800] font-bold tracking-wider">
                  CALCULATED PARAMETERS
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>

              {/* Spindle RPM Highlight */}
              <div className="mt-5 p-4 bg-[#12161C] border border-gray-800 rounded-xl text-center">
                <span className="text-[11px] uppercase font-mono text-gray-400">Recommended Spindle Speed</span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-[#F5B800] mt-1 tracking-tight">
                  {calculated.rpm.toLocaleString()} <span className="text-base text-gray-400 font-sans font-medium">RPM</span>
                </div>
                <div className="text-[11px] text-gray-500 font-mono mt-1">
                  Cutting Speed (Vc): {calculated.vc} m/min
                </div>
              </div>

              {/* Feed Rate & Feed Per Tooth */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-[#12161C] border border-gray-800 rounded-xl p-3 text-center">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Table Feed (Vf)</span>
                  <span className="text-xl font-bold font-mono text-white mt-1 block">
                    {calculated.feedRate.toLocaleString()} <span className="text-[10px] text-gray-400">mm/min</span>
                  </span>
                </div>
                <div className="bg-[#12161C] border border-gray-800 rounded-xl p-3 text-center">
                  <span className="text-[10px] uppercase font-mono text-gray-400 block">Feed / Tooth (fz)</span>
                  <span className="text-xl font-bold font-mono text-white mt-1 block">
                    {calculated.fz} <span className="text-[10px] text-gray-400">mm</span>
                  </span>
                </div>
              </div>

              {/* Coolant Strategy */}
              <div className="mt-4 p-3.5 bg-[#12161C] border border-gray-800 rounded-xl text-xs space-y-1">
                <span className="text-[10px] uppercase font-mono text-gray-400 block">Coolant Delivery Protocol</span>
                <span className="font-semibold text-gray-200 block">{calculated.coolant}</span>
              </div>
            </div>

            {/* Order/Inquire for Tool */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <button
                onClick={() => openQuoteModal({ 
                  productName: `Custom Tool Setup: Φ${diameter}mm ${operation.toUpperCase()} for ${currentMat.name}` 
                })}
                className="w-full bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request Quotation For This Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
