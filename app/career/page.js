"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "../components/contact";
import {
  FaStar,
  FaProjectDiagram,
  FaBookOpen,
  FaChartLine,
  FaTimes,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFileAlt,
} from "react-icons/fa";

const steps = [
  {
    step: "Step 01",
    title: "Apply Online",
    desc: "Submit your resume and application through our recruitment portal. We look for individuals with a solid academic foundation and practical experience in core engineering sectors.",
    image: "/car1.png",
  },
  {
    step: "Step 02",
    title: "Technical Assessment",
    desc: "Our experts evaluate your technical knowledge, project experience and engineering capabilities through specific case studies and technical discussions.",
    image: "/car2.png",
  },
  {
    step: "Step 03",
    title: "HR Discussion",
    desc: "Meet our leadership team to discuss your aspirations, culture fit and long-term career goals within our 50-year legacy of excellence.",
    image: "/car3.png",
  },
  {
    step: "Step 04",
    title: "Join the Team",
    desc: "Become part of a company delivering critical infrastructure projects across India. Welcome to the Bhagat Engineering family.",
    image: "/car4.png",
  },
];

const benefits = [
  {
    title: "Engineering Excellence",
    desc: "Grow your skills under the guidance of industry veterans who have built critical infrastructure across the nation.",
    icon: <FaStar size={24} />,
  },
  {
    title: "Industry Leading Projects",
    desc: "Work on landmark government, railway, and industrial projects that shape the future.",
    icon: <FaProjectDiagram size={24} />,
  },
  {
    title: "Continuous Learning",
    desc: "Access training programs, certifications, and resources to stay ahead of industry standards.",
    icon: <FaBookOpen size={24} />,
  },
  {
    title: "Long-term Growth",
    desc: "Build a stable, progressive career with a company that has nearly 50 years of legacy.",
    icon: <FaChartLine size={24} />,
  },
];

const jobs = [
  {
    title: "Electrical Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Patna, Bihar",
    experience: "3-5 Years",
    salary: "Competitive",
    desc: "Responsible for executing power substation and distribution network projects, leading engineering teams and ensuring safety compliance.",
    responsibilities: [
      "Design, layout, and install electrical control panels and substation structures.",
      "Coordinate with clients, electricity boards, and project heads to resolve technical discrepancies.",
      "Conduct electrical load flow studies and circuit layout calculations.",
      "Supervise on-site electrical installations and ensure strictly 100% safety standards.",
    ],
    requirements: [
      "B.Tech / B.E. in Electrical Engineering from a recognized institution.",
      "3+ years of experience in high-tension (HT) switchyard or grid erection.",
      "Proficient in AutoCAD Electrical and electrical load analysis software.",
      "Willingness to travel to on-site projects as needed.",
    ],
  },
  {
    title: "Project Manager",
    department: "Management",
    type: "Full-Time",
    location: "Patna, Bihar",
    experience: "6-8 Years",
    salary: "Industry Standard",
    desc: "Oversee project planning, execution, budgeting, client communication, and overall delivery of substation and rail electrification projects.",
    responsibilities: [
      "Manage end-to-end execution of utility-scale power transmission contracts.",
      "Lead cross-functional teams of engineers, site supervisors, and electrical draftsmen.",
      "Monitor budgets, control material requirements, and coordinate procurement timelines.",
      "Maintain active communications with government officials and corporate clients.",
    ],
    requirements: [
      "B.Tech in Electrical/Civil Engineering; MBA in Project Management is a major plus.",
      "6+ years of management experience leading power sector turn-key contracts.",
      "Strong understanding of project scheduling tools like Primavera or MS Project.",
      "Excellent negotiation and client relationship management skills.",
    ],
  },
  {
    title: "Site Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Patna, Bihar",
    experience: "1-3 Years",
    salary: "Competitive",
    desc: "Oversee day-to-day site operations, resource management, electrical installations, and quality inspections.",
    responsibilities: [
      "Perform daily supervision of cable laying, panel erections, and grounding installations.",
      "Maintain material logs, report daily progress charts, and inspect incoming equipment.",
      "Coordinate safety drills and enforce personal protective equipment (PPE) rules on site.",
      "Support testing and commissioning activities of power transformers.",
    ],
    requirements: [
      "Diploma or B.Tech in Electrical Engineering.",
      "1-3 years of practical experience on industrial construction or power grid sites.",
      "Familiarity with electrical engineering diagrams and single-line schematics.",
      "Detail-oriented mindset with good troubleshooting capabilities.",
    ],
  },
  {
    title: "Accounts Executive",
    department: "Finance",
    type: "Full-Time",
    location: "Patna, Bihar",
    experience: "2-4 Years",
    salary: "Competitive",
    desc: "Manage site accounting, client billing, vendor payments, expense tracking, and financial record-keeping.",
    responsibilities: [
      "Prepare client invoices based on project measurements and milestones.",
      "Track vendor invoices, manage ledger accounts, and handle expense reimbursements.",
      "Ensure compliance with GST filing, tax deductions at source (TDS), and other local rules.",
      "Provide weekly financial statements and cash flow projections to company heads.",
    ],
    requirements: [
      "B.Com / M.Com or MBA in Finance.",
      "2-4 years of experience, preferably within real estate or engineering sectors.",
      "High proficiency in Tally Prime, MS Excel, and standard accounting systems.",
      "Strong attention to detail and clear communication skills.",
    ],
  },
];

const benefitContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const benefitCardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    position: "Electrical Engineer",
    qualification: "",
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
      } else {
        alert("Please upload a PDF file only.");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your resume.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        position: "Electrical Engineer",
        qualification: "",
      });
      setFile(null);
    }, 1800);
  };

  // Filter jobs dynamically
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || job.department === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Engineering", "Management", "Finance"];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* ================= 1. HERO SECTION (WHITE BG) ================= */}
      <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          {/* Left Column Content */}
          <div className="flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <nav className="text-xs md:text-sm text-gray-400 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-[#E61B23] transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <span className="text-[#E61B23] font-semibold">Careers</span>
            </nav>

            <span className="text-[#E61B23] text-sm font-bold uppercase tracking-wider">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight tracking-tight text-gray-900">
              Build India&apos;s
              <br />
              Infrastructure
              <span className="text-[#E61B23]"> With Your Career</span>
            </h1>

            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed mt-6">
              Join our team of seasoned engineering professionals to take on
              challenge-driven, pathway-guided careers that impact
              infrastructure across the country, starting here at Bhagat
              Engineering.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#openings"
                className="bg-[#E61B23] hover:bg-red-700 text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-lg transition-colors shadow-sm text-center justify-center flex w-full sm:w-auto"
              >
                Explore Open Positions
              </a>
              <a
                href="#apply-form"
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs md:text-sm px-6 py-3.5 rounded-lg transition-colors shadow-sm border border-gray-800 text-center justify-center flex w-full sm:w-auto"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Right Column Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center h-[340px] md:h-[420px]"
          >
            {/* Main curved image wrapper */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 30px 60px -15px rgba(230, 27, 35, 0.2), 0 20px 40px -20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white cursor-pointer select-none"
            >
              <Image
                src="/da5.jpg" // Interview photo
                alt="Job interview at Bhagat Engineering"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </motion.div>

            {/* Curtains up on the clean image block */}
          </motion.div>
        </div>
      </section>

      {/* ================= 2. RECRUITMENT JOURNEY ================= */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-100 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
              <h2 className="text-gray-900 font-extrabold tracking-wide text-2xl md:text-3xl lg:text-4xl">
                Your Journey to Bhagat Engineering Works
              </h2>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E61B23]" />
            </div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Our hiring process is designed to identify the best talent,
              evaluate skills and potential, and ensure a mutual fit for
              long-term growth.
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-16 max-w-[1000px] mx-auto">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
              >
                {/* Text Content */}
                <div className="flex-1 text-left">
                  <span className="text-[#E61B23] font-bold text-xs md:text-sm tracking-wider uppercase">
                    {item.step}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-3 text-xs md:text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-[35%] aspect-[1.5/1] relative rounded-[20px] overflow-hidden shadow-lg border border-gray-100 bg-white shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover scale-[1.08] hover:scale-[1.15] transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. PERKS & BENEFITS ================= */}
      <section className="bg-white py-20 border-y border-gray-150 px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            variants={benefitContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={benefitCardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  borderColor: "rgba(249, 115, 22, 0.45)",
                  boxShadow:
                    "0 15px 30px -10px rgba(249, 115, 22, 0.25), 0 10px 15px -8px rgba(249, 115, 22, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-6 border border-gray-150 transition-all duration-300 flex flex-col items-start cursor-pointer select-none"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-[#E61B23]">
                  {benefit.icon}
                </div>
                <h4 className="font-extrabold text-gray-900 text-lg mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 4. CURRENT OPENINGS ================= */}
      <section id="openings" className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Current Openings
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Choose a role that fits your passion and engineering expertise.
            </p>
          </div>
        </div>

        {/* Dynamic Search & Filters Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10 pb-6 border-b border-gray-100">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? jobs.length
                  : jobs.filter((j) => j.department === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-200 flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? "bg-[#E61B23] text-white shadow-sm"
                      : "bg-gray-150 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                      selectedCategory === cat
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search job title or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-xs text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <FaSearch size={13} />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
              >
                <FaTimes size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Jobs Cards Grid (Animate-on-Filter layout) */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 min-h-[220px]">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0
              ? filteredJobs.map((job, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={job.title}
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 leading-snug">
                          {job.title}
                        </h3>
                        <span className="bg-green-100 text-green-800 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs font-semibold mb-4 flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span>{job.location}</span>
                      </p>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
                        {job.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                        <FaBriefcase />
                        <span>{job.experience}</span>
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJob(job);
                        }}
                        className="text-[#E61B23] font-bold text-xs md:text-sm hover:text-red-700 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Details</span>
                        <FaArrowRight size={11} />
                      </button>
                    </div>
                  </motion.div>
                ))
              : <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-2 text-center py-16 flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-gray-200 border-dashed"
                >
                  <FaFileAlt className="text-gray-300 text-5xl mb-4" />
                  <h4 className="font-bold text-gray-800">
                    No jobs found matching your filters
                  </h4>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="mt-4 text-xs font-bold text-[#E61B23] hover:underline"
                  >
                    Reset all filters
                  </button>
                </motion.div>}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= 5. RECRUITMENT PROCESS & FORM (DARK PANEL) ================= */}
      <section id="apply-form" className="bg-[#111111] text-white py-20 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Process Steps */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Recruitment Process
            </h2>

            <div className="mt-10 space-y-2 relative pl-2">
              {/* Vertical line through the center of the badges */}
              <div className="absolute left-[26px] top-6 bottom-6 w-[1.5px] bg-gray-800 z-0" />

              {[
                {
                  num: "1",
                  title: "Apply & Submit",
                  desc: "Submit your online application and upload your resume in PDF format on the right to start.",
                },
                {
                  num: "2",
                  title: "Review Application",
                  desc: "Our HR and senior project leads review your engineering qualifications, site experience, and availability.",
                },
                {
                  num: "3",
                  title: "Technical Interview",
                  desc: "Participate in a technical discussion with our project supervisors about HT layouts, safety compliance, and site execution.",
                },
                {
                  num: "4",
                  title: "Final Offer",
                  desc: "Receive a formal offer letter detailing your salary package, site deployment location, and onboarding timelines.",
                },
                {
                  num: "5",
                  title: "Onboarding",
                  desc: "Complete standard documentation, meet your engineering site team, and start deploying to active infrastructure sites.",
                },
              ].map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex gap-6 items-start relative z-10 py-4 cursor-pointer select-none group"
                  >
                    {/* Badge Number (Lights up when active) */}
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center font-bold text-sm shrink-0 shadow-md transition-all duration-300 ${
                        isActive
                          ? "bg-[#E61B23] border-[#E61B23] text-white shadow-[0_0_15px_rgba(230,27,35,0.4)]"
                          : "bg-gray-900 border-gray-700 text-gray-400 group-hover:border-gray-500 group-hover:text-gray-200"
                      }`}
                    >
                      {step.num}
                    </div>

                    {/* Content text */}
                    <div className="flex-1 pt-1">
                      <h4
                        className={`text-base md:text-lg transition-colors duration-200 ${
                          isActive
                            ? "font-bold text-white"
                            : "font-medium text-gray-400 group-hover:text-gray-200"
                        }`}
                      >
                        {step.title}
                      </h4>

                      {/* Accordion description body */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="text-gray-400 text-xs md:text-sm mt-2 leading-relaxed overflow-hidden"
                          >
                            {step.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="md:col-span-7 bg-white text-gray-850 rounded-[24px] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
              Ready to Join Us?
            </h3>

            <AnimatePresence mode="wait">
              {submitSuccess
                ? <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 flex flex-col items-center justify-center"
                  >
                    <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                    <h4 className="text-xl font-bold text-gray-900">
                      Application Submitted!
                    </h4>
                    <p className="text-gray-500 mt-2 text-sm max-w-xs mx-auto leading-relaxed">
                      Thank you for applying. Our recruitment team will review
                      your application and contact you soon.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 text-sm text-[#E61B23] font-bold hover:underline"
                    >
                      Submit another application
                    </button>
                  </motion.div>
                : <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full border border-transparent bg-[#F8F9FA] rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full border border-transparent bg-[#F8F9FA] rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 00000 00000"
                          className="w-full border border-transparent bg-[#F8F9FA] rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">
                          Position Applying For
                        </label>
                        <div className="relative">
                          <select
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                            className="w-full border border-transparent bg-[#F8F9FA] rounded-xl p-3.5 text-sm text-gray-800 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200 appearance-none pr-10 font-medium"
                          >
                            <option value="Electrical Engineer">
                              Electrical Engineer
                            </option>
                            <option value="Project Manager">
                              Project Manager
                            </option>
                            <option value="Site Engineer">Site Engineer</option>
                            <option value="Accounts Executive">
                              Accounts Executive
                            </option>
                          </select>
                          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800">
                            <FaChevronDown size={11} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">
                          Total Experience
                        </label>
                        <input
                          type="text"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. 5 Years"
                          className="w-full border border-transparent bg-[#F8F9FA] rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">
                          Highest Qualification
                        </label>
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. B.Tech Electrical"
                          className="w-full border border-transparent bg-[#F8F9FA] rounded-xl p-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">
                        Upload Resume (PDF only)
                      </label>
                      <div className="border border-dashed border-blue-200 bg-blue-50/5 hover:bg-blue-50/10 hover:border-blue-300 rounded-xl p-5 text-center cursor-pointer transition relative">
                        <input
                          type="file"
                          accept="application/pdf"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        {file
                          ? <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                              <span className="text-xs text-gray-700 truncate max-w-[200px] font-medium">
                                {file.name}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setFile(null);
                                }}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                <FaTimes size={14} />
                              </button>
                            </div>
                          : <div className="flex flex-col items-center justify-center">
                              {/* Blue Cloud Icon */}
                              <svg
                                className="w-8 h-8 text-blue-500 mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                              </svg>
                              <span className="text-xs text-gray-500 font-medium">
                                Drag your file(s) or{" "}
                                <span className="text-blue-600 underline">
                                  browse
                                </span>
                              </span>
                              <span className="text-[10px] text-gray-400 mt-1">
                                Max 10 MB files are allowed
                              </span>
                            </div>}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E61B23] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition active:scale-[0.99] flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      {isSubmitting
                        ? <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        : <span>Apply Job</span>}
                    </button>
                  </motion.form>}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Dynamic Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-start md:items-center justify-center p-4 overflow-y-auto py-10 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="bg-gray-900 text-white pt-8 pb-6 px-6 md:pt-10 md:pb-8 md:px-8 relative">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute right-6 top-6 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                >
                  <FaTimes size={18} />
                </button>
                <span className="bg-[#E61B23] text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  {selectedJob.type}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold mt-3 text-white">
                  {selectedJob.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-300">
                  <span className="flex items-center gap-1">
                    📍 {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    💼 {selectedJob.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    💰 {selectedJob.salary}
                  </span>
                </div>
              </div>

              {/* Modal Content (Scrollable) */}
              <div className="p-6 md:p-8 pb-10 md:pb-12 overflow-y-auto space-y-6 flex-1 text-gray-700">
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base mb-2">
                    Role Overview
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {selectedJob.desc}
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-gray-900 text-base mb-2">
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-500">
                    {selectedJob.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-extrabold text-gray-900 text-base mb-2">
                    Requirements & Qualifications
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-500">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 p-6 border-t border-gray-100 flex items-center justify-end gap-4">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-5 py-2.5 rounded-lg border border-gray-300 font-semibold text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      position: selectedJob.title,
                    }));
                    setSelectedJob(null);
                    document
                      .getElementById("apply-form")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#E61B23] hover:bg-red-700 text-white font-bold transition-colors shadow-md text-sm flex items-center gap-1.5"
                >
                  <span>Apply for this Role</span>
                  <FaArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= 6. CONTACT CTA ================= */}
      <Contact />
    </main>
  );
}
