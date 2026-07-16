"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "../../components/contact";
import Link from "next/link";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWrench,
  FaMap,
  FaCheckCircle,
} from "react-icons/fa";

const initialProjects = [
  {
    id: "BEW-2024-003",
    title: "25KV OHE Electrification - South Central Railway",
    division: "Railway Electrification",
    location: "Secunderabad, TS",
    date: "12 Jan 2024",
    type: "EPC Turnkey",
    team: ["/a2.png", "/a3.png", "/a4.png"],
    status: "Work In Progress",
  },
  {
    id: "BEW-2024-004",
    title: "132/33kV Substation Construction - Tata Power",
    division: "Power Infrastructure",
    location: "Mumbai, MH",
    date: "05 Feb 2024",
    type: "Industrial Electrical",
    team: ["/a3.png", "/a4.png", "/a5.png"],
    status: "Work In Progress",
  },
  {
    id: "BEW-2024-005",
    title: "Transformer Maintenance Contract - Western Railway",
    division: "Services",
    location: "Ahmedabad, GJ",
    date: "10 Mar 2024",
    type: "Maintenance (AMC)",
    team: ["/a4.png", "/a5.png", "/a6.png"],
    status: "Work In Progress",
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
  },
  {
    id: "BEW-2024-007",
    title: "HT Cable Laying and Jointing - NTPC Plant",
    division: "Power Infrastructure",
    location: "Barh, BR",
    date: "22 May 2024",
    type: "Industrial Turnkey",
    team: ["/a3.png", "/a5.png", "/a6.png"],
    status: "Work In Progress",
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
  },
];

export default function OngoingProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Filter project lists
  const filteredProjects = projects.filter((proj) => {
    const matchesSearch =
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDivision =
      divisionFilter === "All" || proj.division === divisionFilter;
    const matchesLocation =
      locationFilter === "All" || proj.location.includes(locationFilter);

    return matchesSearch && matchesDivision && matchesLocation;
  });

  // Auto Scrolling Project List
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % filteredProjects.length;
        // Scroll card into view
        if (cardRefs.current[nextIndex]) {
          cardRefs.current[nextIndex].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, filteredProjects.length]);

  // Hover pauses auto scroll
  const handleMouseEnterCard = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
  };

  const handleMouseLeaveCard = () => {
    setIsPaused(false);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    let closestIndex = activeIndex;
    let minDistance = Infinity;

    filteredProjects.forEach((_, index) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* 1. HERO HEADER */}
      <section className="bg-[#17162b] text-white relative overflow-hidden py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          <nav className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-red-500 transition">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/project" className="hover:text-red-500 transition">
              Projects
            </Link>
            <span>&gt;</span>
            <span className="text-white">Ongoing Projects</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ongoing <span className="text-[#E61B23]">Projects</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-base leading-relaxed">
            Delivering engineering excellence across recent railway, industrial,
            commercial, and power infrastructure structures and projects. ISO
            9001:2015 Certified execution.
          </p>
        </div>

        {/* Background faded overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/d1.png')" }}
        ></div>
      </section>

      {/* 2. SEARCH & FILTERS BAR */}
      <section className="bg-white border-b border-gray-200 py-6 sticky top-[78px] z-40 shadow-sm">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row gap-4 items-center">
          {/* Search box */}
          <div className="relative w-full md:flex-1">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search by project name or location..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveIndex(0);
              }}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#E61B23] focus:bg-white transition"
            />
          </div>

          {/* Division Filter */}
          <div className="w-full md:w-56">
            <select
              value={divisionFilter}
              onChange={(e) => {
                setDivisionFilter(e.target.value);
                setActiveIndex(0);
              }}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#E61B23] transition"
            >
              <option value="All">All Divisions</option>
              <option value="Railway Electrification">
                Railway Electrification
              </option>
              <option value="Power Infrastructure">Power Infrastructure</option>
              <option value="Energy Efficient Lighting">
                Energy Efficient Lighting
              </option>
              <option value="Services">Services (O&M)</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="w-full md:w-48">
            <select
              value={locationFilter}
              onChange={(e) => {
                setLocationFilter(e.target.value);
                setActiveIndex(0);
              }}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#E61B23] transition"
            >
              <option value="All">All Locations</option>
              <option value="TS">Telangana</option>
              <option value="MH">Maharashtra</option>
              <option value="GJ">Gujarat</option>
              <option value="BR">Bihar</option>
              <option value="WB">West Bengal</option>
            </select>
          </div>

          {/* Filter button */}
          <button className="bg-black hover:bg-gray-900 text-white p-3 rounded-lg flex items-center justify-center shrink-0">
            <FaFilter className="text-sm" />
          </button>
        </div>
      </section>

      {/* 3. MAIN LIVE PROJECT BOARD SECTION */}
      <section className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* LEFT: Live Project Board container with side timeline dot indicator */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Live Project Board
              </h2>
              <span className="text-xs text-gray-500 italic ml-2">
                Auto-scrolling active
              </span>
            </div>

            {/* Split row: timeline on left, card stack on right */}
            <div className="flex gap-6 items-stretch min-h-[500px]">
              {/* TIMELINE COLUMN */}
              <div className="relative flex flex-col justify-between items-center py-6 w-10 shrink-0 select-none">
                {/* Vertical Line */}
                <div className="absolute top-6 bottom-6 w-[2px] bg-gray-200 -z-10"></div>

                {/* Dots */}
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center bg-white transition duration-300 focus:outline-none"
                  >
                    {idx === activeIndex
                      ? <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-100 opacity-75"></span>
                          <span className="w-3.5 h-3.5 rounded-full bg-[#E61B23] ring-4 ring-red-100 z-10 transition"></span>
                        </>
                      : <span className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-red-300 transition"></span>}
                  </button>
                ))}
              </div>

              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex-1 space-y-6 max-h-[600px] overflow-y-auto pr-3 scroll-smooth scrollbar-thin"
              >
                {filteredProjects.length === 0
                  ? <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                      <p className="text-gray-500">
                        No ongoing projects matching your criteria.
                      </p>
                    </div>
                  : filteredProjects.map((project, index) => (
                      <div
                        key={project.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        onMouseEnter={() => handleMouseEnterCard(index)}
                        onMouseLeave={handleMouseLeaveCard}
                        className={`bg-white rounded-xl p-6 border transition duration-300 shadow-sm cursor-pointer relative overflow-hidden ${
                          index === activeIndex
                            ? "border-[#E61B23] shadow-md ring-1 ring-red-500/10"
                            : "border-gray-200 hover:border-gray-300 hover:shadow"
                        }`}
                      >
                        {/* Left color bar for active card */}
                        {index === activeIndex && (
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E61B23]"></div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <span className="text-gray-400 text-xs font-semibold">
                              Project #{project.id}
                            </span>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1 leading-snug">
                              {project.title}
                            </h3>
                          </div>

                          <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full shrink-0 h-fit self-start sm:self-center">
                            {project.status}
                          </span>
                        </div>

                        {/* Detail Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 my-2 border-y border-gray-100">
                          <div>
                            <p className="text-xs text-gray-400 font-semibold uppercase">
                              Division
                            </p>
                            <p className="text-xs md:text-sm font-bold text-gray-800 mt-1">
                              {project.division}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 font-semibold uppercase">
                              Location
                            </p>
                            <p className="text-xs md:text-sm font-bold text-gray-800 mt-1 flex items-center gap-1">
                              <FaMapMarkerAlt className="text-[#E61B23] text-xs" />
                              <span>{project.location}</span>
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 font-semibold uppercase">
                              Date Start
                            </p>
                            <p className="text-xs md:text-sm font-bold text-gray-800 mt-1 flex items-center gap-1">
                              <FaCalendarAlt className="text-gray-400 text-xs" />
                              <span>{project.date}</span>
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400 font-semibold uppercase">
                              Type
                            </p>
                            <p className="text-xs md:text-sm font-bold text-gray-800 mt-1 flex items-center gap-1">
                              <FaWrench className="text-gray-400 text-xs" />
                              <span>{project.type}</span>
                            </p>
                          </div>
                        </div>

                        {/* Team & Button row */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 font-semibold">
                              On-site Team:
                            </span>
                            <div className="flex -space-x-2">
                              {project.team.map((img, i) => (
                                <div
                                  key={i}
                                  className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                                >
                                  <img
                                    src={img}
                                    alt="Team"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <Link
                            href={`/project/detail?id=${project.id}`}
                            className="text-[#E61B23] font-bold text-xs hover:text-red-700 inline-flex items-center gap-1.5 active:translate-x-1 transition"
                          >
                            <span>View Details</span>
                            <span>&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Live Statistics & Map */}
          <div className="space-y-6">
            {/* Live Statistics Card */}
            <div className="bg-[#17162b] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <h3 className="text-lg font-bold border-b border-white/10 pb-4 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>Live Statistics</span>
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-extrabold text-white">06</p>
                  <p className="text-xs text-gray-400 mt-1 font-semibold">
                    Live Projects
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">05</p>
                  <p className="text-xs text-gray-400 mt-1 font-semibold">
                    States Active
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">04</p>
                  <p className="text-xs text-gray-400 mt-1 font-semibold">
                    Divisions
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">100%</p>
                  <p className="text-xs text-gray-400 mt-1 font-semibold">
                    On-Time Delivery
                  </p>
                </div>
              </div>

              {/* Decorative radial overlay */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl pointer-events-none"></div>
            </div>

            {/* Execution Footprint Map Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2 text-base">
                <FaMap className="text-[#E61B23]" />
                <span>Execution Footprint</span>
              </h3>
              <div className="bg-gray-100 rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden border border-gray-200 relative group cursor-pointer">
                <img
                  src="/india_execution_map.jpg"
                  alt="Execution Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="bg-white text-gray-900 text-xs font-bold px-3.5 py-2 rounded-lg shadow-lg flex items-center gap-1.5">
                    <span>Open Interactive Map</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center leading-relaxed">
                Key representations showing active execution across the Indian
                subcontinent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILS POPUP MODAL */}
      <AnimatePresence>
        {selectedProjectDetails && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl w-full max-w-xl p-6 md:p-8 shadow-2xl relative border border-gray-100"
            >
              <button
                onClick={() => setSelectedProjectDetails(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-50 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <span className="text-[#E61B23] text-xs font-bold uppercase tracking-wider">
                Project Details
              </span>

              <h3 className="text-2xl font-extrabold text-gray-900 mt-2 pr-6 leading-tight">
                {selectedProjectDetails.title}
              </h3>

              <div className="bg-gray-50 rounded-xl p-4 my-6 grid grid-cols-2 gap-4 border border-gray-100 text-sm">
                <div>
                  <span className="text-gray-400 font-semibold text-xs block uppercase">
                    Project ID
                  </span>
                  <span className="font-bold text-gray-800 mt-0.5 block">
                    #{selectedProjectDetails.id}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-semibold text-xs block uppercase">
                    Status
                  </span>
                  <span className="text-green-600 font-bold mt-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>{selectedProjectDetails.status}</span>
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-semibold text-xs block uppercase">
                    Division
                  </span>
                  <span className="font-bold text-gray-800 mt-0.5 block">
                    {selectedProjectDetails.division}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 font-semibold text-xs block uppercase">
                    Type
                  </span>
                  <span className="font-bold text-gray-800 mt-0.5 block">
                    {selectedProjectDetails.type}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs text-gray-400 font-bold uppercase">
                    Description
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    This project focuses on delivering highest-quality
                    electrical infrastructure. Tasks include comprehensive
                    engineering design, component sourcing, layout construction,
                    quality tests, commissioning, and continuous monitoring to
                    satisfy security and efficiency standards.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs text-gray-400 font-bold uppercase mb-2">
                    Scope of Operations
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <li className="flex items-center gap-2 font-medium">
                      <FaCheckCircle className="text-green-500" />
                      <span>Erection & Cable laying</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <FaCheckCircle className="text-green-500" />
                      <span>Safety and inspections</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <FaCheckCircle className="text-green-500" />
                      <span>Transformer setup</span>
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                      <FaCheckCircle className="text-green-500" />
                      <span>Grid line matching</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProjectDetails(null)}
                  className="bg-[#E61B23] hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. CONTACT CTA */}
      <Contact />
    </main>
  );
}
