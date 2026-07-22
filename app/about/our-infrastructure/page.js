"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Contact from "../../components/contact";
import InfrastructureGallery from "../../components/InfrastructureGallery";

const heroImages = ["/in1.png", "/in2.png", "/in3.png"];

export default function OurInfrastructure() {
  const sectionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate hero showcase images smoothly with dynamic duration
  useEffect(() => {
    let currentDuration = 7000;
    if (currentImageIndex === 0) currentDuration = 8000;

    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, currentDuration);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  // Subtle Scroll Parallax Interaction
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <main className="w-full bg-[#050505] flex flex-col min-h-screen font-sans overflow-x-hidden">

      {/* HEAVY CINEMATIC FULL SCREEN IMAGE SLIDER */}
      <motion.section
        ref={sectionRef}
        style={{ opacity: heroOpacity }}
        className="relative w-full overflow-hidden min-h-[500px] lg:min-h-[750px] flex items-end pb-12"
      >
        {/* Animated Background Slider */}
        <motion.div style={{ y: heroParallaxY }} className="absolute inset-0 z-0 w-full h-full bg-[#050505]">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={
                currentImageIndex === 0 ? { opacity: 1, scale: 1 } : // Instant opacity, small boxes will hide it
                  currentImageIndex === 1 ? { opacity: 0, scale: 1.15, x: "-10%", y: "-10%", filter: "contrast(150%) brightness(0.2) blur(10px)" } :
                    { opacity: 0, rotateY: 90, transformPerspective: 2000, originX: 0, filter: "brightness(0.1)" }
              }
              animate={
                currentImageIndex === 0 ? { opacity: 1, scale: 1 } :
                  currentImageIndex === 1 ? { opacity: 1, scale: 1, x: "0%", y: "0%", filter: "contrast(100%) brightness(1) blur(0px)" } :
                    { opacity: 1, rotateY: 0, transformPerspective: 2000, originX: 0, filter: "brightness(1)" }
              }
              exit={
                currentImageIndex === 0 ? { opacity: 0, scale: 1.05, filter: "blur(10px) brightness(0.3)", transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } } :
                  currentImageIndex === 1 ? { opacity: 0, scale: 1.05, x: "5%", y: "5%", filter: "contrast(150%) brightness(0.2) blur(15px)", transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } } :
                    { opacity: 0, rotateY: -90, transformPerspective: 2000, originX: 0, filter: "brightness(0.1)", transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } }
              }
              transition={
                currentImageIndex === 0 ? { opacity: { duration: 0.5, ease: "easeInOut" } } :
                  { duration: 1.8, ease: [0.33, 1, 0.68, 1] }
              }
              className="absolute inset-0 w-full h-full origin-center"
            >
              {/* Inner container for heavy continuous majestic panning/zooming */}
              <motion.div
                animate={
                  currentImageIndex === 0 ? { x: ["0%", "-4%"], scale: [1, 1.05], rotateZ: 0.01 } : 
                  currentImageIndex === 1 ? { x: ["0%", "3%"], y: ["0%", "3%"], scale: [1, 1.05], rotateZ: 0.01 } : 
                  { scale: [1, 1.1], x: ["0%", "-3%"], rotateZ: 0.01 } 
                }
                transition={{
                  duration: currentImageIndex === 0 ? 8 : 7,
                  ease: "easeOut",
                }}
                className="absolute inset-[-5%] w-[110%] h-[110%]"
                style={{ 
                  willChange: "transform, filter", 
                  backfaceVisibility: "hidden", 
                  WebkitBackfaceVisibility: "hidden", 
                  transform: "translateZ(0)",
                  transformStyle: "preserve-3d" 
                }}
              >
                <Image
                  src={heroImages[currentImageIndex]}
                  alt={`Infrastructure Image ${currentImageIndex + 1}`}
                  fill
                  priority
                  className="object-cover"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
              </motion.div>

              {/* Small Box Reveal Effect ONLY for First Image */}
              {currentImageIndex === 0 && (
                <div className="absolute inset-0 z-20 grid grid-cols-10 grid-rows-8 pointer-events-none">
                  {Array.from({ length: 80 }).map((_, i) => (
                    <motion.div
                      key={`box-${i}`}
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 0, scale: 0.2 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: Math.random() * 1.5 // Random stagger up to 1.5s
                      }}
                      className="w-full h-full bg-[#050505]" // Matches background color to hide image initially
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Heavy Cinematic Overlays */}
          {/* 1. Deep Animated Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none"></div>

          {/* 2. Continuous Breathing Light Sweep */}
          <motion.div
            animate={{
              opacity: [0.05, 0.25, 0.05],
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 bg-[length:200%_200%] z-10 pointer-events-none mix-blend-overlay"
          ></motion.div>

          {/* 3. Floating Ambient Light Orbs for "Heavy Animation All Times" */}
          <motion.div
            animate={{ y: ["0%", "-10%", "0%"], scale: [1, 1.1, 1], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] z-10 mix-blend-screen pointer-events-none"
          ></motion.div>

          <motion.div
            animate={{ x: ["0%", "10%", "0%"], scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-10 mix-blend-screen pointer-events-none"
          ></motion.div>
        </motion.div>

        {/* Hero Content (Premium Progress Indicators Only) */}
        <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20 w-full flex justify-center">
          <div className="flex gap-4 z-30">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                aria-label={`Select infrastructure image ${idx + 1}`}
                className={`transition-all duration-700 ease-out rounded-full overflow-hidden relative ${idx === currentImageIndex
                  ? "w-20 h-1.5 bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  : "w-3 h-1.5 bg-white/30 hover:bg-white/60"
                  }`}
              >
                {/* Expanding Progress bar inside the active indicator */}
                {idx === currentImageIndex && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: currentImageIndex === 0 ? 8 : 7, ease: "linear" }}
                    className="absolute left-0 top-0 bottom-0 bg-white h-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infrastructure Gallery Section */}
      <div className="relative z-20 bg-white">
        <InfrastructureGallery />
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <Contact />
      </div>
    </main>
  );
}
