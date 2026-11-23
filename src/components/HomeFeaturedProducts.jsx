import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, CheckCircle2, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { useQuote } from '../context/QuoteContext';

export default function HomeFeaturedProducts() {
  const { openQuoteModal } = useQuote();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Featured Tools' },
    { id: 'drills', label: 'Solid Carbide Drills' },
    { id: 'end-mills', label: 'Carbide End Mills' },
    { id: 'reamers', label: 'Precision Reamers' },
    { id: 'burnishing-drills', label: 'Burnishing Tools' }
  ];

  // Pick top 8 premier products with high quality images
  const filteredProducts = activeCategory === 'all'
    ? products.filter(p => [
        'tmt-em-sq1',
        'tmt-drl-twostep',
        'tmt-drl-extcool',
        'tmt-em-bn1',
        'tmt-rm-straight',
        'tmt-bd-single',
        'tmt-em-dovetail',
        'tmt-drl-dirgroove'
      ].includes(p.id))
    : products.filter(p => p.categoryId === activeCategory).slice(0, 8);

  return (
    <section className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-20 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-gray-500">
                Precision Tooling Lineup
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
              Featured Industrial Cutting Tools
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
              Engineered with sub-micron European solid carbide rods on 5-axis CNC grinding centers, delivering micron-level tolerances and extended edge life.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#111827] hover:text-[#D97706] transition-colors self-start md:self-end group shrink-0"
          >
            <span>Explore Complete Tool Catalog (27+)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar select-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111827] text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:text-black border border-gray-200 hover:border-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid (8 High Quality Products) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col group relative"
            >
              {/* Corner Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-[#B45309] border border-amber-200">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* High Quality Product Image Container */}
              <Link
                to={`/products/${product.id}`}
                className="h-48 sm:h-52 w-full bg-[#FAFAFA] p-6 flex items-center justify-center relative overflow-hidden group-hover:bg-[#FFFDF5] transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/images/products/endmill-square-1.png';
                  }}
                />
              </Link>

              {/* Product Info & Specs */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-t border-gray-100 bg-white">
                <div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">
                    {product.categoryName}
                  </div>
                  
                  <h3 className="font-bold text-sm text-[#111827] group-hover:text-[#D97706] transition-colors line-clamp-1 mb-1.5">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
                    {product.shortDescription}
                  </p>

                  {/* Spec Highlights */}
                  {product.specs && (
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[10px] font-mono text-gray-600">
                      {product.specs.diameterRange && (
                        <span className="bg-gray-100 px-2 py-0.5 rounded">
                          {product.specs.diameterRange}
                        </span>
                      )}
                      {product.specs.coating && (
                        <span className="bg-gray-100 px-2 py-0.5 rounded">
                          {product.specs.coating.split(' ')[0]} PVD
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Actions: View Specs & Get Quote */}
                <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-center py-2 px-2 text-xs font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-md transition-colors flex items-center justify-center gap-1 shadow-2xs"
                  >
                    <span>View Specs</span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal({ productName: product.name, sku: product.sku })}
                    className="text-center py-2 px-2 text-xs font-black text-[#1E2227] bg-[#F5B800] hover:bg-[#E0A800] rounded-md transition-all flex items-center justify-center gap-1 shadow-sm transform active:scale-95 cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner: Custom Blueprint Tooling Consultation */}
        <div className="mt-12 bg-[#111827] rounded-2xl p-6 sm:p-8 border border-gray-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-[#F5B800] uppercase font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Custom Blueprint Engineering</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Need a Custom Solid Carbide Tool Manufactured to Your Blueprint?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              Send us your 2D CAD blueprint or 3D STEP file. Our engineering desk designs bespoke profiling form tools, multi-step drills, and special cutters in 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => openQuoteModal({ productName: 'Custom Blueprint Cutting Tool Inquiry' })}
              className="bg-[#F5B800] hover:bg-[#E0A800] text-[#111827] font-bold text-xs px-6 py-3 rounded-md shadow-md transition-all cursor-pointer"
            >
              Request Custom Blueprint Tool
            </button>
            <Link
              to="/products"
              className="border border-gray-600 hover:border-white text-gray-300 hover:text-white font-bold text-xs px-6 py-3 rounded-md transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
