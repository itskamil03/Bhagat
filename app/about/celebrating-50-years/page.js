"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  FaMapMarkerAlt,
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
  {
    value: "50+",
    label: "Years of Excellence",
    icon: (
      <svg
        className="w-9 h-9 text-[#E31E24]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path
          d="M18 42C16 38 16 30 20 22C21 20 23 18 25 18"
          strokeLinecap="round"
        />
        <path
          d="M16 34C13 33 11 30 13 27C15 24 18 26 18 26"
          fill="currentColor"
        />
        <path
          d="M18 28C15 26 14 22 17 20C20 18 22 21 22 21"
          fill="currentColor"
        />
        <path
          d="M46 42C48 38 48 30 44 22C43 20 41 18 39 18"
          strokeLinecap="round"
        />
        <path
          d="M48 34C51 33 53 30 51 27C49 24 46 26 46 26"
          fill="currentColor"
        />
        <path
          d="M46 28C49 26 50 22 47 20C44 18 42 21 42 21"
          fill="currentColor"
        />
        <path
          d="M32 16L35.5 23.5L43.5 24.3L37.5 29.7L39.2 37.7L32 33.5L24.8 37.7L26.5 29.7L20.5 24.3L28.5 23.5L32 16Z"
          fill="#E31E24"
          stroke="#E31E24"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: "1000+",
    label: "Projects Completed",
    icon: (
      <svg
        className="w-9 h-9 text-[#E31E24]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 30C18 20 24 16 32 16C40 16 46 20 46 30" strokeWidth="3" />
        <path d="M14 30H50" strokeWidth="3" />
        <path d="M32 16V10" />
        <path d="M22 30V34C22 40 26 44 32 44C38 44 42 40 42 34V30" />
        <path d="M14 54C14 46 20 44 32 44C44 44 50 46 50 54" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "Skilled Professionals",
    icon: (
      <svg
        className="w-9 h-9 text-[#E31E24]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="22" r="9" />
        <path d="M16 52C16 42 22 38 32 38C42 38 48 42 48 52" />
        <path d="M26 38L32 46L38 38" />
        <path d="M32 46V54" />
      </svg>
    ),
  },
  {
    value: "Across India",
    label: "Pan India Presence",
    icon: (
      <svg
        className="w-9 h-9 text-[#E31E24]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 16 L28 14 L30 18 L34 16 L36 20 L40 22 L38 26 L42 28 L40 32 L36 34 L32 36 L30 40 L28 44 L26 48 L28 52 L26 54 L24 50 L24 46 L20 44 L18 40 L20 36 L18 32 L20 28 L22 24 Z" />
        <circle cx="28" cy="30" r="3" fill="#E31E24" />
      </svg>
    ),
  },
  {
    value: "ISO 9001:2015",
    label: "Certified Company",
    icon: (
      <svg
        className="w-9 h-9 text-[#E31E24]"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 10C32 10 44 12 48 16C50 26 48 42 32 52C16 42 14 26 16 16C20 12 32 10 32 10Z" />
        <path d="M24 30L30 36L40 24" strokeWidth="3" />
      </svg>
    ),
  },
];

const impacts = [
  {
    title: "Innovation",
    desc: "Continuously adopting new technologies and engineering best practices.",
    icon: <FaLightbulb className="text-xl text-[#E61B23]" />,
  },
  {
    title: "Quality",
    desc: "Committed to delivering safe, reliable, and quality solutions.",
    icon: <FaShieldAlt className="text-xl text-[#E61B23]" />,
  },
  {
    title: "Trust",
    desc: "Building long-term relationships with clients and partners.",
    icon: <FaHandshake className="text-xl text-[#E61B23]" />,
  },
  {
    title: "People",
    desc: "Empowering our people to grow, innovate and lead with pride.",
    icon: <FaUsers className="text-xl text-[#E61B23]" />,
  },
  {
    title: "Sustainability",
    desc: "Committed to sustainable engineering for a better tomorrow.",
    icon: <FaLeaf className="text-xl text-[#E61B23]" />,
  },
];

const momentImages = [
  { src: celebrating50Images.moment1, alt: "Dance performance on stage" },
  { src: celebrating50Images.moment2, alt: "Lighting the lamp ceremony" },
  { src: celebrating50Images.moment3, alt: "Stage setup with lights" },
  { src: celebrating50Images.moment4, alt: "Group photo outside office" },
  { src: "/a1.png", alt: "Anniversary Celebration Lamp" },
  { src: "/a6.png", alt: "Bhagat team meeting" },
  { src: "/a7.jpg", alt: "Commemorative awards presentation" },
  { src: "/a8.jpg", alt: "Corporate office photo" },
  { src: "/a9.png", alt: "Project execution site" },
];

// Counting animation component
function CountingNumber({ from, to, duration = 1.8, delay = 500 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let animationFrameId = null;
    let timeoutId = null;

    // Start counting after the initial delay to ensure the page is loaded/visible
    timeoutId = setTimeout(() => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1,
        );
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step);
        }
      };
      animationFrameId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration, delay]);

  return <>{count}</>;
}

export default function Celebrating50Years() {
  const [momentIndex, setMomentIndex] = useState(0);

  const handleNext = () => {
    setMomentIndex((prev) => (prev + 1) % momentImages.length);
  };

  const handlePrev = () => {
    setMomentIndex(
      (prev) => (prev - 1 + momentImages.length) % momentImages.length,
    );
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans relative">
      {/* ================= DESKTOP LAYOUT (100VH NO SCROLL EXPERIENE) ================= */}
      <div className="relative w-full hidden lg:block">
        {/* Desktop Hero Section */}
        <section className="relative w-full h-[calc(100vh-220px)] lg:h-[calc(100vh-220px)] lg:min-h-[420px] lg:max-h-[500px] bg-white overflow-hidden select-none">
          {/* Background towers decoration */}
          <div className="absolute left-0 bottom-0 w-[350px] h-[280px] lg:w-[420px] lg:h-[330px] opacity-[0.08] pointer-events-none z-0">
            <Image
              src="/image 59.png"
              alt="Faint Substation Towers"
              fill
              className="object-contain object-left-bottom"
            />
          </div>

          {/* Left and Right Container Grid */}
          {/* Layer 1: Right Image Section (z-10) - extended to w-[60%] to slide under the SVG curve */}
          <div className="absolute right-0 top-0 w-[60%] h-full overflow-hidden bg-white z-10">
            <div className="absolute inset-0 w-full h-full">
              <motion.div
                className="w-full h-full relative"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/fif2.png"
                  alt="Bhagat Celebration Ceremony"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Layer 2: SVG White Mask (z-15) - covers the left side of the right image */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-visible"
            viewBox="0 0 1920 630"
            preserveAspectRatio="none"
            style={{ top: 0, bottom: 0, height: "100%" }}
          >
            <path
              d="M 0 -10 L 806 -10 C 920 200, 880 430, 998 640 L 0 640 Z"
              fill="#ffffff"
            />
          </svg>

          {/* Layer 3: Left Content Section Grid (z-25) - renders on top of the mask */}
          <div className="w-full h-full grid grid-cols-[45%_55%] relative z-25">
            {/* Left content section: 45% */}
            <div className="w-full h-full flex flex-col justify-center items-center px-10 lg:px-12 xl:px-16 text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[420px] lg:max-w-[480px] xl:max-w-[500px] flex flex-col items-center"
              >
                {/* CELEBRATING line */}
                <div className="flex items-center justify-center gap-3 mb-2 lg:mb-3 w-full">
                  <div className="h-[1.5px] w-12 bg-[#E21B23]"></div>
                  <span className="text-[#E21B23] font-extrabold tracking-[0.3em] text-xs uppercase">
                    CELEBRATING
                  </span>
                  <div className="h-[1.5px] w-12 bg-[#E21B23]"></div>
                </div>

                {/* Gold 50 Years Badge */}
                <div className="w-full flex justify-center mb-3 lg:mb-4">
                  <div className="relative w-[280px] h-[150px] lg:w-[340px] lg:h-[180px]">
                    <Image
                      src="/fif1.png"
                      alt="50 Years of Engineering Excellence"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Heading */}
                <h1 className="text-[28px] lg:text-[34px] xl:text-[40px] font-black text-[#111111] leading-tight mb-2 lg:mb-3 uppercase tracking-tight">
                  OF ENGINEERING EXCELLENCE
                </h1>

                {/* Paragraph */}
                <p className="text-[14px] lg:text-[15px] xl:text-[17px] leading-[1.5] text-[#444444] mb-4 lg:mb-6 font-normal">
                  Five decades of trust, innovation, and commitment to building
                  a stronger India. From a small beginning in 1976 to becoming a
                  trusted name in engineering solutions across the nation.
                </p>

                {/* Button */}
                <motion.a
                  href="#journey"
                  whileHover={{ y: -3, backgroundColor: "#b51219" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="bg-[#E21B23] text-white font-bold text-xs lg:text-sm py-3 px-6 lg:py-3.5 lg:px-7 rounded-[8px] flex items-center gap-2 shadow-md transition-all duration-300"
                >
                  <span>Our Journey</span>
                  <FaArrowRight className="text-xs" />
                </motion.a>
              </motion.div>
            </div>

            {/* Empty spacer block for the right column of the grid */}
            <div className="w-full h-full pointer-events-none" />
          </div>

          {/* Layer 4: SVG Red Curved Divider Overlay (z-35) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-35 overflow-visible"
            viewBox="0 0 1920 630"
            preserveAspectRatio="none"
            style={{ top: 0, bottom: 0, height: "100%" }}
          >
            <path
              d="M 806 -10 C 920 200, 880 430, 998 640"
              fill="none"
              stroke="#E31E24"
              strokeWidth="8"
            />
          </svg>

          {/* Layer 5: Floating Timeline Badge (z-45) */}
          <motion.div
            style={{ left: "47.18%", top: "50%" }} // Adjusted center slightly up for absolute bottom padding spacing
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[155px] h-[155px] xl:w-[175px] xl:h-[175px] rounded-full bg-white shadow-[0_20px_50px_rgba(226,27,35,0.12)] border-4 border-double border-[#E21B23] z-45 select-none overflow-hidden"
          >
            {/* Engineering circular ticks background pattern */}
            <div className="absolute inset-2 rounded-full border border-dashed border-gray-200 pointer-events-none opacity-60" />

            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">
              ESTD
            </span>
            <span className="text-gray-900 font-extrabold text-2xl xl:text-3xl tracking-tight leading-none mt-1">
              1976
            </span>
            <span className="w-12 h-[2px] bg-[#E21B23] my-2 rounded-full" />
            <span className="text-[#E21B23] font-black text-2xl xl:text-3xl tracking-tight leading-none">
              <CountingNumber from={1976} to={2026} />
            </span>
            <span className="text-[9px] text-[#b51219] font-black uppercase tracking-widest mt-1 mb-2">
              50 YEARS
            </span>
          </motion.div>
        </section>

        {/* Desktop Stats Card (Normal Document Flow below Hero, z-10) */}
        <section className="w-full bg-transparent px-6 lg:px-8 relative z-10 mt-1">
          <div className="max-w-[1440px] mx-auto bg-white rounded-3xl border border-gray-100 py-4 px-6 lg:py-5 lg:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] grid grid-cols-5 gap-6 divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-2 pl-6 justify-start"
              >
                <div className="w-12 h-12 rounded-full bg-red-50/60 text-[#E31E24] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl lg:text-2xl font-black text-[#E31E24] leading-tight">
                    {idx === 0
                      ? <>
                          <CountingNumber from={0} to={50} duration={1.8} />+
                        </>
                      : idx === 1
                        ? <>
                            <CountingNumber from={0} to={1000} duration={1.8} />
                            +
                          </>
                        : idx === 2
                          ? <>
                              <CountingNumber
                                from={0}
                                to={500}
                                duration={1.8}
                              />
                              +
                            </>
                          : stat.value}
                  </h3>
                  <p className="text-gray-600 font-semibold text-xs lg:text-sm mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= MOBILE/TABLET LAYOUT ================= */}
      <div className="lg:hidden">
        {/* Mobile/Tablet Hero Section */}
        <section className="relative w-full bg-white flex flex-col pt-8 select-none">
          {/* Background towers decoration */}
          <div className="absolute left-0 bottom-[300px] w-[250px] h-[250px] opacity-[0.08] pointer-events-none z-0">
            <Image
              src="/image 59.png"
              alt="Faint Substation Towers"
              fill
              className="object-contain object-left-bottom"
            />
          </div>

          {/* Top Content Area */}
          <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 text-center pb-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[500px] flex flex-col items-center"
            >
              {/* CELEBRATING line */}
              <div className="flex items-center justify-center gap-3 mb-4 w-full">
                <div className="h-[1.5px] w-12 bg-[#E21B23]"></div>
                <span className="text-[#E21B23] font-extrabold tracking-[0.3em] text-xs uppercase">
                  CELEBRATING
                </span>
                <div className="h-[1.5px] w-12 bg-[#E21B23]"></div>
              </div>

              {/* Gold 50 Years Badge */}
              <div className="w-full flex justify-center mb-6">
                <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-[1.9/1]">
                  <Image
                    src="/fif1.png"
                    alt="50 Years of Engineering Excellence"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl font-black text-[#111111] leading-tight mb-4 uppercase tracking-tight">
                OF ENGINEERING EXCELLENCE
              </h1>

              {/* Paragraph */}
              <p className="text-base sm:text-lg leading-[1.8] text-[#444444] mb-6 font-normal">
                Five decades of trust, innovation, and commitment to building a
                stronger India. From a small beginning in 1976 to becoming a
                trusted name in engineering solutions across the nation.
              </p>

              {/* Button */}
              <motion.a
                href="#journey"
                whileHover={{ y: -2, backgroundColor: "#b51219" }}
                className="bg-[#E21B23] text-white font-bold text-sm py-3 px-6 rounded-[8px] flex items-center gap-2 shadow-md transition-all duration-300"
              >
                <span>Our Journey</span>
                <FaArrowRight className="text-xs" />
              </motion.a>
            </motion.div>
          </div>

          {/* Separation / Badge Container */}
          <div className="relative w-full h-[60px] bg-white flex justify-center items-center z-20">
            {/* Horizontal red separation line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] bg-[#E21B23]" />

            {/* Timeline Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative flex flex-col items-center justify-center w-[130px] h-[130px] rounded-full bg-white shadow-[0_15px_40px_rgba(226,27,35,0.12)] border-4 border-double border-[#E21B23] select-none z-30 overflow-hidden"
            >
              <div className="absolute inset-1.5 rounded-full border border-dashed border-gray-200 pointer-events-none opacity-60" />
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                ESTD
              </span>
              <span className="text-gray-900 font-extrabold text-base tracking-tight leading-none mt-0.5">
                1976
              </span>
              <span className="w-8 h-[2px] bg-[#E21B23] my-1 rounded-full" />
              <span className="text-[#E21B23] font-black text-base tracking-tight leading-none">
                <CountingNumber from={1976} to={2026} />
              </span>
              <span className="text-[8px] text-[#b51219] font-black uppercase tracking-widest mt-0.5 mb-1">
                50 YEARS
              </span>
            </motion.div>
          </div>

          {/* Bottom Image Area */}
          <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden bg-white">
            <motion.div
              className="w-full h-full relative"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/fif2.png"
                alt="Bhagat Celebration Ceremony"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Mobile/Tablet Stats Bar */}
        <section className="w-full bg-transparent px-6 pt-1 pb-8">
          <div className="max-w-[1440px] mx-auto bg-white rounded-3xl border border-gray-100 py-4 px-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 divide-gray-100">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-3 sm:py-2 px-2 justify-start"
              >
                <div className="w-12 h-12 rounded-full bg-red-50/60 text-[#E31E24] flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-black text-[#E31E24] leading-tight">
                    {idx === 0
                      ? <>
                          <CountingNumber from={0} to={50} duration={1.8} />+
                        </>
                      : idx === 1
                        ? <>
                            <CountingNumber from={0} to={1000} duration={1.8} />
                            +
                          </>
                        : idx === 2
                          ? <>
                              <CountingNumber
                                from={0}
                                to={500}
                                duration={1.8}
                              />
                              +
                            </>
                          : stat.value}
                  </h3>
                  <p className="text-gray-600 font-semibold text-xs mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

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
              What started in 1976 with a vision to deliver quality electrical
              solutions has today grown into a multi-disciplinary engineering
              company delivering complex projects across power, railways,
              industries, and infrastructure.
            </p>

            <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
              Our journey of 50 years is a testament to the trust of our
              clients, the dedication of our people, and our commitment to
              engineering a better tomorrow.
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {impacts.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15 },
                  },
                }}
                whileHover={{
                  y: -8,
                  borderColor: "#E21B23",
                  boxShadow: "0 20px 40px rgba(226, 27, 35, 0.08)",
                }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4 text-[#E61B23]"
                >
                  {card.icon}
                </motion.div>
                <h4 className="font-extrabold text-sm md:text-base text-gray-900 leading-snug">
                  {card.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed mt-2">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
              {Array.from({ length: 4 }).map((_, i) => {
                const imgIdx = (momentIndex + i) % momentImages.length;
                const img = momentImages[imgIdx];

                return (
                  <div
                    key={imgIdx}
                    className={`bg-white rounded-xl overflow-hidden border border-gray-150 shadow-sm transition-all duration-300 ${
                      i === 0 ? "block" : "hidden md:block"
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
                <span className="text-xl font-black text-white leading-none">
                  50
                </span>
                <span className="text-[8px] font-extrabold text-white uppercase tracking-widest mt-0.5 bg-red-600 px-1.5 py-0.5 rounded shadow-sm">
                  YEARS
                </span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-extrabold text-base md:text-lg leading-snug">
                Here&apos;s to the Past, Present and Future!
              </h4>
              <p className="text-white/80 text-xs md:text-sm mt-1 max-w-xl">
                As we celebrate 50 glorious years, we renew our commitment to
                engineering excellence and look forward to powering India&apos;s
                future.
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
