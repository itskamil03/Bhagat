"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaLeaf,
  FaStar,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaMapMarkerAlt
} from "react-icons/fa";
import Contact from "../../components/contact";

// ==========================================
// EASILY REPLACEABLE IMAGE CONFIGURATION FOR ADMIN
// ==========================================
const celebrating50Images = {
  // Hero section image
  heroCakeCeremony: "/za1.jpg",
  
  // Hero background towers sketch
  heroBackgroundSketch: "/image 59.png",

  // Our Journey 2x2 grid images
  journeyGridTopLeft: "/a8.jpg",
  journeyGridTopRight: "/za1.jpg",
  journeyGridBottomLeft: "/a7.jpg",
  journeyGridBottomRight: "/sh1.png",

  // Celebrating moments slider images
  moment1: "/a2.png",
  moment2: "/a3.png",
  moment3: "/a4.png",
  moment4: "/a5.png",
};

const stats = [
  { value: "50+", label: "Years of Excellence", icon: <FaStar /> },
  { value: "1000+", label: "Projects Completed", icon: <FaCheckCircle /> },
  { value: "500+", label: "Skilled Professionals", icon: <FaUsers /> },
  { value: "Across India", label: "Pan India Presence", icon: <FaMapMarkerAlt /> },
  { value: "ISO 9001:2015", label: "Certified Company", icon: <FaAward /> }
];

const impacts = [
  {
    title: "Innovation",
    desc: "Continuously adopting new technologies and engineering best practices.",
    icon: <FaLightbulb className="text-xl text-[#E61B23]" />
  },
  {
    title: "Quality",
    desc: "Committed to delivering safe, reliable, and quality solutions.",
    icon: <FaShieldAlt className="text-xl text-[#E61B23]" />
  },
  {
    title: "Trust",
    desc: "Building long-term relationships with clients and partners.",
    icon: <FaHandshake className="text-xl text-[#E61B23]" />
  },
  {
    title: "People",
    desc: "Empowering our people to grow, innovate and lead with pride.",
    icon: <FaUsers className="text-xl text-[#E61B23]" />
  },
  {
    title: "Sustainability",
    desc: "Committed to sustainable engineering for a better tomorrow.",
    icon: <FaLeaf className="text-xl text-[#E61B23]" />
  }
];

const momentImages = [
  { src: celebrating50Images.moment1, alt: "Dance performance on stage" },
  { src: celebrating50Images.moment2, alt: "Lighting the lamp ceremony" },
  { src: celebrating50Images.moment3, alt: "Stage setup with lights" },
  { src: celebrating50Images.moment4, alt: "Group photo outside office" }
];

export default function Celebrating50Years() {
  const [momentIndex, setMomentIndex] = useState(0);

  const handleNext = () => {
    setMomentIndex((prev) => (prev + 1) % momentImages.length);
  };

  const handlePrev = () => {
    setMomentIndex((prev) => (prev - 1 + momentImages.length) % momentImages.length);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans relative">
      
      {/* ================= HERO SECTION (WHITE BG, PREMIUM CELEBRATION THEME) ================= */}
      <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 px-6 lg:px-16">
        
        {/* Faint Red Substation Towers Sketch in Background */}
        <div className="absolute left-0 top-0 w-full lg:w-[60%] h-full z-0 pointer-events-none select-none opacity-[0.06] mix-blend-multiply">
          <Image
            src={celebrating50Images.heroBackgroundSketch}
            alt="Faint Substation Towers background sketch"
            fill
            className="object-cover object-left-top"
          />
        </div>

        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
            {/* Breadcrumb Navigation */}
            <nav className="text-xs md:text-sm text-gray-400 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-[#E61B23] transition-colors">Home</Link>
              <span>&gt;</span>
              <Link href="/about" className="hover:text-[#E61B23] transition-colors">About Us</Link>
              <span>&gt;</span>
              <span className="text-[#E61B23] font-semibold">Celebrating 50 Years</span>
            </nav>

            <span className="text-[#E61B23] font-extrabold tracking-[0.25em] text-xs uppercase mb-4">
              CELEBRATING
            </span>

            {/* Gold Metallic 50 Years Badge/Logo */}
            <div className="relative w-44 h-44 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 shadow-[0_10px_30px_rgba(245,158,11,0.3)] border-4 border-amber-200">
              {/* Gold Glossy Radial Ring */}
              <div className="absolute inset-1 rounded-full border border-white/20 bg-gradient-to-tl from-transparent via-white/5 to-transparent pointer-events-none" />
              
              {/* Giant 50 */}
              <span className="text-7xl font-extrabold text-white tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                50
              </span>

              {/* Red Ribbon Overlay */}
              <div className="absolute -bottom-3 bg-[#E61B23] text-white px-5 py-1 text-[11px] font-extrabold uppercase tracking-widest rounded-md shadow-md border border-red-700 transform skew-x-3">
                YEARS
              </div>
            </div>

            {/* Subtitle */}
            <h1 className="text-3xl lg:text-[40px] font-extrabold text-gray-900 leading-tight mt-8 tracking-tight">
              OF ENGINEERING EXCELLENCE
            </h1>

            {/* Description */}
            <p className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed max-w-xl">
              Five decades of trust, innovation, and commitment to building a stronger India.
              From a small beginning in 1976 to becoming a trusted name in engineering
              solutions across the nation.
            </p>

            {/* Button */}
            <a
              href="#journey"
              className="bg-[#E61B23] hover:bg-red-700 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-colors w-fit mt-8"
            >
              <span>Our Journey</span>
              <FaArrowRight size={12} />
            </a>
          </div>

          {/* Hero Right Column (Curved Image Block with Red Border Overlay) */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[340px] md:h-[480px]">
            {/* Red border and decorative panels underneath */}
            <div className="absolute top-4 left-4 right-[-4px] bottom-[-4px] bg-[#E61B23]/10 border border-[#E61B23]/20 rounded-l-[100px] rounded-r-2xl pointer-events-none" />
            
            {/* Main curved image wrapper */}
            <div className="relative w-full h-full rounded-l-[100px] rounded-r-2xl overflow-hidden border-l-8 border-t-8 border-[#E61B23] shadow-2xl">
              <Image
                src={celebrating50Images.heroCakeCeremony} // Cake cutting ceremony
                alt="50 Years Celebration Cake Cutting"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating White Circular Date Badge */}
            <div className="absolute top-1/2 left-4 lg:-left-12 -translate-y-1/2 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-white shadow-xl border border-gray-100 z-30 select-none pointer-events-none">
              <span className="text-[#E61B23] font-bold text-sm tracking-wide">1976</span>
              <span className="w-8 h-[1px] bg-red-200 my-1" />
              <span className="text-gray-900 font-bold text-sm tracking-wide">2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="w-full bg-white px-6">
        <div className="max-w-[1240px] mx-auto bg-white rounded-2xl border border-gray-150 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 lg:pl-6 justify-start">
              <div className="w-10 h-10 rounded-full bg-red-50 text-[#E61B23] flex items-center justify-center text-lg shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#E61B23] leading-none">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-semibold text-[10px] md:text-xs mt-1.5 uppercase tracking-wider leading-none">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR JOURNEY GRID SECTION ================= */}
      <section id="journey" className="w-full py-20 bg-white px-6">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Journey Left Info */}
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
              <h2 className="text-[#E61B23] font-bold tracking-[0.25em] text-xs uppercase">
                OUR JOURNEY
              </h2>
              <span className="w-12 h-[1px] bg-red-400" />
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              A Legacy Built on
              <br />
              <span className="text-[#E61B23]">Trust and Excellence</span>
            </h3>

            <p className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed">
              What started in 1976 with a vision to deliver quality electrical solutions has today
              grown into a multi-disciplinary engineering company delivering complex projects across
              power, railways, industries, and infrastructure.
            </p>

            <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
              Our journey of 50 years is a testament to the trust of our clients, the dedication of
              our people, and our commitment to engineering a better tomorrow.
            </p>

            <Link
              href="/gallery"
              className="bg-[#E61B23] hover:bg-red-700 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-colors w-fit mt-8 shadow-md"
            >
              <span>Milestones Timeline</span>
              <FaArrowRight size={12} />
            </Link>
          </div>

          {/* Journey Right 2x2 Photo Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image 
                src={celebrating50Images.journeyGridTopLeft} 
                alt="Stage Event Group" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image 
                src={celebrating50Images.journeyGridTopRight} 
                alt="Cake Ceremony" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image 
                src={celebrating50Images.journeyGridBottomLeft} 
                alt="Award Ceremony" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image 
                src={celebrating50Images.journeyGridBottomRight} 
                alt="Group Photo" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FIVE DECADES OF IMPACT SECTION ================= */}
      <section className="w-full py-16 bg-gray-50 border-y border-gray-150 px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-12">
            <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <h2 className="text-[#E61B23] font-bold tracking-[0.15em] md:tracking-[0.25em] text-xs md:text-sm uppercase text-center">
              FIVE DECADES OF IMPACT
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-red-400" />
          </div>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {impacts.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-150 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4 text-[#E61B23]">
                  {card.icon}
                </div>
                <h4 className="font-extrabold text-sm md:text-base text-gray-900 leading-snug">
                  {card.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed mt-2">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CELEBRATING MOMENTS SECTION ================= */}
      <section className="w-full py-16 bg-white px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-12">
            <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <h2 className="text-[#E61B23] font-bold tracking-[0.15em] md:tracking-[0.25em] text-xs md:text-sm uppercase text-center">
              CELEBRATING MOMENTS
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-red-400" />
          </div>

          {/* Carousel Slider */}
          <div className="relative max-w-5xl mx-auto flex items-center gap-4">
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-[#E61B23] hover:bg-gray-50 transition-colors flex-shrink-0"
            >
              <FaChevronLeft size={16} />
            </button>

            {/* Slider Content Wrapper */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 overflow-hidden py-2">
              {momentImages.map((img, idx) => {
                // Determine responsive visibility classes
                const isVisibleOnMobile = idx === momentIndex;

                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl overflow-hidden border border-gray-150 shadow-sm transition-all duration-300 ${
                      isVisibleOnMobile ? "block" : "hidden md:block"
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-[#E61B23] hover:bg-gray-50 transition-colors flex-shrink-0"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= RED CTA BANNER ================= */}
      <section className="w-full py-8 bg-[#E61B23] text-white px-6">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Text block */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            {/* Gold Seal Emblem with Laurel Wreath Feel */}
            <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center select-none">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400 opacity-60 animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 border border-amber-200 flex flex-col items-center justify-center shadow-lg">
                <span className="text-xl font-black text-white leading-none">50</span>
                <span className="text-[8px] font-extrabold text-white uppercase tracking-widest mt-0.5 bg-red-600 px-1.5 py-0.5 rounded shadow-sm">YEARS</span>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-extrabold text-base md:text-lg leading-snug">
                Here&apos;s to the Past, Present and Future!
              </h4>
              <p className="text-white/80 text-xs md:text-sm mt-1 max-w-xl">
                As we celebrate 50 glorious years, we renew our commitment to engineering excellence
                and look forward to powering India&apos;s future.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/career"
            className="bg-white hover:bg-gray-50 text-[#E61B23] font-bold text-xs md:text-sm px-6 py-3 rounded-lg flex items-center justify-center md:justify-start gap-2 transition-colors whitespace-nowrap w-full md:w-auto shadow-md"
          >
            <span>Join Us on the Journey</span>
            <FaArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* ================= CONTACT CTA SECTION ================= */}
      <Contact />
    </main>
  );
}
