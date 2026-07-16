// "use client";
import React from "react";
import Image from "next/image";

const logos = [
  "/j1.png",
  "/j2.png",
  "/j3.png",
  "/j4.png",
  "/j5.png",
  "/j3.png",
  "/j4.png",
  "/j5.png",
  "/j1.png",
  "/j2.png",
  "/j3.png",
];

const Org = () => {
  return (
    <section className="py-18 bg-gray-100 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 px-6">
        Trusted by India's largest organizations
      </h2>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {/* First Set */}
          {logos.map((logo, i) => (
            <div key={i} className="w-[210px] h-[120px] relative">
              <Image src={logo} alt="logo" fill className="object-contain" />
            </div>
          ))}

          {/* Duplicate for infinite scroll */}
          {logos.map((logo, i) => {
            return (
              <div key={`dup-${i}`} className="w-[210px] h-[120px] relative">
                <Image src={logo} alt="logo" fill className="object-contain" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Org;
