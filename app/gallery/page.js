"use client";

import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/contact";

const timelineData = [
  {
    year: "1976",
    range: "1976 - 1985",
    title: "Foundations Of Excellence",
    description:
      "The beginning of our journey in electrical contracting and power infrastructure. Built on integrity, technical expertise, and customer trust, we established the foundation that continues to power our growth today.",
    image: "/a8.jpg",
    imageFirst: true,
  },
  {
    year: "1986",
    range: "1986 - 1995",
    title: "Expansion Across Bihar",
    description:
      "Expanding our capabilities through government and industrial projects, while strengthening our presence across Bihar with reliable electrical engineering and maintenance services.",
    image: "/a7.jpg ",
    imageFirst: false,
  },
  {
    year: "1996",
    range: "1996 - 2005",
    title: "Driving Industrial Growth",
    description:
      "Delivering advanced electrical infrastructure solutions for manufacturing facilities, commercial developments, and critical industrial operations with a focus on quality and performance.",
    image: "dw1.jpg",
    imageFirst: true,
  },
  {
    year: "2006",
    range: "2006 - 2015",
    title: "Powering Railway Infrastructure",
    description:
      "Executing major railway electrification, substation development, and station electrical works, and high-voltage infrastructure projects that strengthened India's transportation network.",
    image: "/a9.png",
    imageFirst: false,
  },
  {
    year: "2016",
    range: "2016 - Present",
    title: "Engineering The Future With Innovation",
    description:
      "Leveraging modern technologies, automation, and sustainable engineering practices to deliver next-generation electrical infrastructure solutions for industries and public utilities.",
    image: "dw1.jpg",
    imageFirst: true,
  },
];

export default function LegacyPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-[#17162b] text-white relative overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          .gallery-gradient {
            background: linear-gradient(180deg, rgba(23, 22, 43, 0.94) 0%, rgba(23, 22, 43, 0.78) 50%, rgba(23, 22, 43, 0.94) 100%);
          }
          @media (min-width: 768px) {
            .gallery-gradient {
              background: linear-gradient(90deg, #17162b 0%, #17162b 28%, rgba(91,16,31,0.85) 48%, rgba(91,16,31,0.35) 65%, transparent 100%);
            }
          }
        `}} />

        <div className="max-w-[1440px] mx-auto min-h-[440px] md:h-[473px] relative overflow-hidden flex flex-col justify-center px-6 md:px-0">
          {/* Text Content Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 w-full md:w-[700px] md:pl-[87px] py-12 md:py-0 flex flex-col justify-center h-full"
          >
            <p className="text-red-500 uppercase tracking-wider text-sm font-semibold">
              OUR LEGACY
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold mt-3 leading-tight">
              Explore Nearly
              <span className="block">
                <span className="text-red-500">50 Years</span> of
              </span>
              <span className="block">Engineering Excellence</span>
            </h1>

            <p className="text-gray-300 max-w-xl text-xs md:text-base leading-relaxed mt-5">
              From our first electrical installation in 1976 to today&apos;s
              large-scale infrastructure developments, discover how Bhagat
              Engineering Works has powered industries, government
              organizations, and railway networks across India through
              innovation, precision, and engineering excellence.
            </p>
          </motion.div>

          {/* Background Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 md:left-auto md:right-0 w-full md:w-[890px] h-full overflow-hidden z-0"
          >
            <img
              src="/a5.png"
              alt="Engineering facility at night"
              className="w-full h-full object-cover object-center"
            />

            {/* Responsive Crimson & Dark Navy Gradient Blend Overlay */}
            <div className="gallery-gradient absolute inset-0" />
          </motion.div>
        </div>
      </section>

      {/* Section heading with dashed rule */}
      <section className="max-w-6xl mx-auto pt-16 pb-10 px-4">
        <div className="flex items-center justify-center gap-6">
          <span className="hidden sm:block flex-1 border-t border-dashed border-red-300" />
          <h2 className="text-red-600 font-semibold tracking-wide text-sm md:text-base whitespace-nowrap">
            OUR JOURNEY THROUGH THE YEARS
          </h2>
          <span className="hidden sm:block flex-1 border-t border-dashed border-red-300" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-[1240px] mx-auto pb-24 px-4">
        <div className="relative">
          {/* Vertical line on the left */}
          <div className="hidden md:block absolute left-6 top-4 bottom-4 w-[2px] bg-red-200" />

          <div className="space-y-8">
            {timelineData.map((item) => (
              <div key={item.year} className="relative flex items-center gap-6">
                {/* Year label + dot column */}
                <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0">
                  <span className="text-xs font-semibold text-gray-400 mb-2">
                    {item.year}
                  </span>
                  <span className="w-3 h-3 rounded-full bg-red-600 ring-4 ring-red-100 z-10" />
                </div>

                {/* Card Block - Exactly 1134px width x 246px height */}
                <div className="w-full max-w-[1134px] md:h-[246px] grid md:grid-cols-2 bg-white rounded-[7px] shadow-[4px_4px_13px_rgba(0,0,0,0.13)] overflow-hidden border border-gray-100">
                  {/* Image */}
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

                  {/* Content */}
                  <div
                    className={`p-6 md:px-8 md:py-5 flex flex-col justify-center h-full ${
                      item.imageFirst ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <h3 className="text-[#E61B23] font-bold text-sm md:text-base">
                      {item.range}
                    </h3>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mt-2 text-xs md:text-[13px] leading-relaxed">
                      {item.description}
                    </p>
                    <button className="mt-4 bg-[#E61B23] text-white px-4 py-1.5 rounded-[4px] w-fit hover:bg-red-700 transition-colors text-xs font-semibold flex items-center gap-1.5">
                      <span>Explore Services</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Contact />
    </main>
  );
}
