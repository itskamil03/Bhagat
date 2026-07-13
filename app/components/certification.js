"use client";
import Image from "next/image";

export default function Certification() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 lg:px-20 text-center">
      {/* HEADING */}
      <p className="text-red-600 text-2xl font-bold tracking-widest">
        05 — <span className="text-2xl text-black">CERTIFICATIONS</span>
      </p>

      <h2 className="text-3xl lg:text-5xl font-bold mt-3">
        Certified. <span className="text-red-600">Trusted.</span> Committed.
      </h2>

      <p className="text-gray-500 mt-4 font-bold max-w-2xl mx-auto text-sm">
        Our internationally recognized certifications reflect our commitment to
        quality management, safety standards, operational excellence, and
        continuous improvement.
      </p>

      {/* CARDS */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {/* ALL IMAGE CARDS */}
        <Card img="/cer1.png" />
        <Card img="/cer2.png" />
        <Card img="/cer3.png" />
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function Card({ img }) {
  return (
    <div className="bg-white border-2 border-red-500 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      <Image
        src={img}
        alt="certificate"
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
