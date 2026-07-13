"use client";
import Image from "next/image";

export default function Content() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/image 36.png" // background image
        alt="bg"
        fill
        className="object-cover"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Ready to power your <br /> project
          </h1>

          <p className="text-2xl text-gray-700 mb-10 font-semibold ">
            Let's discuss your electrical infrastructure needs and timeline
          </p>

          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold">
              Inquire
            </button>

            <button className="border border-gray-800 text-gray-800 px-8 py-4 rounded-md font-bold hover:bg-gray-100">
              Schedule
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/s1.png" // right side image
            alt="engineer"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
