"use client";
import Image from "next/image";
import { FaLightbulb, FaUsers, FaStar } from "react-icons/fa";

export default function Director() {
  return (
    <section className="relative w-full bg-gray-50 py-16 px-6 lg:px-20 overflow-hidden">
      <Image
        src="/image 18.png"
        alt="Background"
        width={650}
        height={720}
        className="absolute top-0 right-0 opacity-45 z-0"
      />
      
      <div className="max-w-[1384px] mx-auto w-full relative z-10">
        {/* TOP HEADING */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-red-600 font-bold text-sm sm:text-base uppercase tracking-widest mb-3">
            DIRECTOR'S MESSAGE
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">
            Leading the Next Generation of{" "}
            <span className="text-red-600">Engineering Excellence</span>
          </h2>

          <p className="text-gray-500 mt-4 text-sm lg:text-base">
            Driven by innovation, strategic leadership, and an unwavering
            commitment to quality, our leadership continues to shape a stronger,
            smarter, and more sustainable future for engineering.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 lg:p-8 grid lg:grid-cols-3 gap-8 items-center">
          {/* LEFT IMAGE + OVERLAY */}
          <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-md">
            {/* MAIN IMAGE */}
            <Image
              src="/m2.png"
              alt="Director Anand Kumar"
              fill
              className="object-cover"
            />

            {/* "01" Icon in Red */}
            <div className="absolute top-4 left-4 z-20 bg-gradient-to-br from-[#E61B23] to-[#C5000D] text-white font-extrabold text-xl w-14 h-14 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(230,27,35,0.3)] border-2 border-white">
              01
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="px-4">
            <h3 className="text-red-600 font-bold text-2xl mb-1">Anand Kumar</h3>
            <p className="text-gray-805 text-2xl font-bold mb-3">Director</p>

            <p className="text-red-500 text-6xl">“</p>

            <p className="text-gray-600 text-sm font-bold leading-relaxed">
              Our vision has always been to transform engineering challenges into
              opportunities for innovation. Every project reflects our commitment
              to precision, professionalism, and long-term value creation.
            </p>

            <p className="text-gray-500 text-sm font-bold mt-3">
              For decades, Bhagat Engineering Works has delivered complex
              electrical, mechanical, and infrastructure projects with confidence
              and technical excellence.
            </p>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6 border-l pl-6">
            <Feature
              icon={<FaLightbulb className="w-8 h-8" />}
              title="Visionary Leadership"
              desc="Building a future-ready engineering organization through innovation and strategic thinking."
            />

            <Feature
              icon={<FaUsers className="w-8 h-8" />}
              title="Execution Excellence"
              desc="Delivering every project with precision, technical expertise, and uncompromising quality."
            />

            <Feature
              icon={<FaStar className="w-8 h-8" />}
              title="Strong Partnerships"
              desc="Building long-term relationships founded on trust, transparency, and shared success."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE COMPONENT */
function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#FFF5F6] to-[#FFF0F1] border border-[#FFE3E5] text-[#E61B23] rounded-full shrink-0 shadow-[0_4px_12px_rgba(230,27,35,0.06)] transition-all duration-300 hover:scale-105">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
