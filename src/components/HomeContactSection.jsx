import React, { useState } from 'react';
import { Calendar, ChevronDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function HomeContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    toolingType: '',
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
      setErrorMsg('Please provide your name, email, and phone number.');
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
        toolingType: '',
        preferredDate: '',
        quantity: '',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="bg-white py-12 sm:py-16 lg:py-20 border-t border-gray-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HEADER: Bold Left-Aligned Title & Right-Aligned Availability Note
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight font-sans">
              Contact Us
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm text-left md:text-right font-normal">
            Tell us your tooling requirements and component specs, and we&apos;ll confirm technical feasibility within 24 hours.
          </p>
        </div>

        {/* =========================================================================
            2-COLUMN GRID: Form on Left, Elegant Rounded Card on Right
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Form Replica matching 2nd Input UI */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-emerald-900 flex items-start gap-4 my-auto">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base text-emerald-800">Inquiry Received Successfully</h3>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-1.5 leading-relaxed">
                    Thank you for reaching out. A senior tooling applications engineer from our Chennai facility will contact you within 24 hours to review your requirements.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline cursor-pointer"
                  >
                    Submit another inquiry &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {errorMsg && (
                  <div className="text-xs text-red-600 bg-red-50 border border-red-200 px-4 py-2.5 rounded-xl font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-800 mb-1.5 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#F4F4F6] border border-transparent focus:border-gray-300 focus:bg-white rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-800 mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-[#F4F4F6] border border-transparent focus:border-gray-300 focus:bg-white rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Select Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-800 mb-1.5 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#F4F4F6] border border-transparent focus:border-gray-300 focus:bg-white rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-800 mb-1.5 block">
                      Select Your Tooling
                    </label>
                    <div className="relative">
                      <select
                        name="toolingType"
                        value={formData.toolingType}
                        onChange={handleChange}
                        className="w-full bg-[#F4F4F6] border border-transparent focus:border-gray-300 focus:bg-white rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all appearance-none pr-10 cursor-pointer"
                      >
                        <option value="" disabled>Choose your tooling...</option>
                        <option value="Solid Carbide Drills">Solid Carbide Drills (3xD – 30xD)</option>
                        <option value="High-Performance End Mills">High-Performance End Mills</option>
                        <option value="Custom Form Tools">Custom Blueprint Form Tools</option>
                        <option value="Burnishing Drills & Reamers">Burnishing Drills &amp; Reamers</option>
                        <option value="Tool Regrinding & Recoating">5-Axis Tool Regrinding &amp; Recoating</option>
                        <option value="Technical Consultation">Technical Consultation &amp; Plant Trial</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Preferred Date & Quantity / Batch Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-800 mb-1.5 block">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        placeholder="dd/mm/yyyy"
                        className="w-full bg-[#F4F4F6] border border-transparent focus:border-gray-300 focus:bg-white rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all pr-10"
                      />
                      <Calendar className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-800 mb-1.5 block">
                      Batch Size / Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 10 – 50 pcs"
                      className="w-full bg-[#F4F4F6] border border-transparent focus:border-gray-300 focus:bg-white rounded-xl px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: Message / Special Requests */}
                <div>
                  <label className="text-xs font-semibold text-gray-800 mb-1.5 block">
                    Message / Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Anything else we should know?"
                    className="w-full bg-[#F4F4F6] border border-transparent focus:border-gray-300 focus:bg-white rounded-2xl p-4 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none transition-all"
                  ></textarea>
                </div>

                {/* Row 5: Action Button (Dual Element Pill + Circle matching reference) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 group cursor-pointer focus:outline-none max-w-full"
                  >
                    <span className="bg-[#111827] group-hover:bg-black text-white font-medium text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-xs flex items-center justify-center">
                      {isSubmitting ? 'Submitting...' : 'Reserve Your Spot'}
                    </span>
                    <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#111827] group-hover:bg-black text-white flex items-center justify-center transition-all duration-200 shadow-xs shrink-0">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Tall Card with High-Res Visual & Floating Pill Badge */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full h-full min-h-[260px] sm:min-h-[420px] lg:min-h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100 group select-none">
              
              {/* Cutting Tool / Engineering Visual */}
              <img
                src="/images/gallery/hero-drill-lineup.jpg"
                alt="Techno Mech Precision Tooling"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/contact-tool-shelf.png';
                }}
              />

              {/* Gentle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              {/* Floating Pill Badge matching reference "Your Journey" */}
              <div className="absolute top-5 right-5 bg-black/30 backdrop-blur-md border border-white/40 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-sm tracking-wide pointer-events-none">
                Your Journey
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
