"use client";

import Image from "next/image";

const colLeft = ["/a2.png", "/a3.png", "/a4.png", "/a5.png"];
const colRight = ["/b1.png", "/b4.png", "/e2.png", "/e3.png"];

export default function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden text-white bg-[linear-gradient(90deg,rgba(83,5,3,0.88)_0%,rgba(166,14,8,0.45)_55%,rgba(82,8,5,0.19)_100%)]">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6 px-6 h-full">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <p className="text-green-400 tracking-widest text-sm mb-5">
            ESTABLISHED 1976
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Engineering the future with legacy, precision, and innovation.
          </h1>

          <div className="mt-12 flex gap-4">
            <button className="bg-red-700 px-6 py-3 rounded-md hover:bg-red-800 transition">
              Explore Services
            </button>
            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
              Know More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="flex gap-5 pr-8 h-[600px] overflow-hidden relative">
          {/* LEFT COLUMN (UP - TOUCH NAVBAR) */}
          <div className="flex-1 flex flex-col gap-5 animate-upFast">
            {[...colLeft, ...colLeft].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt=""
                width={400}
                height={300}
                className="w-full h-[280px] object-cover rounded-xl"
              />
            ))}
          </div>

          {/* RIGHT COLUMN (DOWN - GAP FROM NAVBAR) */}
          <div className="flex-1 flex flex-col gap-5 animate-downSlow mt-12">
            {[...colRight, ...colRight].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt=""
                width={400}
                height={300}
                className="w-full h-[280px] object-cover rounded-xl"
              />
            ))}
          </div>

          {/* TOP FADE */}
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div className="bg-red-800/80 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">
          <div>
            <h2 className="text-3xl font-bold">49+</h2>
            <p>Years of trust</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">100+</h2>
            <p>Crore approx. turnover</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">1,662</h2>
            <p>Hours of work</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">33</h2>
            <p>kV O&M capability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
