"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Contact from "../../components/contact";
import Link from "next/link";
import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const completedProjects = [
  {
    id: "COMP-2023-01",
    title: "132kV Substation Electrification - Railways Zone",
    location: "Katihar, Bihar",
    date: "Dec 2023",
    desc: "Successful erection, commissioning, and validation of 132kV railway traction substations to power expanded lines."
  },
  {
    id: "COMP-2023-02",
    title: "HT Cable Laying and Jointing - IOCL Refinery",
    location: "Barauni, Bihar",
    date: "Oct 2023",
    desc: "Laid over 15km of high-tension cabling with state-of-the-art termination and safety matching systems in hazardous zones."
  },
  {
    id: "COMP-2023-03",
    title: "Commercial Smart Grid Panel Installation - Patna Plaza",
    location: "Patna, Bihar",
    date: "Aug 2023",
    desc: "Complete power distribution panels, servo stabilizers, and backup grid coordination for commercial complex operations."
  },
  {
    id: "COMP-2023-04",
    title: "Sub-station Transformer Filtration and Overhauling",
    location: "Gaya, Bihar",
    date: "Jun 2023",
    desc: "Preventive maintenance, oil filtration, and structural repairs for three 5MVA distribution power transformers."
  }
];

export default function CompletedProjects() {
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
            <span className="text-white">Completed Projects</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Completed <span className="text-[#E61B23]">Projects</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-base leading-relaxed">
            A track record of engineering projects delivered on-time, with strict quality controls and zero accidents. Explore our completed installations.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {completedProjects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 font-bold uppercase">#{proj.id}</span>
                  <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FaCheckCircle />
                    <span>Completed</span>
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
