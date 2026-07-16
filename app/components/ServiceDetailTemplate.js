"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiArrowRight,
  FiAward,
  FiCheck,
  FiCheckCircle,
  FiPhoneCall,
  FiShield,
  FiTag,
} from "react-icons/fi";

export default function ServiceDetailTemplate({
  breadcrumb,
  titlePart1,
  titlePart2,
  subtext,
  description,
  heroImage = "/za1.jpg",
  formServiceDefault,
  expertiseTitle,
  expertiseCards = [], // Array of 6 objects: { title, desc, icon }
  whyChooseUsTitle,
  whyChooseUsChecklist = [], // Array of 6 strings
  whyChooseUsImage = "/dw1.jpg",
  portfolioTitle = "Showcasing Excellence",
  portfolioBigImage = "/a1.png",
  portfolioBigTag = "Precision Installation",
  portfolioBigTitle = "High-Quality Electrical Setup",
  portfolioStackedImage1 = "/a7.jpg",
  portfolioStackedTag1 = "Inspection & Safety",
  portfolioStackedTitle1 = "Rigorous Safety Compliance Audits",
  portfolioStackedImage2 = "/a8.jpg",
  portfolioStackedTag2 = "Testing & Diagnostic",
  portfolioStackedTitle2 = "Insulation & Load Balance Verification",
  processSteps = [], // Array of 5 objects: { num, title, desc }
  ctaTitle,
  ctaDesc,
  formServicesList = [], // Array of strings for select dropdown
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    service: formServiceDefault || formServicesList[0] || "",
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
        service: formServiceDefault || formServicesList[0] || "",
        message: "",
      });
    }, 5000);
  };

  return (
    <div className="w-full bg-white text-gray-800 overflow-x-hidden font-sans">
      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-gray-100/60 py-12 lg:py-16 px-6 lg:px-20 border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            {/* BREADCRUMB */}
            <p className="text-xs md:text-sm font-medium text-gray-400 mb-4 tracking-wide flex items-center gap-2">
              <span>Home</span>&nbsp;›&nbsp;<span>Services</span>&nbsp;›&nbsp;
              <span className="text-red-600 font-semibold">{breadcrumb}</span>
            </p>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {titlePart1} <br />
              <span className="text-red-600 relative inline-block">
                {titlePart2}
                <span className="block h-1.5 w-20 bg-red-600 mt-2 rounded-full"></span>
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-5 text-lg font-bold text-gray-800 leading-snug">
              {subtext}
            </p>

            <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#consultation-form"
                className="bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-red-700 transition shadow-lg shadow-red-600/20 flex items-center gap-2 text-sm"
              >
                <span>Request a Quote</span>
                <FiArrowRight />
              </a>

              <a
                href="tel:+916299923388"
                className="border-2 border-gray-300 text-gray-800 font-semibold px-7 py-3 rounded-full hover:bg-gray-200/80 hover:border-gray-400 transition flex items-center gap-2 text-sm"
              >
                <FiPhoneCall className="text-red-600" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white/40">
              <Image
                src={heroImage}
                alt={`${breadcrumb} Excellence`}
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
          2. SPECIALIZED SERVICES (EXPERTISE)
      ======================================================== */}
      <section className="w-full py-16 lg:py-20 px-6 lg:px-20 bg-[#FCFBF9] relative overflow-hidden">
        {/* Subtle red radial gradients */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 z-0" 
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(230, 27, 35, 0.035) 0%, transparent 45%),
              radial-gradient(circle at 90% 80%, rgba(230, 27, 35, 0.035) 0%, transparent 45%)
            `
          }}
        />

        {/* Abstract concentric curved lines in corners */}
        {/* Bottom-left curve */}
        <svg className="absolute left-0 bottom-0 w-80 h-80 opacity-[0.08] pointer-events-none text-[#E61B23]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="0" cy="200" r="180" />
          <circle cx="0" cy="200" r="150" />
          <circle cx="0" cy="200" r="120" />
          <circle cx="0" cy="200" r="90" />
        </svg>
        {/* Top-right curve */}
        <svg className="absolute right-0 top-0 w-80 h-80 opacity-[0.08] pointer-events-none text-[#E61B23]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="200" cy="0" r="180" />
          <circle cx="200" cy="0" r="150" />
          <circle cx="200" cy="0" r="120" />
          <circle cx="200" cy="0" r="90" />
        </svg>

        {/* Dotted red pattern in the top-right area */}
        <div className="absolute right-8 top-8 w-36 h-36 opacity-[0.12] pointer-events-none hidden md:block">
          <svg className="w-full h-full text-[#E61B23]" fill="currentColor">
            <pattern id="grid-dots-detail" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-dots-detail)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <p className="text-[#E61B23] font-bold text-sm uppercase tracking-widest mb-3">
                Our Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                {(() => {
                  if (!expertiseTitle) return "";
                  const words = expertiseTitle.split(" ");
                  if (words.length <= 1) return expertiseTitle;
                  const lastIndex = Math.max(1, words.length - 2);
                  const mainPart = words.slice(0, lastIndex).join(" ");
                  const redPart = words.slice(lastIndex).join(" ");
                  return (
                    <>
                      {mainPart} <br className="hidden sm:block" />
                      <span className="text-red-600">{redPart}</span>
                    </>
                  );
                })()}
              </h2>
            </div>
          </div>

          {/* 6 CARDS GRID - Spaced generously */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {expertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#FFF5F6] via-[#FFF9F2] to-white rounded-[24px] p-8 border border-[#FFEAEA] hover:border-[#E61B23] hover:shadow-[0_20px_48px_rgba(249,115,22,0.18)] hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}
              >
                <div className="flex gap-5 items-start">
                  {/* Left Side: Icon Container */}
                  <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    {/* Outer dashed border - orange to red on hover */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#f97316]/30 group-hover:border-[#E61B23] transition-all duration-500" />
                    {/* Inner circle with icon - red/orange gradient on hover */}
                    <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#FFF5F6] to-[#FFF9F2] border border-[#FFEAEA] shadow-[0_4px_12px_rgba(230,27,35,0.06)] text-[#E61B23] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#E61B23] group-hover:to-[#f97316] group-hover:text-white transition-all duration-300">
                      <div className="w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {card.icon}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Text content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-black leading-snug transition-colors duration-300 group-hover:text-[#E61B23]">
                      {card.title}
                    </h3>
                    {/* red line */}
                    <div className="w-8 h-[2px] bg-[#E61B23] mt-2 mb-3 rounded-full"></div>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Learn More link */}
                <div className="mt-8 flex items-center gap-1.5 text-[#E61B23] font-bold text-xs uppercase tracking-wider">
                  <span>Learn More</span>
                  <FiArrowRight className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>

                {/* Custom bottom-right red corner outline accent matching the double-layer color effect */}
                {/* Red corner stroke */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-[#E61B23] rounded-br-[24px] z-10 transition-transform duration-300 group-hover:scale-105" />
                {/* Orange offset shadow stroke */}
                <div className="absolute bottom-[-1.5px] right-[-1.5px] w-9 h-9 border-r-4 border-b-4 border-[#f97316] rounded-br-[25px] z-0 pointer-events-none transition-transform duration-300 group-hover:scale-105" />
              </div>
            ))}
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
              {whyChooseUsTitle}
            </h2>

            {/* CHECKLIST GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {whyChooseUsChecklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <FiCheck className="text-sm font-bold" />
                  </div>
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* IMAGE BANNER */}
            <div className="relative w-full h-[280px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image
                src={whyChooseUsImage}
                alt={`Precision ${breadcrumb} Installation`}
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-wider text-red-400 font-semibold">
                  Industrial-Grade Precision
                </p>
                <p className="text-lg font-bold">
                  Zero-Compromise Engineering & Performance Standards
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONSULTATION FORM */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-200/80">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1 leading-snug">
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
                    {formServicesList.map((srv, idx) => (
                      <option key={idx} value={srv}>
                        {srv}
                      </option>
                    ))}
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
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  <span>Submit Enquiry</span>
                  <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SHOWCASING EXCELLENCE (PORTFOLIO - DARK SECTION)
      ======================================================== */}
      <section className="w-full py-20 px-6 lg:px-20 bg-[#111111] text-white border-y border-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* TOP HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-2">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {portfolioTitle}
              </h2>
            </div>
            <p className="text-gray-400 text-xs md:text-sm max-w-sm mt-4 md:mt-0 text-left md:text-right leading-relaxed">
              A glimpse into our high-precision electrical engineering works and
              infrastructure layouts.
            </p>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT BIG IMAGE */}
            <div className="lg:col-span-7 h-[360px] sm:h-[430px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
              <Image
                src={portfolioBigImage}
                alt={portfolioBigTitle}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition duration-500 opacity-0 group-hover:opacity-100">
                <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-semibold rounded-full uppercase tracking-wider">
                  {portfolioBigTag}
                </span>
                <p className="text-white font-bold text-lg mt-2 leading-snug">
                  {portfolioBigTitle}
                </p>
              </div>
            </div>

            {/* RIGHT STACKED IMAGES */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 h-auto lg:h-[430px]">
              <div className="h-[200px] lg:h-[203px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
                <Image
                  src={portfolioStackedImage1}
                  alt={portfolioStackedTitle1}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                    {portfolioStackedTag1}
                  </p>
                  <p className="text-sm font-bold text-white mt-1">
                    {portfolioStackedTitle1}
                  </p>
                </div>
              </div>

              <div className="h-[200px] lg:h-[203px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
                <Image
                  src={portfolioStackedImage2}
                  alt={portfolioStackedTitle2}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                    {portfolioStackedTag2}
                  </p>
                  <p className="text-sm font-bold text-white mt-1">
                    {portfolioStackedTitle2}
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

            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="w-12 h-12 rounded-full bg-red-600 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-red-600/30">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-5 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-505 text-xs md:text-sm leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 GUARANTEE / VALUE BADGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center text-xl mb-4">
                <FiShield />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Safe Execution</h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                Fire-retardant and shock-proof parameters.
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
          6. LIGHT CTA
      ======================================================== */}
      <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {ctaTitle}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {ctaDesc}
          </p>
          <a
            href="#consultation-form"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition shadow-lg shadow-red-600/25 text-sm"
          >
            <span>Contact Us Now</span>
            <FiArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
