"use client";

import { useState } from "react";
import Image from "next/image";

const data = [
  {
    title: "Power Infrastructure",
    desc: "Substation erection, transformer support and high-voltage electrical networks for industrial and commercial sites.",
    img: "/pk.png",
  },
  {
    title: "Industrial Installations",
    desc: "Cable laying, control panels, fabrication and commissioning for process systems and operational facilities.",
    img: "/pa1.png",
  },
  {
    title: "Energy Efficient Lighting",
    desc: "LED, facade and acrylic lighting systems designed for safety, visibility, low maintenance and reduced energy use.",
    img: "/pk2.png",
  },
  {
    title: "Transmission Lines & Cabling",
    desc: "High-voltage overhead transmission lines and underground cabling networks designed and installed for high-reliability energy delivery.",
    img: "/d2.png",
  },
];

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#f4f6f8] py-14 px-6 md:px-12 mt-4 overflow-hidden">
      {/* Inject CSS custom variables for dynamic, SSR-safe scroll translations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .project-slider-track {
          transform: translateX(calc(-1 * var(--active-index) * (100% + 24px)));
        }
        @media (min-width: 768px) {
          .project-slider-track {
            transform: translateX(calc(-1 * min(var(--active-index), 1) * (33.333% + 8px)));
          }
        }
      `,
        }}
      />

      {/* TOP HEADER */}
      <div className="flex items-center justify-between mb-10 max-w-[1308px] mx-auto w-full">
        <div>
          <p className="text-green-600 tracking-widest text-sm font-semibold mb-2">
            PROJECTS
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Built for performance, delivered with discipline.
          </h1>
        </div>

        <button className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shrink-0">
          Start a Requirement
        </button>
      </div>

      {/* SLIDER VIEWPORT */}
      <div className="max-w-[1308px] mx-auto w-full overflow-hidden">
        {/* Track */}
        <div
          className="project-slider-track flex transition-transform duration-500 ease-out gap-6"
          style={{
            "--active-index": activeIndex,
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0 bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[220px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS CONTROLLER */}
      <div className="flex justify-center mt-8 gap-2.5">
        {data.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
