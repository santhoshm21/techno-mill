import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  ChevronRight,
  Share2,
  Printer
} from 'lucide-react';
import ToolGraphic from '../components/ToolGraphic';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openQuoteModal } = useQuote();

  const product = products.find(p => p.id === id);

  useDocumentTitle(product ? `${product.name} (${product.sku})` : 'Product Details');

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Tool Specification Not Found</h2>
        <p className="text-sm text-gray-600">The cutting tool identifier &quot;{id}&quot; does not exist in our active catalogue.</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 bg-[#1E2227] text-white px-4 py-2 rounded text-xs font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Tooling Catalogue</span>
        </Link>
      </div>
    );
  }

  // Related products from same category or featured
  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="space-y-10 pb-16">
      
      {/* 1. Breadcrumb Bar */}
      <div className="bg-[#F7F8FA] border-b border-[#E5E7EB] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-gray-500 overflow-x-auto">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-900">Products</Link>
            <span>/</span>
            <Link to={`/products?category=${product.categoryId}`} className="hover:text-gray-900 font-medium">
              {product.categoryName}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold truncate">{product.sku}</span>
          </div>

          <Link
            to="/products"
            className="hidden sm:inline-flex items-center gap-1 text-gray-600 hover:text-[#1E2227] font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Catalogue</span>
          </Link>
        </div>
      </div>

      {/* 2. Top Product Summary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Tool Schematic Render Frame */}
          <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm">
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-md p-6 flex items-center justify-center relative aspect-[4/3] group overflow-hidden">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <ToolGraphic categoryId={product.categoryId} className="w-full h-full max-h-56 drop-shadow-md" />
              )}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase bg-[#1E2227] text-[#F5B800] font-bold px-2 py-0.5 rounded shadow-sm">
                  {product.sku}
                </span>
                {product.badge && (
                  <span className="text-[11px] font-mono uppercase bg-[#F5B800] text-[#1E2227] font-bold px-2 py-0.5 rounded shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Optical Metrology Inspected</span>
              </span>
              <span>Class h6 Shank</span>
            </div>
          </div>

          {/* Right Column: Title, SKU, Description, Key Specs, & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Link
                  to={`/products?category=${product.categoryId}`}
                  className="text-xs font-mono font-semibold uppercase text-gray-500 hover:text-[#F5B800]"
                >
                  {product.categoryName}
                </Link>
                <span className="text-gray-300">•</span>
                <span className="text-xs font-mono text-gray-500 font-bold">
                  SKU: {product.sku}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1F2937] tracking-tight">
                {product.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>In-Stock for Immediate Dispatch</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Manufactured to Print / 7-10 Days</span>
                  </span>
                )}
                <span className="text-gray-500">Lead Time: <strong className="text-gray-700">{product.leadTime}</strong></span>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Engineering Highlights */}
            <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-md p-4 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 font-mono">
                Key Tooling Highlights
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800] shrink-0 mt-1.5"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action CTA Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => openQuoteModal({ productName: product.name, sku: product.sku })}
                className="w-full sm:w-auto bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-sm px-6 py-3 rounded shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Quote for this Tool</span>
              </button>

              <button
                onClick={() => openQuoteModal({ productName: `Custom Variant of ${product.sku}` })}
                className="w-full sm:w-auto bg-[#1E2227] hover:bg-[#262B31] text-white font-semibold text-xs px-5 py-3 rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Custom Diameter / Step</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. STRUCTURED TECHNICAL SPECIFICATIONS TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#1E2227] px-6 py-4 border-b border-[#2D333B] flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#F5B800]" />
              <h3 className="font-bold text-sm uppercase tracking-wider font-mono">
                Technical Specifications & Machining Parameters
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-400">DIN / ISO Standard</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA] w-1/3">Standard Diameter Range</th>
                  <td className="py-3 px-6 font-mono font-medium text-gray-900">{product.specs.diameterRange}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Flute Count & Geometry</th>
                  <td className="py-3 px-6 font-medium text-gray-900">{product.specs.flutes}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Helix Angle</th>
                  <td className="py-3 px-6 font-mono font-medium text-gray-900">{product.specs.helixAngle}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Surface Coating</th>
                  <td className="py-3 px-6 font-medium text-gray-900">{product.specs.coating}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Substrate Grade</th>
                  <td className="py-3 px-6 font-medium text-gray-900">{product.specs.substrate}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Shank Tolerance</th>
                  <td className="py-3 px-6 font-mono font-medium text-gray-900">{product.specs.shankTolerance}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Cutting Tolerance Class</th>
                  <td className="py-3 px-6 font-mono font-medium text-gray-900">{product.specs.cuttingTolerance}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Recommended Workpiece Hardness</th>
                  <td className="py-3 px-6 font-medium text-gray-900">{product.specs.hardnessRange}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <th className="py-3 px-6 font-semibold text-gray-600 bg-[#F7F8FA]">Target Materials & Application</th>
                  <td className="py-3 px-6 font-medium text-gray-900">{product.specs.application}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. RELATED PRODUCTS IN SAME CATEGORY */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-bold text-gray-900">
              Related Tools in {product.categoryName}
            </h3>
            <Link
              to={`/products?category=${product.categoryId}`}
              className="text-xs font-semibold text-[#1E2227] hover:text-[#F5B800] flex items-center gap-1"
            >
              <span>View all in category</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
