"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWrench,
  FaChevronLeft,
  FaChevronRight
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

const ProjectGallery = ({ images }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const scrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const requestRef = useRef();
  const itemRefs = useRef([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  let displayImages = [...(images || [])];
  if (displayImages.length === 0) {
    displayImages = ["/d1.png", "/d2.png", "/d3.png"];
  }

  // Need at least 5 for continuous horizontal layout
  while (displayImages.length < 5) {
    displayImages = [...displayImages, ...displayImages];
  }
  const total = displayImages.length;

  const updateDOM = () => {
    const scrollProgress = scrollRef.current;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;

      let offset = (i - scrollProgress) % total;
      // wrap offset to -total/2 to +total/2
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const absOffset = Math.abs(offset);

      // Keep all images at the exact same size so height never decreases
      let scale = 1;

      let zIndex = 20 - Math.round(absOffset * 10);

      // Opacity: 1 at 0, 0.75 at 1
      let opacity = 1 - Math.min(absOffset, 1) * 0.25;
      if (absOffset > 2) opacity -= (absOffset - 2) * 0.5;
      opacity = Math.max(0, opacity);

      // translateX: flat horizontal spacing, no overlap. 
      // 110 ensures they sit side by side with gap when scaled.
      let translateX = offset * 110;

      // Hide completely if out of window
      if (absOffset > 2.5) {
        opacity = 0;
        translateX = offset > 0 ? 300 : -300;
      }

      el.style.transform = `translateX(${translateX}%) scale(${scale})`;
      el.style.zIndex = zIndex;
      el.style.opacity = opacity;
      el.style.boxShadow = "none";
    });
  };

  const animate = () => {
    if (!isPaused) {
      targetScrollRef.current += 0.0035; // Continuous autoplay speed
    }
    // Smooth easing interpolation for manual jumps + autoplay
    scrollRef.current += (targetScrollRef.current - scrollRef.current) * 0.08;

    updateDOM();
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isMounted) {
      requestRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isMounted, isPaused]);

  if (!isMounted) return null;

  const handleNext = () => targetScrollRef.current += 1;
  const handlePrev = () => targetScrollRef.current -= 1;

  return (
    <div className="mt-12 w-full max-w-[1300px] mx-auto mb-6 bg-red-50 rounded-3xl px-6 md:px-10 pt-6 md:pt-10 pb-2 md:pb-4 shadow-xl relative overflow-hidden">
      <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-2 text-center relative z-10">
        Project Gallery
      </h3>
      <div
        className="relative w-full h-[220px] sm:h-[280px] md:h-[380px] flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
          {displayImages.map((src, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="absolute w-[85%] sm:w-[65%] md:w-[50%] aspect-video overflow-hidden cursor-pointer rounded-2xl"
              style={{ willChange: "transform, opacity" }}
              onClick={() => {
                let offset = (i - targetScrollRef.current) % total;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;
                targetScrollRef.current += offset;
              }}
              onMouseEnter={() => {
                // Ignore hovers while actively sliding to prevent tug-of-war flicker
                if (Math.abs(targetScrollRef.current - scrollRef.current) > 0.05) return;

                let offset = (i - targetScrollRef.current) % total;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;
                targetScrollRef.current += offset;
              }}
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-30 p-2 sm:p-3 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <FaChevronLeft className="text-base sm:text-xl" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-30 p-2 sm:p-3 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <FaChevronRight className="text-base sm:text-xl" />
        </button>
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
