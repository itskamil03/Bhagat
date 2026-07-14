"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const categories = ["Electrical", "Automation", "Turnkey"];

const servicesData = [
  {
    title: "Erection and Maintenance of Power Substation",
    category: "Electrical",
    desc: "Operating and maintaining high voltage systems requires experienced teams with specialist skills. Bhagat Engineering Works supports private HV networks, transformers, and substations up to 33kV, with capability for selected 132kV design-build projects. Our end-to-end solutions include civil foundation designs, steel structure gantry erection, busbar work, circuit breaker installation, and robust protective relay coordination to ensure uninterrupted grid connectivity.",
    images: ["/a4.png", "/a2.png", "/a3.png", "/a5.png"],
    href: "/service/power-substation"
  },
  {
    title: "Transformer Related Services",
    category: "Electrical",
    desc: "We offer comprehensive testing, oil filtration, dehydration, winding diagnostics, and bushing replacement services for all types of industrial power transformers. Our specialized team handles regular oil dielectric strength assessments, dissolved gas analysis (DGA), active filtration, core-to-ground insulation repairs, and emergency gasket renewals. We specialize in proactive preventive maintenance to extend transformer lifespan and prevent costly unplanned outages.",
    images: ["/dw1.jpg", "/pk.png", "/a9.png"],
    href: "/service/transformer-services"
  },
  {
    title: "Cable Laying",
    category: "Electrical",
    desc: "Our services cover underground trenching, overhead GI cable trays, and Raychem heat-shrinkable jointing and terminations to protect against moisture ingress. We execute precise route mapping, design earth resistivity layouts, install heavy-duty armored cables, and conduct insulation resistance testing. From HT/LT cable terminations to overhead power lines, we ensure high durability and strict compliance with local safety regulations.",
    images: ["/d1.png", "/d2.png", "/k1.jpg"],
    href: "/service/cable-laying"
  },
  {
    title: "Domestic Wiring",
    category: "Turnkey",
    desc: "We deliver industrial, commercial, and domestic wiring solutions compliant with state safety standards, from initial panel board layouts to finishing accessories. Our scope of work includes distribution board setup, conduits laying, wire pulling, switchgear assembly, earthing pit construction, and comprehensive load balance testing. We design systems to optimize energy consumption and provide complete safety against electrical overloads and short circuits.",
    images: ["/c1.png", "/k2.jpg", "/k3.jpg"],
    href: "/service/domestic-wiring"
  },
  {
    title: "Facade Lighting",
    category: "Automation",
    desc: "We design and install creative architectural facade lighting, dynamic RGB automation control, high-mast fixtures, and energy-saving industrial LED systems. Our engineers build custom lighting solutions that highlight building features, optimize dynamic control systems, and save energy with intelligent scheduling. We create visually striking facade designs that elevate building aesthetics while meeting strict energy efficiency codes.",
    images: ["/dy3.png", "/b4.png", "/sh1.png"],
    href: "/service/facade-lighting"
  },
  {
    title: "Servo Stabilizers",
    category: "Automation",
    desc: "We handle the installation, load testing, and regular maintenance of heavy-duty servo stabilizers and air/oil-cooled rectifiers to protect high-end industrial machinery. Our technicians specialize in control card calibration, carbon brush replacements, gear motor repairs, and oil level top-ups. We ensure clean, stable voltage outputs that safeguard delicate CNC machines, packaging lines, and heavy-duty manufacturing equipment.",
    images: ["/a6.png", "/b1.png", "/za1.jpg"],
    href: "/service/servo-stabilizers"
  }
];

export default function Service() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Track layout width measurements for horizontal thumbnail auto-scrolling
  const [trackWidth, setTrackWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Active service based on index
  const activeService = servicesData[activeServiceIndex] || servicesData[0];
  
  // Derive active category from the selected service
  const activeCategory = activeService.category;

  // Measure thumbnail scroll boundaries when active service changes
  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setTrackWidth(trackRef.current.scrollWidth);
    }
  }, [activeService]);

  // Reset image index when switching active service
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeServiceIndex]);

  // Image loop timer
  useEffect(() => {
    const imagesCount = activeService?.images?.length || 0;
    if (imagesCount <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % imagesCount);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeServiceIndex]);

  // Handle clicking a category tab at top right
  const handleCategorySelect = (cat) => {
    const targetIndex = servicesData.findIndex(s => s.category === cat);
    if (targetIndex !== -1) {
      setActiveServiceIndex(targetIndex);
    }
  };

  // Calculate maximum slide offset
  const maxSlideOffset = Math.max(0, trackWidth - containerWidth);

  return (
    <section className="w-full bg-[#fcf9f6] py-16 px-6 relative z-10">
      {/* HEADER SECTION (Title centered + Category filters on right) */}
      <div className="relative flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 max-w-[1308px] mx-auto w-full min-h-[50px]">
        {/* Centered Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 select-none tracking-tight text-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10">
          Integrated Services
        </h2>

        {/* Dummy spacer to keep right tab pushed */}
        <div className="hidden md:block w-10 h-10"></div>

        {/* Tab Filter Container on the right */}
        <div className="hidden md:flex bg-white border border-gray-200 rounded-xl p-1 gap-1 shadow-sm self-center md:self-auto relative z-20">
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

      {/* CORE DISPLAY (GRID SIDEBAR + CARD VIEWPORT) */}
      <div className="hidden md:grid max-w-[1308px] mx-auto md:grid-cols-[300px_1.8fr_1.2fr] gap-8 items-stretch relative">
        
        {/* LEFT COLUMN: SIDEBAR SERVICE LIST (DESKTOP) */}
        <div className="relative h-[500px]">
          <span className="absolute -top-7 left-0 text-[#c00000] font-bold text-xs uppercase tracking-widest select-none">
            Businesses
          </span>
          <div className="grid grid-rows-6 gap-3 h-full">
            {servicesData.map((service, i) => {
              const isActive = i === activeServiceIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveServiceIndex(i)}
                  className={`w-full text-left px-5 rounded-xl font-semibold transition-all duration-300 shadow-sm border text-xs lg:text-sm leading-snug flex items-center h-full ${
                    isActive
                      ? "bg-[#111622] text-white border-[#111622] scale-[1.02]"
                      : "bg-white text-gray-800 border-gray-100 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER COLUMN: MAIN IMAGE & FLOATING THUMBNAILS IN BOTTOM-LEFT */}
        <div className="relative overflow-hidden rounded-[20px] bg-gray-100 shadow-lg h-[300px] md:h-[500px] w-full">
          {/* Main Slider Images */}
          {activeService?.images.map((img, i) => {
            const isVisible = i === activeImageIndex;
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
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

          {/* Floating Thumbnails centered at bottom with uniform padding */}
          <div 
            ref={containerRef}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-[420px] overflow-hidden bg-black/30 backdrop-blur-md px-3 py-2.5 rounded-xl border border-white/10 flex justify-center"
          >
            {/* Inject CSS keyframes for horizontal sliding */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes marquee-slide {
                0% { transform: translateX(0); }
                50% { transform: translateX(calc(-100% + 396px)); }
                100% { transform: translateX(0); }
              }
              .thumbnail-marquee-track {
                animation: marquee-slide 6s ease-in-out infinite;
              }
            `}} />
            
            <div
              ref={trackRef}
              className={`flex gap-2.5 ${
                activeService?.images.length >= 3 ? "thumbnail-marquee-track" : ""
              }`}
            >
              {activeService?.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative w-36 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    i === activeImageIndex
                      ? "border-red-600 scale-105 opacity-100"
                      : "border-white/80 opacity-70"
                  }`}
                >
                  <Image src={img} fill className="object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SERVICE DETAILS */}
        <div className="flex flex-col h-auto md:h-[500px] justify-between py-1">
          <div>
            <p className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3">
              {activeService?.category.toUpperCase()}
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              {activeService?.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {activeService?.desc}
            </p>
          </div>
          <div className="flex gap-3 mt-auto pt-6 border-t border-gray-100">
            <Link 
              href="/contact"
              className="bg-[#c00000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300 text-sm shadow-sm"
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE/TABLET VIEW (Hidden on Desktop) */}
      <div className="md:hidden flex flex-col gap-4 mt-8 max-w-[600px] mx-auto">
        {servicesData.map((service, i) => {
          const isOpen = i === activeServiceIndex;
          return (
            <div 
              key={i} 
              className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* ACCORDION HEADER */}
              <button
                onClick={() => setActiveServiceIndex(isOpen ? -1 : i)}
                className={`w-full flex items-center justify-between p-5 text-left font-semibold text-[15px] transition-all duration-300 ${
                  isOpen ? "bg-black text-white" : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                <span>{service.title}</span>
                <span className={`text-[12px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {/* ACCORDION BODY */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[850px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0 pointer-events-none"
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
                            className={`absolute inset-0 transition-opacity duration-1000 ${
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
                            onClick={() => setActiveImageIndex(imgIdx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              imgIdx === activeImageIndex ? "bg-white scale-125" : "bg-white/40"
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
