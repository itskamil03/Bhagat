"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Contact from "../../components/contact";

const festivalEvents = [
  {
    year: "Puja",
    date: "September 17, Annual",
    title: "Vishwakarma Puja Celebration",
    description:
      "As engineers and creators, Vishwakarma Puja holds special significance at Bhagat Engineering Works. We clean and worship our machines, tools, and heavy erection gears, followed by community feasts with our site workers, engineers, and executive teams.",
    image: "/a8.jpg",
    imageFirst: true,
  },
  {
    year: "Diwali",
    date: "October/November, Annual",
    title: "Diwali & Corporate Milan",
    description:
      "Celebrating the festival of lights with sweets distribution, office lighting, and an annual milan ceremony that brings families of our employees together to honor our year-round accomplishments.",
    image: "/a7.jpg",
    imageFirst: false,
  },
  {
    year: "Patriot",
    date: "National Festivals",
    title: "Independence Day and Republic Day",
    description:
      "Flag hoisting ceremonies at our corporate head office in Patna and major railway site substations across India, commemorating our pride in building the country's utility infrastructure.",
    image: "/a9.png",
    imageFirst: true,
  },
];

export default function Festivals() {
  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      {/* ================= HERO SECTION (DARK NAVY / RED GRADIENT) ================= */}
      <section className="bg-[#17162b] text-white relative overflow-hidden w-full min-h-[473px] flex items-center">
        
        {/* Absolute Background Image touching the right edge of screen */}
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0 pointer-events-none select-none overflow-hidden">
          <Image
            src="/c1.png"
            alt="Team celebrations and culture background"
            fill
            className="object-cover object-center md:object-right"
            priority
          />
          {/* Crimson & Dark Navy Gradient Blend Overlay matching gallery page */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,22,43,1) 0%, rgba(95,16,26,0.85) 35%, rgba(130,25,35,0.4) 65%, rgba(23,22,43,0) 100%)",
            }}
          />
          <div
            className="absolute inset-y-0 left-0 w-full md:w-1/2 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,22,43,1) 0%, rgba(23,22,43,0.7) 60%, rgba(23,22,43,0) 100%)",
            }}
          />
        </div>

        <div className="max-w-[1240px] mx-auto w-full relative z-10 grid md:grid-cols-2 items-center pl-6 md:pl-0 pr-6 md:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-2 py-10 z-20 flex flex-col justify-center"
          >
            {/* Breadcrumbs */}
            <nav className="text-xs md:text-sm text-gray-400 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <span>&gt;</span>
              <Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link>
              <span>&gt;</span>
              <span className="text-white">Festivals & Culture</span>
            </nav>

            <p className="text-red-500 uppercase tracking-wider text-sm font-semibold">
              CULTURE & TRADITIONS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold mt-3 leading-tight">
              Festivals &
              <span className="block text-[#E61B23]">
                Culture
              </span>
            </h1>

            <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed mt-5">
              Life at Bhagat Engineering is vibrant, connected, and celebratory. We honor our
              traditions and unite our nationwide workforce through national celebrations, religious
              festivals, and community building.
            </p>
          </motion.div>

          {/* Empty right column spacer for desktop */}
          <div className="hidden md:block h-[473px]" />
        </div>
      </section>

      {/* ================= SECTION HEADING WITH DASHED RULE ================= */}
      <section className="max-w-6xl mx-auto pt-16 pb-10 px-4">
        <div className="flex items-center justify-center gap-6">
          <span className="hidden sm:block flex-1 border-t border-dashed border-red-300" />
          <h2 className="text-[#E61B23] font-bold tracking-wide text-sm md:text-base text-center uppercase">
            OUR CELEBRATIONS & CULTURAL MOMENTS
          </h2>
          <span className="hidden sm:block flex-1 border-t border-dashed border-red-300" />
        </div>
      </section>

      {/* ================= EVENTS TIMELINE LIST ================= */}
      <section className="max-w-[1240px] mx-auto pb-24 px-4">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-6 top-4 bottom-4 w-[2px] bg-red-200" />

          <div className="space-y-8">
            {festivalEvents.map((item, index) => (
              <div key={index} className="relative flex items-center gap-6">
                {/* Timeline dot column */}
                <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0">
                  <span className="text-[11px] font-bold text-gray-400 mb-2 uppercase">
                    {item.year}
                  </span>
                  <span className="w-3 h-3 rounded-full bg-red-600 ring-4 ring-red-100 z-10" />
                </div>

                {/* Timeline Card - Exactly matching Gallery page style */}
                <div className="w-full max-w-[1134px] md:h-[246px] grid md:grid-cols-2 bg-white rounded-[7px] shadow-[4px_4px_13px_rgba(0,0,0,0.13)] overflow-hidden border border-gray-100">
                  {/* Card Image */}
                  <div
                    className={`relative h-48 md:h-[246px] overflow-hidden ${
                      item.imageFirst ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div
                    className={`p-6 md:px-8 md:py-5 flex flex-col justify-center h-full ${
                      item.imageFirst ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <span className="text-[#E61B23] font-extrabold text-xs tracking-wider uppercase">
                      {item.date}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-3 text-xs md:text-[13px] leading-relaxed">
                      {item.description}
                    </p>
                    <button className="mt-4 bg-[#E61B23] text-white px-4 py-1.5 rounded-[4px] w-fit hover:bg-red-700 transition-colors text-xs font-semibold flex items-center gap-1.5">
                      <span>Explore Moments</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA SECTION ================= */}
      <Contact />
    </main>
  );
}
