"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Contact from "../components/contact";

const categories = [
  "All",
  "Our Team",
  "Electrical Installations",
  "Transformer Services",
  "Industrial Infrastructure",
  "Railway Projects",
  "Events & Achievements",
];

const dummyProjects = [
  {
    id: 1,
    title: "Team Strategy & Planning Session",
    category: "Our Team",
    image: "/a8.jpg",
  },
  {
    id: 2,
    title: "High Voltage Substation Transformer",
    category: "Transformer Services",
    image: "/a4.png",
  },
  {
    id: 3,
    title: "Overhead Distribution Network",
    category: "Electrical Installations",
    image: "/dw1.jpg",
  },
  {
    id: 4,
    title: "Industrial Electrical Infrastructure",
    category: "Industrial Infrastructure",
    image: "/dy3.png",
  },
  {
    id: 5,
    title: "Pole-Mounted Distribution Transformer",
    category: "Transformer Services",
    image: "/pk.png",
  },
  {
    id: 6,
    title: "Annual Celebration & Team Event",
    category: "Events & Achievements",
    image: "/cer3.png",
  },
  {
    id: 7,
    title: "High Voltage Power Grid Switchyard",
    category: "Electrical Installations",
    image: "/pa1.png",
  },
  {
    id: 8,
    title: "Milestone Achievement & Recognition",
    category: "Events & Achievements",
    image: "/cer2.png",
  },
  {
    id: 9,
    title: "On-Site Engineering Inspection",
    category: "Our Team",
    image: "/sh1.png",
  },
  {
    id: 10,
    title: "Railway Electrification Network",
    category: "Railway Projects",
    image: "/a9.png",
  },
  {
    id: 11,
    title: "Substation Switchyard & Towers",
    category: "Industrial Infrastructure",
    image: "/image 36.png",
  },
  {
    id: 12,
    title: "Railway Traction & Line Inspection",
    category: "Railway Projects",
    image: "/a8.jpg",
  },
];

const eras = {
  "1976 - 1985": {
    titleLeft: "Foundation for",
    titleRight: "Excellence.",
    desc: "The beginning of our journey in electrical contracting and power infrastructure. Built on integrity, technical expertise, and customer trust, we established the foundation that continues to power our growth today."
  },
  "1986 - 1995": {
    titleLeft: "Expanding",
    titleRight: "Horizons.",
    desc: "Entering industrial infrastructure and expanding services across Bihar. We undertook our first major government substation projects and established ourselves as a reliable utility partner."
  },
  "1996 - 2005": {
    titleLeft: "Technological",
    titleRight: "Leap.",
    desc: "Adopting advanced transformer services, servo stabilizers, and high-voltage setups. We modernized our installation methods and scaled our engineering workforce to meet rising energy demands."
  },
  "2006 - 2015": {
    titleLeft: "National",
    titleRight: "Footprint.",
    desc: "Executing major railway electrification and sub-station projects across India. We grew our pan-India presence and achieved ISO certifications, partnering with national corporations."
  },
  "2016 - 2026": {
    titleLeft: "Powering the",
    titleRight: "Future.",
    desc: "Celebrating 50 years of engineering leadership. We are pioneering sustainable, modern smart grid systems, facade lighting, and next-generation power infrastructure to build a stronger nation."
  }
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDecade, setSelectedDecade] = useState("1976 - 1985");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? dummyProjects
      : dummyProjects.filter((item) => item.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const currentEra = eras[selectedDecade];

  return (
    <main className="min-h-screen bg-white text-[#17162b] font-sans">
      {/* Hero Section - 1440px x 420px matching Figma specs */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full relative overflow-hidden bg-[#1F1719] text-white min-h-[420px] flex items-center"
      >
        {/* Absolute Background Image covering full width but right-aligned */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none">
          <motion.img
            src="/image 41.png"
            alt="Refinery and substation line-art sketch"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              filter: "blur(0px)",
              transitionEnd: { filter: "none" }
            }}
            whileHover={{ scale: 1.02 }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 0.3 },
              filter: { duration: 1 }
            }}
            className="w-full h-full object-contain object-right"
          />
        </div>

        {/* Linear Gradient Overlay for seamless blending (dark to transparent) */}
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: "linear-gradient(270deg, rgba(48, 19, 23, 0) 0%, rgba(52, 19, 23, 0.52) 30.74%, rgba(35, 20, 22, 0.66) 41.58%, #1B1416 63.54%, #1F1719 100%)"
          }}
        />

        <div className="max-w-[1440px] mx-auto w-full relative z-20 grid md:grid-cols-[40%_60%] items-center px-6 md:px-16">
          {/* Left Text (40% Column) */}
          <div className="py-12 md:py-16 flex flex-col justify-center h-full select-none">
            {/* Decade Selector Dropdown */}
            <div className="relative w-fit mb-4" ref={dropdownRef}>
              <motion.button 
                initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transitionEnd: { filter: "none" }
                }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center gap-1 text-[#E31E24] font-semibold text-[14px] cursor-pointer hover:text-red-500 transition-colors focus:outline-none bg-black/20 px-3 py-1.5 rounded-lg border border-red-500/10"
              >
                <span>{selectedDecade}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>

              {/* Dropdown Options */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-150 p-2 z-50 overflow-hidden"
                  >
                    {Object.keys(eras).map((decade) => (
                      <button
                        key={decade}
                        onClick={() => {
                          setSelectedDecade(decade);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                          selectedDecade === decade
                            ? "bg-red-50 text-[#E31E24]"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                      >
                        {decade}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Title with Era Transition */}
            <AnimatePresence mode="wait">
              <motion.h1 
                key={selectedDecade}
                initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  filter: "blur(0px)",
                  transitionEnd: { filter: "none" }
                }}
                exit={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-none tracking-tight select-text"
              >
                {currentEra.titleLeft}
                <span className="block text-[#E31E24] mt-1">{currentEra.titleRight}</span>
              </motion.h1>
            </AnimatePresence>

            {/* Description with Era Transition */}
            <AnimatePresence mode="wait">
              <motion.p 
                key={selectedDecade}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  filter: "blur(0px)",
                  transitionEnd: { filter: "none" }
                }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#D1D5DB] max-w-sm text-sm md:text-[15px] leading-relaxed mt-5 select-text"
              >
                {currentEra.desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right Spacer (60% Column) to display absolute background image */}
          <div className="hidden md:block h-[420px]" />
        </div>
      </motion.section>

      {/* Filter Tabs & Grid Section - 1203px max width */}
      <section className="max-w-[1203px] mx-auto px-4 pt-12 pb-8">
        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(6); // reset pagination on category swap
                }}
                className={`px-4 py-2 rounded-md text-xs md:text-sm font-semibold transition-all border flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#E61B23] text-white border-[#E61B23] shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#E61B23] hover:text-[#E61B23]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Photo Grid - Exactly matching 392px x 243px card proportion with 19px gap */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[19px]"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[243px] bg-gray-100 rounded-[9px] overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer border border-gray-150"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover title overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                  <span className="text-xs text-red-400 font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm md:text-base leading-snug mt-1">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Button: Load More / Show Less */}
        <div className="text-center mt-12 mb-6">
          {filteredProjects.length > 6 && (
            <button 
              onClick={() => {
                if (visibleCount >= filteredProjects.length) {
                  setVisibleCount(6);
                } else {
                  setVisibleCount((prev) => prev + 6);
                }
              }}
              className="inline-flex items-center gap-2 border border-[#E61B23] text-[#E61B23] hover:bg-[#E61B23] hover:text-white px-6 py-2.5 rounded-md text-xs font-bold transition-all shadow-sm"
            >
              <span>{visibleCount >= filteredProjects.length ? "Show Less" : "Load more photos"}</span>
              <span className="text-sm">↻</span>
            </button>
          )}
        </div>
      </section>

      {/* Red Stats Banner */}
      <section className="max-w-[1203px] mx-auto px-4 my-8">
        <div className="bg-[#D3121A] rounded-xl text-white py-8 px-6 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-red-400/40">
          <div className="flex flex-col items-center justify-center pt-2 lg:pt-0">
            <span className="text-3xl md:text-4xl font-extrabold">50+</span>
            <span className="text-xs md:text-sm text-red-100 mt-1">
              Years of Legacy
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
            <span className="text-3xl md:text-4xl font-extrabold">1000+</span>
            <span className="text-xs md:text-sm text-red-100 mt-1">
              Projects Delivered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
            <span className="text-3xl md:text-4xl font-extrabold">500+</span>
            <span className="text-xs md:text-sm text-red-100 mt-1">
              Skilled Professionals
            </span>
          </div>

          <div className="flex flex-col items-center justify-center pt-4 lg:pt-0">
            <span className="text-3xl md:text-4xl font-extrabold">250+</span>
            <span className="text-xs md:text-sm text-red-100 mt-1">
              Satisfied Clients
            </span>
          </div>
        </div>
      </section>

      {/* Have a Project in Mind Banner */}
      <section className="bg-[#FFF7F7] py-12 px-4 mt-10">
        <div className="max-w-[1203px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[#E61B23] text-xs font-bold uppercase tracking-wider">
              LET&apos;S BUILD THE FUTURE TOGETHER
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#17162b] mt-1">
              Have a project in mind? Let&apos;s power it together.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
              className="bg-[#E61B23] text-white px-6 py-2.5 rounded-md font-semibold text-xs md:text-sm hover:bg-red-700 transition-colors shadow-sm active:scale-[0.98]"
            >
              Discuss Your Project →
            </button>
            <Link href="/service">
              <button className="bg-white text-[#17162b] border border-gray-200 px-6 py-2.5 rounded-md font-semibold text-xs md:text-sm hover:bg-gray-50 transition-colors shadow-sm active:scale-[0.98]">
                View Our Services →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dark Contact CTA Section */}
      <Contact />
    </main>
  );
}
