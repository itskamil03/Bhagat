"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight,
  FiAward,
  FiCheck,
  FiCheckCircle,
  FiGrid,
  FiHome,
  FiPhoneCall,
  FiShield,
  FiSun,
  FiTag,
  FiToggleRight,
  FiZap,
} from "react-icons/fi";

export default function DomesticWiriting() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    service: "Domestic Wiring",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        location: "",
        service: "Domestic Wiring",
        message: "",
      });
    }, 5000);
  };

  return (
    <div className="w-full bg-white text-gray-800 overflow-x-hidden">
      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100/60 py-12 lg:py-16 px-6 lg:px-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            {/* BREADCRUMB */}
            <p className="text-sm font-medium text-gray-400 mb-4 tracking-wide">
              Home &nbsp;›&nbsp; Services &nbsp;›&nbsp;
              <span className="text-red-600 font-semibold">
                Domestic Wiring
              </span>
            </p>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Domestic <br />
              <span className="text-red-600 relative inline-block">
                Wiring
                <span className="block h-1.5 w-20 bg-red-600 mt-2 rounded-full"></span>
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-5 text-lg font-bold text-gray-800">
              Safe. Reliable. Efficient. Electrical Solutions for Modern Homes.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-xl">
              Provide professional domestic electrical wiring, rewiring,
              distribution board installation, switchboard installation,
              lighting systems, earthing, safety upgrades, electrical
              troubleshooting and maintenance using high-quality materials and
              certified engineering practices.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#consultation-form"
                className="bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/20 flex items-center gap-2"
              >
                Request a Quote <FiArrowRight />
              </a>

              <a
                href="tel:+916299923388"
                className="border-2 border-gray-300 text-gray-800 font-semibold px-7 py-3 rounded-full hover:bg-gray-200/80 hover:border-gray-400 transition flex items-center gap-2"
              >
                <FiPhoneCall className="text-red-600" /> Call Now
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white/40">
              <Image
                src="/za1.jpg"
                alt="Domestic Wiring Excellence"
                fill
                className="object-cover hover:scale-105 transition duration-700"
                priority
              />

              {/* BOTTOM FLOATING BADGE */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 border border-gray-100 flex items-center gap-4">
                <div className="text-red-600 text-3xl font-black leading-none">
                  48+
                </div>
                <div className="text-gray-700 text-xs sm:text-sm font-semibold leading-snug border-l border-gray-200 pl-4">
                  Years of Engineering <br />
                  <span className="text-gray-500 font-normal">
                    Excellence & Safety
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. SPECIALIZED DOMESTIC ELECTRICAL SERVICES (EXPERTISE)
      ======================================================== */}
      <section className="w-full py-20 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-2">
                Our Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                Specialized Domestic <br className="hidden sm:block" />
                Electrical Services
              </h2>
            </div>
            <div className="hidden md:block w-32 h-[3px] bg-red-600 rounded-full mb-3"></div>
          </div>

          {/* 6 CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                <FiHome />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                New Home Wiring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                End-to-end electrical planning and execution for new residential
                constructions ensuring lifelong safety and compliance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                <FiZap />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Complete Rewiring
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Upgrading outdated electrical systems with modern fire-retardant
                cables and high-performance conduits for peak durability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                <FiGrid />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Distribution Board
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Precision installation of main distribution boards with advanced
                circuit breakers, MCBs, RCCBs, and surge protection.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                <FiToggleRight />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Switch & Socket
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional mounting of aesthetic modular switches and power
                sockets with perfect alignment and heavy-load support.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                <FiSun />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lighting Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrated lighting design including ambient, task, and accent
                systems for premium home interiors and architectural beauty.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 transition duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-red-600 group-hover:text-white transition duration-300">
                <FiShield />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Safety Inspection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rigorous testing including insulation resistance, earthing
                check, and load balance verification by certified inspectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHY ENGINEERS CHOOSE US + CONSULTATION FORM
      ======================================================== */}
      <section
        id="consultation-form"
        className="w-full py-20 px-6 lg:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: THE BHAGAT EDGE */}
          <div className="lg:col-span-7">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-2">
              The Bhagat Edge
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-8">
              Why Engineers Choose Us <br />
              for Residential Projects
            </h2>

            {/* CHECKLIST GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FiCheck className="text-sm font-bold" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  48+ Years Experience
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FiCheck className="text-sm font-bold" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Certified Engineers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FiCheck className="text-sm font-bold" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Premium Materials
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FiCheck className="text-sm font-bold" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Safe Installation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FiCheck className="text-sm font-bold" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  On-Time Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <FiCheck className="text-sm font-bold" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  Quality Assurance
                </span>
              </div>
            </div>

            {/* ENGINEER WIRING IMAGE BANNER */}
            <div className="relative w-full h-[280px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src="/dw1.jpg"
                alt="Precision Domestic Electrical Installation"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-wider text-red-400 font-semibold">
                  Industrial-Grade Precision
                </p>
                <p className="text-lg font-bold">
                  Zero-Compromise Residential Wiring Standards
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONSULTATION FORM */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-200/80">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                Request a Free Consultation
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Get expert advice for your project within 24 hours.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl text-sm flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-xl shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">
                      Consultation Request Received!
                    </p>
                    <p className="text-xs mt-0.5">
                      Our electrical engineer will review your project and
                      connect with you shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-red-500 transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-red-500 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-red-500 transition"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Location / City"
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-red-500 transition"
                  />
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:bg-white focus:border-red-500 transition"
                  >
                    <option value="Domestic Wiring">Domestic Wiring</option>
                    <option value="Complete Rewiring">Complete Rewiring</option>
                    <option value="Distribution Board Installation">
                      Distribution Board Installation
                    </option>
                    <option value="Safety Inspection & Earthing">
                      Safety Inspection & Earthing
                    </option>
                    <option value="Other Electrical Works">
                      Other Electrical Works
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message (Project details, requirements...)"
                    rows={3}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-red-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition shadow-lg flex items-center justify-center gap-2"
                >
                  Submit Enquiry <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SHOWCASING EXCELLENCE (PORTFOLIO - DARK SECTION)
      ======================================================== */}
      <section className="w-full py-20 px-6 lg:px-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto">
          {/* TOP HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Showcasing Excellence
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mt-4 md:mt-0 text-left md:text-right">
              A glimpse into our high-precision electrical installations across
              luxury residences.
            </p>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT BIG IMAGE */}
            <div className="lg:col-span-7 h-[360px] sm:h-[430px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
              <Image
                src="/a1.png"
                alt="Electrical Distribution Panel Excellence"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition duration-500 opacity-0 group-hover:opacity-100">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                  Precision Wiring
                </span>
                <p className="text-white font-bold text-lg mt-2">
                  Multi-Phase Distribution Control Panel
                </p>
              </div>
            </div>

            {/* RIGHT STACKED IMAGES */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 h-auto lg:h-[430px]">
              <div className="h-[200px] lg:h-[203px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
                <Image
                  src="/a7.jpg"
                  alt="Certified Engineer Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <p className="text-xs text-red-400 font-semibold">
                    Certified Technicians
                  </p>
                  <p className="text-sm font-bold text-white">
                    Rigorous Safety Compliance Audits
                  </p>
                </div>
              </div>

              <div className="h-[200px] lg:h-[203px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
                <Image
                  src="/a8.jpg"
                  alt="Electrical Load & Earthing Testing"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <p className="text-xs text-red-400 font-semibold">
                    Testing & Diagnostic
                  </p>
                  <p className="text-sm font-bold text-white">
                    Insulation & Load Balance Verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. THE BHAGAT EXECUTION PROCESS + GUARANTEE CARDS
      ======================================================== */}
      <section className="w-full py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">
            The Bhagat Execution Process
          </h2>

          {/* 5 STEPS TIMELINE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative mb-20">
            {/* Horizontal Connecting Line on Desktop */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-gray-200 -z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-red-600/30">
                01
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
                Site Inspection
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                Detailed evaluation of physical structure and requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center shadow-md">
                02
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
                Planning & Estimate
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                CAD diagrams and transparent cost breakdown.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center shadow-md">
                03
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
                Installation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                Clean execution by certified engineering technicians.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center shadow-md">
                04
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
                Testing
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                Multi-level safety tests and load stress analysis.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center shadow-md">
                05
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2">
                Handover
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                Documentation, manuals and project sign-off.
              </p>
            </div>
          </div>

          {/* 4 GUARANTEE / VALUE BADGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center text-xl mb-4">
                <FiShield />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Safe Wiring</h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                Fire-retardant and shock-proof systems.
              </p>
            </div>

            <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center text-xl mb-4">
                <FiAward />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">ISI Certified</h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                Only top-tier industrial grade materials.
              </p>
            </div>

            <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center text-xl mb-4">
                <FiTag />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">
                Transparent Pricing
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                No hidden costs, engineer-verified quote.
              </p>
            </div>

            <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center text-xl mb-4">
                <FiCheckCircle />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">
                Workmanship Warranty
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                Dedicated support for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. NEED PROFESSIONAL DOMESTIC WIRING? (LIGHT CTA)
      ======================================================== */}
      <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Need Professional Domestic Wiring?
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Get reliable, safe and high-quality domestic electrical wiring from
            experienced engineers. Your safety is our engineering priority.
          </p>
          <a
            href="#consultation-form"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition shadow-lg shadow-red-600/25"
          >
            Contact Us Now <FiArrowRight />
          </a>
        </div>
      </section>


    </div>
  );
}
