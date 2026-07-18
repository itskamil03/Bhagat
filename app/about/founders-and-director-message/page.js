"use client";

import React from "react";
import Image from "next/image";
import Contact from "../../components/contact";
import { FaLandmark, FaChartLine, FaUsers, FaHandshake } from "react-icons/fa";
import Founder from "../../components/founder";
import Director from "../../components/director";
import Leader from "../../components/leader";

export default function FoundersAndDirectorMessage() {
  return (
    <main className="w-full bg-[#fcfcfc] flex flex-col min-h-screen font-sans overflow-x-hidden">
      {/* 
        Native HTML/Tailwind replica of the Leadership Banner 
        This is fully responsive and uses selectable text rather than a flat image!
      */}
      <section className="relative w-full bg-[#FAFBFC] border-b border-gray-100 overflow-hidden">
        
        {/* Premium Background Design Elements */}
        {/* 1. Dynamic Gradient Mesh */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-red-100/60 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-t from-blue-100/40 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* 2. Modern Architectural Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        {/* 3. Decorative Geometric Circles */}
        <div className="absolute top-[-10%] right-[15%] w-[400px] h-[400px] border-[40px] border-red-50/40 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] border-[20px] border-gray-100/60 rounded-full pointer-events-none"></div>

        <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 py-4 lg:py-8 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-8">
          
          {/* Left Content Area (Typography & Metrics) */}
          <div className="w-full lg:w-[55%] z-20 flex flex-col justify-center">
            
            {/* Elegant Tag */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-red-100 shadow-sm w-fit mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E61B23] animate-pulse"></span>
              <span className="text-[#E61B23] font-bold tracking-[0.2em] text-xs uppercase">Our Leadership</span>
            </div>
            
            {/* Modern Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#111928] leading-[1.05] tracking-tight">
              Founders & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E61B23] to-[#ff5b5b]">
                Director Message
              </span>
            </h1>
            
            {/* Sophisticated Description */}
            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mt-8 leading-relaxed font-medium">
              Guided by vision, driven by values, and committed to excellence. Our leadership continues to inspire growth, innovation, and trust across every infrastructure project we touch.
            </p>
            
            {/* Stats Metrics (Glassmorphism Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-12">
              {/* Metric 1 */}
              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(230,27,35,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <FaLandmark className="text-[#E61B23] text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">50+</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Years Legacy</p>
                </div>
              </div>
              
              {/* Metric 2 */}
              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(230,27,35,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <FaChartLine className="text-[#E61B23] text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">100+ Cr</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Turnover</p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(230,27,35,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <FaUsers className="text-[#E61B23] text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">500+</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Professionals</p>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(230,27,35,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <FaHandshake className="text-[#E61B23] text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">250+</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Clients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content Area (Premium Portrait Showcase) */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative z-10 pt-4 lg:pt-0">
            <div className="relative w-full max-w-[400px] group">
               
               {/* Ambient Glowing Background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-red-200 to-transparent rounded-full blur-[60px] opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 -z-10"></div>
               
               {/* Sleek Portrait Container */}
               <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] ring-1 ring-black/5 transform transition-transform duration-700 hover:-translate-y-2">
                 <Image
                    src="/ov1.png"
                    alt="Founder & Director"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    priority
                 />
                 
                 {/* Elegant Dark Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#111928] via-[#111928]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
                 
                 {/* Image Text Content */}
                 <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                   <p className="text-red-400 font-extrabold tracking-widest text-[10px] sm:text-xs uppercase mb-2 drop-shadow-md">Founder & Director</p>
                   <h3 className="text-white text-3xl sm:text-4xl font-extrabold drop-shadow-lg leading-tight">Visionary<br/>Leadership</h3>
                 </div>
               </div>
               
               {/* Floating Accent Badge */}
               <div className="absolute -right-4 top-16 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl ring-1 ring-black/5 animate-[bounce_5s_infinite] hidden sm:block">
                 <FaLandmark className="text-[#E61B23] text-2xl" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imported Overview Leadership Sections */}
      <Founder />
      <Director />
      <Leader />
      
      {/* Contact Section */}
      <div className="mt-auto bg-gray-100">
        <Contact />
      </div>
    </main>
  );
}
