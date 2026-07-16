"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHandshake, FaArrowRight } from "react-icons/fa";
import Contact from "../../components/contact";

const leaders = [
  { name: "Anand Kumar", role: "Director", image: "/fq2.jpg" },
  { name: "Anand Kumar", role: "Director", image: "/fq3.jpg" },
  { name: "Anand Kumar", role: "Director", image: "/fq4.jpg" },
  { name: "Anand Kumar", role: "Director", image: "/fq5.jpg" },
  { name: "Anand Kumar", role: "Director", image: "/fq6.jpg" },
];

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

export default function OurCoreTeam() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* ================= HERO SECTION (WHITE BG) ================= */}
      <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 px-6 min-h-[460px] md:min-h-[500px] flex items-center">
        {/* Background Substation Sketch & Outline 50 */}
        <div className="absolute right-0 top-0 w-full md:w-[70%] lg:w-[65%] h-full z-0 pointer-events-none select-none opacity-30 md:opacity-100 flex md:block items-end justify-center">
          <div className="relative w-full h-[320px] md:h-full max-w-[500px] md:max-w-none md:ml-auto">
            {/* Outline 50 (BEHIND the sketch) */}
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

        {/* Content (Overlaying on top of background) */}
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
                Our Core Team
              </span>
            </motion.nav>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-tight tracking-tight text-gray-900"
            >
              OUR CORE
              <br />
              <span className="text-[#E61B23]">TEAM</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed max-w-xl"
            >
              Behind every successful project is a team of passionate
              professionals committed to engineering excellence, innovation, and
              customer satisfaction. Our leadership and management teams combine
              decades of industry experience to deliver reliable infrastructure
              solutions across India.
            </motion.p>

            {/* Accent Box */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 bg-white p-4 rounded-xl border border-red-100 shadow-[0_4px_15px_rgba(230,27,35,0.04)] w-fit mt-8"
            >
              <div className="w-10 h-10 rounded-lg bg-[#E61B23]/10 flex items-center justify-center text-[#E61B23] flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 1.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-[#E61B23] font-bold text-xs md:text-sm tracking-wide">
                  United by Purpose.
                </p>
                <p className="text-gray-900 font-bold text-xs md:text-sm tracking-wide">
                  Driven by Excellence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM SECTION ================= */}
      <section className="w-full py-16 bg-gray-50 border-t border-gray-100 px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Divider Header */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-12">
            <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <h2 className="text-[#E61B23] font-bold tracking-[0.25em] text-xs md:text-sm uppercase text-center">
              LEADERSHIP <span className="text-gray-900">TEAM</span>
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-red-400" />
          </div>

          {/* Responsive Leadership Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
                className="bg-white rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Container */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-[#E61B23] font-bold text-sm md:text-base leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-gray-500 font-semibold text-xs md:text-sm mt-1">
                      {leader.role}
                    </p>
                  </div>
                  {/* Bottom Red Bar Accent */}
                  <div className="w-8 h-[3px] bg-[#E61B23] mt-4 rounded-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= TOGETHER WE BUILD THE FUTURE ================= */}
      <section className="w-full py-16 bg-white px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Divider Header */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
            <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <h2 className="text-gray-900 font-bold tracking-[0.15em] md:tracking-[0.25em] text-xs md:text-sm uppercase text-center">
              TOGETHER WE <span className="text-[#E61B23]">BUILD</span> THE
              FUTURE
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-red-400" />
          </div>

          {/* Description */}
          <p className="text-gray-500 text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-12">
            Our greatest strength is our people. Engineers, project managers,
            technical specialists, and support professionals work together with
            one shared purpose—to deliver quality engineering solutions that
            power industries, strengthen infrastructure, and create lasting
            value for our clients.
          </p>

          {/* Large Team Image (Exactly 1352x573 styled responsively) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[1.5/1] md:aspect-[2.35/1] rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-8"
          >
            <Image
              src="/Rectangle 106.png"
              alt="Our Engineering and Project Team"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Career Banner Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full bg-white rounded-xl border border-gray-150 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mt-12"
          >
            {/* Banner Left Info */}
            <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
              {/* Double Red Silhouette Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-red-50 text-[#E61B23] rounded-full flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 1.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>

              <div>
                <h4 className="font-extrabold text-base md:text-lg text-gray-900 leading-snug">
                  Great Projects Start With{" "}
                  <span className="text-[#E61B23]">Great People.</span>
                </h4>
                <p className="text-gray-500 text-xs md:text-sm mt-1 leading-normal max-w-xl">
                  Join our growing team and contribute to projects that are
                  shaping India&apos;s electrical and infrastructure landscape.
                </p>
              </div>
            </div>

            {/* Banner Button */}
            <Link
              href="/career"
              className="bg-[#E61B23] hover:bg-red-700 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-lg flex items-center justify-center md:justify-start gap-2 transition-colors whitespace-nowrap w-full md:w-auto"
            >
              <span>Explore Opportunities</span>
              <FaArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CTA SECTION ================= */}
      <Contact />
    </main>
  );
}
