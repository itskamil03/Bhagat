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
import { getProjectsByStatus } from "../../../lib/api/project";

function formatDate(isoStr) {
  if (!isoStr) return "";
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d.getDate()).padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function OngoingProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollTimeout = useRef(null);

  // Extract unique filters from fetched projects dynamically
  const uniqueDivisions = ["All", ...new Set(projects.map((p) => p.division).filter(Boolean))];
  const uniqueLocations = ["All", ...new Set(projects.map((p) => p.location).filter(Boolean))];

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjectsByStatus("Ongoing");
        setProjects((data || []).filter((p) => p.status === "Ongoing"));
      } catch (err) {
        setError(err.message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Filter project lists
  const filteredProjects = projects.filter((proj) => {
    const matchesSearch =
      (proj.title && proj.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (proj._id && proj._id.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (proj.location && proj.location.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDivision =
      divisionFilter === "All" || proj.division === divisionFilter;
    const matchesLocation =
      locationFilter === "All" || (proj.location && proj.location.includes(locationFilter));

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
              {uniqueDivisions.map((division) => (
                <option key={division} value={division}>
                  {division === "All" ? "All Divisions" : division}
                </option>
              ))}
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
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location === "All" ? "All Locations" : location}
                </option>
              ))}
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
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setTimeout(() => setIsPaused(false), 1500)}
                className="flex-1 space-y-6 max-h-[600px] overflow-y-auto pr-3 py-3 scrollbar-thin"
              >
                {loading ? (
                  <div className="bg-white rounded-xl p-12 text-center border border-gray-200 flex justify-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#E61B23]"></div>
                  </div>
                ) : error ? (
                  <div className="bg-white rounded-xl p-12 text-center border border-gray-200 text-red-600 font-semibold">
                    {error}
                  </div>
                ) : filteredProjects.length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                    <p className="text-gray-500">
                      No ongoing projects matching your criteria.
                    </p>
                  </div>
                ) : (
                  filteredProjects.map((project, index) => (
                    <div
                      key={project._id}
                      ref={(el) => (cardRefs.current[index] = el)}
                      onMouseEnter={() => handleMouseEnterCard(index)}
                      onMouseLeave={handleMouseLeaveCard}
                      className={`bg-white rounded-xl p-6 border transition-all duration-500 ease-out shadow-sm cursor-pointer relative overflow-hidden transform ${
                        index === activeIndex
                          ? "border-[#E61B23] shadow-lg ring-1 ring-red-500/10 scale-[1.02] z-10"
                          : "border-gray-200 hover:border-gray-300 hover:shadow scale-100 z-0 opacity-70 hover:opacity-100"
                      }`}
                    >
                      {/* Left color bar for active card */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#E61B23] transition-all duration-500 ease-out origin-top ${
                          index === activeIndex ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                        }`}
                      ></div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div>
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
                            <span>{formatDate(project.startDate)}</span>
                          </p>
                        </div>
                        <div className="flex items-center sm:justify-start md:justify-end">
                          <Link
                            href={`/project/${project._id}`}
                            className="text-[#E61B23] font-bold text-xs hover:text-red-700 inline-flex items-center gap-1.5 active:translate-x-1 transition mt-2 md:mt-0"
                          >
                            <span>View Details</span>
                            <span>&rarr;</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Live Statistics & Map */}
          <div className="space-y-6">
            {/* Live Statistics Card */}
            <div className="bg-red-50 text-gray-900 rounded-2xl p-6 shadow-sm border border-red-100 relative overflow-hidden">
              <h3 className="text-lg font-bold border-b border-red-200 pb-4 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#E61B23] rounded-full animate-pulse"></span>
                <span className="text-red-950">Live Statistics</span>
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">
                    {projects.length > 0 ? (projects.length < 10 ? '0' + projects.length : projects.length) : '06'}
                  </p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    Live Projects
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">05</p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    States Active
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">04</p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    Divisions
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#E61B23]">100%</p>
                  <p className="text-xs text-red-800/80 mt-1 font-semibold">
                    On-Time Delivery
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
                Key representations showing active execution across the Indian
                subcontinent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <Contact />
    </main>
  );
}
