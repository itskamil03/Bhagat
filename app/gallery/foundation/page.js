"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Contact from "../../components/contact";

function CountUp({ end, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const target = parseInt(end.replace(/[^0-9]/g, ""), 10);
    if (isNaN(target)) return;

    let animFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animFrameId = window.requestAnimationFrame(step);
      }
    };
    animFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animFrameId) window.cancelAnimationFrame(animFrameId);
    };
  }, [end, duration, isInView]);

  const formattedVal = count >= 1000 ? count.toLocaleString() : count;

  return (
    <span ref={ref}>
      {formattedVal}
      {suffix}
    </span>
  );
}

export default function FoundationGalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Our Team",
    "Electrical Installations",
    "Transformer Services",
    "Industrial Infrastructure",
    "Railway Projects",
    "Events & Achievements",
  ];

  const images = [
    "/a8.jpg",
    "/a7.jpg",
    "/dw1.jpg",
    "/a9.png",
    "/a5c.png",
    "/lr1.png",
    "/lr2.png",
    "/lr3.png",
    "/lr4.png",
    "/lr5.png",
    "/rr1.png",
    "/rr2.png",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#241C1E] text-white relative overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Right side image - we use a sketch/industrial image with a red-tint mask */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] h-full z-0 opacity-90 hidden md:block">
          <Image
            src="/dw1.jpg"
            alt="Factory Sketch"
            fill
            className="object-cover object-right"
            style={{
              filter: "sepia(1) hue-rotate(335deg) saturate(3) brightness(0.7) contrast(1.1)",
              mixBlendMode: "screen"
            }}
          />
          {/* Gradient mask to fade image smoothly into the dark background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#241C1E] via-[#241C1E]/80 to-transparent"></div>
        </div>

        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 md:hidden opacity-30">
          <Image
            src="/dw1.jpg"
            alt="Factory Sketch Mobile"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241C1E] to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-20 px-6 py-20 md:py-32 flex items-center">
          <div className="max-w-2xl pt-8 -mt-[76px]">
            {/* Date label removed as requested */}
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] text-white mb-6">
              Foundation for <br />
              <span className="text-[#E61B23]">Excellence</span>.
            </h1>

            <p className="text-gray-300 text-sm md:text-[15px] max-w-[540px] leading-[1.8]">
              The beginning of our journey in electrical contracting and power infrastructure.
              Built on integrity, technical expertise, and customer trust, we established the
              foundation that continues to power our growth today.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-[1400px] mx-auto px-6 pt-16 pb-24">
        {/* Filter Tabs */}
        <div className="flex items-center gap-3 justify-start mb-12 overflow-x-auto no-scrollbar w-full pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap flex-shrink-0 px-4 md:px-5 py-2 text-[13px] md:text-sm font-medium rounded-[4px] transition-colors border ${activeTab === tab
                  ? "bg-[#CC0000] text-white border-[#CC0000]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-[392/243] rounded-[9px] overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-[#D9D9D9] cursor-pointer">
              <Image
                src={src}
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-14 flex justify-center">
          <button className="border border-[#CC0000] text-[#CC0000] px-10 py-3 rounded-[4px] text-sm font-semibold hover:bg-red-50 transition-colors tracking-wide">
            Load more photos <span className="ml-1 opacity-80">↻</span>
          </button>
        </div>
      </section>      {/* Stats Banner */}
      <section className="w-full py-14 px-6 flex justify-center bg-white overflow-hidden -mt-[76px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1400px] bg-[#CC0000] text-white rounded-[6.66px] py-[36.26px] px-[20px] lg:px-[41.14px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[63.23px] lg:h-[127.42px]"
        >
          {/* Item 1 */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 w-full justify-center lg:justify-start">
            <div className="flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[32px] lg:text-[40px] font-bold leading-none"><CountUp end="50" suffix="+" /></h3>
              <p className="text-[11px] lg:text-xs font-medium opacity-90 mt-1 whitespace-nowrap">Years of Legacy</p>
            </div>
          </motion.div>

          <div className="hidden lg:block w-px h-[55px] bg-white/30 flex-shrink-0"></div>

          {/* Item 2 */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 w-full justify-center lg:justify-start">
            <div className="flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[32px] lg:text-[40px] font-bold leading-none"><CountUp end="1000" suffix="+" /></h3>
              <p className="text-[11px] lg:text-xs font-medium opacity-90 mt-1 whitespace-nowrap">Projects Delivered</p>
            </div>
          </motion.div>

          <div className="hidden lg:block w-px h-[55px] bg-white/30 flex-shrink-0"></div>

          {/* Item 3 */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 w-full justify-center lg:justify-start">
            <div className="flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[32px] lg:text-[40px] font-bold leading-none"><CountUp end="500" suffix="+" /></h3>
              <p className="text-[11px] lg:text-xs font-medium opacity-90 mt-1 whitespace-nowrap">Skilled Professionals</p>
            </div>
          </motion.div>

          <div className="hidden lg:block w-px h-[55px] bg-white/30 flex-shrink-0"></div>

          {/* Item 4 */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 w-full justify-center lg:justify-start">
            <div className="flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[32px] lg:text-[40px] font-bold leading-none"><CountUp end="250" suffix="+" /></h3>
              <p className="text-[11px] lg:text-xs font-medium opacity-90 mt-1 whitespace-nowrap">Satisfied Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Project CTA Section */}
      <section className="bg-[#FCF5F5] py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <p className="text-[#CC0000] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-4">
              LET'S BUILD THE FUTURE TOGETHER
            </p>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[#111111] leading-[1.15]">
              Have a project in mind?<br />
              Let's power it together.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="w-full sm:w-auto bg-[#CC0000] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-[4px] font-semibold text-[13px] md:text-sm hover:bg-red-800 transition-colors shadow-[0_4px_14px_rgba(204,0,0,0.3)] text-center">
              Discuss Your Project
            </button>
            <button className="w-full sm:w-auto bg-white text-gray-800 border border-gray-200 px-8 md:px-10 py-3.5 md:py-4 rounded-[4px] font-semibold text-[13px] md:text-sm hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm text-center">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
