"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getCertificates, certificatePdfUrl } from "../../lib/api/certificate";

export default function Certification() {
  const [certificates, setCertificates] = useState([]);

  // Slider states
  const [scrollIndex, setScrollIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, certificates.length - itemsPerPage);

  const slidePrev = () => setScrollIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const slideNext = () => setScrollIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!touchStart) return;
    const currentX = e.targetTouches[0].clientX;
    const deltaX = currentX - touchStart;

    let finalOffset = deltaX;
    if (scrollIndex === 0 && deltaX > 0) {
      finalOffset = deltaX * 0.3;
    } else if (scrollIndex === maxIndex && deltaX < 0) {
      finalOffset = deltaX * 0.3;
    }
    setDragOffset(finalOffset);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || dragOffset === 0) {
      setTouchStart(null);
      setDragOffset(0);
      return;
    }

    const distance = dragOffset;
    const isLeftSwipe = distance < -minSwipeDistance;
    const isRightSwipe = distance > minSwipeDistance;

    let nextIndex = scrollIndex;
    if (isLeftSwipe && scrollIndex < maxIndex) {
      nextIndex = scrollIndex + 1;
    } else if (isRightSwipe && scrollIndex > 0) {
      nextIndex = scrollIndex - 1;
    }

    setScrollIndex(nextIndex);
    setTouchStart(null);
    setDragOffset(0);
  };

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const data = await getCertificates();
        if (data && Array.isArray(data)) {
          setCertificates(data);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic certificates:", err);
      }
    }
    fetchCertificates();
  }, []);

  return (
    <section className="w-full bg-gray-100 py-12 px-6 lg:px-20 text-center">


      {/* HEADING */}
      <p className="text-red-600 text-lg sm:text-xl lg:text-2xl font-bold tracking-widest">
        <span className="text-black">CERTIFICATIONS</span>
      </p>

      <h2 className="text-[28px] leading-tight min-[390px]:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 lg:mt-3">
        Certified. <span className="text-red-600">Trusted.</span> Committed.
      </h2>

      <p className="text-gray-500 mt-3 md:mt-4 font-bold max-w-2xl mx-auto text-sm md:text-base">
        Our internationally recognized certifications reflect our commitment to
        quality management, safety standards, operational excellence, and
        continuous improvement.
      </p>

      {/* CAROUSEL WRAPPER */}
      <div
        className="w-full overflow-hidden max-w-7xl mx-auto mt-2 py-10 px-6"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="cert-slider-track flex gap-6 w-full">
          {certificates.map((item) => (
            <div 
              key={item._id} 
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 ${isDragging ? "transition-none" : "transition-transform duration-500 ease-out"}`}
              style={{
                transform: `translateX(calc(-${scrollIndex * 100}% - ${scrollIndex * 24}px + ${dragOffset}px))`
              }}
            >
              <Card img={certificatePdfUrl(item)} />
            </div>
          ))}
        </div>
      </div>

      {/* SLIDER CONTROLS */}
      {maxIndex > 0 && (
        <div className="flex justify-center mt-10">
          <div className="bg-black text-white px-6 py-3 rounded-full flex gap-6 items-center shadow-lg">
            <button
              onClick={slidePrev}
              className="cursor-pointer hover:text-red-600 transition text-xl font-bold px-2"
              aria-label="Previous Certificates"
            >
              ‹
            </button>
            <button
              onClick={slideNext}
              className="cursor-pointer hover:text-red-600 transition text-xl font-bold px-2"
              aria-label="Next Certificates"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* CARD COMPONENT */
function Card({ img }) {
  const isPdf = img?.toLowerCase().endsWith(".pdf");

  return (
    <motion.a
      href={img} 
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.04,
        y: -6,
        shadow: "0 25px 50px -12px rgba(230, 27, 35, 0.25)",
        transition: { duration: 0.25 },
      }}
      className="group block bg-gray-50 flex flex-col items-center justify-center border-2 border-red-500 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer relative w-full aspect-[4/3]"
    >
      {isPdf ? (
        <div className="relative w-full h-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <iframe
            src={`${img}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
            className="w-full h-full pointer-events-none border-none transition-transform duration-500 scale-[1.85] group-hover:scale-100 origin-center"
            title="Certificate PDF Preview"
          />
          {/* Overlay to catch clicks and prevent interaction with the iframe */}
          <div className="absolute inset-0 bg-transparent z-10" />
        </div>
      ) : (
        <Image
          src={img}
          alt="certificate"
          fill
          className="object-cover transition-all duration-300 group-hover:object-contain bg-white"
          sizes="(max-w-768px) 100vw, 33vw"
        />
      )}
    </motion.a>
  );
}
