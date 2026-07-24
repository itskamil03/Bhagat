"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAward, FaCalendarAlt, FaTrophy, FaUser, FaChevronDown } from "react-icons/fa";
import { FiUsers, FiAward, FiZap, FiCrosshair, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Contact from "../../components/contact";

const initialAwards = [
  {
    title: "On-Site Safety Excellence Award",
    recipient: "Eastern Railway Substation Team",
    date: "Annual Milan 2024",
    desc: "Awarded to the railway electrification engineering squad for maintaining 100% safety standards and zero accidents across 45km of HT power grid laying.",
    image: "/aw1.png",
  },
  {
    title: "Outstanding Site Engineer of the Year",
    recipient: "Mr. Rajeev Ranjan",
    date: "Annual Milan 2023",
    desc: "Recognized for showing supreme leadership in completing the Barauni Refinery distribution panel erection 20 days ahead of contract deadlines.",
    image: "/aw2.png",
  },
  {
    title: "Lifetime Dedication Award",
    recipient: "Mr. Satrughan Sinha (Senior Foreman)",
    date: "Vishwakarma Day Milan",
    desc: "Honoring 30 years of continuous service, directing operations on critical substations and guiding two generations of junior foremen.",
    image: "/aw3.png",
  },
  {
    title: "Innovation in Engineering Award",
    recipient: "Substation Design & Automation Team",
    date: "Vishwakarma Day 2024",
    desc: "Honored for developing a custom PLC-based panel layout that reduced relay response times by 30% in high-load industrial sites.",
    image: "/aw4.png",
  },
  {
    title: "Best Project Manager of the Year",
    recipient: "Mr. Amitesh Kumar",
    date: "Annual Milan 2023",
    desc: "Awarded for exceptional leadership in managing three simultaneous site erections in South Bihar with 100% on-time delivery.",
    image: "/aw5.png",
  },
  {
    title: "Fastest Response & Breakdown Recovery",
    recipient: "Emergency Grid Repair Squad",
    date: "Grid Milan 2024",
    desc: "Recognized for restoring high-tension transmission connections within 12 hours after a severe storm shutdown.",
    image: "/aw6.png",
  },
  {
    title: "Project Delivery Milestone Award",
    recipient: "High-Voltage Transmission Team",
    date: "Annual Milan 2024",
    desc: "Recognized for designing a compact dual-circuit line tower layout that saved 15% space and material costs for the Patna Smart Grid.",
    image: "/aw1.png",
  },
  {
    title: "Green Energy Integration Award",
    recipient: "Solar Grid Interconnection Squad",
    date: "Vishwakarma Day 2024",
    desc: "Awarded for the flawless commissioning and grid-synchronization of a 10MW solar farm substation within record time.",
    image: "/aw3.png",
  },
];

const galleryImages = [
  {
    id: 1,
    src: "/DSB08962.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 2,
    src: "/DSB08990.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 13,
    src: "/DSB09092.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 14,
    src: "/DSB09215.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 15,
    src: "/DSB09392.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 16,
    src: "/DSB09441.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 17,
    src: "/DSB09558.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 18,
    src: "/DSB09627.jpg",
    title: "Annual Meet 2024",
    desc: "Memories from our 2024 annual meet.",
    year: "2024"
  },
  {
    id: 19,
    src: "/1.jpeg",
    title: "Annual Meet 2025",
    desc: "Memories from our 2025 annual meet.",
    year: "2025"
  },
  {
    id: 20,
    src: "/3.jpeg",
    title: "Annual Meet 2025",
    desc: "Memories from our 2025 annual meet.",
    year: "2025"
  },
  {
    id: 21,
    src: "/4.jpeg",
    title: "Annual Meet 2025",
    desc: "Memories from our 2025 annual meet.",
    year: "2025"
  },
  {
    id: 22,
    src: "/5.jpeg",
    title: "Annual Meet 2025",
    desc: "Memories from our 2025 annual meet.",
    year: "2025"
  },
  {
    id: 23,
    src: "/6.jpeg",
    title: "Annual Meet 2025",
    desc: "Memories from our 2025 annual meet.",
    year: "2025"
  },
  {
    id: 5,
    src: "/1761220248_1.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  },
  {
    id: 6,
    src: "/1761220248_2.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  },
  {
    id: 7,
    src: "/1761220248_3.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  },
  {
    id: 8,
    src: "/1761220248_4.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  },
  {
    id: 9,
    src: "/1761220248_5.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  },
  {
    id: 10,
    src: "/1761220248_6.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  },
  {
    id: 11,
    src: "/1761220248_7.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  },
  {
    id: 12,
    src: "/1761220248_8.jpg",
    title: "Annual Meet 2023",
    desc: "Memories from our 2023 annual meet.",
    year: "2023"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 14,
    },
  },
};

export default function EmployeeAwards() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [awardsList, setAwardsList] = useState(initialAwards);
  const [galleryList, setGalleryList] = useState(galleryImages);
  const [selectedYear, setSelectedYear] = useState("All years");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filterOptions = ["All years", "2023", "2024", "2025"];

  useEffect(() => {
    if (selectedYear === "All years") {
      setGalleryList(galleryImages);
    } else {
      setGalleryList(galleryImages.filter(img => img.year === selectedYear || (img.title && img.title.includes(selectedYear))));
    }
    setActiveGalleryIndex(0);
  }, [selectedYear]);

  // --- 3D Gallery State & Logic ---
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  const handleGalleryNext = () => setActiveGalleryIndex((prev) => (prev === galleryList.length - 1 ? 0 : prev + 1));
  const handleGalleryPrev = () => setActiveGalleryIndex((prev) => (prev === 0 ? galleryList.length - 1 : prev - 1));

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handleGalleryPrev();
      if (e.key === "ArrowRight") handleGalleryNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryList.length]); // Re-bind if list length changes

  // Autoplay
  useEffect(() => {
    if (isGalleryHovered || galleryList.length === 0) return;
    const interval = setInterval(() => {
      handleGalleryNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isGalleryHovered, galleryList.length]);

  // Touch Swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) handleGalleryNext();
    if (touchStart - touchEnd < -50) handleGalleryPrev();
  };

  // 3D Transform Logic
  const getCardStyle = (index) => {
    const length = galleryList.length;
    let diff = index - activeGalleryIndex;

    // Circular array shortest distance mapping
    if (diff > Math.floor(length / 2)) diff -= length;
    if (diff < -Math.floor(length / 2)) diff += length;

    let xOffset = 0;
    let rotateY = 0;
    let scale = 0.5;
    let opacity = 0;
    let zIndex = 0;

    if (diff === 0) {
      xOffset = 0; rotateY = 0; scale = 1.2; opacity = 1; zIndex = 50;
    } else if (diff === -1) {
      xOffset = -65; rotateY = 45; scale = 0.8; opacity = 0.55; zIndex = 40;
    } else if (diff === 1) {
      xOffset = 65; rotateY = -45; scale = 0.8; opacity = 0.55; zIndex = 40;
    } else if (diff === -2) {
      xOffset = -120; rotateY = 45; scale = 0.6; opacity = 0.3; zIndex = 30;
    } else if (diff === 2) {
      xOffset = 120; rotateY = -45; scale = 0.6; opacity = 0.3; zIndex = 30;
    }

    return {
      transform: `translateX(${xOffset}%) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
    };
  };
  // --------------------------------

  // Load from local storage on client mount (populated by admin panel)
  useEffect(() => {
    const savedAwards = localStorage.getItem("employee_awards");
    if (savedAwards) {
      try {
        setAwardsList(JSON.parse(savedAwards));
      } catch (e) {
        console.error("Error parsing saved awards", e);
      }
    }

    const savedGallery = localStorage.getItem("gallery_images");
    if (savedGallery) {
      try {
        setGalleryList(JSON.parse(savedGallery));
      } catch (e) {
        console.error("Error parsing saved gallery images", e);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#070B18] text-white relative w-full flex flex-col md:flex-row md:min-h-[510px] overflow-hidden">

        {/* Slanted Red Border (Desktop only) */}
        {/* 60.4% width with the clip-path creates a perfect 3px red border tracking the slant */}
        <div
          className="hidden md:block absolute top-0 left-0 bottom-0 w-[60.4%] z-20 bg-[#E61B23]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}
        ></div>

        {/* Slanted Navy Background (Desktop only) */}
        {/* Starts at 60% width at top, slants inward to 45% width at bottom */}
        <div
          className="hidden md:block absolute top-0 left-0 bottom-0 w-[60%] z-30 bg-[#070B18]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}
        ></div>

        {/* Left Content */}
        <div
          className="relative w-full md:w-[60%] z-40 flex flex-col justify-start px-6 sm:px-12 lg:pl-20 xl:pl-24 pt-10 pb-16 md:py-14 lg:py-16 bg-[#070B18] md:bg-transparent"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#E61B23]"></div>
            <p className="text-[#E61B23] uppercase tracking-widest text-[12px] md:text-[13px] font-bold">
              OUR ANNUAL MEET
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[75px] xl:text-[85px] font-extrabold leading-[0.85] tracking-tighter mb-5">
            ANNUAL<br />
            <span className="text-[#E61B23]">MEET</span>
          </h1>

          <div className="w-14 h-[2px] bg-[#E61B23] mb-6"></div>

          <p className="text-gray-300 w-full md:w-[75%] lg:w-[68%] text-[14px] md:text-[15px] leading-[1.7] mb-8">
            Uniting as one team to reflect on our journey, celebrate our achievements, and align for the future. Together, we share ideas, strengthen connections, and renew our commitment to building a stronger tomorrow.
          </p>

          {/* 4 Feature Items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-2 w-full md:w-[95%] lg:w-[85%] gap-y-8 gap-x-2 md:gap-y-10 lg:gap-y-6">
            {/* Feature 1 */}
            <div className="flex flex-col items-start relative w-full lg:pr-4">
              <FiUsers className="text-[#E61B23] text-3xl lg:text-[38px] mb-3" strokeWidth={1.2} />
              <h4 className="text-white font-bold text-[12px] lg:text-sm tracking-widest uppercase mb-1">TOGETHER</h4>
              <p className="text-gray-400 text-[11px] lg:text-[12px]">as One Team</p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-start relative w-full lg:border-l lg:border-white/20 lg:pl-6">
              <FiAward className="text-[#E61B23] text-3xl lg:text-[38px] mb-3" strokeWidth={1.2} />
              <h4 className="text-white font-bold text-[12px] lg:text-sm tracking-widest uppercase mb-1">CELEBRATE</h4>
              <p className="text-gray-400 text-[11px] lg:text-[12px]">Our Achievements</p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-start relative w-full lg:border-l lg:border-white/20 lg:pl-6">
              <FiZap className="text-[#E61B23] text-3xl lg:text-[38px] mb-3" strokeWidth={1.2} />
              <h4 className="text-white font-bold text-[12px] lg:text-sm tracking-widest uppercase mb-1">SHARE</h4>
              <p className="text-gray-400 text-[11px] lg:text-[12px]">Ideas & Insights</p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-start relative w-full lg:border-l lg:border-white/20 lg:pl-6">
              <FiCrosshair className="text-[#E61B23] text-3xl lg:text-[38px] mb-3" strokeWidth={1.2} />
              <h4 className="text-white font-bold text-[12px] lg:text-sm tracking-widest uppercase mb-1">ALIGN</h4>
              <p className="text-gray-400 text-[11px] lg:text-[12px]">for the Future</p>
            </div>
          </div>
        </div>

        {/* Right Content (Image area) */}
        {/* Sits underneath the left background z-index, allowing the left clip-path to slice seamlessly over it */}
        <div className="relative w-full h-[400px] md:absolute md:top-0 md:right-0 md:bottom-0 md:w-[55%] md:h-auto z-10 overflow-hidden">
          <Image
            src="/amm1.png"
            alt="Annual Meet Event"
            fill
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* 3D Coverflow Gallery Section */}
      <section
        className="w-full relative overflow-hidden pb-8 pt-6 md:pb-16 md:pt-14"
        style={{ background: '#FEE2E2' }}
        onMouseEnter={() => setIsGalleryHovered(true)}
        onMouseLeave={() => setIsGalleryHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Blurred Backdrop Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xl z-0 pointer-events-none"></div>

        {/* Year Filter Dropdown */}
        <div className="relative z-30 max-w-[1440px] mx-auto flex justify-start px-6 md:px-12 pt-8 md:pt-4 pb-2 mb-6 md:mb-10">
          <div
            className="relative w-full max-w-[240px] md:w-auto md:min-w-[200px]"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-4 px-5 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-800 font-semibold text-[15px] md:text-[16px] group"
            >
              <span>{selectedYear}</span>
              <FaChevronDown className={`text-[#E61B23] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} />
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
                  {filterOptions.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3.5 font-medium text-[15px] transition-all duration-200 hover:pl-7 ${selectedYear === year
                        ? "text-[#E61B23] bg-red-50/50 border-l-[3px] border-[#E61B23]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-[3px] border-transparent"
                        }`}
                    >
                      {year}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Gallery Container with 3D Perspective */}
        <div
          className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center z-10 mx-auto max-w-[1440px]"
          style={{ perspective: "1800px" }}
        >
          {/* Cards */}
          {galleryList.length > 0 && galleryList.map((item, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeGalleryIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveGalleryIndex(index)}
                className="absolute w-[240px] sm:w-[300px] md:w-[350px] lg:w-[420px] h-[170px] sm:h-[210px] md:h-[260px] lg:h-[320px] rounded-[20px] shadow-2xl transition-all duration-700 ease-out cursor-pointer group"
                style={{
                  transform: style.transform,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                {isActive ? (
                  <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-full h-full rounded-[20px] overflow-hidden relative"
                  >
                    <Image src={item.src} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none"></div>
                  </motion.div>
                ) : (
                  <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                    <Image src={item.src} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 rounded-[20px] pointer-events-none"></div>
                    <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-[40%] md:top-[45%] -translate-y-1/2 left-3 md:left-12 lg:left-24 z-50">
          <button
            onClick={handleGalleryPrev}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/5 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-black/10 hover:scale-110 transition-all border border-gray-200 shadow-lg"
          >
            <FiChevronLeft className="text-xl md:text-3xl" />
          </button>
        </div>
        <div className="absolute top-[40%] md:top-[45%] -translate-y-1/2 right-3 md:right-12 lg:right-24 z-50">
          <button
            onClick={handleGalleryNext}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black/5 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-black/10 hover:scale-110 transition-all border border-gray-200 shadow-lg"
          >
            <FiChevronRight className="text-xl md:text-3xl" />
          </button>
        </div>

        {/* Text Overlay for Active Card */}
        <div className="relative z-50 flex justify-center mt-3 md:mt-7 h-[80px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGalleryIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center px-6"
            >
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{galleryList[activeGalleryIndex]?.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base max-w-md mx-auto">{galleryList[activeGalleryIndex]?.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Grid List Section */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center justify-center md:justify-start gap-3">
            <FaAward className="text-[#E61B23] text-3xl" />
            <span>AWARDS & RECOGNITION</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl">
            A celebration of milestones, dedication, and the core engineering
            standards that drive our legacy forward.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {awardsList.map((item, index) => (
            <motion.div
              key={item.title + "-" + index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                borderColor: "rgba(230, 27, 35, 0.3)",
                boxShadow:
                  "0 8px 16px -6px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedAward(item)}
              className="group bg-white rounded-xl border border-gray-100 shadow-xs hover:border-[#E61B23]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none overflow-hidden h-[330px] w-full max-w-[280px] mx-auto"
            >
              <div className="flex flex-col flex-grow overflow-hidden">
                {/* Card Image Container */}
                <div className="relative w-full h-[145px] bg-gray-50 overflow-hidden border-b border-gray-100/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  {/* Floating Trophy Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs shadow-sm rounded-md w-8 h-8 flex items-center justify-center border border-gray-100 z-10">
                    <FaTrophy className="text-[#E61B23] text-sm" />
                  </div>
                </div>

                {/* Content Padding Container */}
                <div className="p-4 pt-3 pb-2 flex-grow flex flex-col justify-start overflow-hidden">
                  {/* Award Heading */}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2 min-h-[36px] flex items-center">
                    {item.title}
                  </h3>

                  {/* Recipient */}
                  <p className="text-[11px] text-gray-500 font-bold mb-1.5 flex items-center gap-1">
                    <FaUser className="text-[#E61B23]/70 text-[9px]" />
                    <span className="truncate">{item.recipient}</span>
                  </p>

                  {/* Award Description */}
                  <p className="text-gray-600 text-[11px] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Award Dates */}
              <div className="px-4 py-2.5 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-semibold mt-auto">
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-gray-400 text-[10px]" />
                  <span>{item.date}</span>
                </div>
                <span className="text-[#E61B23] text-[9px] uppercase font-bold tracking-wider opacity-90 group-hover:text-red-700 transition-colors">
                  Details
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full overflow-y-auto md:overflow-hidden shadow-2xl relative cursor-default border border-gray-100 max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 md:p-2 transition-colors z-20 cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <title>Close</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row h-full md:max-h-[85vh]">
                {/* Image side - fits full height, contains certificate without cutting text */}
                <div className="w-full md:w-3/5 bg-gray-950 flex items-center justify-center p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-100 relative min-h-[220px] md:min-h-full aspect-[4/3] md:aspect-auto">
                  <Image
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-contain p-4"
                    priority
                  />
                </div>

                {/* Details side */}
                <div className="w-full md:w-2/5 p-5 md:p-8 flex flex-col justify-between bg-white md:overflow-y-auto flex-grow">
                  <div>
                    {/* Floating-style trophy badge & text */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center border border-red-100/50">
                        <FaTrophy className="text-[#E61B23] text-lg" />
                      </div>
                      <span className="text-[#E61B23] uppercase tracking-widest text-[11px] font-bold">
                        Award Achievement
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-3">
                      {selectedAward.title}
                    </h3>

                    {/* Recipient */}
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-bold mb-6">
                      <FaUser className="text-[#E61B23]" />
                      <span>{selectedAward.recipient}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                      {selectedAward.desc}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="border-t border-gray-100 pt-6 flex items-center justify-between text-xs text-gray-500 font-bold">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{selectedAward.date}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedAward(null)}
                      className="text-[#E61B23] hover:text-red-700 transition-colors font-bold cursor-pointer"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </main>
  );
}
