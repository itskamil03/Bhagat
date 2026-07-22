"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWrench,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight
} from "react-icons/fa";
import Contact from "../../components/contact";

const allProjects = [
  // Ongoing Projects
  {
    id: "BEW-2024-003",
    title: "25KV OHE Electrification - South Central Railway",
    division: "Railway Electrification",
    location: "Secunderabad, TS",
    date: "12 Jan 2024",
    type: "EPC Turnkey",
    team: ["/a2.png", "/a3.png", "/a4.png"],
    status: "Work In Progress",
    desc: "This project focuses on delivering highest-quality electrical infrastructure. Tasks include comprehensive engineering design, component sourcing, layout construction, quality tests, commissioning, and continuous monitoring to satisfy security and efficiency standards.",
  },
  {
    id: "BEW-2024-004",
    title: "132/33kV Substation Construction - Tata Power",
    division: "Power Infrastructure",
    location: "Mumbai, MH",
    date: "05 Feb 2024",
    type: "Industrial Electrical",
    team: ["/a3.png", "/a4.png", "/ic1.jpg"],
    status: "Work In Progress",
    desc: "This project focuses on delivering highest-quality electrical infrastructure. Tasks include comprehensive engineering design, component sourcing, layout construction, quality tests, commissioning, and continuous monitoring to satisfy security and efficiency standards.",
  },
  {
    id: "BEW-2024-005",
    title: "Transformer Maintenance Contract - Western Railway",
    division: "Services",
    location: "Ahmedabad, GJ",
    date: "10 Mar 2024",
    type: "Maintenance (AMC)",
    team: ["/a4.png", "/ic1.jpg", "/a6.png"],
    status: "Work In Progress",
    desc: "This project focuses on delivering highest-quality electrical infrastructure. Tasks include comprehensive engineering design, component sourcing, layout construction, quality tests, commissioning, and continuous monitoring to satisfy security and efficiency standards.",
  },
  {
    id: "BEW-2024-006",
    title: "Facade and Acrylic LED Installation - Unity Mall",
    division: "Energy Efficient Lighting",
    location: "Patna, BR",
    date: "18 Apr 2024",
    type: "Commercial Install",
    team: ["/a2.png", "/a6.png"],
    status: "Work In Progress",
    desc: "This project focuses on delivering highest-quality electrical infrastructure. Tasks include comprehensive engineering design, component sourcing, layout construction, quality tests, commissioning, and continuous monitoring to satisfy security and efficiency standards.",
  },
  {
    id: "BEW-2024-007",
    title: "HT Cable Laying and Jointing - NTPC Plant",
    division: "Power Infrastructure",
    location: "Barh, BR",
    date: "22 May 2024",
    type: "Industrial Turnkey",
    team: ["/a3.png", "/ic1.jpg", "/a6.png"],
    status: "Work In Progress",
    desc: "This project focuses on delivering highest-quality electrical infrastructure. Tasks include comprehensive engineering design, component sourcing, layout construction, quality tests, commissioning, and continuous monitoring to satisfy security and efficiency standards.",
  },
  {
    id: "BEW-2024-008",
    title: "Traction Substation Erection - Metro Rail Corp",
    division: "Railway Electrification",
    location: "Kolkata, WB",
    date: "02 Jun 2024",
    type: "EPC Construction",
    team: ["/a2.png", "/a3.png", "/a4.png"],
    status: "Work In Progress",
    desc: "This project focuses on delivering highest-quality electrical infrastructure. Tasks include comprehensive engineering design, component sourcing, layout construction, quality tests, commissioning, and continuous monitoring to satisfy security and efficiency standards.",
  },
  // Completed Projects
  {
    id: "COMP-2023-01",
    title: "132kV Substation Electrification - Railways Zone",
    division: "Railway Electrification",
    location: "Katihar, BR",
    date: "15 Dec 2023",
    type: "EPC Construction",
    team: ["/a2.png", "/a3.png", "/a4.png"],
    status: "Completed",
    desc: "Successful erection, commissioning, and validation of 132kV railway traction substations to power expanded lines.",
  },
  {
    id: "COMP-2023-02",
    title: "HT Cable Laying and Jointing - IOCL Refinery",
    division: "Power Infrastructure",
    location: "Barauni, BR",
    date: "20 Oct 2023",
    type: "Industrial Turnkey",
    team: ["/a3.png", "/a4.png", "/ic1.jpg"],
    status: "Completed",
    desc: "Laid over 15km of high-tension cabling with state-of-the-art termination and safety matching systems in hazardous zones.",
  },
  {
    id: "COMP-2023-03",
    title: "Commercial Smart Grid Panel Installation - Patna Plaza",
    division: "Services",
    location: "Patna, BR",
    date: "10 Aug 2023",
    type: "Commercial Install",
    team: ["/a4.png", "/ic1.jpg", "/a6.png"],
    status: "Completed",
    desc: "Complete power distribution panels, servo stabilizers, and backup grid coordination for commercial complex operations.",
  },
  {
    id: "COMP-2023-04",
    title: "Sub-station Transformer Filtration and Overhauling",
    division: "Services",
    location: "Gaya, BR",
    date: "05 Jun 2023",
    type: "Maintenance (AMC)",
    team: ["/a2.png", "/a6.png"],
    status: "Completed",
    desc: "Preventive maintenance, oil filtration, and structural repairs for three 5MVA distribution power transformers.",
  },
  // Upcoming Projects
  {
    id: "UP-2024-01",
    title: "132/33kV Smart Substation Erection - Bihar Power Corp",
    division: "Power Infrastructure",
    location: "Muzzafarpur, BR",
    date: "Starts Q3 2024",
    type: "EPC Construction",
    team: ["/a2.png", "/a3.png", "/a4.png"],
    status: "Planned / Upcoming",
    desc: "Pre-engineering site preparation, transformer mapping, and grid matching for a new smart automated substation.",
  },
  {
    id: "UP-2024-02",
    title: "Railway Track Electrification - North East Frontier Zone",
    division: "Railway Electrification",
    location: "Katihar - Jogbani Link, BR",
    date: "Starts Q4 2024",
    type: "EPC Electrification",
    team: ["/a3.png", "/a4.png", "/ic1.jpg"],
    status: "Planned / Upcoming",
    desc: "Electrification, mast erection, and OHE cabling for a crucial border-link transport line expansion project.",
  },
  {
    id: "UP-2024-03",
    title: "Solar Grid Interconnection and Cabling",
    division: "Power Infrastructure",
    location: "Bhagalpur, BR",
    date: "Starts Q1 2025",
    type: "Grid Integration",
    team: ["/a4.png", "/ic1.jpg", "/a6.png"],
    status: "Planned / Upcoming",
    desc: "Integrating decentralized solar power arrays to local distribution grids, involving specialized cable laying and synchronization panels.",
  },
];

const galleryProjects = [
  { src: "/infra1.jpg", title: "Power Substation", location: "Mumbai, MH", category: "Industrial Electrical" },
  { src: "/in2.png", title: "Facade Lighting", location: "Patna, BR", category: "Commercial Install" },
  { src: "/ic1.jpg", title: "Transformer Install", location: "Secunderabad, TS", category: "Railway" },
  { src: "/ing2.jpg", title: "Cable Laying", location: "Barauni, BR", category: "Turnkey" },
  { src: "/infra3.jpg", title: "Control Panel", location: "Ahmedabad, GJ", category: "Maintenance" },
  { src: "/ing6.jpg", title: "OHE Electrification", location: "Kolkata, WB", category: "EPC Turnkey" },
  { src: "/ing7.jpg", title: "Civil Construction", location: "Patna, BR", category: "Infrastructure" },
];

const GalleryCard = ({ item, className }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
    className={`relative group rounded-none overflow-hidden shadow-sm border border-white/70 cursor-pointer transition-shadow duration-300 ${className}`}
  >
    <img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
  </motion.div>
);

const ProjectGallery = ({ galleryData }) => {
  // Use dynamic data from admin panel if provided, otherwise use fallback
  const displayProjects = galleryData && galleryData.length > 0 ? galleryData : galleryProjects;

  return (
    <div className="mt-8 md:mt-11 w-full mb-16 overflow-hidden">

      {/* Left Aligned Heading and Text */}
      <div className="text-left mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[#111928] leading-[1.15] tracking-tight mb-4">
          Project Gallery
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
          Explore a visual showcase of our engineering excellence. From high-voltage power substations and intricate industrial wiring to sprawling infrastructure developments, every project reflects our unwavering commitment to precision, safety, and sustainable execution.
        </p>
      </div>

      <div className="w-full">

        {/* Desktop 4-Column Collage (Hidden on Mobile/Tablet) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="hidden lg:flex flex-row gap-4 w-full h-[700px] xl:h-[800px]"
        >
          {/* Column 1 */}
          <div className="flex flex-col justify-end w-1/4 h-full pb-10">
            <GalleryCard item={galleryProjects[0]} className="h-[75%]" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 w-1/4 h-full pt-8 pb-8">
            <GalleryCard item={galleryProjects[1]} className="h-[55%]" />
            <GalleryCard item={galleryProjects[2]} className="h-[45%]" />
          </div>

          {/* Column 3 & 4 Combined */}
          <div className="flex flex-col gap-4 w-2/4 h-full">
            {/* Top Row */}
            <div className="flex flex-row gap-4 h-[65%]">
              <div className="w-1/2 h-full">
                <GalleryCard item={galleryProjects[3]} className="h-full" />
              </div>
              <div className="w-1/2 flex flex-col gap-4 h-full">
                <GalleryCard item={galleryProjects[4]} className="h-[60%]" />
                <GalleryCard item={galleryProjects[6]} className="h-[40%]" />
              </div>
            </div>
            {/* Bottom Row */}
            <div className="w-full h-[35%]">
              <GalleryCard item={galleryProjects[5]} className="h-full" />
            </div>
          </div>
        </motion.div>

        {/* Tablet 2-Column Masonry (Hidden on Mobile and Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="hidden sm:flex lg:hidden flex-row gap-4 w-full h-[700px]"
        >
          <div className="flex flex-col gap-4 w-1/2 h-full">
            <GalleryCard item={galleryProjects[0]} className="h-[30%]" />
            <GalleryCard item={galleryProjects[1]} className="h-[40%]" />
            <GalleryCard item={galleryProjects[2]} className="h-[30%]" />
          </div>
          <div className="flex flex-col gap-4 w-1/2 h-full">
            <GalleryCard item={galleryProjects[3]} className="h-[40%]" />
            <GalleryCard item={galleryProjects[4]} className="h-[30%]" />
            <GalleryCard item={galleryProjects[5]} className="h-[30%]" />
          </div>
        </motion.div>

        {/* Mobile 1-Column Stack (Hidden on Tablet/Desktop) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex sm:hidden flex-col gap-4 w-full"
        >
          {displayProjects.map((item, index) => (
             <GalleryCard key={index} item={item} className="aspect-square w-full" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

function DetailContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-gray-800">Project Not Found</h2>
        <p className="text-gray-500 mt-2">
          We couldn't find details for the requested project ID: {id}
        </p>
        <Link
          href="/project"
          className="mt-6 bg-[#E61B23] text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition font-bold text-sm"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const isCompleted = project.status === "Completed";
  const isUpcoming =
    project.status.includes("Planned") || project.status.includes("Upcoming");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      <div>
        {/* Header Hero */}
        <section className="bg-[#17162b] text-white py-4 md:py-5">
          <div className="max-w-[1300px] w-[95%] mx-auto px-4 sm:px-6">
            <nav className="text-sm text-gray-400 mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
              <span>&gt;</span>
              <Link href="/project" className="hover:text-red-500 transition">
                Projects
              </Link>
              <span>&gt;</span>
              <span className="text-white">Project Detail</span>
            </nav>
            <span className="text-[#E61B23] text-xs font-bold uppercase tracking-wider">
              Project Specification
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mt-2 text-white">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Content Container */}
        <main className="max-w-[1300px] w-[95%] mx-auto px-0 sm:px-6 py-8 sm:py-12">
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-10 border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-gray-100 pb-6 mb-8">
              {/* Left Side: Project Details */}
              <div className="flex flex-col items-start max-w-3xl">
                <span className="font-bold text-base text-gray-900 uppercase tracking-wider mb-2">
                  Project Details
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Right Side: Current Status */}
              <div className="flex flex-col items-end">
                <span className="text-gray-400 font-bold text-xs uppercase">
                  Current Status
                </span>
                <span
                  className={`font-bold text-sm md:text-base px-3 py-1 rounded-full mt-1.5 flex items-center gap-1.5 ${isCompleted
                    ? "bg-green-50 text-green-700"
                    : isUpcoming
                      ? "bg-yellow-50 text-yellow-800"
                      : "bg-red-50 text-red-700"
                    }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${isCompleted
                      ? "bg-green-500"
                      : isUpcoming
                        ? "bg-yellow-500"
                        : "bg-red-500 animate-pulse"
                      }`}
                  ></span>
                  <span>{project.status}</span>
                </span>
              </div>
            </div>

            {/* Info Grid */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gray-50 border border-gray-200/50 rounded-xl p-6 md:px-10 md:py-8 mb-8 text-sm mx-0 md:mx-12">
              <div>
                <span className="text-gray-400 font-bold text-xs block uppercase">
                  Division
                </span>
                <span className="font-bold text-gray-800 mt-2 block text-base">
                  {project.division}
                </span>
              </div>
              <div>
                <span className="text-gray-400 font-bold text-xs block uppercase">
                  Location
                </span>
                <span className="font-bold text-gray-800 mt-2 flex items-center gap-1.5 text-base">
                  <FaMapMarkerAlt className="text-[#E61B23] text-sm" />
                  <span>{project.location}</span>
                </span>
              </div>
              <div>
                <span className="text-gray-400 font-bold text-xs block uppercase">
                  {isCompleted ? "Closure Date" : "Start Date"}
                </span>
                <span className="font-bold text-gray-800 mt-2 flex items-center gap-1.5 text-base">
                  <FaCalendarAlt className="text-gray-400 text-sm" />
                  <span>{project.date}</span>
                </span>
              </div>
            </div>



            <ProjectGallery images={project.team} />

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => window.history.back()}
                className="bg-[#E61B23] hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition shadow-sm"
              >
                Go Back
              </button>
            </div>
          </div>
        </main>
      </div>

      <Contact />
    </div>
  );
}

export default function DetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#E61B23]"></div>
        </div>
      }
    >
      <DetailContent />
    </Suspense>
  );
}
