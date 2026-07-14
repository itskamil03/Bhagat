"use client";

import Image from "next/image";
import Link from "next/link";

const colLeft = ["/a2.png", "/a3.png", "/a4.png", "/a5.png"];
const colRight = ["/b1.png", "/b4.png", "/e2.png", "/e3.png"];

export default function Hero() {
  return (
    <section 
      className="w-full min-h-screen relative overflow-hidden text-white flex flex-col justify-between"
      style={{
        backgroundImage: "linear-gradient(90deg, rgba(83, 5, 3, 0.88) 0%, rgba(166, 14, 8, 0.45) 55%, rgba(82, 8, 5, 0.19) 100%), url('/div.hero-slide.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* HERO MAIN CONTENT GRID */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-12 flex-1 items-center py-20 relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-left">
          <p className="text-[#4ADE80] tracking-widest text-xs uppercase font-extrabold mb-4">
            ESTABLISHED 1976
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Engineering the future with legacy, precision, and innovation.
          </h1>

          <p className="mt-6 text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
            Bhagat Engineering Works delivers integrated electrical, mechanical and civil engineering solutions, from design and fabrication to installation, commissioning and maintenance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/service">
              <button className="bg-red-700 px-6 py-3 rounded-md hover:bg-red-800 transition font-bold text-sm cursor-pointer shadow-md">
                Explore Services
              </button>
            </Link>
            <Link href="/about">
              <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition font-bold text-sm cursor-pointer">
                Know More
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="hidden md:flex gap-5 pr-4 h-[520px] overflow-hidden relative">
          {/* LEFT COLUMN (UP - TOUCH NAVBAR) */}
          <div className="flex-1 flex flex-col gap-4 animate-upFast">
            {[...colLeft, ...colLeft].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt=""
                width={320}
                height={240}
                className="w-full h-[240px] object-cover rounded-xl shadow-md border border-white/10"
              />
            ))}
          </div>

          {/* RIGHT COLUMN (DOWN - GAP FROM NAVBAR) */}
          <div className="flex-1 flex flex-col gap-4 animate-downSlow mt-12">
            {[...colRight, ...colRight].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt=""
                width={320}
                height={240}
                className="w-full h-[240px] object-cover rounded-xl shadow-md border border-white/10"
              />
            ))}
          </div>

          {/* FADE GRADIENTS ON TOP/BOTTOM */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#530503]/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#530503]/50 to-transparent pointer-events-none"></div>
        </div>

      </div>

      {/* BOTTOM STATS BAR (#7D0C0B background with 86% opacity matching Figma values) */}
      <div className="bg-[#7D0C0B]/86 border-t border-white/10 py-6 w-full mt-auto relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center items-center">
          <div className="border-r border-white/15 last:border-r-0 py-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">49+</h2>
            <p className="text-xs md:text-sm text-gray-300 font-medium mt-1">Years of trust</p>
          </div>

          <div className="border-r border-white/15 last:border-r-0 py-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">100+</h2>
            <p className="text-xs md:text-sm text-gray-300 font-medium mt-1">Crore approx. turnover</p>
          </div>

          <div className="border-r border-white/15 last:border-r-0 py-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">1,662</h2>
            <p className="text-xs md:text-sm text-gray-300 font-medium mt-1">Hours of work</p>
          </div>

          <div className="border-r border-white/15 last:border-r-0 py-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">33</h2>
            <p className="text-xs md:text-sm text-gray-300 font-medium mt-1">kV O&M capability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
