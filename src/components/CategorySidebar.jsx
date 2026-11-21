import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Layers, 
  ChevronRight, 
  Search, 
  Star, 
  Wrench, 
  FileText,
  ArrowRight,
  Filter
} from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { useQuote } from '../context/QuoteContext';

export default function CategorySidebar({ activeCategory, onSelectCategory }) {
  const [searchParams] = useSearchParams();
  const currentCategorySlug = activeCategory || searchParams.get('category') || 'all';
  const { openQuoteModal } = useQuote();

  // 3 Featured products for sidebar (Image 5 "FEATURED PRODUCTS" widget)
  const featuredTools = products.filter(p => p.featured).slice(0, 3);

  return (
    <div className="space-y-6 font-sans">
      
      {/* 1. CATEGORIES LIST */}
      <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-xs">
        <div className="pb-3 border-b border-gray-100 mb-3 flex items-center justify-between">
          <h3 className="font-mono text-xs font-black tracking-widest text-gray-900 uppercase">
            Categories
          </h3>
          <span className="text-[10px] font-mono text-[#D97706] font-bold">
            {categories.length} Lines
          </span>
        </div>

        <div className="space-y-1 text-xs">
          {/* All Tooling Option */}
          <Link
            to="/products"
            onClick={() => onSelectCategory && onSelectCategory('all')}
            className={`flex items-center justify-between py-2 px-2.5 rounded-md transition-all ${
              currentCategorySlug === 'all'
                ? 'bg-[#FEF3C7] text-gray-900 font-bold border-l-4 border-[#F5B800]'
                : 'text-gray-600 hover:bg-gray-50 hover:text-black'
            }`}
          >
            <span>All Products</span>
            <span className="text-[10px] font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">
              {products.length}
            </span>
          </Link>

          {/* Categories */}
          {categories.map((cat) => {
            const isSelected = currentCategorySlug === cat.slug;
            const count = products.filter(p => p.categoryId === cat.slug).length;

            return (
              <Link
                key={cat.id}
                to={`/products?category=${cat.slug}`}
                onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
                className={`flex items-center justify-between py-2 px-2.5 rounded-md transition-all ${
                  isSelected
                    ? 'bg-[#FEF3C7] text-gray-900 font-bold border-l-4 border-[#F5B800]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`}
              >
                <span className="truncate pr-2">{cat.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-[#F5B800] text-[#1E2227] font-bold' : 'bg-gray-100 text-gray-500'
                }`}>
                  {count > 0 ? count : cat.toolCount}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3. FEATURED PRODUCTS WIDGET (Directly from Image 5 Left Column) */}
      <div className="bg-white border border-[#E5E7EB] rounded-lg p-5 shadow-xs">
        <div className="pb-3 border-b border-gray-100 mb-4 flex items-center justify-between">
          <h3 className="font-mono text-xs font-black tracking-widest text-gray-900 uppercase">
            Featured Tools
          </h3>
          <Star className="w-3.5 h-3.5 text-[#F5B800] fill-current" />
        </div>

        <div className="space-y-4">
          {featuredTools.map((tool) => (
            <div key={tool.id} className="flex items-center gap-3 group">
              <Link 
                to={`/products/${tool.id}`}
                className="w-14 h-14 bg-gray-50 border border-gray-200 rounded p-1 flex items-center justify-center shrink-0 group-hover:border-[#F5B800] transition-colors"
              >
                {tool.image ? (
                  <img src={tool.image} alt={tool.name} className="max-h-full max-w-full object-contain" />
                ) : (
                  <Wrench className="w-5 h-5 text-gray-400" />
                )}
              </Link>

              <div className="min-w-0 flex-1 text-xs">
                <Link 
                  to={`/products/${tool.id}`}
                  className="font-bold text-gray-800 hover:text-[#D97706] line-clamp-1 block leading-tight"
                >
                  {tool.name}
                </Link>
                <div className="flex items-center text-[#F5B800] my-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current text-[#F5B800]" />
                  ))}
                </div>
                <div className="flex items-center justify-end text-[11px] font-mono">
                  <button
                    onClick={() => openQuoteModal({ productName: tool.name, sku: tool.sku })}
                    className="text-[#D97706] font-bold hover:underline"
                  >
                    Quote &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CUSTOM BLUEPRINT INQUIRY PROMO (Yellow Industrial Accent) */}
      <div className="bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border border-amber-300 rounded-lg p-5 shadow-xs text-[#1E2227]">
        <div className="w-8 h-8 rounded-md bg-[#1E2227] text-[#F5B800] flex items-center justify-center mb-3">
          <Wrench className="w-4 h-4" />
        </div>
        <h4 className="font-black text-sm text-gray-900 leading-tight">
          Special Blueprint Tooling?
        </h4>
        <p className="text-xs text-gray-700 mt-1.5 leading-relaxed font-medium">
          Send us your workpiece CAD drawings. We design custom step drills and form cutters tailored to your machine spindle.
        </p>
        <button
          onClick={() => openQuoteModal({ productName: 'Custom Tooling to Blueprint' })}
          className="mt-3.5 w-full bg-[#1E2227] hover:bg-black text-white font-bold text-xs py-2 rounded-md shadow-xs transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Send Part Drawing</span>
          <ArrowRight className="w-3 h-3 text-[#F5B800]" />
        </button>
      </div>

    </div>
  );
}
