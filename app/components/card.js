"use client";
import { useState } from "react";
import Image from "next/image";

export default function Card({ img, title, desc }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      onClick={() => setIsActive(!isActive)}
      className="group relative overflow-hidden rounded-[24px] cursor-pointer select-none shadow-md"
    >
      {/* IMAGE */}
      <Image
        src={img}
        alt="card"
        width={500}
        height={500}
        className="card-image w-full h-[320px] md:h-[420px] object-cover"
      />

      {/* OVERLAY PANEL */}
      <div 
        className={`card-overlay absolute bottom-0 left-0 w-full p-4 md:p-5 bg-[#1e1b15]/80 backdrop-blur-sm border-t border-white/5 rounded-b-[24px] flex flex-col justify-end min-h-[160px] md:min-h-[170px] ${
          isActive ? "active" : ""
        }`}
      >
        {/* SHIELD CHECK ICON */}
        <div className="mb-2 md:mb-3 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#110f0a] border border-[#3a3528]">
          <svg className="w-4 h-4 md:w-4.5 md:h-4.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        {/* TITLE */}
        <h3 className="text-white text-sm md:text-[17px] font-semibold leading-snug mb-1 md:mb-2">{title}</h3>

        {/* LINE */}
        <div className="w-12 h-[2px] bg-white/20 mb-2 md:mb-3"></div>

        {/* DESC */}
        <p className="text-gray-300 text-xs md:text-[13px] leading-relaxed">{desc}</p>
      </div>

      {/* Mobile Hint Tag (Only visible on screens smaller than md) */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-full md:hidden transition-opacity duration-300 pointer-events-none">
        {isActive ? "Close" : "Tap for Info"}
      </div>
    </div>
  );
}
