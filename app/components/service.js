"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = ["Electrical", "Automation", "Turnkey"];

const servicesData = [
  {
    title: "Erection and Maintenance of Power Substation",
    category: "Electrical",
    desc: "Operating and maintaining high voltage systems requires experienced teams with specialist skills. Bhagat Engineering Works supports private HV networks, transformers, and substations up to 33kV, with capability for selected 132kV design-build projects. Our end-to-end solutions include civil foundation designs, steel structure gantry erection, busbar work, circuit breaker installation, and robust protective relay coordination to ensure uninterrupted grid connectivity.",
    images: [
      "/PS 1.png",
      "/PS 2.png",
      "/PS 3.png",
      "/PS 4.png",
    ],
    href: "/service/power-substation",
  },
  {
    title: "Installation and Commissioning of Compact Substation",
    category: "Electrical",
    desc: "We offer end-to-end installation, testing, and commissioning of compact substations (CSS) and package substations. Our services cover foundation checks, HT/LT cable terminations, transformer integration, ring main unit (RMU) routing, and protection system calibration to deliver safe, weather-resistant, and space-saving power distribution.",
    images: [
      "/Compact Substation 1.jpeg",
      "/Compact Substation 2.jpeg",
      "/Compact Substation 3.jpeg",
      "/Compact Substation 4.jpeg",
      "/Compact Substation 5.jpeg"
    ],
    href: "/service/transformer-services",
  },
  {
    title: "Over head and underground Cable Laying",
    category: "Electrical",
    desc: "Our services cover underground HT/LT cable trenching, overhead GI cable tray installation, and professional professional heat-shrink cable jointing and termination services. We execute precise route mapping, design earth resistivity layouts, install heavy-duty armored cables, and conduct complete insulation testing to ensure high durability and compliance with strict safety regulations.",
    images: [
      "/Cable Laying.png",
      "/Cable Laying Underground.png",
      "/Cable Trenching.png",
      "/Underground Cable Laying.png",
      "/Cable Laying 4.jpeg",
      "/Cable Laying 6.jpeg"
    ],
    href: "/service/cable-laying",
  },
  {
    title: "Industrial/Quarter Wiring",
    category: "Turnkey",
    desc: "We deliver full-scale industrial electrical installation, commercial wiring, and residential quarter wiring solutions. Our scope covers distribution board installation, conduit laying, fire-retardant cabling, switchgear assembly, earthing pit construction, and load balance testing to ensure absolute safety and energy efficiency.",
    images: [
      "/Industrial Wiring 1.png",
      "/Industrial Wiring 2.png",
      "/Industrial Wiring 3.png",
      "/Industrial Wiring 4.png",
      "/Industrial Wiring 5.png",
    ],
    href: "/service/domestic-wiring",
  },
  {
    title: "Facade Lighting",
    category: "Automation",
    desc: "We design and install creative architectural facade lighting, dynamic RGB automation control, high-mast fixtures, and energy-saving industrial LED systems. Our engineers build custom lighting solutions that highlight building features, optimize dynamic control systems, and save energy with intelligent scheduling. We create visually striking facade designs that elevate building aesthetics while meeting strict energy efficiency codes.",
    images: [
      "/Facade Lighting 1.png",
      "/Facade Lighting 2.png ",
      "/Facade Lighting 3.png",
      "/Facade Lighting 4.jpeg",
      "/Facade Lighting 5.png"
    
    ],
    href: "/service/facade-lighting",
  },
  {
    title: "Erection and commissioning of High Mast Pole/Tower and Poles",
    category: "Turnkey",
    desc: "We handle the complete structural erection, foundation construction, cabling, and commissioning of high mast poles, transmission towers, street light poles, and area lighting masts. Our teams specialize in motorized winch alignment, luminaire carriage mounting, and automated control panel installation for reliable wide-area illumination.",
    images: [
      "/High Mast Pole 1.png",
      "/High Mast Pole 2.png",
      "/High Mast Pole 3.png",
      "/High Mast Pole 4.png",
      "/High Mast Pole 5.png",
    ],
    href: "/service/servo-stabilizers",
  },
];

export default function Service() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Active service based on index
  const activeService = servicesData[activeServiceIndex] || servicesData[0];

  // Derive active category from the selected service
  const activeCategory = activeService.category;

  // Reset image index when switching active service
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeServiceIndex]);

  // Auto-scrolling image loop timer
  useEffect(() => {
    const imagesCount = activeService?.images?.length || 0;
    if (imagesCount <= 1) return;

    const timer = setTimeout(() => {
      setActiveImageIndex((prev) => (prev + 1) % imagesCount);
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeServiceIndex, activeImageIndex, activeService?.images?.length]);

  // Handle clicking a thumbnail
  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  // Handle clicking a category tab at top right
  const handleCategorySelect = (cat) => {
    const targetIndex = servicesData.findIndex((s) => s.category === cat);
    if (targetIndex !== -1) {
      setActiveServiceIndex(targetIndex);
      setActiveImageIndex(0);
    }
  };

  // Prepare images for infinite marquee (ensure enough width for seamless loop)
  const originalImages = activeService?.images || [];
  let marqueeImages = originalImages.map((img, i) => ({ img, originalIndex: i }));
  // Duplicate until we have enough to fill the screen (at least 6-8 usually enough for max 470px width)
  while (marqueeImages.length < 8) {
    marqueeImages = [...marqueeImages, ...originalImages.map((img, i) => ({ img, originalIndex: i }))];
  }

  return (
    <section className="w-full bg-[#fcf9f6] py-16 px-6 relative z-10">
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-custom-marquee {
          animation: custom-marquee 20s linear infinite;
        }
      `}</style>
      {/* HEADER SECTION (Desktop: Grid-aligned to Column 2; Mobile: Centered flex) */}
      <div className="max-w-[1308px] mx-auto w-full mb-8">
        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-[200px_1.4fr_1fr] xl:grid-cols-[300px_1.8fr_1.2fr] gap-4 xl:gap-8 items-center w-full min-h-[50px]">
          {/* Column 1: Spacer */}
          <div />

          {/* Column 2: Centered Heading exactly over the main image column */}
          <h2 className="text-3xl md:text-5xl lg:text-3xl xl:text-5xl font-bold text-gray-900 select-none tracking-tight text-center min-w-0">
            Integrated Services
          </h2>

          {/* Column 3: Right-aligned tab filter buttons */}
          <div className="flex justify-end">
            <div className="bg-white border border-gray-200 rounded-xl p-1 gap-1 shadow-sm flex">
              {categories.map((cat) => {
                const isActive = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`px-5 py-2 rounded-lg font-semibold text-sm transition duration-300 ${
                      isActive
                        ? "bg-[#c00000] text-white shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Flex Layout */}
        <div className="flex flex-col items-center gap-4 lg:hidden w-full">
          <h2 className="text-3xl font-bold text-gray-900 select-none tracking-tight text-center">
            Integrated Services
          </h2>
        </div>
      </div>

      {/* CORE DISPLAY (GRID SIDEBAR + CARD VIEWPORT) */}
      <div className="hidden lg:grid max-w-[1308px] mx-auto lg:grid-cols-[200px_1.4fr_1fr] xl:grid-cols-[300px_1.8fr_1.2fr] gap-4 xl:gap-8 items-stretch relative">
        {/* LEFT COLUMN: SIDEBAR SERVICE LIST (DESKTOP) */}
        <div className="relative h-[500px]">
          <span className="absolute -top-7 left-0 text-[#c00000] font-bold text-xs uppercase tracking-widest select-none">
            Businesses
          </span>
          <div className="grid grid-rows-6 gap-3 h-full">
            {servicesData.map((service, i) => {
              const isActive = i === activeServiceIndex;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-full w-full relative"
                >
                  <button
                    onClick={() => {
                      setActiveServiceIndex(i);
                      setActiveImageIndex(0);
                    }}
                    className={`relative w-full text-left pl-7 pr-5 rounded-xl font-semibold transition-all duration-300 shadow-sm border text-xs lg:text-sm leading-snug flex items-center h-full cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-[#111622] text-white border-[#111622]"
                        : "bg-white text-gray-800 border-gray-100 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceIndicator"
                        className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#c00000]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 25,
                        }}
                      />
                    )}
                    {service.title}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CENTER COLUMN: MAIN IMAGE & FLOATING THUMBNAILS IN BOTTOM-LEFT */}
        <div className="relative overflow-hidden rounded-[20px] bg-gray-100 shadow-lg h-[300px] lg:h-[500px] w-full min-w-0">
          {/* Main Slider Images */}
          {activeService?.images.map((img, i) => {
            const isVisible = i === activeImageIndex;
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isVisible ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={img}
                  fill
                  className="object-cover"
                  alt=""
                  priority={i === 0}
                />
              </div>
            );
          })}

          {/* Floating Thumbnails centered at bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-fit max-w-[90%] lg:max-w-[470px] overflow-hidden flex py-2 px-2 group">
            {/* We render two identical marquee tracks that animate together */}
            <div className="flex animate-custom-marquee group-hover:[animation-play-state:paused] pr-2.5 shrink-0">
              {marqueeImages.map((item, i) => (
                <div
                  key={`track1-${i}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleThumbnailClick(item.originalIndex)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleThumbnailClick(item.originalIndex);
                    }
                  }}
                  className={`relative w-20 h-14 xl:w-36 xl:h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 mr-2.5 ${
                    item.originalIndex === activeImageIndex ? "scale-105" : ""
                  }`}
                >
                  <Image src={item.img} fill className="object-cover" alt="" />
                  <div
                    className={`absolute inset-0 rounded-lg border-2 pointer-events-none z-10 transition-colors duration-300 ${
                      item.originalIndex === activeImageIndex ? "border-red-600" : "border-white"
                    }`}
                  />
                </div>
              ))}
            </div>
            
            <div className="flex animate-custom-marquee group-hover:[animation-play-state:paused] pr-2.5 shrink-0" aria-hidden="true">
              {marqueeImages.map((item, i) => (
                <div
                  key={`track2-${i}`}
                  role="button"
                  tabIndex={-1}
                  onClick={() => handleThumbnailClick(item.originalIndex)}
                  className={`relative w-20 h-14 xl:w-36 xl:h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 mr-2.5 ${
                    item.originalIndex === activeImageIndex ? "scale-105" : ""
                  }`}
                >
                  <Image src={item.img} fill className="object-cover" alt="" />
                  <div
                    className={`absolute inset-0 rounded-lg border-2 pointer-events-none z-10 transition-colors duration-300 ${
                      item.originalIndex === activeImageIndex ? "border-red-600" : "border-white"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SERVICE DETAILS (Framer Motion transitions on change) */}
        <div className="flex flex-col h-auto lg:h-[500px] justify-between py-1 overflow-hidden min-w-0">
          <motion.div
            key={activeServiceIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col justify-between h-full w-full"
          >
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3 block">
                {activeService?.category.toUpperCase()}
              </span>
              <h3 className="text-2xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight mb-2 xl:mb-4 tracking-tight">
                {activeService?.title}
              </h3>
              <p className="text-gray-600 text-xs xl:text-sm leading-relaxed mb-3 xl:mb-6">
                {activeService?.desc}
              </p>
            </div>
            <div className="flex gap-3 mt-auto pt-6 border-t border-gray-100">
              <Link
                href="/contact"
                className="bg-[#c00000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300 text-sm shadow-sm active:scale-[0.98]"
              >
                Discuss a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE/TABLET VIEW (Hidden on Desktop) */}
      <div className="lg:hidden flex flex-col gap-4 mt-8 max-w-[800px] w-[calc(100%-32px)] mx-auto">
        {servicesData.map((service, i) => {
          const isOpen = i === activeServiceIndex;
          return (
            <div
              key={i}
              className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* ACCORDION HEADER */}
              <button
                onClick={() => {
                  setActiveServiceIndex(isOpen ? -1 : i);
                  setActiveImageIndex(0);
                }}
                className={`w-full flex items-center justify-between p-5 text-left font-semibold text-[15px] transition-all duration-300 ${
                  isOpen
                    ? "bg-black text-white"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                <span>{service.title}</span>
                <span
                  className={`text-[12px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {/* ACCORDION BODY */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-[850px] opacity-100 border-t border-gray-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                {isOpen && (
                  <div className="p-5 flex flex-col gap-4 bg-gray-50">
                    {/* Image Slider for this specific Service */}
                    <div className="relative w-full h-[260px] rounded-xl overflow-hidden shadow-sm bg-gray-200">
                      {service.images.map((img, imgIdx) => {
                        const isVisible = imgIdx === activeImageIndex;
                        return (
                          <div
                            key={imgIdx}
                            className={`absolute inset-0 transition-opacity duration-500 ${
                              isVisible ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                          >
                            <Image
                              src={img}
                              fill
                              className="object-cover"
                              alt=""
                            />
                          </div>
                        );
                      })}

                      {/* Dots overlay for image index indicators */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/40 px-2.5 py-1 rounded-full">
                        {service.images.map((_, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={() => handleThumbnailClick(imgIdx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              imgIdx === activeImageIndex
                                ? "bg-white scale-125"
                                : "bg-white/40"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2">
                      <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                        {service.category.toUpperCase()}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex mt-1">
                      <Link
                        href="/contact"
                        className="w-full text-center bg-[#c00000] text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 text-xs shadow-sm"
                      >
                        Discuss Project
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
