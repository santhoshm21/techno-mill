import React, { useState } from 'react';
import { ArrowUpRight, Calendar, CheckCircle2, ChevronDown } from 'lucide-react';

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: '',
    preferredDate: '',
    quantity: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Phone Number).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        requirement: '',
        preferredDate: '',
        quantity: '',
        message: ''
      });
    }, 700);
  };

  return (
    <section id="contact" className="bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER: Contact Us Title (Left) & 24h Availability Subtitle (Right)
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight font-sans">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md md:text-right font-normal leading-relaxed">
            Tell us when and where you&apos;d like to receive your tooling specifications, and our engineering team will confirm availability within 24 hours.
          </p>
        </div>

        {/* =========================================================================
            2-COLUMN LAYOUT: Left Form (7 cols) & Right Visual Card (5 cols)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: Modern Minimalist Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {submitted ? (
              <div className="bg-[#F8F9FA] border border-gray-200 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-sm animate-hero-text">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Inquiry Received!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you for connecting with Techno Mech Toolings. A senior tooling application engineer will review your requirements and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition"
                >
                  <span>Submit Another Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#F4F4F6] hover:bg-[#EFEFF2] focus:bg-white border border-transparent focus:border-gray-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-[#F4F4F6] hover:bg-[#EFEFF2] focus:bg-white border border-transparent focus:border-gray-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Select Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F4F4F6] hover:bg-[#EFEFF2] focus:bg-white border border-transparent focus:border-gray-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                      Select Requirement
                    </label>
                    <div className="relative">
                      <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className="w-full appearance-none bg-[#F4F4F6] hover:bg-[#EFEFF2] focus:bg-white border border-transparent focus:border-gray-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 text-sm text-gray-900 focus:outline-none transition-all shadow-sm cursor-pointer pr-10"
                      >
                        <option value="">Choose requirement...</option>
                        <option value="Solid Carbide End Mills">Solid Carbide End Mills</option>
                        <option value="5xD–30xD Deep Hole Coolant Drills">5xD–30xD Deep Hole Coolant Drills</option>
                        <option value="Solid Carbide Burnishing Reamers">Solid Carbide Burnishing Reamers</option>
                        <option value="SAACKE 5-Axis Tool Regrinding">SAACKE 5-Axis CNC Regrinding</option>
                        <option value="Custom CAD Blueprint Form Tooling">Custom CAD Blueprint Form Tooling</option>
                        <option value="Technical Plant Consultation">Technical Plant Consultation</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Preferred Date & Estimated Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        placeholder="dd/mm/yyyy"
                        className="w-full bg-[#F4F4F6] hover:bg-[#EFEFF2] focus:bg-white border border-transparent focus:border-gray-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all shadow-sm pr-10"
                      />
                      <Calendar className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 10 pcs, 50 pcs, Production"
                      className="w-full bg-[#F4F4F6] hover:bg-[#EFEFF2] focus:bg-white border border-transparent focus:border-gray-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Row 4: Message / Special Requests */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else we should know? Mention your component tolerances, material hardness, or blueprint requirements..."
                    className="w-full bg-[#F4F4F6] hover:bg-[#EFEFF2] focus:bg-white border border-transparent focus:border-gray-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition-all shadow-sm resize-none"
                  />
                </div>

                {/* Bottom Action: Two adjacent pill/circle buttons (Matching Reference UI) */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black hover:bg-neutral-800 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Submit Inquiry Arrow"
                    className="w-12 h-12 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md cursor-pointer shrink-0 disabled:opacity-50"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* RIGHT COLUMN: Rounded Visual Card with Badge (Exact Reference UI) */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full min-h-[460px] sm:min-h-[500px] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-2xl group border border-gray-100">
              
              {/* Card Image */}
              <img
                src="/images/hero-slider-endmills.jpg"
                alt="Techno Mech Toolings Precision Solid Carbide Manufacturing"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/hero-fullscreen-carbide-tool.jpg';
                }}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Top-Right Badge: "Your Journey" Pill (Matching Reference UI) */}
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-flex items-center border border-white/70 text-white text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                  Your Journey
                </span>
              </div>

              {/* Bottom Card Caption */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[11px] font-mono tracking-widest text-[#F5B800] uppercase block mb-1">
                  TECHNO MECH TOOLINGS
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Precision Engineering & Custom Solid Carbide Solutions
                </h4>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                  Supplying Tier-1 automotive and aerospace machining facilities with micron tolerances.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
