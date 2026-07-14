"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-[500px] flex items-start">
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
      <div className="relative z-10 max-w-7xl pt-22 pb-16 px-6 md:pl-24 md:px-0 w-full">
        <p className="text-green-400 tracking-widest text-sm mb-3 text-center md:text-left">
          CONTACT US
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          Do you need electrical contracting or maintenance?
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Get the best electrical contractor services in Bihar, India. Share
          your requirement and the team will respond with the right solution.
        </p>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a 
            href="tel:+916299923388"
            className="px-5 py-3 border border-white/30 text-white rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition text-sm font-semibold"
          >
            +91 6299923388
          </a>

          <a 
            href="tel:18008890705"
            className="px-5 py-3 border border-white/30 text-white rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition text-sm font-semibold"
          >
            1800 8890 705
          </a>

          <a 
            href="mailto:info@bhagatengg.in"
            className="px-5 py-3 border border-white/30 text-white rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 transition text-sm font-semibold"
          >
            info@bhagatengg.in
          </a>
        </div>
      </div>
    </section>
  );
}
