"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Contact from "../../components/contact";

// API imports
import { getPowerSubstationPortfolio } from "../../../lib/api/powerSubstationPortfolio";
import { getTransformerPortfolio } from "../../../lib/api/transformerPortfolio";
import { getCableLayingPortfolio } from "../../../lib/api/overheadUndergroundCableLayingPortfolio";
import { getDomesticWiringPortfolio } from "../../../lib/api/domesticWiringPortfolio";
import { getFacadeLightingPortfolio } from "../../../lib/api/facadeLightingPortfolio";
import { getHighMastPortfolio } from "../../../lib/api/highMastPortfolio";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [imagesList, setImagesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tabs = [
    "All",
    "Erection and Maintenance of Power Substation",
    "Installation and Commissioning of Compact Substation",
    "Over head and underground Cable Laying",
    "Industrial/Quarter Wiring",
    "Facade Lighting",
    "Erection and commissioning of High Mast Pole/Tower and Poles",
  ];

  // Helper to extract and upgrade image URLs safely
  const processImage = (item, category) => {
    let url = null;
    
    // Some endpoints use `groupImage`, some use `image`, some use `images` array
    if (typeof item.groupImage === 'string' && item.groupImage.trim() !== '') {
      url = item.groupImage;
    } else if (typeof item.image === 'string' && item.image.trim() !== '') {
      url = item.image;
    } else if (item.images && Array.isArray(item.images) && item.images.length > 0) {
      const firstImg = item.images[0];
      url = typeof firstImg === 'string' ? firstImg : (firstImg?.image || firstImg?.url);
    }

    if (url && url.startsWith('http://res.cloudinary.com')) {
      url = url.replace('http://', 'https://');
    }

    return url ? { src: url, category, id: item._id || Math.random().toString() } : null;
  };

  useEffect(() => {
    async function fetchAllGalleryData() {
      setIsLoading(true);
      
      try {
        const results = await Promise.allSettled([
          getPowerSubstationPortfolio(),
          getTransformerPortfolio(),
          getCableLayingPortfolio(),
          getDomesticWiringPortfolio(),
          getFacadeLightingPortfolio(),
          getHighMastPortfolio()
        ]);

        let combinedImages = [];

        // 0: Erection and Maintenance of Power Substation
        if (results[0].status === 'fulfilled' && results[0].value) {
          const pssData = Array.isArray(results[0].value) ? results[0].value : (results[0].value.data || []);
          combinedImages.push(...pssData.map(item => processImage(item, "Erection and Maintenance of Power Substation")));
        }

        // 1: Installation and Commissioning of Compact Substation
        if (results[1].status === 'fulfilled' && results[1].value) {
          const transData = Array.isArray(results[1].value) ? results[1].value : (results[1].value.data || []);
          combinedImages.push(...transData.map(item => processImage(item, "Installation and Commissioning of Compact Substation")));
        }

        // 2: Over head and underground Cable Laying
        if (results[2].status === 'fulfilled' && results[2].value) {
          const cableData = Array.isArray(results[2].value) ? results[2].value : (results[2].value.data || []);
          combinedImages.push(...cableData.map(item => processImage(item, "Over head and underground Cable Laying")));
        }

        // 3: Industrial/Quarter Wiring
        if (results[3].status === 'fulfilled' && results[3].value) {
          const wiringData = Array.isArray(results[3].value) ? results[3].value : (results[3].value.data || []);
          combinedImages.push(...wiringData.map(item => processImage(item, "Industrial/Quarter Wiring")));
        }

        // 4: Facade Lighting
        if (results[4].status === 'fulfilled' && results[4].value) {
          const facadeData = Array.isArray(results[4].value) ? results[4].value : (results[4].value.data || []);
          combinedImages.push(...facadeData.map(item => processImage(item, "Facade Lighting")));
        }

        // 5: Erection and commissioning of High Mast Pole/Tower and Poles
        if (results[5].status === 'fulfilled' && results[5].value) {
          const highMastData = Array.isArray(results[5].value) ? results[5].value : (results[5].value.data || []);
          combinedImages.push(...highMastData.map(item => processImage(item, "Erection and commissioning of High Mast Pole/Tower and Poles")));
        }

        // Filter out any nulls that failed to process an image
        setImagesList(combinedImages.filter(img => img !== null));

      } catch (err) {
        console.error("Error fetching gallery images:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllGalleryData();
  }, []);

  const filteredImages = activeTab === "All" 
    ? imagesList 
    : imagesList.filter(img => img.category === activeTab);

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
        {/* Filters - Professional Dropdown */}
        <div className="mb-12 flex justify-start relative z-30">
          <div
            className="relative w-full max-w-[500px]"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-4 px-5 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-800 font-semibold text-[14px] md:text-[15px] group"
            >
              <span className="truncate">{activeTab}</span>
              <FaChevronDown className={`flex-shrink-0 text-[#E61B23] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden z-40 origin-top"
                >
                  <div className="max-h-[350px] overflow-y-auto no-scrollbar">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-5 py-3.5 font-medium text-[14px] md:text-[15px] transition-all duration-200 hover:pl-7 ${activeTab === tab
                            ? "text-[#E61B23] bg-red-50/50 border-l-[3px] border-[#E61B23]"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-[3px] border-transparent"
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 min-h-[300px]">
          <AnimatePresence>
            {isLoading ? (
              <div className="col-span-full flex justify-center items-center py-20">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-[#E61B23] rounded-full animate-spin"></div>
              </div>
            ) : filteredImages.length > 0 ? (
              filteredImages.map((item, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={`${item.id}-${idx}`} 
                  className="relative aspect-[392/243] rounded-[9px] overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.06)] bg-gray-100 cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={`Gallery Image ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-500 font-medium">
                No images found for this category.
              </div>
            )}
          </AnimatePresence>
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
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
              className="w-full sm:w-auto bg-[#CC0000] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-[4px] font-semibold text-[13px] md:text-sm hover:bg-red-800 transition-colors shadow-[0_4px_14px_rgba(204,0,0,0.3)] text-center"
            >
              Discuss Your Project
            </button>
            <Link href="/service">
              <button className="w-full sm:w-auto bg-white text-gray-800 border border-gray-200 px-8 md:px-10 py-3.5 md:py-4 rounded-[4px] font-semibold text-[13px] md:text-sm hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm text-center">
                View Our Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
