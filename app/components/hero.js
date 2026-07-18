"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

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

const colLeft = [
  "/Erection and commissioning of Power Sub-station 1.jpeg",
  "/Erection and commissioning of Power Sub-station 2.jpeg",
  "/Erection and commissioning of Power Sub-station 3.jpeg",
  "/Erection and commissioning of Power Sub-station 4.jpeg",
  "/Erection and commissioning of Power Sub-station 5.jpeg",
  "/Erection and commissioning of Power Sub-station 7.jpeg",
];
const colRight = [
  "/Erection and commissioning of Power Sub-station 8.jpeg",
  "/Cable Laying 1 (1).jpeg",
  "/Cable Laying 4.jpeg",
  "/Cable Laying 6.jpeg",
  "/Cable Laying 7.jpeg",
  "/Cable Laying 8.jpeg",
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="w-full h-auto lg:h-[110vh] lg:min-h-[800px] text-white relative overflow-hidden bg-[#530503] pb-12 lg:pb-0">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div
          className="w-full h-full z-0"
          style={{
            backgroundImage: "url('/div.hero-slide.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient Overlay to keep text readable */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(83, 5, 3, 0.88) 0%, rgba(166, 14, 8, 0.45) 55%, rgba(82, 8, 5, 0.19) 100%)",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pt-10 lg:pt-14 relative z-10 w-full">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-start">
          <p className="text-green-400 tracking-widest text-xs md:text-sm mb-3">
            ESTABLISHED 1976
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight select-none max-w-2xl">
            Engineering the future with legacy, precision, and innovation.
          </h1>

          <p className="text-sm md:text-base text-white/80 mt-4 leading-relaxed max-w-[500px]">
            Bhagat Engineering Works is a leading engineering solutions
            provider, delivering integrated electrical, mechanical, and civil
            services with precision, innovation, and reliability from concept
            and design to fabrication, installation, and project completion.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 relative z-50 mb-4 lg:mb-0">
            <Link
              href="/service"
              className="bg-red-700 px-4 sm:px-6 py-3 rounded-md hover:bg-red-800 transition text-sm sm:text-base text-center font-semibold flex-1 min-w-[140px] max-w-[200px] sm:max-w-none sm:flex-none shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              href="/about"
              className="border border-white bg-black/20 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base text-center font-semibold flex-1 min-w-[140px] max-w-[200px] sm:max-w-none sm:flex-none shadow-lg sm:ml-4"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* Spacer for desktop layout grid flow */}
        <div className="hidden lg:block pointer-events-none h-full" />
      </div>

      {/* RIGHT SIDE SLIDER VIEWPORT (FULL HERO HEIGHT ON DESKTOP - MOVES IN FLOW ON MOBILE) */}
      <div className="w-[calc(100%-48px)] mx-auto lg:mx-0 lg:w-[48%] h-[350px] sm:h-[450px] lg:h-full lg:absolute lg:right-0 lg:top-0 overflow-hidden relative z-0 mt-8 lg:mt-0">
        <div
          className="absolute w-full flex justify-center gap-3 px-4 lg:px-0 lg:pr-8 animate-parallaxRight"
          style={{
            height: "calc(100% + 240px)",
            top: "-120px",
          }}
        >
          {/* LEFT COLUMN (DOWN - MOVING DOWNWARD) */}
          <div className="flex-1 lg:flex-none lg:w-[298px] flex flex-col gap-5 animate-downSlow">
            {[...colLeft, ...colLeft].map((img, i) => (
              <div
                key={i}
                className="w-full max-w-[298px] h-[180px] sm:h-[240px] lg:h-[317px] flex-shrink-0 mx-auto"
              >
                <div className="relative w-full h-full overflow-hidden rounded-none">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 33vw, 25vw"
                    className="object-cover"
                    priority={i < 4}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (UP - MOVING UPWARD) */}
          <div className="flex-1 lg:flex-none lg:w-[298px] flex flex-col gap-5 animate-upFast mt-12">
            {[...colRight, ...colRight].map((img, i) => (
              <div
                key={i}
                className="w-full max-w-[298px] h-[180px] sm:h-[240px] lg:h-[317px] flex-shrink-0 mx-auto"
              >
                <div className="relative w-full h-full overflow-hidden rounded-none">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width: 1280px) 33vw, 25vw"
                    className="object-cover"
                    priority={i < 4}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
        className="relative lg:absolute mt-10 lg:mt-0 lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 w-[calc(100%-32px)] max-w-[1410px] h-auto lg:h-[98px] rounded-[16px] lg:rounded-[6px] bg-[rgba(140,0,0,0.88)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.15)] z-20 shadow-xl overflow-hidden flex items-center justify-center mx-auto"
      >
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center p-2 lg:p-0 lg:px-3">
          {/* Column 1 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] lg:h-full border-r border-b border-[rgba(255,255,255,0.15)] lg:border-b-0 lg:border-r lg:border-[rgba(255,255,255,0.2)]"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[24px] md:text-[36px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="50" suffix="+" />
            </motion.h2>
            <p className="text-[10px] md:text-[12px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              Years of Trust
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] lg:h-full border-b border-[rgba(255,255,255,0.15)] sm:border-r sm:border-[rgba(255,255,255,0.15)] lg:border-b-0 lg:border-r lg:border-[rgba(255,255,255,0.2)] lg:px-3"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[24px] md:text-[36px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="1000" suffix="+" />
            </motion.h2>
            <p className="text-[10px] md:text-[12px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              Project delivered
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] lg:h-full border-r border-b sm:border-b-0 sm:border-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.15)] lg:border-b-0 lg:border-r lg:border-[rgba(255,255,255,0.2)] lg:px-3"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[18px] md:text-[28px] font-bold leading-none text-white transition-transform duration-200 whitespace-nowrap"
            >
              PAN India
            </motion.h2>
            <p className="text-[10px] md:text-[12px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              Presence
            </p>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] lg:h-full border-b sm:border-r border-[rgba(255,255,255,0.15)] sm:border-[rgba(255,255,255,0.15)] lg:border-r lg:border-[rgba(255,255,255,0.2)] lg:border-b-0 lg:px-3"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[24px] md:text-[36px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="500" suffix="+" />
            </motion.h2>
            <p className="text-[10px] md:text-[12px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              Skilled Professionals
            </p>
          </motion.div>

          {/* Column 5 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] lg:h-full col-span-2 sm:col-span-1 lg:col-span-1 lg:px-3"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[24px] md:text-[36px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="33" suffix="" />
            </motion.h2>
            <p className="text-[10px] md:text-[12px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              KV O&M Capability
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
