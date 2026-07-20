"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaWrench,
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
    team: ["/a3.png", "/a4.png", "/a5.png"],
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
    team: ["/a4.png", "/a5.png", "/a6.png"],
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
    team: ["/a3.png", "/a5.png", "/a6.png"],
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
    team: ["/a3.png", "/a4.png", "/a5.png"],
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
    team: ["/a4.png", "/a5.png", "/a6.png"],
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
    team: ["/a3.png", "/a4.png", "/a5.png"],
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
    team: ["/a4.png", "/a5.png", "/a6.png"],
    status: "Planned / Upcoming",
    desc: "Integrating decentralized solar power arrays to local distribution grids, involving specialized cable laying and synchronization panels.",
  },
];

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
        <section className="bg-[#17162b] text-white py-16">
          <div className="max-w-[1000px] mx-auto px-6">
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
        <main className="max-w-[1000px] mx-auto px-6 py-12">
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">

              <div>
                <span className="text-gray-400 font-bold text-xs uppercase">
                  Current Status
                </span>
                <span
                  className={`font-bold text-sm md:text-base px-3 py-1 rounded-full mt-1.5 flex items-center gap-1.5 ${
                    isCompleted
                      ? "bg-green-50 text-green-700"
                      : isUpcoming
                        ? "bg-yellow-50 text-yellow-800"
                        : "bg-red-50 text-red-700"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCompleted
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 bg-gray-50 border border-gray-200/50 rounded-xl p-6 mb-8 text-sm">
              <div>
                <span className="text-gray-400 font-bold text-xs block uppercase">
                  Division
                </span>
                <span className="font-bold text-gray-800 mt-1 block text-base">
                  {project.division}
                </span>
              </div>
              <div>
                <span className="text-gray-400 font-bold text-xs block uppercase">
                  Location
                </span>
                <span className="font-bold text-gray-800 mt-1 flex items-center gap-1.5 text-base">
                  <FaMapMarkerAlt className="text-[#E61B23] text-sm" />
                  <span>{project.location}</span>
                </span>
              </div>
              <div>
                <span className="text-gray-400 font-bold text-xs block uppercase">
                  Timeline
                </span>
                <span className="font-bold text-gray-800 mt-1 flex items-center gap-1.5 text-base">
                  <FaCalendarAlt className="text-gray-400 text-sm" />
                  <span>{project.date}</span>
                </span>
              </div>
            </div>

            {/* Description and Scope */}
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2">
                  Project Overview
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Scope of Work & Deliverables
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li className="flex items-center gap-3 font-medium bg-gray-50 p-3 rounded-lg border border-gray-150">
                    <FaCheckCircle className="text-green-500 text-base shrink-0" />
                    <span>Comprehensive engineering design & layout</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium bg-gray-50 p-3 rounded-lg border border-gray-150">
                    <FaCheckCircle className="text-green-500 text-base shrink-0" />
                    <span>Rigorous safety clearances & validation checks</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium bg-gray-50 p-3 rounded-lg border border-gray-150">
                    <FaCheckCircle className="text-green-500 text-base shrink-0" />
                    <span>Equipment commissioning & grid integration</span>
                  </li>
                  <li className="flex items-center gap-3 font-medium bg-gray-50 p-3 rounded-lg border border-gray-150">
                    <FaCheckCircle className="text-green-500 text-base shrink-0" />
                    <span>
                      Continuous telemetry monitoring & safety reviews
                    </span>
                  </li>
                </ul>
              </div>


            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
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
