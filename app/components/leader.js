"use client";
import Image from "next/image";
import { FaLightbulb, FaHandshake, FaBuilding } from "react-icons/fa";

export default function Leader() {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 lg:px-20">
      <div className="max-w-[1384px] mx-auto w-full relative z-10">
        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 grid lg:grid-cols-3 gap-8 items-center">
          {/* LEFT FEATURES */}
          <div className="space-y-6 border-r pr-6">
            <Feature
              icon={<FaLightbulb className="w-8 h-8" />}
              title="Innovative Solutions"
              desc="Engineering smarter, sustainable, and future-ready solutions tailored to every client's unique requirements."
            />
            <Feature
              icon={<FaHandshake className="w-8 h-8" />}
              title="Client-Centric Approach"
              desc="Building enduring relationships through reliability, transparency, and exceptional service."
            />
            <Feature
              icon={<FaBuilding className="w-8 h-8" />}
              title="Design to Delivery"
              desc="Managing every phase—from concept and planning to execution and completion—with precision and accountability."
            />
          </div>

          {/* CENTER TEXT */}
          <div className="px-4">
            <h3 className="text-red-600 font-bold text-2xl mb-1">Pooja Jha</h3>
            <p className="text-gray-805 text-2xl font-bold mb-3">
              Director – Administration
            </p>

            <p className="text-red-500 text-6xl">“</p>

            <p className="text-gray-600 text-sm font-bold leading-relaxed">
              True excellence comes from understanding our clients, embracing
              innovation, and delivering solutions that create lasting value.
            </p>

            <p className="text-gray-500 text-sm font-bold mt-3">
              At Bhagat Engineering Works, every project is approached with
              originality, precision, and a commitment to sustainable engineering.
            </p>
          </div>

          {/* RIGHT IMAGE + OVERLAY */}
          <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-md">
            {/* MAIN IMAGE */}
            <Image src="/gl1.png" alt="Leader" fill className="object-cover" />

            {/* "02" Icon in Red */}
            <div className="absolute top-4 right-4 z-20 bg-gradient-to-br from-[#E61B23] to-[#C5000D] text-white font-extrabold text-xl w-14 h-14 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(230,27,35,0.3)] border-2 border-white">
              02
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-6 bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-red-600 text-3xl">🏢</div>
            <div>
              <h4 className="font-semibold">
                Guiding with Vision. Delivering with Excellence.
              </h4>
              <p className="text-gray-500 text-sm">
                Together, we continue to build a stronger future through
                innovation, integrity, and engineering excellence.
              </p>
            </div>
          </div>

          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Meet Our Leadership Team →
          </button>
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
