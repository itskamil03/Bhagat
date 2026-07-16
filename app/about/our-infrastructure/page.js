"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaTruckLoading,
  FaTools,
  FaCheckCircle,
  FaWarehouse,
  FaDraftingCompass,
} from "react-icons/fa";
import Contact from "../../components/contact";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function OurInfrastructure() {
  const infraItems = [
    {
      icon: <FaCogs className="text-3xl text-white" />,
      title: "Manufacturing & Fabrication Workshop",
      desc: "Our state-of-the-art manufacturing facility is equipped with precision machinery for fabricating LT/HT panels, distribution boards, feeder pillars, and heavy steel gantries for railway substations.",
      details: [
        "Advanced CNC punching & bending machines",
        "In-house sandblasting & powder coating plant",
        "Custom electrical control panel assembly lines",
        "Structural steel fabrication bays"
      ]
    },
    {
      icon: <FaTools className="text-3xl text-white" />,
      title: "Specialized Construction Fleet & Machinery",
      desc: "We own and operate an extensive fleet of specialized heavy machinery and utility vehicles, enabling rapid mobilization and precision execution on railway electrification and grid projects.",
      details: [
        "OHE mast erection cranes & wiring trains",
        "Heavy hydraulic excavators & transit mixers",
        "High-capacity diesel generator sets",
        "Tractor trailers & material handling utility trucks"
      ]
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white" />,
      title: "Testing Laboratories & Quality Assurance",
      desc: "Quality is at the core of our operations. Our testing lab features certified instruments to run stringent safety and performance diagnostics on panels, transformers, and switchgears.",
      details: [
        "Primary & secondary current injection relay test kits",
        "High-voltage dielectric test setup",
        "Insulation resistance testers (Megger) & Micro-ohm meters",
        "ISO 9001:2015 certified quality management system"
      ]
    },
    {
      icon: <FaWarehouse className="text-3xl text-white" />,
      title: "Logistics Hubs & Supply Chain Management",
      desc: "With multiple strategically positioned warehouses and storage yards, we maintain a robust supply chain to ensure uninterrupted raw material flow to all execution sites across India.",
      details: [
        "50,000+ sq. ft. of secure warehousing space",
        "Substantial inventory of copper contact wires & conductors",
        "Trained logistics and inventory control teams",
        "24/7 site dispatch and GPS-tracked transit coordination"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 px-6 min-h-[460px] md:min-h-[500px] flex items-center">
        {/* Background Substation Sketch & Outline 50 */}
        <div className="absolute right-0 top-0 w-full md:w-[70%] lg:w-[65%] h-full z-0 pointer-events-none select-none opacity-30 md:opacity-100 flex md:block items-end justify-center">
          <div className="relative w-full h-[320px] md:h-full max-w-[500px] md:max-w-none md:ml-auto">
            {/* Outline 50 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 0.22, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute right-4 sm:right-10 md:right-16 top-[35%] md:top-[45%] -translate-y-1/2 text-[120px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-extrabold text-transparent leading-none font-sans select-none pointer-events-none opacity-20 md:opacity-[0.22] z-0"
              style={{
                WebkitTextStroke: "2px #E61B23",
                textStroke: "2px #E61B23",
              }}
            >
              50
            </motion.div>

            {/* Substation towers sketch */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="relative w-full h-full z-10"
            >
              <Image
                src="/image 59.png"
                alt="Electrical Infrastructure Line-art"
                fill
                className="object-contain object-bottom md:object-right-bottom opacity-100 mix-blend-multiply"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1240px] mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full md:w-[55%] lg:w-[48%] flex flex-col justify-center"
          >
            {/* Breadcrumb Navigation */}
            <motion.nav
              variants={fadeInUp}
              className="text-xs md:text-sm text-gray-400 mb-6 flex items-center gap-2"
            >
              <Link href="/" className="hover:text-[#E61B23] transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <Link
                href="/about"
                className="hover:text-[#E61B23] transition-colors"
              >
                About Us
              </Link>
              <span>&gt;</span>
              <span className="text-[#E61B23] font-semibold">
                Our Infrastructure
              </span>
            </motion.nav>

            {/* Main Hero Header */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-gray-900 leading-[1.1] mb-6"
            >
              Built to Deliver <br />
              <span className="text-[#E61B23]">At Any Scale</span>
            </motion.h1>

            {/* Hero Sub-text */}
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-8"
            >
              Our robust infrastructure forms the backbone of our operation. With specialized fabrication facilities, heavy utility machinery, and advanced testing setups, we deliver top-tier electrical engineering projects safely and on schedule.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-gray-50 border-y border-gray-100 py-10 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#E61B23]">50,000+</h3>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-2">Sq. Ft. Workshop Area</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">120+</h3>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-2">Active Fleet Units</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#E61B23]">4</h3>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-2">Pan-India Warehouses</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">100%</h3>
            <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-wider mt-2">Safety &amp; QA Compliance</p>
          </div>
        </div>
      </section>

      {/* ================= INFRASTRUCTURE GRID ================= */}
      <section className="py-20 px-6 max-w-[1240px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Assets &amp; Facilities</h2>
          <div className="w-16 h-1 bg-[#E61B23] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            From design to commissioning, our comprehensive infrastructure minimizes external dependencies and ensures complete quality control over every stage of project development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {infraItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 p-6 lg:p-8 flex flex-col justify-between transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div>
                <div className="w-16 h-16 bg-[#E61B23] rounded-2xl flex items-center justify-center shadow-lg shadow-red-100 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              <div className="border-t border-gray-50 pt-5 mt-auto">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <FaCheckCircle className="text-[#E61B23] text-sm flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DESIGN DIVISION CALLOUT ================= */}
      <section className="bg-red-600 text-white py-16 px-6 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Engineering Design &amp; Simulation Studio</h2>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Our infrastructure is backed by an in-house engineering studio where senior draftsmen and design engineers use advanced software tools to map out precise substation layouts, grid schematics, and structural tower designs before site deployment.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold">
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">AutoCAD &amp; SolidWorks</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">3D Simulation Models</span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">Structural Load Calculation</span>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 border border-white/20 rounded-3xl flex items-center justify-center text-4xl md:text-5xl backdrop-blur-sm">
              <FaDraftingCompass />
            </div>
          </motion.div>
        </div>

        {/* decorative subtle rings */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-white/10 pointer-events-none"></div>
      </section>

      {/* Contact Section at the Bottom */}
      <Contact />
    </main>
  );
}
