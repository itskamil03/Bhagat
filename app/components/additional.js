"use client";
import Image from "next/image";

export default function Additional() {
  return (
    <section className="relative w-full h-[430px] py-16 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/sa2.jpg" // 👈 tumhara background image
        alt="background"
        fill
        className="object-cover"
        priority
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
        <div className="max-w-xl text-white">
          {/* SMALL TITLE */}
          <p className="text-green-400 text-sm tracking-widest mb-1">
            CONTACT US
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
            Do you need electrical contracting or maintenance?
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-300 text-sm">
            Get the best electrical contractor services in Bihar, India. Share
            your requirement and the team will respond with the right solution.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-white/10 border border-white/20 px-4 py-2 rounded-md text-sm hover:bg-white/20">
              +91 6299923388
            </button>

            <button className="bg-white/10 border border-white/20 px-4 py-2 rounded-md text-sm hover:bg-white/20">
              1800 8890 705
            </button>

            <button className="bg-white/10 border border-white/20 px-4 py-2 rounded-md text-sm hover:bg-white/20">
              info@bhagatengg.in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
