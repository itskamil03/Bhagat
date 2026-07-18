"use client";

import React from "react";
import Image from "next/image";
import { FaCogs, FaHardHat, FaIndustry, FaProjectDiagram } from "react-icons/fa";
import Contact from "../../components/contact";

export default function OurInfrastructure() {
  return (
    <main className="w-full bg-[#fcfcfc] flex flex-col min-h-screen font-sans overflow-x-hidden">

      {/* Premium Dark Technical Hero Section */}
      <section className="relative w-full bg-[#111928] overflow-hidden min-h-[450px] lg:min-h-[550px] flex items-center py-20 lg:py-6">

        {/* Background Overlay Elements */}
        {/* Blueprint Sketch Pattern */}
        <div className="absolute inset-0 opacity-[0.04] z-0 mix-blend-overlay">
          <Image src="/image 59.png" fill className="object-cover" alt="Blueprint" priority />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        {/* Gradient Glowing Orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#E61B23]/25 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-900/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Content Area (Typography) */}
          <div className="w-full lg:w-[55%] flex flex-col">

            {/* Elegant Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg w-fit mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E61B23] animate-pulse shadow-[0_0_10px_#E61B23]"></span>
              <span className="text-white font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase">Core Capabilities</span>
            </div>

            {/* Modern Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.05] tracking-tight">
              State-of-the-Art <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61B23] to-[#ff5b5b]">
                Infrastructure
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mt-6 lg:mt-8 leading-relaxed font-medium">
              Equipped with modern machinery, heavy-duty fabrication yards, and advanced testing facilities, our infrastructure ensures unmatched precision, safety, and execution speed for large-scale engineering projects.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-12">
              <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm border border-white/5 p-3 sm:p-4 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-[#E61B23]/10 text-[#E61B23] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaIndustry className="text-lg sm:text-xl" />
                </div>
                <div className="text-white/90 font-bold text-xs sm:text-sm">Heavy Fabrication</div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm border border-white/5 p-3 sm:p-4 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-[#E61B23]/10 text-[#E61B23] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaCogs className="text-lg sm:text-xl" />
                </div>
                <div className="text-white/90 font-bold text-xs sm:text-sm">Modern Machinery</div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm border border-white/5 p-3 sm:p-4 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-[#E61B23]/10 text-[#E61B23] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaHardHat className="text-lg sm:text-xl" />
                </div>
                <div className="text-white/90 font-bold text-xs sm:text-sm">Safety Standards</div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-sm border border-white/5 p-3 sm:p-4 rounded-xl hover:bg-white/10 hover:border-white/10 transition-all duration-300 group cursor-default">
                <div className="w-10 h-10 rounded-lg bg-[#E61B23]/10 text-[#E61B23] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaProjectDiagram className="text-lg sm:text-xl" />
                </div>
                <div className="text-white/90 font-bold text-xs sm:text-sm">Design & Testing</div>
              </div>
            </div>
          </div>

          {/* Right Visual Area (Abstract Industrial Geometric Interface) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">

              {/* Outer dashed spinning ring */}
              <div className="absolute inset-0 border-[2px] border-dashed border-[#E61B23]/30 rounded-full animate-[spin_40s_linear_infinite]"></div>

              {/* Inner solid rotating ring */}
              <div className="absolute inset-6 border-[1px] border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>

              {/* Deep glowing core */}
              <div className="absolute inset-12 bg-gradient-to-tr from-[#E61B23] to-[#800b12] rounded-full opacity-30 blur-2xl"></div>

              {/* Center Image Container */}
              <div className="absolute inset-10 bg-[#1f2937] border-2 border-white/10 rounded-full shadow-[0_0_50px_rgba(230,27,35,0.2)] overflow-hidden group">
                <Image
                  src="/Rectangle 106.png"
                  alt="Infrastructure Details"
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-[#111928] mix-blend-color opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute left-2 sm:-left-6 top-[20%] bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl shadow-2xl animate-[bounce_4s_infinite]">
                <span className="text-[#E61B23] font-black text-2xl sm:text-3xl">10+</span>
                <p className="text-white/70 text-[9px] sm:text-[11px] uppercase font-bold tracking-[0.2em] mt-1">Workshops</p>
              </div>

              <div className="absolute right-2 sm:-right-4 bottom-[25%] bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl shadow-2xl animate-[bounce_5s_infinite]">
                <span className="text-[#E61B23] font-black text-2xl sm:text-3xl">24/7</span>
                <p className="text-white/70 text-[9px] sm:text-[11px] uppercase font-bold tracking-[0.2em] mt-1">Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery Section */}
      <section className="w-full py-16 lg:py-24 px-6 bg-white relative">
        <div className="max-w-[1480px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Inside Our <span className="text-[#E61B23]">Facilities</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#E61B23] rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl text-lg font-medium">
              Take a closer look at our extensive fabrication units, specialized testing labs, and state-of-the-art heavy machinery setups.
            </p>
          </div>

          {/* Uniform 3-Column Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
             {[
               , 
           "/ec1.jpg", 
               "/ec2.jpg", "/ec3.jpg", "/ec22.jpg", 
               "/iq1.jpg", "/iq2.jpg", "/iq3.jpg",
                "/im2.jpeg", 
             ].map((imgSrc, index) => (
               <div key={index} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <Image 
                    src={imgSrc} 
                    alt={`Infrastructure Facility ${index + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
               </div>
             ))}
          </div>
          
          {/* Load More Button */}
          <div className="w-full flex justify-center mt-12">
            <button className="px-8 py-2.5 bg-white border border-[#E61B23] text-[#E61B23] font-semibold text-sm rounded flex items-center gap-2 hover:bg-red-50 transition-colors shadow-sm">
              Load more photos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="mt-auto bg-gray-100">
        <Contact />
      </div>
    </main>
  );
}
