"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/a2.png", "/a3.png", "/a4.png", "/a5.png", "/a6.png"];

export default function Service() {
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO MAIN IMAGE CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-16 px-6">
      {/* HEADING */}
      <h2 className="text-5xl font-bold text-center mb-12">
        Integrated Services
      </h2>

      {/* 3 COLUMN GRID */}
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1fr_2fr_1fr] gap-8 items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          <div className="bg-black text-white p-12 rounded-xl mb-3">
            Erection and Maintenance of Power Substation
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            Transformer Related Services
          </div>
          <div className="bg-white p-6 rounded-xl shadow">Cable Laying</div>
        </div>

        {/* CENTER COLUMN */}
        <div className="relative">
          {/* MAIN IMAGE */}
          <Image
            src={images[activeIndex]}
            width={800}
            height={500}
            className="w-full h-[500px] object-cover rounded-xl"
            alt=""
          />

          {/* THUMBNAILS SLIDER */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[500px] overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-700"
              style={{
                transform: `translateX(-${activeIndex * 130}px)`,
              }}
            >
              {images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={160}
                  height={90}
                  className={`rounded-lg border-2 ${
                    i === activeIndex
                      ? "border-red-500"
                      : "border-white/40 opacity-70"
                  }`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <p className="text-red-500 font-semibold mb-3 tracking-widest">
            ELECTRICAL
          </p>

          <h3 className="text-4xl font-bold mb-4">
            Erection and Maintenance of Power Substation
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Operating and maintaining high voltage systems requires experienced
            teams with specialist skills. We support private HV networks,
            transformers and substations up to 33kV.
          </p>

          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Discuss a Project
          </button>
        </div>
      </div>
    </section>
  );
}
