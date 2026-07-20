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
  "/lr1.png",
  "/lr2.png",
  "/lr3.png",
  "/lr411.jpeg",
  "/lr4.png",
  "/lr5.png",
];
const colRight = [
  "/rr1.png",
  "/rr2.png",
  "/rr3.png",
  "/rr4.png",
  "/rr5.png",
  "/rr6.png",
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
    <section className="w-full h-auto lg:h-[110vh] lg:min-h-[800px] [@media(width:1024px)]:h-[calc(110vh-106px)] text-white relative overflow-hidden bg-[#530503] pb-12 lg:pb-0">
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

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 [@media(width:1024px)]:grid-cols-1 gap-6 px-6 pt-10 lg:pt-14 relative z-10 w-full">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-start [@media(width:800px)]:pt-8 [@media(width:1024px)]:items-center [@media(width:1024px)]:text-center">
          <p className="text-green-400 tracking-widest text-xs md:text-sm mb-3 [@media(width:800px)]:pl-8 [@media(width:1024px)]:px-0 [@media(width:1024px)]:w-full [@media(width:1024px)]:max-w-[800px] [@media(width:1024px)]:text-left">
            ESTABLISHED 1976
          </p>

          <h1 className="text-3xl md:text-4xl [@media(width:800px)]:text-5xl [@media(width:800px)]:max-w-[700px] [@media(width:1024px)]:max-w-[800px] [@media(width:800px)]:pl-8 [@media(width:1024px)]:px-0 [@media(width:1024px)]:text-justify lg:text-5xl xl:text-7xl font-bold leading-tight select-none max-w-2xl">
            Engineering the future with legacy, precision, and innovation.
          </h1>

          <p className="text-sm md:text-base [@media(width:800px)]:text-lg [@media(width:1024px)]:text-xl [@media(width:800px)]:max-w-[650px] [@media(width:1024px)]:max-w-[800px] [@media(width:800px)]:pl-8 [@media(width:1024px)]:px-0 [@media(width:1024px)]:text-justify text-white/80 mt-4 leading-relaxed max-w-[500px]">
            Bhagat Engineering Works is a leading engineering solutions
            provider, delivering integrated electrical, mechanical, and civil
            services with precision, innovation, and reliability from concept
            and design to fabrication, installation, and project completion.
          </p>

          <div className="mt-6 [@media(width:800px)]:mt-8 flex flex-wrap [@media(width:800px)]:flex-nowrap [@media(width:1024px)]:flex-nowrap gap-3 sm:gap-4 [@media(width:800px)]:gap-5 [@media(width:1024px)]:gap-6 relative z-50 mb-4 lg:mb-0 [@media(width:800px)]:justify-center [@media(width:1024px)]:justify-start [@media(width:1024px)]:w-full [@media(width:1024px)]:max-w-[800px]">
            <Link
              href="/service"
              className="bg-red-700 border border-transparent px-4 sm:px-6 [@media(width:800px)]:px-6 [@media(width:1024px)]:px-10 py-3 [@media(width:800px)]:py-4 [@media(width:1024px)]:py-4 rounded-md hover:bg-red-800 transition text-sm sm:text-base [@media(width:800px)]:text-lg [@media(width:1024px)]:text-xl text-center font-semibold flex-1 min-w-[140px] max-w-[200px] sm:max-w-none sm:flex-none [@media(width:800px)]:flex-1 [@media(width:1024px)]:flex-1 [@media(width:800px)]:max-w-[260px] [@media(width:1024px)]:max-w-none shadow-lg flex items-center justify-center"
            >
              Explore Services
            </Link>
            <Link
              href="/about"
              className="border border-white bg-black/20 backdrop-blur-sm px-4 sm:px-6 [@media(width:800px)]:px-6 [@media(width:1024px)]:px-10 py-3 [@media(width:800px)]:py-4 [@media(width:1024px)]:py-4 rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base [@media(width:800px)]:text-lg [@media(width:1024px)]:text-xl text-center font-semibold flex-1 min-w-[140px] max-w-[200px] sm:max-w-none sm:flex-none [@media(width:800px)]:flex-1 [@media(width:1024px)]:flex-1 [@media(width:800px)]:max-w-[260px] [@media(width:1024px)]:max-w-none shadow-lg sm:ml-4 [@media(width:800px)]:ml-0 [@media(width:1024px)]:ml-0 flex items-center justify-center"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* Spacer for desktop layout grid flow */}
        <div className="hidden lg:block pointer-events-none h-full" />
      </div>

      {/* RIGHT SIDE SLIDER VIEWPORT (FULL HERO HEIGHT ON DESKTOP - MOVES IN FLOW ON MOBILE) */}
      <div className="w-[calc(100%-48px)] mx-auto lg:mx-0 lg:w-[48%] [@media(width:1024px)]:w-full [@media(width:1024px)]:max-w-[800px] h-[350px] sm:h-[450px] [@media(width:800px)]:h-[600px] [@media(width:1024px)]:h-[700px] lg:h-full lg:absolute [@media(width:1024px)]:relative lg:right-0 lg:top-0 overflow-hidden relative z-0 mt-8 [@media(width:800px)]:mt-12 [@media(width:1024px)]:mt-8 lg:mt-0 [@media(width:1024px)]:mx-auto">
        <div
          className="absolute w-full flex justify-center gap-3 [@media(width:800px)]:gap-6 px-4 lg:px-0 lg:pr-8 [@media(width:1024px)]:px-0 [@media(width:1024px)]:pr-0 animate-parallaxRight"
          style={{
            height: "calc(100% + 240px)",
            top: "-120px",
          }}
        >
          {/* LEFT COLUMN (DOWN - MOVING DOWNWARD) */}
          <div className="flex-1 lg:flex-none lg:w-[220px] [@media(width:1024px)]:flex-1 [@media(width:1024px)]:w-full xl:w-[298px] flex flex-col gap-3 [@media(width:800px)]:gap-6 [@media(width:1024px)]:gap-6 xl:gap-5 animate-downSlow h-max pb-3 [@media(width:800px)]:pb-6 [@media(width:1024px)]:pb-6 xl:pb-5">
            {[...colLeft, ...colLeft].map((img, i) => (
              <div
                key={i}
                className="w-full max-w-[298px] [@media(width:800px)]:max-w-[360px] [@media(width:1024px)]:max-w-[420px] h-[180px] sm:h-[240px] [@media(width:800px)]:h-[320px] lg:h-[240px] [@media(width:1024px)]:h-[360px] xl:h-[317px] flex-shrink-0 mx-auto"
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
          <div className="flex-1 lg:flex-none lg:w-[220px] [@media(width:1024px)]:flex-1 [@media(width:1024px)]:w-full xl:w-[298px] flex flex-col gap-3 [@media(width:800px)]:gap-6 [@media(width:1024px)]:gap-6 xl:gap-5 animate-upFast lg:mt-6 xl:mt-12 [@media(width:800px)]:mt-12 [@media(width:1024px)]:mt-12 h-max pb-3 [@media(width:800px)]:pb-6 [@media(width:1024px)]:pb-6 xl:pb-5">
            {[...colRight, ...colRight].map((img, i) => (
              <div
                key={i}
                className="w-full max-w-[298px] [@media(width:800px)]:max-w-[360px] [@media(width:1024px)]:max-w-[420px] h-[180px] sm:h-[240px] [@media(width:800px)]:h-[320px] lg:h-[240px] [@media(width:1024px)]:h-[360px] xl:h-[317px] flex-shrink-0 mx-auto"
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
        className="relative lg:absolute [@media(width:1024px)]:relative mt-10 [@media(width:800px)]:mt-16 [@media(width:1024px)]:mt-16 lg:mt-0 lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 [@media(width:1024px)]:left-0 [@media(width:1024px)]:translate-x-0 w-[calc(100%-32px)] max-w-[1410px] h-auto [@media(width:800px)]:h-[110px] [@media(width:1024px)]:h-[110px] lg:h-[98px] rounded-[16px] lg:rounded-[6px] bg-[rgba(140,0,0,0.88)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.15)] z-20 shadow-xl overflow-hidden flex items-center justify-center mx-auto"
      >
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 [@media(width:800px)]:grid-cols-5 lg:grid-cols-5 items-center p-2 lg:p-0 lg:px-3">
          {/* Column 1 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] [@media(width:800px)]:h-full lg:h-full border-r border-b border-[rgba(255,255,255,0.15)] lg:border-b-0 [@media(width:800px)]:border-b-0 lg:border-r lg:border-[rgba(255,255,255,0.2)]"
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
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] [@media(width:800px)]:h-full lg:h-full border-b border-[rgba(255,255,255,0.15)] [@media(width:800px)]:border-b-0 sm:border-r sm:border-[rgba(255,255,255,0.15)] lg:border-b-0 lg:border-r lg:border-[rgba(255,255,255,0.2)] lg:px-3"
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
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] [@media(width:800px)]:h-full lg:h-full border-r border-b sm:border-b-0 sm:border-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.15)] lg:border-b-0 lg:border-r lg:border-[rgba(255,255,255,0.2)] lg:px-3"
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
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] [@media(width:800px)]:h-full lg:h-full border-b [@media(width:800px)]:border-b-0 sm:border-r border-[rgba(255,255,255,0.15)] sm:border-[rgba(255,255,255,0.15)] lg:border-r lg:border-[rgba(255,255,255,0.2)] lg:border-b-0 lg:px-3"
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
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-[110px] [@media(width:800px)]:h-full lg:h-full col-span-2 sm:col-span-1 lg:col-span-1 lg:px-3"
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
