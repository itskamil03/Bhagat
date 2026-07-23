"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const defaultLogos = [
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
  const [logos, setLogos] = useState(defaultLogos);

  useEffect(() => {
    const API_ENDPOINT = ""; // TODO: Provide the API endpoint here

    async function fetchLogos() {
      if (!API_ENDPOINT) return;
      try {
        const res = await fetch(API_ENDPOINT);
        if (res.ok) {
          const apiData = await res.json();
          if (Array.isArray(apiData)) {
            setLogos(apiData);
          } else if (apiData.logos && Array.isArray(apiData.logos)) {
            setLogos(apiData.logos);
          }
        }
      } catch (error) {
        console.error("Failed to fetch dynamic org logos:", error);
      }
    }
    fetchLogos();
  }, []);

  return (
    <section className="py-18 bg-gray-100 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 px-6">
        Trusted by India's largest organizations
      </h2>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-8 md:gap-16">
          {/* First Set */}
          {logos.map((logo, i) => (
            <div key={i} className="w-[120px] h-[70px] md:w-[210px] md:h-[120px] relative">
              <Image src={logo.img || logo} alt="logo" fill className="object-contain" />
            </div>
          ))}

          {/* Duplicate for infinite scroll */}
          {logos.map((logo, i) => {
            return (
              <div key={`dup-${i}`} className="w-[120px] h-[70px] md:w-[210px] md:h-[120px] relative">
                <Image src={logo.img || logo} alt="logo" fill className="object-contain" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Org;
