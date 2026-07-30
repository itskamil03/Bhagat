"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
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
import { getProjectById } from "../../../lib/api/project";

function formatDate(isoStr) {
  if (!isoStr) return "";
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return isoStr;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d.getDate()).padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

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

      el.style.transform = `translate3d(${translateX}%, 0, 0) scale(${scale})`;
      el.style.zIndex = zIndex;
      el.style.opacity = opacity;
      el.style.boxShadow = "none";
    });
  };

  const animate = () => {
    if (!isPaused) {
      targetScrollRef.current += 0.0025; // Slightly slower, ultra-smooth continuous speed
    }
    // Softer interpolation for buttery smooth movement
    scrollRef.current += (targetScrollRef.current - scrollRef.current) * 0.06;

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
    <div className="mt-10 w-full max-w-[1300px] mx-auto mb-8 bg-white rounded-[32px] px-6 md:px-10 pt-8 md:pt-10 pb-6 md:pb-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group">
      
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_rgba(230,27,35,0.08)_0%,_transparent_60%)] pointer-events-none z-0 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_left,_rgba(230,27,35,0.06)_0%,_transparent_70%)] pointer-events-none z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/90 pointer-events-none z-0" />

      {/* Abstract Modern Geometric Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-50 blur-3xl pointer-events-none z-0 opacity-80 group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute top-20 right-[-100px] w-64 h-[500px] bg-red-600/5 rotate-45 blur-2xl pointer-events-none z-0 group-hover:rotate-[50deg] transition-transform duration-1000" />

      {/* Fine Dotted Grid Texture for Structure */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#E61B23 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* --- TYPOGRAPHY AREA --- */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-6 md:mb-8 px-4">
        {/* Subtle Category Pill */}
        <span className="px-4 py-1 rounded-full bg-red-50 text-[#E61B23] text-xs font-bold tracking-widest uppercase mb-3 shadow-sm border border-red-100/50">
          Our Excellence
        </span>

        {/* Heading */}
        <h3 className="text-2xl md:text-[38px] font-black text-gray-900 uppercase tracking-tight text-center leading-tight">
          Project <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E61B23] to-red-600">Gallery</span>
        </h3>
        
        {/* Elegant Minimalist Divider */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-8 h-[3px] bg-gray-200 rounded-full" />
          <div className="w-16 h-[3px] bg-[#E61B23] rounded-full" />
          <div className="w-8 h-[3px] bg-gray-200 rounded-full" />
        </div>
      </div>


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

export default function DetailPage() {
  const params = useParams();
  const id = params?.id;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        setError(err.message || "Failed to load project data");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#E61B23]"></div>
      </div>
    );
  }

  if (error || !project) {
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

  // Format images for the gallery
  const galleryImages = (project.images || []).map(img => img.image);

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
                  {project.description}
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
                  <span>{formatDate(project.startDate)}</span>
                </span>
              </div>
            </div>

            <ProjectGallery images={galleryImages} />

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
