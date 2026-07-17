"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaBolt,
  FaTools,
  FaHome,
  FaNetworkWired,
  FaIndustry,
  FaOilCan,
  FaBuilding,
  FaHardHat,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Nav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // AUTO HOVER OPEN
  const handleMouseEnter = (menuName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenDropdown(menuName);
  };

  // AUTO HOVER CLOSE (with small delay to allow smooth cursor transition)
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // OUTSIDE CLICK CLOSE
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const servicesList = [
    {
      title: "Power Substation Erection",
      desc: "HV Substation O&M up to 33kV",
      href: "/service",
      icon: <FaBolt className="text-red-600 text-lg" />,
    },
    {
      title: "Transformer Services",
      desc: "Installation, Filtration & Testing",
      href: "/service",
      icon: <FaTools className="text-red-600 text-lg" />,
    },
    {
      title: "Domestic & Industrial Wiring",
      desc: "Turnkey Wiring & Safety Upgrades",
      href: "/service",
      icon: <FaHome className="text-red-600 text-lg" />,
    },
    {
      title: "Cable Laying & Jointing",
      desc: "Underground & Overhead HT/LT Cabling",
      href: "/service",
      icon: <FaNetworkWired className="text-red-600 text-lg" />,
    },
  ];

  const industriesList = [
    {
      title: "Oil & Gas Refineries",
      desc: "Hazardous Area Electrification",
      href: "/service",
      icon: <FaOilCan className="text-red-600 text-lg" />,
    },
    {
      title: "Power & Utility Plants",
      desc: "Transmission & Distribution Systems",
      href: "/service",
      icon: <FaIndustry className="text-red-600 text-lg" />,
    },
    {
      title: "Heavy Manufacturing",
      desc: "Industrial Automation & Switchboards",
      href: "/service",
      icon: <FaHardHat className="text-red-600 text-lg" />,
    },
    {
      title: "Commercial & Public Sector",
      desc: "Institutional Electrical Infrastructure",
      href: "/service",
      icon: <FaBuilding className="text-red-600 text-lg" />,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-[9999] w-full h-[78px] bg-gradient-to-r from-[#EFF3F6] via-white to-[#FAFAFC] shadow-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-[1480px] mx-auto flex items-center justify-between h-full px-4 sm:px-6">
          {/* LEFT LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Image
              src="/a1.png"
              alt="logo"
              width={26}
              height={42}
              className="object-contain sm:w-[32px] sm:h-[52px]"
            />

            <div className="min-w-0">
              <h1 className="text-sm sm:text-base md:text-xl font-extrabold text-blue-950 font-sans tracking-tight truncate">
                Bhagat Engineering Works
              </h1>
              <div className="hidden sm:flex items-center gap-2">
                <p className="text-[11px] font-bold tracking-[0.2em] text-gray-600 uppercase">
                  A SYMBOL OF TRUST
                </p>
                <span className="w-8 h-[2px] bg-red-600"></span>
              </div>
            </div>
          </Link>

          {/* CENTER MENU */}
          <nav
            ref={dropdownRef}
            className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-800 font-semibold text-base relative"
          >
            <Link
              href="/"
              className="text-gray-800 hover:text-red-600 transition-colors"
            >
              Home
            </Link>

            {/* ABOUT US HOVER DROPDOWN */}
            <div
              className="relative py-3 group"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "about" ? null : "about")
                }
                className="flex items-center gap-1.5 text-gray-800 hover:text-red-600 transition-colors focus:outline-none"
              >
                <Link href="/about" className="hover:text-red-600">
                  About us
                </Link>
                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${
                    openDropdown === "about" ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU PANEL */}
              {openDropdown === "about" && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-3 z-[9999]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 pb-2 border-b border-gray-100">
                    About Our Company
                  </div>
                  <div className="pt-2 space-y-1">
                    <Link
                      href="/about"
                      scroll={true}
                      onClick={() => {
                        setOpenDropdown(null);
                        if (typeof window !== "undefined" && window.location.pathname === "/about") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Overview
                    </Link>
                    <Link
                      href="/about/founders-and-director-message"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Founders & Director Message
                    </Link>
                    <Link
                      href="/about/our-core-team"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Our Core Team
                    </Link>
                    <Link
                      href="/about/our-infrastructure"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Our Infrastructure
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES HOVER DROPDOWN */}
            <div
              className="relative py-3 group"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "services" ? null : "services",
                  )
                }
                className="flex items-center gap-1.5 text-gray-800 hover:text-red-600 transition-colors focus:outline-none"
              >
                <span className="hover:text-red-600 cursor-pointer">
                  Services
                </span>
                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${
                    openDropdown === "services" ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU PANEL */}
              {openDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-3 z-[9999]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 pb-2 border-b border-gray-100">
                    Our Specialized Services
                  </div>
                  <div className="pt-2 space-y-1">
                    <Link
                      href="/service/power-substation"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Power Substation
                    </Link>
                    <Link
                      href="/service/domestic-wiring"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Domestic Wiring
                    </Link>
                    <Link
                      href="/service/transformer-services"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Transformer Services
                    </Link>
                    <Link
                      href="/service/servo-stabilizers"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Servo Stabilizers
                    </Link>
                    <Link
                      href="/service/cable-laying"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Cable Laying
                    </Link>
                    <Link
                      href="/service/facade-lighting"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Facade Lighting
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* PROJECTS HOVER DROPDOWN */}
            <div
              className="relative py-3 group"
              onMouseEnter={() => handleMouseEnter("projects")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "projects" ? null : "projects",
                  )
                }
                className="flex items-center gap-1.5 text-gray-800 hover:text-red-600 transition-colors focus:outline-none"
              >
                <span className="hover:text-red-600 cursor-pointer">
                  Projects
                </span>
                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${
                    openDropdown === "projects" ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU PANEL */}
              {openDropdown === "projects" && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-3 z-[9999]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 pb-2 border-b border-gray-100">
                    Project Categories
                  </div>
                  <div className="pt-2 space-y-1">
                    <Link
                      href="/project/ongoing"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Ongoing Projects
                    </Link>
                    <Link
                      href="/project/completed"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Completed Projects
                    </Link>
                    <Link
                      href="/project/upcoming"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Upcoming Projects
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* GALLERY HOVER DROPDOWN */}
            <div
              className="relative py-3 group"
              onMouseEnter={() => handleMouseEnter("gallery")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "gallery" ? null : "gallery",
                  )
                }
                className="flex items-center gap-1.5 text-gray-800 hover:text-red-600 transition-colors focus:outline-none"
              >
                <Link href="/gallery" className="hover:text-red-600">
                  Gallery
                </Link>
                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${
                    openDropdown === "gallery" ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN MENU PANEL */}
              {openDropdown === "gallery" && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-100 p-3 z-[9999]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 pb-2 border-b border-gray-100">
                    Our Gallery
                  </div>
                  <div className="pt-2 space-y-1">
                    <Link
                      href="/about/celebrating-50-years"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Celebrating 50 Years
                    </Link>
                    <Link
                      href="/about/festivals"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Festivals
                    </Link>
                    <Link
                      href="/about/employee-awards"
                      onClick={() => setOpenDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      Employee Awards
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/career"
              className="text-gray-800 hover:text-red-600 transition-colors"
            >
              Career
            </Link>
          </nav>

          {/* RIGHT BUTTON */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden sm:block">
              <button className="border-2 border-red-600 text-red-600 px-6 py-1.5 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 font-bold text-sm shadow-sm hover:shadow-md">
                Contact Us
              </button>
            </Link>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex md:hidden items-center justify-center p-2 text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-xl transition focus:outline-none -mr-2"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[99999] flex md:hidden">
          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* DRAWER CONTENT */}
          <div className="relative ml-auto w-[290px] sm:w-[320px] h-full bg-white shadow-2xl flex flex-col z-10 transition-transform duration-300">
            {/* DRAWER HEADER */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMobileOpen(false)}
              >
                <Image
                  src="/a1.png"
                  alt="logo"
                  width={24}
                  height={38}
                  className="object-contain"
                />
                <span className="font-extrabold text-blue-950 text-sm tracking-tight">
                  Bhagat Engineering
                </span>
              </Link>

              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-lg transition"
                aria-label="Close Menu"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* DRAWER LINKS */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-gray-800 font-semibold text-sm">
              {/* HOME LINK */}
              <Link
                href="/"
                onClick={() => setIsMobileOpen(false)}
                className="block py-2 px-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition"
              >
                Home
              </Link>

              {/* ABOUT US ACCORDION */}
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "about" ? null : "about",
                    )
                  }
                  className="w-full flex items-center justify-between py-2 px-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition text-left"
                >
                  <span>About Us</span>
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${
                      activeMobileDropdown === "about"
                        ? "rotate-180 text-red-600"
                        : ""
                    }`}
                  />
                </button>
                {activeMobileDropdown === "about" && (
                  <div className="pl-6 space-y-1 bg-gray-50 rounded-xl p-2 mt-1">
                    <Link
                      href="/about"
                      scroll={true}
                      onClick={() => {
                        setIsMobileOpen(false);
                        if (typeof window !== "undefined" && window.location.pathname === "/about") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Overview
                    </Link>
                    <Link
                      href="/about/founders-and-director-message"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Founders & Director Message
                    </Link>
                    <Link
                      href="/about/our-core-team"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Our Core Team
                    </Link>
                    <Link
                      href="/about/our-infrastructure"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Our Infrastructure
                    </Link>
                  </div>
                )}
              </div>

              {/* SERVICES ACCORDION */}
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "services" ? null : "services",
                    )
                  }
                  className="w-full flex items-center justify-between py-2 px-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition text-left"
                >
                  <span>Services</span>
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${
                      activeMobileDropdown === "services"
                        ? "rotate-180 text-red-600"
                        : ""
                    }`}
                  />
                </button>
                {activeMobileDropdown === "services" && (
                  <div className="pl-6 space-y-1 bg-gray-50 rounded-xl p-2 mt-1">
                    <Link
                      href="/service"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition border-b border-gray-200/50 pb-2 mb-1"
                    >
                      All Services
                    </Link>
                    <Link
                      href="/service/power-substation"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Power Substation
                    </Link>
                    <Link
                      href="/service/domestic-wiring"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Domestic Wiring
                    </Link>
                    <Link
                      href="/service/transformer-services"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Transformer Services
                    </Link>
                    <Link
                      href="/service/servo-stabilizers"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Servo Stabilizers
                    </Link>
                    <Link
                      href="/service/cable-laying"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Cable Laying
                    </Link>
                    <Link
                      href="/service/facade-lighting"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Facade Lighting
                    </Link>
                  </div>
                )}
              </div>

              {/* PROJECTS ACCORDION */}
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "projects" ? null : "projects",
                    )
                  }
                  className="w-full flex items-center justify-between py-2 px-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition text-left"
                >
                  <span>Projects</span>
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${
                      activeMobileDropdown === "projects"
                        ? "rotate-180 text-red-600"
                        : ""
                    }`}
                  />
                </button>
                {activeMobileDropdown === "projects" && (
                  <div className="pl-6 space-y-1 bg-gray-50 rounded-xl p-2 mt-1">
                    <Link
                      href="/project/ongoing"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Ongoing Projects
                    </Link>
                    <Link
                      href="/project/completed"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Completed Projects
                    </Link>
                    <Link
                      href="/project/upcoming"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Upcoming Projects
                    </Link>
                  </div>
                )}
              </div>

              {/* GALLERY ACCORDION */}
              <div className="space-y-1">
                <button
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === "gallery" ? null : "gallery",
                    )
                  }
                  className="w-full flex items-center justify-between py-2 px-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition text-left"
                >
                  <span>Gallery</span>
                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-200 ${
                      activeMobileDropdown === "gallery"
                        ? "rotate-180 text-red-600"
                        : ""
                    }`}
                  />
                </button>
                {activeMobileDropdown === "gallery" && (
                  <div className="pl-6 space-y-1 bg-gray-50 rounded-xl p-2 mt-1">
                    <Link
                      href="/about/celebrating-50-years"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Celebrating 50 Years
                    </Link>
                    <Link
                      href="/about/festivals"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Festivals
                    </Link>
                    <Link
                      href="/about/employee-awards"
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-1.5 px-3 text-xs font-semibold text-gray-600 hover:text-red-600 transition"
                    >
                      Employee Awards
                    </Link>
                  </div>
                )}
              </div>

              {/* CAREER LINK */}
              <Link
                href="/career"
                onClick={() => setIsMobileOpen(false)}
                className="block py-2 px-3 hover:bg-red-50 hover:text-red-600 rounded-xl transition"
              >
                Career
              </Link>
            </div>

            {/* DRAWER FOOTER */}
            <div className="p-4 border-t border-gray-100 space-y-3">
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full"
              >
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2">
                  <span>Contact Us</span>
                </button>
              </Link>

              <a href="tel:+916299923388" className="block w-full">
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2">
                  <span>Call: +91 62999 23388</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
