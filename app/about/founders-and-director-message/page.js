"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaStar, FaArrowRight, FaAward } from "react-icons/fa";
import { ImFlickr } from "react-icons/im";
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

export default function FoundersAndDirectorMessage() {
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
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
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
                Founders & Director Message
              </span>
            </motion.nav>

            {/* Main Hero Header */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-gray-900 leading-[1.1] mb-6"
            >
              Our Leadership <br />
              <span className="text-[#E61B23]">&amp; Vision</span>
            </motion.h1>

            {/* Hero Sub-text */}
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-gray-600 leading-relaxed mb-8"
            >
              Discover the core philosophy and guiding principles that have shaped Bhagat Engineering Works since 1976. Our founders and active directors share their thoughts on legacy, innovation, and trust.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= FOUNDER'S MESSAGE SECTION ================= */}
      <section className="w-full bg-[#f4f4f4] py-20 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >


            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              A Vision That <br /> Built a Legacy
            </h2>

            {/* underline */}
            <div className="w-16 h-[3px] bg-red-500 mt-3 mb-6"></div>

            <p className="text-gray-600 leading-relaxed text-sm">
              At Bhagat Engineering Works, our journey has always been driven by
              innovation, engineering excellence, and an unwavering commitment to
              trust. The confidence of our customers and the dedication of our
              people continue to inspire every milestone we achieve.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              By embracing technological advancements and maintaining the highest
              standards of professionalism, we deliver reliable engineering
              solutions that create long-term value for our clients and industry.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm mt-4">
              As we move forward, our vision remains clear—to build a globally
              respected engineering organization that delivers sustainable
              solutions and creates lasting impact for future generations.
            </p>

            {/* NAME */}
            <h3 className="mt-6 text-red-600 font-semibold">
              Mahavir Prasad Bhagat
            </h3>
            <p className="text-gray-500 text-sm">Founder</p>
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-[380px] h-[300px] overflow-hidden rounded-2xl shadow-lg bg-white group">
              <Image
                src="/drim1.png"
                alt="Founder Mahavir Prasad Bhagat"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* CARD 1 */}
            <div className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-xl flex gap-4 items-start shadow-md transition-colors duration-300">
              <span className="text-4xl font-bold opacity-30">01</span>
              <div>
                <h4 className="font-semibold">
                  Innovation &amp; Engineering Excellence
                </h4>
                <p className="text-sm mt-2 opacity-90">
                  We continuously embrace advanced technologies and modern
                  engineering practices.
                </p>
              </div>
              <FaLightbulb className="ml-auto text-xl opacity-80 flex-shrink-0" />
            </div>

            {/* CARD 2 */}
            <div className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-xl flex gap-4 items-start shadow-md transition-colors duration-300">
              <span className="text-4xl font-bold opacity-30">02</span>
              <div>
                <h4 className="font-semibold">
                  Trust Built Through Relationships
                </h4>
                <p className="text-sm mt-2 opacity-90">
                  Our customers, partners, and dedicated workforce drive our
                  success.
                </p>
              </div>
              <FaUsers className="ml-auto text-xl opacity-80 flex-shrink-0" />
            </div>

            {/* CARD 3 */}
            <div className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-xl flex gap-4 items-start shadow-md transition-colors duration-300">
              <span className="text-4xl font-bold opacity-30">03</span>
              <div>
                <h4 className="font-semibold">A Vision for the Future</h4>
                <p className="text-sm mt-2 opacity-90">
                  We aim to become a global benchmark in engineering and
                  innovation.
                </p>
              </div>
              <FaStar className="ml-auto text-xl opacity-80 flex-shrink-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= DIRECTOR'S MESSAGE SECTION ================= */}
      <section className="relative w-full bg-gray-50 py-20 px-5 lg:px-20 overflow-hidden">
        <Image
          src="/image 18.png"
          alt="Background Overlay"
          width={650}
          height={720}
          className="absolute top-0 right-0 opacity-20 pointer-events-none"
        />

        {/* TOP HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">


          <h2 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">
            Leading the Next Generation of{" "}
            <span className="text-red-600">Engineering Excellence</span>
          </h2>

          <p className="text-gray-500 mt-4 text-sm lg:text-base">
            Driven by innovation, strategic leadership, and an unwavering
            commitment to quality, our leadership continues to shape a stronger,
            smarter, and more sustainable future for engineering.
          </p>
        </div>

        {/* MAIN CARD */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl p-6 lg:p-10 flex flex-col lg:flex-row gap-8 z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT IMAGE */}
          <div className="relative w-full lg:w-1/3 flex justify-center">
            <div className="relative w-[380px] h-[300px] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/drim2.png"
                alt="Director Anand Kumar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-red-600">Anand Kumar</h3>
            <p className="text-gray-700 text-xl font-bold mb-3">Director</p>
            <span className="text-red-500 text-2xl mb-4 block">
              <ImFlickr />
            </span>

            <p className="text-gray-500 text-sm font-semibold leading-relaxed">
              Our vision has always been to transform engineering challenges into
              opportunities for innovation. Every project reflects our commitment
              to precision, professionalism, and long-term value creation.
            </p>

            <p className="text-gray-500 text-sm font-semibold leading-relaxed mt-3">
              For decades, Bhagat Engineering Works has delivered complex
              electrical, mechanical, and infrastructure projects with confidence
              and technical excellence.
            </p>
          </div>

          {/* RIGHT FEATURES */}
          <div className="w-full lg:w-1/3 space-y-5 flex flex-col justify-center">
            <FeatureCard
              title="Visionary Leadership"
              desc="Building a future-ready engineering organization through innovation and strategic thinking."
            />

            <FeatureCard
              title="Execution Excellence"
              desc="Delivering every project with precision, technical expertise, and uncompromising quality."
            />

            <FeatureCard
              title="Strong Partnerships"
              desc="Building long-term relationships founded on trust, transparency, and shared success."
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section at the Bottom */}
      <Contact />
    </main>
  );
}

/* FEATURE BOX */
function FeatureCard({ title, desc }) {
  return (
    <div className="flex gap-4 items-start bg-gray-50 hover:bg-red-50 p-4 rounded-xl transition-colors duration-300">
      {/* ICON */}
      <div className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-lg font-bold flex-shrink-0 select-none">
        ★
      </div>

      {/* TEXT */}
      <div>
        <h4 className="font-semibold text-sm text-gray-800">{title}</h4>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
