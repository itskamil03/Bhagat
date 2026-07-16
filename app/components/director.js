"use client";
import Image from "next/image";
import { ImFlickr } from "react-icons/im";

export default function Director() {
  return (
    <section className=" relative w-full bg-gray-50 py-10 px-5 lg:px-20 overflow-hidden">
      <Image
        src="/image 18.png"
        alt="Background"
        width={650}
        height={720}
        className="absolute top-0 right-0 opacity-45"
      />
      {/* TOP HEADING */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-2xl tracking-widest text-red-600 font-semibold">
          04 — <span className="text-black">DIRECTOR'S</span> MESSAGE
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
      <div className="mt-4 bg-white rounded-2xl shadow-2xl p-6 lg:p-10 flex flex-col lg:flex-row gap-8">
        {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-1/3 flex justify-center">
          <div className="relative w-[380px] h-[300px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/drim2.png"
              alt="Director Anand Kumar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CENTER TEXT */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-red-600">Anand Kumar</h3>
          <p className="text-gray-700 text-xl font-bold mb-3">Director</p>
          <span className="text-red-500 text-2xl">
            <ImFlickr />
          </span>

          <p className="text-gray-500 text-sm font-bold leading-relaxed mt-2">
            Our vision has always been to transform engineering challenges into
            opportunities for innovation. Every project reflects our commitment
            to precision, professionalism, and long-term value creation.
          </p>

          <p className="text-gray-500 text-sm font-bold leading-relaxed mt-3">
            For decades, Bhagati Engineering Works has delivered complex
            electrical, mechanical, and infrastructure projects with confidence
            and technical excellence.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="w-full lg:w-1/3 space-y-5">
          <Feature
            title="Visionary Leadership"
            desc="Building a future-ready engineering organization through innovation and strategic thinking."
          />

          <Feature
            title="Execution Excellence"
            desc="Delivering every project with precision, technical expertise, and uncompromising quality."
          />

          <Feature
            title="Strong Partnerships"
            desc="Building long-term relationships founded on trust, transparency, and shared success."
          />
        </div>
      </div>
    </section>
  );
}

/* FEATURE BOX */
function Feature({ title, desc }) {
  return (
    <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
      {/* ICON */}
      <div className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-600 rounded-full text-xl">
        ★
      </div>

      {/* TEXT */}
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-gray-500 text-xs mt-1">{desc}</p>
      </div>
    </div>
  );
}
