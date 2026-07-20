"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Card from "./card";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Section() {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const sectionRef = useRef(null);

  const data = [
    {
      img: "/im2.jpeg",
      title: "ISO 9001:2015 certified process protect everyone",
      desc: "Precision & innovation: Technical excellence in every installation",
    },
    {
      img: "/im24.jpeg",
      title: "Technical mastry drives every installation",
      desc: "Trust and Integrity: Honest dealings from start to finish",
    },
    {
      img: "/im25.jpeg",
      title: "Honest dealings from start to finish",
      desc: "Trust and Integrity: We stand behind every project with complete transparency and accountability",
    },
    {
      img: "/im26.jpeg",
      title: "Technical excellence in every installation",
      desc: "Precision and Innovation: Our engineers solve complex problems with proven methods and modern techniques",
    },
  ];

  // Click outside to reset active card on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sectionRef.current && !sectionRef.current.contains(e.target)) {
        setActiveCardIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className="w-full bg-[#f5f5f5] px-8 md:px-16 py-6 relative overflow-hidden">
      {/* SMALL TITLE */}
      <p className="text-red-600 text-xl md:text-2xl lg:text-3xl lg:text-left text-center font-bold tracking-wide mb-2 md:mb-4 uppercase">
        FOUNDATION
      </p>

      {/* MAIN HEADING */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left font-bold text-gray-900 leading-tight max-w-4xl mx-auto lg:mx-0">
        We build on honesty and
        <br className="hidden lg:block" />
        <span className="lg:ml-0"> transparent dealings</span>
      </h1>

      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 py-10"
      >
        {data.map((item, i) => (
          <Card
            key={i}
            {...item}
            isActive={activeCardIndex === i}
            onToggle={() =>
              setActiveCardIndex(activeCardIndex === i ? null : i)
            }
          />
        ))}
      </div>

      <Link
        href="/about"
        className="group flex items-center justify-between bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl w-[220px] md:w-[280px] mx-auto lg:mx-0 hover:bg-red-700 transition duration-300 shadow-md mt-6 lg:mt-0"
      >
        {/* TEXT */}
        <span className="text-lg md:text-xl font-semibold">Learn more</span>

        {/* ARROW */}
        <span className="text-lg md:text-xl transform group-hover:translate-x-2 transition duration-300">
          <FaArrowRightLong />
        </span>
      </Link>
    </section>
  );
}
