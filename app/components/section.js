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
      <p className="text-red-600 text-3xl font-bold tracking-wide mb-4">
        FOUNDATION
      </p>

      {/* MAIN HEADING */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
        We build on honesty and
        <br />
        transparent dealings
      </h1>

      <div ref={sectionRef} className="grid md:grid-cols-4 gap-6 px-6 py-10">
        {data.map((item, i) => (
          <Card 
            key={i} 
            {...item} 
            isActive={activeCardIndex === i}
            onToggle={() => setActiveCardIndex(activeCardIndex === i ? null : i)}
          />
        ))}
      </div>

      <Link
        href="/about"
        className="group flex items-center justify-between bg-red-600 text-white px-8 py-6 rounded-2xl w-[260px] md:w-[320px] mx-auto md:mx-0 md:ml-6 hover:bg-red-700 transition duration-300"
      >
        {/* TEXT */}
        <span className="text-2xl font-semibold">Learn more</span>

        {/* ARROW */}
        <span className="text-2xl transform group-hover:translate-x-2 transition duration-300">
          <FaArrowRightLong />
        </span>
      </Link>
    </section>
  );
}
