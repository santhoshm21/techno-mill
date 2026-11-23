import React from 'react';
import { 
  Gauge, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  TrendingUp,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function IndustrialTelemetryBar() {
  const telemetryStats = [
    {
      icon: Cpu,
      value: '25,000+',
      unit: 'Tools / Year',
      label: 'Solid Carbide Production',
      desc: 'Annual capacity across drill, reamer & custom form tool batches'
    },
    {
      icon: Gauge,
      value: '± 0.002 mm',
      unit: 'Sub-Micron',
      label: 'Grinding Repeatability',
      desc: 'German SAACKE 5-Axis CNC precision multi-flute consistency'
    },
    {
      icon: Clock,
      value: '48 - 72 Hrs',
      unit: 'Rapid Dispatch',
      label: 'Reconditioning Turnaround',
      desc: 'Complete regrinding, OD re-fluting, edge-prep & PVD recoating'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      unit: 'Inspection',
      label: 'Optical Metrology QA',
      desc: 'Every tool tip & flute geometry certified under profile projectors'
    },
    {
      icon: TrendingUp,
      value: '50% - 60%',
      unit: 'Cost Savings',
      label: 'Tool Lifecycle Economy',
      desc: 'Direct procurement savings per workpiece component manufactured'
    }
  ];

  return (
    <div className="bg-[#12161C] border-b border-[#2D333B] text-white py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle industrial grid lines background */}
      <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top small label */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800 text-[11px] font-mono tracking-wider text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse"></span>
            <span className="text-[#F5B800] font-bold uppercase">FACTORY TELEMETRY &amp; OPERATING BENCHMARKS</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <span className="hidden sm:inline text-gray-400">Chennai Manufacturing Facility Unit #1</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-400">
            <Award className="w-3.5 h-3.5 text-[#F5B800]" />
            <span>European Sub-Micron Tungsten Carbide Rods</span>
          </div>
        </div>

        {/* 5 Stats Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 items-stretch">
          {telemetryStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#1A1F26] hover:bg-[#202731] border border-gray-800 hover:border-[#F5B800]/50 rounded-xl p-4 transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-gray-400 font-semibold tracking-wider">
                      {item.unit}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#262D37] flex items-center justify-center text-[#F5B800] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-xl sm:text-2xl font-black text-white group-hover:text-[#F5B800] transition-colors font-mono tracking-tight">
                    {item.value}
                  </div>

                  <div className="text-xs font-bold text-gray-200 mt-1 leading-snug">
                    {item.label}
                  </div>
                </div>

                <div className="text-[11px] text-gray-400 mt-3 pt-2.5 border-t border-gray-800/80 leading-relaxed font-normal">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
