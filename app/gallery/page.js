"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Contact from "../components/contact";
import { getJourneyGallery } from "../../lib/api/journeyGallery";

export default function LegacyPage() {
  const [journeyData, setJourneyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getJourneyGallery();
        setJourneyData(data || []);
      } catch (err) {
        setError(err.message || "Failed to load gallery data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-[#1F1719] text-white relative overflow-hidden flex flex-col md:block">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .gallery-gradient {
            background: linear-gradient(180deg, #1F1719 0%, #1B1416 50%, rgba(35,20,22,0.66) 75%, rgba(48,19,23,0) 100%);
          }
          @media (min-width: 768px) {
            .gallery-gradient {
              background: linear-gradient(
                270deg,
                rgba(48, 19, 23, 0) 0%,
                rgba(52, 19, 23, 0.52) 30.74%,
                rgba(35, 20, 22, 0.66) 41.58%,
                #1B1416 63.54%,
                #1F1719 100%
              );
            }
          }
          .gallery-glow {
            background: radial-gradient(
              circle at 100% 50%,
              rgba(139, 33, 33, 0.22) 0%,
              rgba(139, 33, 33, 0.08) 50%,
              transparent 80%
            );
          }
          @media (min-width: 768px) {
            .gallery-glow {
              background: radial-gradient(
                circle at 60% 50%,
                rgba(139, 33, 33, 0.18) 0%,
                rgba(139, 33, 33, 0.08) 40%,
                transparent 70%
              );
            }
          }
        `,
          }}
        />

        {/* Gradient Background Layer (z-0 behind the image illustration) */}
        <div className="gallery-gradient absolute inset-0 z-0 pointer-events-none" />

        {/* Subtle Reddish Center Glow Layer (z-5 behind the image illustration) */}
        <div className="gallery-glow absolute inset-0 z-5 pointer-events-none" />

        {/* Background Image Container (Direct child of section, z-10) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute right-0 top-0 w-full md:w-[48%] h-full z-10 select-none pointer-events-none overflow-visible"
          style={{
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          }}
        >
          <img
            src="/a5c.png"
            alt="Engineering facility at night"
            className="w-full h-full object-cover object-right-bottom"
          />
        </motion.div>

        <div className="max-w-[1440px] mx-auto min-h-[440px] md:h-[473px] relative flex flex-col justify-center px-6 md:px-0 z-20">
          {/* Text Content Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 w-full md:w-[700px] md:pl-[87px] py-12 md:py-0 flex flex-col justify-center h-full"
          >
            <p className="text-[#E61B23] uppercase tracking-wider text-sm font-semibold">
              OUR LEGACY
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold mt-3 leading-tight">
              Explore Nearly <br />
              <span className="text-[#E61B23]">50 Years</span> of <br />
              Engineering Excellence
            </h1>

            {/* Red Underline Spacer */}
            <div className="w-16 h-[3px] bg-[#E61B23] mt-4 mb-6 rounded-full" />

            <p className="text-gray-300 max-w-[520px] text-xs md:text-base leading-relaxed mt-0">
              From our first electrical installation in 1976 to today&apos;s
              large-scale infrastructure developments, discover how Bhagat
              Engineering Works has powered industries, government
              organizations, and railway networks across India through
              innovation, precision, and engineering excellence.
            </p>
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

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E61B23]"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-12 font-semibold">
              {error}
            </div>
          ) : (
            <div className="space-y-8">
              {journeyData.map((item, index) => {
                const imageFirst = index % 2 === 0;
                const cardImage = item.coverImage?.image || item.image;
                const dotYear = item.year ? item.year.split(' ')[0] : "";
                
                return (
                  <div key={item._id || index} className="relative flex items-center gap-6">
                    {/* Year label + dot column */}
                    <div className="hidden md:flex flex-col items-center w-12 flex-shrink-0">
                      <span className="text-xs font-semibold text-gray-400 mb-2">
                        {dotYear}
                      </span>
                      <span className="w-3 h-3 rounded-full bg-red-600 ring-4 ring-red-100 z-10" />
                    </div>

                    {/* Card Block - Exactly 1134px width x 246px height */}
                    <div className="w-full max-w-[1134px] md:h-[246px] grid md:grid-cols-2 bg-white rounded-[7px] shadow-[4px_4px_13px_rgba(0,0,0,0.13)] overflow-hidden border border-gray-100">
                      {/* Image */}
                      <div
                        className={`relative h-48 md:h-[246px] overflow-hidden ${
                          imageFirst ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <img
                          src={cardImage}
                          alt={item.heading}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div
                        className={`p-6 md:px-8 md:py-5 flex flex-col justify-center h-full ${
                          imageFirst ? "md:order-2" : "md:order-1"
                        }`}
                      >
                        <h3 className="text-[#E61B23] font-bold text-sm md:text-base">
                          {item.year}
                        </h3>
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mt-1">
                          {item.heading}
                        </h4>
                        <p className="text-gray-600 mt-2 text-xs md:text-[13px] leading-relaxed">
                          {item.description}
                        </p>
                        <Link href={item.link || "/gallery/foundation"} className="mt-4 bg-[#E61B23] text-white px-4 py-1.5 rounded-[4px] w-fit hover:bg-red-700 transition-colors text-xs font-semibold flex items-center gap-1.5">
                          <span>Explore gallery</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <Contact />
    </main>
  );
}
