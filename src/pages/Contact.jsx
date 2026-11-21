import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  FileText 
} from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useQuote } from '../context/QuoteContext';

export default function Contact() {
  useDocumentTitle('Contact Us | Plant Address, Technical Sales & Inquiries');
  const { openQuoteModal } = useQuote();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Technical Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Contact name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid business email';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim()) errs.message = 'Inquiry details are required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    const ticket = `TMT-TICK-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketNumber(ticket);
    setIsSuccess(true);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <div className="bg-[#1E2227] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#2D333B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5B800] mb-2 font-semibold">
            <Link to="/" className="hover:underline text-gray-400">Home</Link>
            <span className="text-gray-600">/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact TECHNO MECH TOOLINGS (TMT)
          </h1>
          <p className="text-sm text-gray-300 mt-2 max-w-2xl leading-relaxed">
            Reach out to our application engineering team, sales division, or manufacturing facility for cutting tool RFQs, blueprint reviews, or plant audits.
          </p>
        </div>
      </div>

      {/* Main Grid: Info + Validated Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office & Plant Addresses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E5E7EB] rounded-lg p-6 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-900 border-b border-[#E5E7EB] pb-3">
                Factory & Plant Address Placeholders
              </h2>

              <div className="flex items-start gap-3 text-xs text-gray-700">
                <MapPin className="w-5 h-5 text-[#F5B800] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Manufacturing Plant & Metrology Center:</strong>
                  <p className="text-gray-600 leading-relaxed font-mono">
                    [TMT Precision Tooling Factory Unit Placeholder]<br />
                    [Plot No. 42, Industrial Area Phase II Placeholder]<br />
                    [Auto Machining Corridor, Tamil Nadu / Maharashtra Placeholder]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-700">
                <Building2 className="w-5 h-5 text-[#F5B800] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Registered Corporate Office:</strong>
                  <p className="text-gray-600 leading-relaxed font-mono">
                    [TECHNO MECH TOOLINGS Corporate Suite Placeholder]<br />
                    [Commercial Tech Park Placeholder]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-700">
                <Phone className="w-5 h-5 text-[#F5B800] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Direct Telephones:</strong>
                  <div className="font-mono text-gray-800">[TMT Support: +91 (0) 44 2800 XXXX]</div>
                  <div className="font-mono text-gray-800">[TMT Sales Desk: +91 (0) 44 2800 YYYY]</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-700">
                <Mail className="w-5 h-5 text-[#F5B800] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Email Communications:</strong>
                  <div className="text-gray-700 font-mono">Sales & RFQs: [sales@technomech.example.com]</div>
                  <div className="text-gray-700 font-mono">Technical Support: [quotes@technomech.example.com]</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-700 border-t border-[#E5E7EB] pt-4">
                <Clock className="w-5 h-5 text-[#F5B800] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Operating Hours (IST):</strong>
                  <div className="text-gray-600">Monday – Saturday: 08:30 AM – 06:30 PM</div>
                  <div className="text-gray-500 text-[11px]">Sunday: Production shifts active; administrative desk closed.</div>
                </div>
              </div>
            </div>

            {/* Quick Quote Trigger Box */}
            <div className="bg-[#1E2227] text-white p-6 rounded-lg border border-[#2D333B] flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-white">Need an Instant Quotation?</h4>
                <p className="text-xs text-gray-400 mt-0.5">Pre-fill tooling dimensions or SKUs directly.</p>
              </div>
              <button
                onClick={() => openQuoteModal()}
                className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-4 py-2 rounded shrink-0"
              >
                Quote Modal &rarr;
              </button>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-lg p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              Technical Inquiry & Commercial Contact Form
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Fill in your inquiry details below. Our technical sales engineers respond within 4 business hours.
            </p>

            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Inquiry Logged Successfully</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Your technical inquiry for <span className="font-semibold text-gray-800">{formData.company}</span> has been assigned reference ticket:
                </p>
                <div className="inline-block bg-[#F7F8FA] border border-gray-300 px-4 py-2 rounded font-mono font-bold text-base text-[#1E2227]">
                  {ticketNumber}
                </div>
                <p className="text-xs text-gray-500">
                  A representative will reach out via <span className="font-medium text-gray-700">{formData.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        subject: 'General Technical Inquiry',
                        message: ''
                      });
                    }}
                    className="bg-[#1E2227] text-white text-xs px-5 py-2.5 rounded font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Suresh Raman"
                      className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                        errors.name ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Company / Machine Shop Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Precision Gears Pvt Ltd"
                      className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                        errors.company ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                      }`}
                    />
                    {errors.company && <p className="text-[11px] text-red-600 mt-0.5">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="engineering@company.com"
                      className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-xs focus:outline-none focus:border-[#F5B800]"
                  >
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                    <option value="Standard Tooling Quotation (Volume)">Standard Tooling Quotation (Volume)</option>
                    <option value="Custom Tooling Design to Blueprint">Custom Tooling Design to Blueprint</option>
                    <option value="CNC Tool Regrinding & Recoating Services">CNC Tool Regrinding & Recoating Services</option>
                    <option value="Supplier Registration / Plant Audit">Supplier Registration / Plant Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Inquiry Details / Workpiece Specs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details of your tooling requirements, cutting parameters, quantities, or workpiece material..."
                    className={`w-full border rounded px-3 py-2 text-xs focus:outline-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300 focus:border-[#F5B800]'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-[11px] text-red-600 mt-0.5">{errors.message}</p>}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-gray-500">
                    Confidentiality guaranteed. NDA available upon request.
                  </div>
                  <button
                    type="submit"
                    className="bg-[#F5B800] hover:bg-[#E0A800] text-[#1E2227] font-bold text-xs px-6 py-2.5 rounded shadow-sm inline-flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Embedded Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#F5B800]" />
              <h3 className="font-bold text-sm text-gray-900">
                Factory Location & Logistics Access
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-500">[Interactive Map Placeholder]</span>
          </div>

          {/* Styled Map Placeholder Box */}
          <div className="aspect-[21/9] max-h-72 bg-[#1E2227] rounded-md border border-[#374151] relative flex flex-col items-center justify-center text-center p-6 overflow-hidden">
            <div className="absolute inset-0 industrial-grid-dark opacity-30"></div>
            
            <div className="relative z-10 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#262B31] border border-[#F5B800] text-[#F5B800] flex items-center justify-center mx-auto shadow-lg animate-pulse">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">TECHNO MECH TOOLINGS (TMT) Manufacturing Plant</h4>
              <p className="text-xs text-gray-300 max-w-md mx-auto font-mono">
                [TMT Plant Coordinate Placeholder: 12.9822° N, 80.1636° E] • Near Major Logistics Highway & Air Cargo Freight Terminal
              </p>
              <div className="pt-2 text-[11px] text-gray-400">
                Logistics Hub Serving Chennai, Pune, Bangalore, Coimbatore, and NCR Manufacturing Clusters.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
