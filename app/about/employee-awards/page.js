"use client";

import React from "react";
import Contact from "../../components/contact";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaTrophy, FaUser } from "react-icons/fa";

const awards = [
  {
    title: "On-Site Safety Excellence Award",
    recipient: "Eastern Railway Substation Team",
    date: "Annual Milan 2024",
    desc: "Awarded to the railway electrification engineering squad for maintaining 100% safety standards and zero accidents across 45km of HT power grid laying."
  },
  {
    title: "Outstanding Site Engineer of the Year",
    recipient: "Mr. Rajeev Ranjan",
    date: "Annual Milan 2023",
    desc: "Recognized for showing supreme leadership in completing the Barauni Refinery distribution panel erection 20 days ahead of contract deadlines."
  },
  {
    title: "Lifetime Dedication Award",
    recipient: "Mr. Satrughan Sinha (Senior Foreman)",
    date: "Vishwakarma Day Milan",
    desc: "Honoring 30 years of continuous service, directing operations on critical substations and guiding two generations of junior foremen."
  },
  {
    title: "Innovation in Engineering Award",
    recipient: "Substation Design & Automation Team",
    date: "Vishwakarma Day 2024",
    desc: "Honored for developing a custom PLC-based panel layout that reduced relay response times by 30% in high-load industrial sites."
  },
  {
    title: "Best Project Manager of the Year",
    recipient: "Mr. Amitesh Kumar",
    date: "Annual Milan 2023",
    desc: "Awarded for exceptional leadership in managing three simultaneous site erections in South Bihar with 100% on-time delivery."
  },
  {
    title: "Fastest Response & Breakdown Recovery",
    recipient: "Emergency Grid Repair Squad",
    date: "Grid Milan 2024",
    desc: "Recognized for restoring high-tension transmission connections within 12 hours after a severe storm shutdown."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 14,
    },
  },
};

export default function EmployeeAwards() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0b0e1a] text-white relative overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          .awards-hero-gradient {
            background: linear-gradient(180deg, rgba(11, 14, 26, 0.94) 0%, rgba(11, 14, 26, 0.8) 50%, rgba(11, 14, 26, 0.94) 100%);
          }
          @media (min-width: 768px) {
            .awards-hero-gradient {
              background: linear-gradient(90deg, #0b0e1a 0%, #0b0e1a 35%, rgba(11, 14, 26, 0.85) 55%, rgba(11, 14, 26, 0.3) 75%, transparent 100%);
            }
          }
        `}} />

        {/* Red Accent Decors matching Figma (z-20 to prevent hiding) */}
        <div 
          className="absolute top-0 right-[12%] w-[150px] h-[24px] bg-[#E61B23] z-20 hidden md:block" 
          style={{ clipPath: "polygon(15px 0%, 100% 0%, 100% 100%, 0% 100%)" }} 
        />
        <div 
          className="absolute bottom-0 left-[6%] w-[200px] h-[28px] bg-[#E61B23] z-20 hidden md:block" 
          style={{ clipPath: "polygon(0% 0%, calc(100% - 15px) 0%, 100% 100%, 0% 100%)" }} 
        />

        {/* Absolute Image Column on the Right (w-[50%], object-contain keeps trophy size perfect) */}
        <div className="absolute right-0 top-0 w-full md:w-[50%] h-full z-0 overflow-hidden select-none">
          <style dangerouslySetInnerHTML={{__html: `
            .awards-mask-container {
              mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.15) 15%, black 45%);
              -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.15) 15%, black 45%);
            }
            @media (max-width: 767px) {
              .awards-mask-container {
                mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.15) 20%, black 55%);
                -webkit-mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.15) 20%, black 55%);
              }
            }
          `}} />
          <motion.img
            src="/awards.png"
            alt="Awards & Recognition"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-contain object-center md:object-right awards-mask-container"
          />
        </div>

        {/* Linear Gradient Overlay for seamless blending (dark to transparent) */}
        <div className="awards-hero-gradient absolute inset-0 z-10 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto min-h-[460px] md:h-[480px] relative overflow-hidden flex items-center px-6 md:px-16 z-20">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:w-[50%] flex flex-col justify-center select-none py-12 md:py-0"
          >
            <nav className="text-xs md:text-sm text-gray-400 mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-red-500 transition">Home</Link>
              <span>&gt;</span>
              <Link href="/about" className="hover:text-red-500 transition">About Us</Link>
              <span>&gt;</span>
              <span className="text-white">Employee Awards</span>
            </nav>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[2px] bg-[#E61B23]"></div>
              <p className="text-[#E61B23] uppercase tracking-widest text-[11px] md:text-[13px] font-semibold">
                OUR ACHIEVEMENTS
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-none tracking-tight">
              AWARDS & 
              <span className="block text-[#E61B23] mt-1.5">RECOGNITION</span>
            </h1>

            {/* Red Horizontal Divider Line */}
            <div className="w-16 h-[2px] bg-[#E61B23] my-6"></div>

            <p className="text-gray-300 max-w-xl text-xs md:text-[14px] leading-relaxed">
              Our commitment to quality, innovation, and excellence has been recognized by industry leaders and organizations. These awards inspire us to continue delivering the best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid List Section */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
            <FaAward className="text-[#E61B23]" />
            <span>Honoring Our Achievers</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl">
            A celebration of milestones, dedication, and the core engineering standards that drive our legacy forward.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.02, 
                borderColor: "rgba(230, 27, 35, 0.35)",
                boxShadow: "0 15px 30px -10px rgba(230, 27, 35, 0.15), 0 10px 15px -8px rgba(230, 27, 35, 0.1)" 
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm transition-all duration-300 flex flex-col justify-between cursor-pointer select-none"
            >
              <div>
                {/* Trophy Icon Box */}
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                  <FaTrophy className="text-[#E61B23] text-xl" />
                </div>
                
                {/* Award Heading */}
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                  {item.title}
                </h3>
                
                {/* Recipient */}
                <p className="text-xs text-gray-500 font-bold mb-4 flex items-center gap-1.5">
                  <FaUser className="text-gray-400" />
                  <span>{item.recipient}</span>
                </p>
                
                {/* Award Description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Award Dates */}
              <div className="flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500 font-semibold mt-auto">
                <FaCalendarAlt className="text-gray-400" />
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Contact />
    </main>
  );
}
