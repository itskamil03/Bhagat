"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  initial: { y: 25, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: -25,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] },
  },
};

const chooseUsData = [
  {
    num: "01",
    isOutline: false,
    text: (
      <>
        Quality management systems
        <br />
        that guarantee consistency
      </>
    ),
  },
  {
    num: "02",
    isOutline: true,
    text: (
      <>
        Fifty years of
        <br />
        uninterrupted service
      </>
    ),
  },
  {
    num: "03",
    isOutline: true,
    text: (
      <>
        Engineers who understand
        <br />
        complex electrical systems
      </>
    ),
  },
  {
    num: "04",
    isOutline: true,
    text: (
      <>
        Long-term relationships built
        <br />
        on responsive service
      </>
    ),
  },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = chooseUsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % chooseUsData.length);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 h-auto md:h-[450px]">
      {/* ================= LEFT SIDE ================= */}
      <div
        className="relative flex items-center min-h-[260px] md:min-h-0 py-12 md:py-0"
        style={{
          backgroundImage: "url('/d1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white pl-8 md:pl-16 pr-8 md:pr-10 max-w-xl">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            “We aim to be the leading provider of highest-quality
            techno-commercial solutions for all electrical projects.”
          </h1>

          <p className="mt-4 text-xs md:text-sm text-gray-300">
            Bhagat Engineering Works
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="relative bg-[#f5f5f5] flex items-center overflow-hidden h-auto md:h-full py-12 md:py-0 pb-24 md:pb-0">
        {/* Background faded image */}
        <div
          className="absolute inset-0 bg-right bg-contain bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/image 18.png')",
          }}
        />

        {/* 🔴 CURVED RED STRIP (IMAGE) */}
        <div className="absolute -left-3 md:-left-5 top-0 h-full w-[50px] md:w-[65px] z-10">
          <Image
            src="/Group 26.png"
            alt="divider"
            fill
            className="object-fill"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 pl-16 md:pl-28 pr-6 md:pr-10 w-full">
          <p className="text-red-600 text-sm font-semibold pb-4">
            Why Choose Us?
          </p>
          <div className=" w-12 h-[3px] bg-red-600"></div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug mt-3">
            Engineering Excellence.
            <br />
            <span className="text-red-600">Built on Trust.</span>
          </h2>

          <p className="mt-4 text-gray-600 text-xs md:text-sm max-w-lg leading-relaxed">
            Seasoned electrical and mechanical engineering expertise, authorized
            channel partnerships, manufacturer tie-ups and an economical
            execution model built around safety, reliability and quality.
          </p>

          {/* CARD */}
          <div className="mt-8 bg-white rounded-xl shadow-md flex items-center w-full md:w-fit overflow-hidden transition-all duration-300">
            {/* BIG NUMBER */}
            <div className="bg-red-700 text-white w-[80px] md:w-[100px] h-[86px] md:h-[98px] flex flex-col items-center justify-center select-none flex-shrink-0 overflow-hidden pt-3.5 pb-2">
              {/* White divider line above the number */}
              <div className="w-8 h-[2px] bg-white/90 mb-2 flex-shrink-0"></div>

              <div className="w-full flex-1 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-[48px] md:text-[62px] font-bold leading-none w-full h-full flex items-center justify-center"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                      color: "transparent",
                      WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.95)",
                    }}
                  >
                    {activeSlide.num}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* TEXT */}
            <div className="px-5 md:px-6 py-4 border-l flex-1 md:min-w-[340px] h-[86px] md:h-[98px] flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full h-full flex items-center"
                >
                  <p className="text-gray-800 font-semibold text-xs md:text-sm leading-snug">
                    {activeSlide.text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 🔺 NEXT BUTTON */}
        <div className="absolute -bottom-1.5 -right-1.5 z-20">
          <button
            onClick={handleNext}
            className="relative w-[130px] md:w-[165px] h-[44px] md:h-[55px] transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="Next Slide"
          >
            <Image
              src="/Group 28 (1).png"
              alt="Next Slide"
              fill
              className="object-fill"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
