"use client";
import Image from "next/image";

export default function Content() {
  return (
    <section className="relative w-full block md:flex md:items-center py-12 md:py-0 min-h-auto md:min-h-[600px]">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
            Ready to power your <span className="hidden md:inline"><br /></span> project
          </h1>

          <p className="text-base md:text-2xl text-gray-700 mb-6 md:mb-10 font-semibold">
            Let's discuss your electrical infrastructure needs and timeline
          </p>

          <div className="flex gap-4">
            <a 
              href="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-md font-bold text-center text-sm md:text-base"
            >
              Inquire
            </a>

            <a 
              href="/contact" 
              className="border border-gray-800 text-gray-800 px-6 md:px-8 py-3.5 md:py-4 rounded-md font-bold hover:bg-gray-100 text-center text-sm md:text-base"
            >
              Schedule
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[260px] md:h-[500px]">
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
