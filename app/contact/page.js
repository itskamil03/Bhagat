"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaHeadset,
  FaPaperPlane,
  FaShieldAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Power Substation Erection & Maintenance",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* ================= HERO HEADER ================= */}
      <section className="relative w-full bg-[#0b1d2a] text-white py-20 px-6 lg:px-20 overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-red-600 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* BREADCRUMB */}
          <p className="text-sm font-semibold tracking-widest text-red-400 uppercase mb-3">
            Home &nbsp;›&nbsp; <span className="text-white">Contact Us</span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Get In Touch With <br />
            <span className="text-red-500 relative inline-block">
              Bhagat Engineering
              <span className="block h-[4px] w-24 bg-red-600 mt-2"></span>
            </span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg max-w-2xl leading-relaxed">
            Have a project in mind or need emergency electrical maintenance?
            Connect with Eastern India&apos;s trusted Class-A certified
            electrical contracting partner.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 - LOCATION */}
          <div className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl mb-5">
                <FaMapMarkerAlt />
              </div>
              <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1">
                Head Office & Operations
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bihar, India
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Registered Engineering Office & Substation Equipment Depot.
                Serving industrial, utility, and commercial projects across
                India.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-red-600">
              <span>Authorised Class-A Contractor</span>
            </div>
          </div>

          {/* CARD 2 - DIRECT PHONES */}
          <div className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl mb-5">
                <FaPhoneAlt />
              </div>
              <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1">
                Direct Inquiry & Support
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Toll Free Line:{" "}
                <strong className="text-gray-800">1800 8890 705</strong>
                <br />
                Dedicated project managers and engineering consultants available
                for urgent calls.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-green-600">
              <FaCheckCircle />
              <span>Mon — Sat (9:00 AM – 7:00 PM)</span>
            </div>
          </div>

          {/* CARD 3 - EMAIL */}
          <div className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl mb-5">
                <FaEnvelope />
              </div>
              <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1">
                Tenders & Official Email
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                info@bhagatengg.in
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Send your RFP, BOQ, or electrical project drawings directly to
                our techno-commercial estimation desk.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-blue-600">
              <span>Average response time: &lt; 4 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM + MAP GRID ================= */}
      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: INQUIRY FORM (7 COLUMNS) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-widest text-red-600 uppercase">
                REQUEST A CONSULTATION
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                Send Us Your Project Requirements
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Fill out the form below and our lead electrical engineer will
                connect with you.
              </p>
            </div>

            {submitted
              ? <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center my-6">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                    Thank you for contacting Bhagat Engineering Works. Our team
                    has received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        service: "Power Substation Erection & Maintenance",
                        message: "",
                      });
                    }}
                    className="mt-6 bg-red-600 text-white font-bold px-6 py-2.5 rounded-full hover:bg-red-700 transition"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              : <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="yourname@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm transition"
                    >
                      <option value="Power Substation Erection & Maintenance">
                        Power Substation Erection & Maintenance (up to 33kV)
                      </option>
                      <option value="Transformer Installation & Oil Filtration">
                        Transformer Installation & Oil Filtration
                      </option>
                      <option value="HT / LT Cable Laying & Jointing">
                        HT / LT Cable Laying & Jointing
                      </option>
                      <option value="Domestic & Industrial Wiring">
                        Domestic & Industrial Electrical Wiring
                      </option>
                      <option value="Annual Maintenance Contract (AMC)">
                        Annual Maintenance Contract (AMC)
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Project Details & Location *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe your project scope, location, and requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-sm transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    {loading
                      ? <span>Submitting Project Inquiry...</span>
                      : <>
                          <span>Send Project Inquiry</span>
                          <FaPaperPlane className="text-sm" />
                        </>}
                  </button>
                </form>}
          </div>

          {/* RIGHT: PROFESSIONAL MAP SECTION (5 COLUMNS) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Our Location on Map
                  </h3>
                  <p className="text-xs text-gray-500">
                    Replaceable dummy map container
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                  Active HQ
                </span>
              </div>

              {/* 
                ========================================================================
                DUMMY MAP EMBED
                You can easily replace the iframe src below with your exact client Google Maps embed link!
                ========================================================================
              */}
              <div className="relative w-full h-[360px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100">
                <iframe
                  title="Bhagat Engineering Works Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=84.5%2C25.3%2C86.5%2C26.5&amp;layer=mapnik"
                  className="w-full h-full border-0 filter contrast-[1.02] brightness-[0.98]"
                  loading="lazy"
                ></iframe>

                {/* OVERLAY BADGE ON MAP */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                      BE
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">
                        Bhagat Engineering Works
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Bihar, India • 50+ Years of Trust
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-red-600 hover:text-red-700 underline shrink-0"
                  >
                    View Map →
                  </a>
                </div>
              </div>
            </div>

            {/* QUICK TRUST BANNER */}
            <div className="bg-gradient-to-r from-blue-950 to-[#0b1d2a] text-white rounded-3xl p-7 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center text-2xl shrink-0 mt-0.5">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    Emergency O&amp;M Hotline
                  </h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    Have an urgent substation fault or transformer breakdown?
                    Our emergency maintenance units are on standby.
                  </p>
                  <p className="text-sm font-bold text-red-400 mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
