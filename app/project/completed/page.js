"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "../../components/contact";
import Link from "next/link";
import ExecutionMap from "../../components/ExecutionMap";
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
];

export default function CompletedProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollTimeout = useRef(null);

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

  // Continuous Smooth Auto Scrolling
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;

    let animationFrameId;
    const container = containerRef.current;
    if (!container) return;

    let currentScroll = container.scrollTop;

    const scrollStep = () => {
      if (container) {
        currentScroll += 0.5; // smooth slow scroll speed
        container.scrollTop = currentScroll;

        // Sync accumulator if user scrolled manually
        if (Math.abs(currentScroll - container.scrollTop) > 2) {
          currentScroll = container.scrollTop;
        }

        // Loop seamlessly to top if we hit bottom
        if (container.scrollTop >= container.scrollHeight - container.clientHeight - 1) {
          currentScroll = 0;
          container.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
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
        block: "center",
      });
    }
  };

  const handleScroll = () => {
    if (scrollTimeout.current) return;

    scrollTimeout.current = setTimeout(() => {
      const container = containerRef.current;
      if (!container) {
        scrollTimeout.current = null;
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll > 0) {
        setScrollProgress(container.scrollTop / maxScroll);
      } else {
        setScrollProgress(0);
      }

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

      scrollTimeout.current = null;
    }, 50);
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
            <span className="text-white">Completed Projects</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Completed <span className="text-[#E61B23]">Projects</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-base leading-relaxed">
            A track record of engineering projects delivered on-time, with
            strict quality controls and zero accidents. Explore our completed
            installations.
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
              <option value="BR">Bihar</option>
              <option value="TS">Telangana</option>
              <option value="MH">Maharashtra</option>
              <option value="GJ">Gujarat</option>
              <option value="WB">West Bengal</option>
            </select>
          </div>

          {/* Filter button */}
          <button className="bg-black hover:bg-gray-900 text-white p-3 rounded-lg flex items-center justify-center shrink-0">
            <FaFilter className="text-sm" />
          </button>
        </div>
      </section>

      {/* 3. MAIN COMPLETED PROJECT BOARD SECTION */}
      <section className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* LEFT: Project Board container with side timeline dot indicator */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <h2 className="text-xl font-bold text-gray-900">
                Completed Project Board
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
                <div className="absolute top-[2.5rem] bottom-[2.5rem] w-[2px] bg-gray-200 z-0"></div>

                {/* Moving Active Dot */}
                {filteredProjects.length > 0 && (
                  <div className="absolute top-[2.5rem] bottom-[2.5rem] left-1/2 -translate-x-1/2 w-8 pointer-events-none z-20">
                    <div
                      className="absolute left-0 w-8 h-8 -mt-4 flex items-center justify-center transition-all duration-75 ease-linear"
                      style={{ top: `${filteredProjects.length > 1 ? scrollProgress * 100 : 0}%` }}
                    >
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-100 opacity-75"></span>
                      <span className="w-3.5 h-3.5 rounded-full bg-[#E61B23] ring-4 ring-red-100 shadow-sm relative z-10"></span>
                    </div>
                  </div>
                )}

                {/* Static Dots */}
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className="relative w-8 h-8 rounded-full flex items-center justify-center bg-white transition duration-300 focus:outline-none z-10"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-red-300 transition"></span>
                  </button>
                ))}
              </div>

              <div
                ref={containerRef}
                onScroll={handleScroll}
                className="flex-1 space-y-6 max-h-[600px] overflow-y-auto pr-3 scrollbar-thin"
              >
                {filteredProjects.length === 0
                  ? <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                    <p className="text-gray-500">
                      No completed projects matching your criteria.
                    </p>
                  </div>
                  : filteredProjects.map((project, index) => (
                    <div
                      key={project.id}
                      ref={(el) => (cardRefs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnterCard(index)}
                      onMouseLeave={handleMouseLeaveCard}
                      className={`bg-white rounded-xl p-6 border transition-all duration-500 ease-out shadow-sm cursor-pointer relative overflow-hidden transform ${index === activeIndex
                        ? "border-[#E61B23] shadow-lg ring-1 ring-red-500/10 scale-[1.02] z-10"
                        : "border-gray-200 hover:border-gray-300 hover:shadow scale-100 z-0 opacity-70 hover:opacity-100"
                        }`}
                    >
                      {/* Left color bar for active card */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#E61B23] transition-all duration-500 ease-out origin-top ${index === activeIndex ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}></div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>

                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1 leading-snug">
                            {project.title}
                          </h3>
                        </div>

                        <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-full shrink-0 h-fit self-start sm:self-center flex items-center gap-1">
                          <FaCheckCircle className="text-xs text-red-600" />
                          <span>{project.status}</span>
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
                            Date Completed
                          </p>
                          <p className="text-xs md:text-sm font-bold text-gray-800 mt-1 flex items-center gap-1">
                            <FaCalendarAlt className="text-gray-400 text-xs" />
                            <span>{project.date}</span>
                          </p>
                        </div>
                        <div className="flex items-center sm:justify-start md:justify-end">
                          <Link
                            href={`/project/detail?id=${project.id}`}
                            className="text-[#E61B23] font-bold text-xs hover:text-red-700 inline-flex items-center gap-1.5 active:translate-x-1 transition mt-2 md:mt-0"
                          >
                            <span>View Details</span>
                            <span>&rarr;</span>
                          </Link>
                        </div>
                      </div>


                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Statistics & Map */}
          <div className="space-y-6">
            {/* Statistics Card */}
            <div className="bg-red-50 text-gray-900 rounded-2xl p-6 shadow-sm border border-red-100 relative overflow-hidden">
              <h3 className="text-lg font-bold border-b border-red-200 pb-4 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-red-950">Completed Statistics</span>
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">04</p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    Completed Projects
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">01</p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    State Covered
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">03</p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    Divisions
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">100%</p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    Quality Check
                  </p>
                </div>
              </div>

              {/* Decorative radial overlay */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#E61B23]/5 rounded-full blur-xl pointer-events-none"></div>
            </div>

            {/* Execution Footprint Map Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2 text-base">
                <FaMap className="text-[#E61B23]" />
                <span>Execution Footprint</span>
              </h3>
              <div className="bg-gray-100 rounded-xl w-full h-[400px] flex items-center justify-center overflow-hidden border border-gray-200 relative group">
                <ExecutionMap />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center leading-relaxed">
                Key representations showing completed execution across the
                Indian subcontinent.
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
                    {selectedProjectDetails.desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs text-gray-400 font-bold uppercase mb-2">
                    Scope of Operations Completed
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
