"use client";

import React from "react";
import Contact from "../../components/contact";
import Link from "next/link";
import { FaAward, FaCalendarAlt, FaTrophy } from "react-icons/fa";

const awards = [
  {
    title: "On-Site Safety Excellence Award",
    recipient: "Eastern Railway Substation Team",
    date: "Annual Milan 2024",
    desc: "Awarded to the railway electrification engineering squad for maintaining 100% safety standards and zero accidents across 45km of HT power grid laying."
  },
  {
    title: "Outstanding Site Engineer of the Year",
    recipient: "Mr. Rajeev Ranjan",
    date: "Annual Milan 2023",
    desc: "Recognized for showing supreme leadership in completing the Barauni Refinery distribution panel erection 20 days ahead of contract deadlines."
  },
  {
    title: "Lifetime Dedication Award",
    recipient: "Mr. Satrughan Sinha (Senior Foreman)",
    date: "Vishwakarma Day Milan",
    desc: "Honoring 30 years of continuous service, directing operations on critical substations and guiding two generations of junior foremen."
  }
];

export default function EmployeeAwards() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-[#17162b] text-white py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          <nav className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-red-500 transition">Home</Link>
            <span>&gt;</span>
            <Link href="/about" className="hover:text-red-500 transition">About Us</Link>
            <span>&gt;</span>
            <span className="text-white">Employee Awards</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Employee <span className="text-[#E61B23]">Awards</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-base leading-relaxed">
            Recognizing the exceptional talent, diligence, and safety compliance displayed by our on-site technicians and engineering supervisors.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-red-200 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                  <FaTrophy className="text-[#E61B23] text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 font-bold mb-4">{item.recipient}</p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              <div className="flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500 font-semibold">
                <FaCalendarAlt />
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
