"use client";
import React from "react";
import Image from "next/image";

export default function ServicePortfolio({ 
  title = "Showcasing Excellence", 
  data = [], 
  loading = false, 
  error = null 
}) {
  if (loading) {
    return (
      <section className="w-full py-20 px-6 lg:px-20 bg-[#111111] text-white border-y border-gray-900 flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E61B23]"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-20 px-6 lg:px-20 bg-[#111111] text-white border-y border-gray-900 flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 font-semibold">{error}</div>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="w-full py-20 px-6 lg:px-20 bg-[#111111] text-white border-y border-gray-900 flex justify-center items-center min-h-[400px]">
        <div className="text-gray-400 font-semibold">No portfolio items available.</div>
      </section>
    );
  }

  const bigItem = data[0];
  const stacked1 = data[1];
  const stacked2 = data[2];

  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-[#111111] text-white border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {title}
            </h2>
          </div>
          <p className="text-gray-400 text-xs md:text-sm max-w-sm mt-4 md:mt-0 text-left md:text-right leading-relaxed">
            A glimpse into our high-precision electrical engineering works and infrastructure layouts.
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT BIG IMAGE */}
          {bigItem && bigItem.image && (
            <div className="lg:col-span-7 h-[360px] sm:h-[430px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
              <Image
                src={bigItem.image}
                alt={bigItem.title || "Portfolio"}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition duration-500 opacity-0 group-hover:opacity-100">
                <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-semibold rounded-full uppercase tracking-wider">
                  {bigItem.subTitle}
                </span>
                <p className="text-white font-bold text-lg mt-2 leading-snug">
                  {bigItem.title}
                </p>
              </div>
            </div>
          )}

          {/* RIGHT STACKED IMAGES */}
          {(stacked1 || stacked2) && (
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 h-auto lg:h-[430px]">
              {stacked1 && stacked1.image && (
                <div className="h-[200px] lg:h-[203px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
                  <Image
                    src={stacked1.image}
                    alt={stacked1.title || "Portfolio"}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-5">
                    <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                      {stacked1.subTitle}
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      {stacked1.title}
                    </p>
                  </div>
                </div>
              )}

              {stacked2 && stacked2.image && (
                <div className="h-[200px] lg:h-[203px] rounded-3xl overflow-hidden relative group bg-gray-900 border border-gray-800">
                  <Image
                    src={stacked2.image}
                    alt={stacked2.title || "Portfolio"}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-5">
                    <p className="text-xs text-red-400 font-semibold uppercase tracking-wider">
                      {stacked2.subTitle}
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      {stacked2.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
