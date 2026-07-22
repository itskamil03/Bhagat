"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { FaCamera, FaChevronLeft, FaChevronDown, FaTimes } from "react-icons/fa";
import Contact from "../../../components/contact";

const festivalGalleries = {
  puja: {
    title: "Vishwakarma Puja Celebration",
    description:
      "As engineers and creators, Vishwakarma Puja holds special significance at Bhagat Engineering Works. We clean and worship our machines, tools, and heavy erection gears, followed by community feasts with our site workers, engineers, and executive teams.",
    date: "September 17, Annual",
    mainImage: "/fi1.jpg",
    images: [
      { src: "/fi1.jpg", year: "2026" },
      { src: "/fi1.jpg", year: "2026" },
      { src: "/fi1.jpg", year: "2025" },
      { src: "/fi1.jpg", year: "2025" },
      { src: "/fi1.jpg", year: "2024" },
      { src: "/fi1.jpg", year: "2024" },
    ],
  },
  diwali: {
    title: "Diwali & Corporate Milan",
    description:
      "Celebrating the festival of lights with sweets distribution, office lighting, and an annual milan ceremony that brings families of our employees together to honor our year-round accomplishments.",
    date: "October/November, Annual",
    mainImage: "/diwali.jpg",
    images: [
      { src: "/diwali.jpg", year: "2026" },
      { src: "/d2.jpg", year: "2026" },
      { src: "/d3.jpg", year: "2026" },
      { src: "/d4.jpg", year: "2025" },
      { src: "/d5.jpg", year: "2025" },
      { src: "/d6.jpg", year: "2024" },

    ],
  },
  patriot: {
    title: "Independence Day and Republic Day",
    description:
      "Flag hoisting ceremonies at our corporate head office in Patna and major railway site substations across India, commemorating our pride in building the country's utility infrastructure.",
    date: "National Festivals",
    mainImage: "/fi3.jpg",
    images: [
      { src: "/fi3.jpg", year: "2026" },
      { src: "/fi3.jpg", year: "2026" },
      { src: "/fi3.jpg", year: "2025" },
      { src: "/fi3.jpg", year: "2025" },
      { src: "/fi3.jpg", year: "2024" },
      { src: "/fi3.jpg", year: "2024" },
    ],
  },
  chhath: {
    title: "Chhath Puja Celebration",
    description:
      "Deeply rooted in the cultural fabric of Bihar, we celebrate Chhath Puja with spiritual devotion. We support our team members with festive breaks, distribute traditional offerings (Thekua), and organize community support camps at the Ganga ghats in Patna.",
    date: "October/November, Annual",
    mainImage: "/fi4.jpg",
    images: [
      { src: "/fi4.jpg", year: "2026" },
      { src: "/fi4.jpg", year: "2026" },
      { src: "/fi4.jpg", year: "2025" },
      { src: "/fi4.jpg", year: "2025" },
      { src: "/fi4.jpg", year: "2024" },
      { src: "/fi4.jpg", year: "2024" },
    ],
  },
  holi: {
    title: "Holi & Spring Milan",
    description:
      "Welcoming the spring season with vibrant colors, organic gulal, traditional music, and special festive delicacies. Our offices and sites come together for a special pre-Holi milan, reinforcing our team bonds.",
    date: "March, Annual",
    mainImage: "/diwali.jpg",
    images: [
      { src: "/diwali.jpg", year: "2026" },
      { src: "/fi5.jpg", year: "2026" },
      { src: "/fi5.jpg", year: "2025" },
      { src: "/fi5.jpg", year: "2025" },
      { src: "/fi5.jpg", year: "2024" },
      { src: "/fi5.jpg", year: "2024" },
    ],
  },
};

function GalleryContent() {
  const searchParams = useSearchParams();
  const festivalKey = searchParams.get("festival") || "puja";

  const queryTitle = searchParams.get("title");
  const queryDesc = searchParams.get("description");
  const queryImage = searchParams.get("image");

  let gallery = festivalGalleries[festivalKey];

  if (queryTitle && queryImage) {
    gallery = {
      title: queryTitle,
      description: queryDesc || (gallery ? gallery.description : ""),
      date: "Event Gallery",
      mainImage: queryImage,
      // Use specific images if defined in the dictionary, otherwise use placeholders
      images: gallery && gallery.images ? gallery.images : [
        { src: queryImage, year: "2026" },
        { src: queryImage, year: "2026" },
        { src: queryImage, year: "2025" },
        { src: queryImage, year: "2025" },
        { src: queryImage, year: "2024" },
        { src: queryImage, year: "2024" },
      ],
    };
  } else if (!gallery) {
    gallery = festivalGalleries.puja;
  }

  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [selectedYear, setSelectedYear] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filterOptions = ["All", "2026", "2025", "2024"];
  const filteredImages = gallery.images.filter(
    (img) => selectedYear === "All" || img.year === selectedYear
  );

  return (
    <main className="min-h-screen bg-[#FDFDFD] font-sans relative overflow-hidden">
      {/* ================= PROFESSIONAL UI BACKGROUND ================= */}
      {/* Soft Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#ffffff_0%,_#f4f5f7_100%)] pointer-events-none z-0" />
      
      {/* Premium Corporate Glows */}
      <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-[#E61B23]/[0.02] rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] bg-[#17162b]/[0.03] rounded-full blur-[140px] pointer-events-none z-0 mix-blend-multiply" />
      
      {/* Micro-dot Texture for Professional Structural Feel */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(#17162b 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Minimalist Intersecting Tech Lines */}
      <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#17162b]/10 to-transparent pointer-events-none z-0 hidden lg:block" />
      <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E61B23]/10 to-transparent pointer-events-none z-0 hidden lg:block" />

      {/* ================= HERO SECTION (MATCHING MAIN FESTIVAL HERO DESIGN) ================= */}
      <section className="bg-[#17162b] text-white relative overflow-hidden w-full min-h-[473px] flex flex-col md:block">
        {/* Background Image Container on the Right (Uses selected festival's mainImage) */}
        <div className="relative w-full md:absolute md:right-0 md:top-0 md:w-1/2 h-[260px] md:h-full z-10 pointer-events-none select-none overflow-hidden">
          <Image
            src={gallery.mainImage}
            alt={`${gallery.title} background`}
            fill
            className="object-cover object-center md:object-right"
            priority
          />
          {/* Crimson & Dark Navy Gradient Blend Overlay matching main page */}
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,22,43,1) 0%, rgba(95,16,26,0.85) 15%, rgba(130,25,35,0.4) 40%, rgba(23,22,43,0) 75%)",
            }}
          />
          <div
            className="absolute inset-y-0 left-0 w-full md:w-1/3 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,22,43,1) 0%, rgba(23,22,43,0) 100%)",
            }}
          />
        </div>

        <div className="max-w-[1240px] mx-auto w-full relative z-20 grid md:grid-cols-2 items-center pl-6 md:pl-0 pr-6 md:pr-8 md:h-[473px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-2 py-12 md:py-0 z-20 flex flex-col justify-center"
          >
            {/* Breadcrumbs */}
            <nav className="text-xs md:text-sm text-gray-400 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <Link
                href="/gallery"
                className="hover:text-red-500 transition-colors"
              >
                Gallery
              </Link>
              <span>&gt;</span>
              <Link
                href="/about/festivals"
                className="hover:text-red-500 transition-colors"
              >
                Festivals & Culture
              </Link>
              <span>&gt;</span>
              <span className="text-white">Gallery</span>
            </nav>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FaCamera className="text-[#E61B23] text-xs" />
                <span className="text-red-500 uppercase tracking-wider text-xs font-semibold">
                  Event Gallery
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mt-1 leading-tight">
                {gallery.title}
              </h1>

              <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed mt-4">
                {gallery.description}
              </p>

              <Link
                href="/about/festivals"
                className="mt-6 flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 transition-colors font-bold group w-fit decoration-none"
              >
                <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
                <span>Back to Festivals</span>
              </Link>
            </div>
          </motion.div>

          {/* Spacer Column */}
          <div className="hidden md:block h-[473px]" />
        </div>
      </section>

      {/* Grid Images Section */}
      <section className="max-w-[1240px] mx-auto px-6 py-10 md:py-16">

        {/* Filters - Professional Dropdown */}
        <div className="mb-10 md:mb-14 flex justify-center md:justify-start relative z-30">
          <div 
            className="relative w-full max-w-[240px] md:w-auto md:min-w-[200px]"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-4 px-5 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-800 font-semibold text-[15px] md:text-[16px] group"
            >
              <span>{selectedYear === "All" ? "All Years" : `Year ${selectedYear}`}</span>
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
                      className={`w-full text-left px-5 py-3.5 font-medium text-[15px] transition-all duration-200 hover:pl-7 ${
                        selectedYear === year 
                          ? "text-[#E61B23] bg-red-50/50 border-l-[3px] border-[#E61B23]" 
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-[3px] border-transparent"
                      }`}
                    >
                      {year === "All" ? "All Years" : `Year ${year}`}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredImages.length > 0 ? (
              filteredImages.map((img, index) => (
                <motion.div
                  layout
                  key={`${img.src}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveImageIndex(index)}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-200 cursor-zoom-in transition-all duration-300 relative aspect-[4/3]"
                >
                  <Image
                    src={img.src}
                    alt={`${gallery.title} ${img.year}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.year}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-500 font-medium">
                No images found for {selectedYear}.
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-xs z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors z-20 cursor-pointer shadow-md"
              aria-label="Close lightbox"
            >
              <FaTimes className="text-lg" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[70vh] md:h-[80vh] flex items-center justify-center select-none"
            >
              <Image
                src={filteredImages[activeImageIndex].src}
                alt={`${gallery.title} full view`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Prev/Next arrows */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/50 backdrop-blur-xs border border-white/10 px-4 py-2 rounded-full text-xs text-white z-20 font-medium">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) =>
                    prev === 0 ? filteredImages.length - 1 : prev - 1,
                  );
                }}
                className="hover:text-red-500 transition-colors font-bold cursor-pointer px-2"
              >
                Prev
              </button>
              <span className="text-gray-400">
                {activeImageIndex + 1} / {filteredImages.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) =>
                    prev === filteredImages.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="hover:text-red-500 transition-colors font-bold cursor-pointer px-2"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </main>
  );
}

export default function FestivalGalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-500 text-sm font-semibold">
          Loading gallery...
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
