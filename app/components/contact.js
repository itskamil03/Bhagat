"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative w-full min-h-[500px] flex items-start">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/sa2.jpg" // apna image yaha daalo
        alt="construction"
        fill
        priority
        className="object-cover"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d2a]/90 via-[#0b1d2a]/70 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl pt-22 pb-16 pl-24">
        <p className="text-green-400 tracking-widest text-sm mb-3">
          CONTACT US
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
          Do you need electrical contracting or maintenance?
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl">
          Get the best electrical contractor services in Bihar, India. Share
          your requirement and the team will respond with the right solution.
        </p>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <button className="px-5 py-3 border border-white/30 text-white rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition">
            +91 6299923388
          </button>

          <button className="px-5 py-3 border border-white/30 text-white rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition">
            1800 8890 705
          </button>

          <button className="px-5 py-3 border border-white/30 text-white rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition">
            info@bhagatengg.in
          </button>
        </div>
      </div>
    </section>
  );
}
