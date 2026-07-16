"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

function CountUp({ end, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
  "/a2.png",
  "/a3.png",
  "/a4.png",
  "/a5.png",
  "/a6.png",
  "/a9.png",
  "/sh1.png",
  "/dy3.png",
  "/c1.png",
  "/d1.png",
  "/d2.png",
  "/da5.jpg",
  "/dw1.jpg",
  "/k1.jpg",
  "/k2.jpg",
];
const colRight = [
  "/b1.png",
  "/b4.png",
  "/e2.png",
  "/e3.png",
  "/pk.png",
  "/pk2.png",
  "/pa1.png",
  "/pa2.png",
  "/cer1.png",
  "/cer2.png",
  "/cer3.png",
  "/fq1.png",
  "/fq2.jpg",
  "/k3.jpg",
  "/za1.jpg",
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
    <section className="w-full h-auto md:h-[110vh] text-white relative overflow-hidden bg-[#530503] pb-12 md:pb-0">
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

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pt-10 md:pt-14 relative z-10 w-full">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-start">
          <p className="text-green-400 tracking-widest text-xs md:text-sm mb-3">
            ESTABLISHED 1976
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight select-none">
            Engineering the
            <br />
            future with
            <br />
            legacy,
            <br />
            precision, and
            <br />
            innovation.
          </h1>

          <p className="text-sm md:text-base text-white/80 mt-4 leading-relaxed max-w-[500px]">
            Bhagat Engineering Works delivers integrated electrical, mechanical
            and civil engineering solutions, from design and fabrication to
            installation, commissioning and maintenance.
          </p>

          <div className="mt-6 flex gap-3 md:gap-4">
            <Link
              href="/service"
              className="bg-red-700 px-0 md:px-6 py-3 rounded-md hover:bg-red-800 transition text-sm md:text-base text-center font-semibold flex-1 max-w-[170px] md:max-w-none md:flex-none"
            >
              Explore Services
            </Link>
            <Link
              href="/about"
              className="border border-white px-0 md:px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-sm md:text-base text-center font-semibold flex-1 max-w-[170px] md:max-w-none md:flex-none md:ml-10"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* Spacer for desktop layout grid flow */}
        <div className="hidden md:block pointer-events-none h-full" />
      </div>

      {/* RIGHT SIDE SLIDER VIEWPORT (FULL HERO HEIGHT ON DESKTOP - MOVES IN FLOW ON MOBILE) */}
      <div className="w-[calc(100%-48px)] mx-auto md:mx-0 md:w-[48%] h-[350px] md:h-full md:absolute md:right-0 md:top-0 overflow-hidden relative z-0 mt-8 md:mt-0">
        <div
          className="absolute w-full flex justify-center gap-3 px-4 md:px-0 md:pr-8 animate-parallaxRight"
          style={{
            height: "calc(100% + 240px)",
            top: "-120px",
          }}
        >
          {/* LEFT COLUMN (DOWN - MOVING DOWNWARD) */}
          <div className="flex-1 md:flex-none md:w-[298px] flex flex-col gap-5 animate-downSlow">
            {[...colLeft, ...colLeft].map((img, i) => (
              <div
                key={i}
                className="w-full max-w-[298px] h-[180px] md:h-[317px] flex-shrink-0 mx-auto"
              >
                <div className="relative w-full h-full overflow-hidden rounded-none">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-w-7xl) 33vw"
                    className="object-cover"
                    priority={i < 4}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN (UP - MOVING UPWARD) */}
          <div className="flex-1 md:flex-none md:w-[298px] flex flex-col gap-5 animate-upFast mt-12">
            {[...colRight, ...colRight].map((img, i) => (
              <div
                key={i}
                className="w-full max-w-[298px] h-[180px] md:h-[317px] flex-shrink-0 mx-auto"
              >
                <div className="relative w-full h-full overflow-hidden rounded-none">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-w-7xl) 33vw"
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
        animate="visible"
        className="relative md:absolute mt-10 md:mt-0 md:bottom-6 md:left-1/2 md:-translate-x-1/2 w-[300px] md:w-[calc(100%-32px)] max-w-[1410px] h-auto md:h-[98px] rounded-[16px] md:rounded-[6px] bg-[rgba(140,0,0,0.88)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.15)] z-20 shadow-xl overflow-hidden flex items-center justify-center mx-auto"
      >
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 items-center p-2 md:p-0 md:px-6">
          {/* Column 1 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left h-[110px] md:h-full border-r border-b border-[rgba(255,255,255,0.15)] md:border-b-0 md:border-r md:border-[rgba(255,255,255,0.2)]"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[32px] md:text-[48px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="50" suffix="+" />
            </motion.h2>
            <p className="text-[11px] md:text-[14px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              Years of trust
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left h-[110px] md:h-full border-b border-[rgba(255,255,255,0.15)] md:border-b-0 md:border-r md:border-[rgba(255,255,255,0.2)] md:px-6"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[32px] md:text-[48px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="100" suffix="+" />
            </motion.h2>
            <p className="text-[11px] md:text-[14px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              Crore turnover
            </p>
          </motion.div>

          {/* Column 3 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left h-[110px] md:h-full border-r border-[rgba(255,255,255,0.15)] md:border-r md:border-[rgba(255,255,255,0.2)] md:px-6"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[32px] md:text-[48px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="1662" />
            </motion.h2>
            <p className="text-[11px] md:text-[14px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              Hours of work
            </p>
          </motion.div>

          {/* Column 4 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left h-[110px] md:h-full md:px-6"
          >
            <motion.h2
              whileHover={{ scale: 1.03 }}
              className="text-[32px] md:text-[48px] font-bold leading-none text-white transition-transform duration-200"
            >
              <CountUp end="33" />
            </motion.h2>
            <p className="text-[11px] md:text-[14px] font-normal leading-tight text-[rgba(255,255,255,0.85)] mt-1 select-none">
              kV O&M capability
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
