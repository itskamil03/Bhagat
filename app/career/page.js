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
  FaChevronDown
} from "react-icons/fa";

const steps = [
  {
    step: "Step 01",
    title: "Apply Online",
    desc: "Submit your resume and application through our portal to begin. We review applications on a rolling basis, evaluating experience against our current requirements.",
    image: "/b4.png"
  },
  {
    step: "Step 02",
    title: "Technical Assessment",
    desc: "For technical positions, you'll undergo a structured evaluation to test your engineering capability, problem-solving, and practical knowledge.",
    image: "/dw1.jpg"
  },
  {
    step: "Step 03",
    title: "HR Discussion",
    desc: "We talk about your goals, expectations, and how they align with our values. Learn more about our nearly 50-year legacy of engineering excellence.",
    image: "/gl1.png"
  },
  {
    step: "Step 04",
    title: "Join the Team",
    desc: "Receive a formal offer and welcome kit, complete your onboarding, and begin contributing to high-impact projects that shape India's infrastructure.",
    image: "/a7.jpg"
  }
];

const benefits = [
  {
    title: "Engineering Excellence",
    desc: "Grow your skills under the guidance of industry veterans who have built critical infrastructure across the nation.",
    icon: <FaStar size={24} />
  },
  {
    title: "Industry Leading Projects",
    desc: "Work on landmark government, railway, and industrial projects that shape the future.",
    icon: <FaProjectDiagram size={24} />
  },
  {
    title: "Continuous Learning",
    desc: "Access training programs, certifications, and resources to stay ahead of industry standards.",
    icon: <FaBookOpen size={24} />
  },
  {
    title: "Long-term Growth",
    desc: "Build a stable, progressive career with a company that has nearly 50 years of legacy.",
    icon: <FaChartLine size={24} />
  }
];

const jobs = [
  {
    title: "Electrical Engineer",
    type: "Full-Time",
    location: "Patna, Bihar",
    desc: "Responsible for executing power substation and distribution network projects, leading engineering teams and ensuring safety."
  },
  {
    title: "Project Manager",
    type: "Full-Time",
    location: "Patna, Bihar",
    desc: "Oversee project planning, execution, budgeting, client communication, and overall delivery of substation and rail electrification projects."
  },
  {
    title: "Site Engineer",
    type: "Full-Time",
    location: "Patna, Bihar",
    desc: "Oversee day-to-day site operations, resource management, electrical installations, and quality inspections."
  },
  {
    title: "Accounts Executive",
    type: "Full-Time",
    location: "Patna, Bihar",
    desc: "Manage site accounting, billing, vendor payments, expense tracking, and financial record-keeping."
  }
];

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    position: "Electrical Engineer",
    qualification: ""
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
        qualification: ""
      });
      setFile(null);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* ================= 1. HERO SECTION (WHITE BG) ================= */}
      <section className="relative w-full overflow-hidden bg-white pt-10 pb-16 px-6 lg:px-16">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column Content */}
          <div className="flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <nav className="text-xs md:text-sm text-gray-400 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-[#E61B23] transition-colors">Home</Link>
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
              Join our team of seasoned engineering professionals to take on challenge-driven,
              pathway-guided careers that impact infrastructure across the country, starting here at
              Bhagat Engineering.
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
          <div className="relative flex justify-center items-center h-[340px] md:h-[420px]">
            {/* Main curved image wrapper */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/da5.jpg" // Interview photo
                alt="Job interview at Bhagat Engineering"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Red accent strip */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E61B23] -z-10 rounded-2xl shadow-[0_4px_15px_rgba(230,27,35,0.15)]"></div>
          </div>
        </div>
      </section>

      {/* ================= 2. RECRUITMENT JOURNEY ================= */}
      <section className="w-full py-20 bg-gray-50 border-t border-gray-100 px-6">
        <div className="max-w-[1240px] mx-auto">
          
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
              Our hiring process is designed to identify the best talent, evaluate skills and potential,
              and ensure a mutual fit for long-term growth.
            </p>
          </div>

          {/* Steps Cards Stacks */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {steps.map((item, index) => (
              <div 
                key={index} 
                className="w-full bg-white rounded-2xl border border-gray-150 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300"
              >
                {/* Text Content */}
                <div className="flex-1">
                  <span className="text-[#E61B23] font-bold text-xs md:text-sm tracking-wider uppercase">
                    {item.step}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-4 text-xs md:text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>

                {/* Local Image */}
                <div className="w-full md:w-1/3 aspect-[1.5/1] relative rounded-xl overflow-hidden border border-gray-100 shadow-inner shrink-0">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. PERKS & BENEFITS ================= */}
      <section className="bg-white py-20 border-y border-gray-150 px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl p-6 border border-gray-150 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col items-start"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. CURRENT OPENINGS ================= */}
      <section id="openings" className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Current Openings
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Choose a role that fits your passion and engineering expertise.
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-white border border-gray-300 text-gray-700 font-bold px-5 py-2.5 rounded-md hover:bg-gray-50 transition-colors text-xs whitespace-nowrap w-full md:w-auto text-center">
            VIEW MORE OPENINGS
          </button>
        </div>

        {/* Jobs Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-red-200 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">{job.title}</h3>
                  <span className="bg-green-100 text-green-800 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-400 text-xs font-semibold mb-4">{job.location}</p>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                  {job.desc}
                </p>
              </div>
              <div>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, position: job.title }));
                    document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[#E61B23] font-bold text-xs md:text-sm hover:text-red-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Apply Now</span>
                  <FaArrowRight size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. RECRUITMENT PROCESS & FORM (DARK PANEL) ================= */}
      <section id="apply-form" className="bg-[#111111] text-white py-20 px-6">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Process Steps */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Recruitment Process</h2>
            
            <div className="mt-12 space-y-0 relative pl-2">
              {/* Vertical line through the center of the badges */}
              <div className="absolute left-[26px] top-6 bottom-6 w-[1.5px] bg-gray-800 z-0" />

              {[
                { num: "1", title: "Apply & Submit" },
                { num: "2", title: "Review Application" },
                { num: "3", title: "Technical Interview" },
                { num: "4", title: "Final Offer" },
                { num: "5", title: "Onboarding" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-center relative z-10 h-20">
                  <div className="w-9 h-9 rounded-full bg-[#E61B23]/25 border border-[#E61B23]/40 flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-md">
                    {step.num}
                  </div>
                  <h4 className="font-medium text-gray-300 text-base md:text-lg">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="md:col-span-7 bg-white text-gray-850 rounded-[24px] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Ready to Join Us?</h3>
            
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 flex flex-col items-center justify-center"
                >
                  <FaCheckCircle className="text-green-500 text-6xl mb-4" />
                  <h4 className="text-xl font-bold text-gray-900">Application Submitted!</h4>
                  <p className="text-gray-500 mt-2 text-sm max-w-xs mx-auto leading-relaxed">
                    Thank you for applying. Our recruitment team will review your application and contact you soon.
                  </p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 text-sm text-[#E61B23] font-bold hover:underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleFormSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">Full Name</label>
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
                      <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">Email Address</label>
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
                      <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">Phone Number</label>
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
                      <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">Position Applying For</label>
                      <div className="relative">
                        <select 
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full border border-transparent bg-[#F8F9FA] rounded-xl p-3.5 text-sm text-gray-800 outline-none focus:bg-white focus:border-[#E61B23] transition-all duration-200 appearance-none pr-10 font-medium"
                        >
                          <option value="Electrical Engineer">Electrical Engineer</option>
                          <option value="Project Manager">Project Manager</option>
                          <option value="Site Engineer">Site Engineer</option>
                          <option value="Accounts Executive">Accounts Executive</option>
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-800">
                          <FaChevronDown size={11} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">Total Experience</label>
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
                      <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">Highest Qualification</label>
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
                    <label className="block text-[11px] md:text-xs font-semibold text-gray-500 mb-1.5">Upload Resume (PDF only)</label>
                    <div className="border border-dashed border-blue-200 bg-blue-50/5 hover:bg-blue-50/10 hover:border-blue-300 rounded-xl p-5 text-center cursor-pointer transition relative">
                      <input 
                        type="file" 
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      {file ? (
                        <div className="flex items-center justify-between bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                          <span className="text-xs text-gray-700 truncate max-w-[200px] font-medium">{file.name}</span>
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
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          {/* Blue Cloud Icon */}
                          <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                          </svg>
                          <span className="text-xs text-gray-500 font-medium">
                            Drag your file(s) or <span className="text-blue-600 underline">browse</span>
                          </span>
                          <span className="text-[10px] text-gray-400 mt-1">Max 10 MB files are allowed</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#E61B23] hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition active:scale-[0.99] flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Apply Job</span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ================= 6. CONTACT CTA ================= */}
      <Contact />
    </main>
  );
}
