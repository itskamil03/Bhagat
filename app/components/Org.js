"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getBrandLogos } from "../../lib/api/brandLogo";

const Org = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const apiData = await getBrandLogos();
        if (apiData && Array.isArray(apiData)) {
          setLogos(apiData);
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
              <Image src={logo.image} alt="logo" fill className="object-contain" />
            </div>
          ))}

          {/* Duplicate for infinite scroll */}
          {logos.map((logo, i) => {
            return (
              <div key={`dup-${i}`} className="w-[120px] h-[70px] md:w-[210px] md:h-[120px] relative">
                <Image src={logo.image} alt="logo" fill className="object-contain" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Org;
