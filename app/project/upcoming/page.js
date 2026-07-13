"use client";

import React from "react";
import Contact from "../../components/contact";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt, FaHammer } from "react-icons/fa";

const upcomingProjects = [
  {
    id: "UP-2024-01",
    title: "132/33kV Smart Substation Erection - Bihar Power Corp",
    location: "Muzzafarpur, Bihar",
    date: "Starts Q3 2024",
    desc: "Pre-engineering site preparation, transformer mapping, and grid matching for a new smart automated substation."
  },
  {
    id: "UP-2024-02",
    title: "Railway Track Electrification - North East Frontier Zone",
    location: "Katihar - Jogbani Link",
    date: "Starts Q4 2024",
    desc: "Electrification, mast erection, and OHE cabling for a crucial border-link transport line expansion project."
  },
  {
    id: "UP-2024-03",
    title: "Solar Grid Interconnection and Cabling",
    location: "Bhagalpur, Bihar",
    date: "Starts Q1 2025",
    desc: "Integrating decentralized solar power arrays to local distribution grids, involving specialized cable laying and synchronization panels."
  }
];

export default function UpcomingProjects() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-[#17162b] text-white relative overflow-hidden py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          <nav className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-red-500 transition">Home</Link>
            <span>&gt;</span>
            <Link href="/project" className="hover:text-red-500 transition">Projects</Link>
            <span>&gt;</span>
            <span className="text-white">Upcoming Projects</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Upcoming <span className="text-[#E61B23]">Projects</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-base leading-relaxed">
            Leading engineering solutions planned for future delivery. Explore the key upcoming installations contracted to Bhagat Engineering.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 font-bold uppercase">#{proj.id}</span>
                  <span className="bg-yellow-50 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FaHammer className="text-yellow-600" />
                    <span>Planned / Upcoming</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3">{proj.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div className="flex items-center gap-6 border-t border-gray-100 pt-4 text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-[#E61B23]" />
                  <span>{proj.location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>{proj.date}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
