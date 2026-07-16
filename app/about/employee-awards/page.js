"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAward, FaCalendarAlt, FaTrophy, FaUser } from "react-icons/fa";
import Contact from "../../components/contact";

const initialAwards = [
  {
    title: "On-Site Safety Excellence Award",
    recipient: "Eastern Railway Substation Team",
    date: "Annual Milan 2024",
    desc: "Awarded to the railway electrification engineering squad for maintaining 100% safety standards and zero accidents across 45km of HT power grid laying.",
    image: "/aw1.png",
  },
  {
    title: "Outstanding Site Engineer of the Year",
    recipient: "Mr. Rajeev Ranjan",
    date: "Annual Milan 2023",
    desc: "Recognized for showing supreme leadership in completing the Barauni Refinery distribution panel erection 20 days ahead of contract deadlines.",
    image: "/aw2.png",
  },
  {
    title: "Lifetime Dedication Award",
    recipient: "Mr. Satrughan Sinha (Senior Foreman)",
    date: "Vishwakarma Day Milan",
    desc: "Honoring 30 years of continuous service, directing operations on critical substations and guiding two generations of junior foremen.",
    image: "/aw3.png",
  },
  {
    title: "Innovation in Engineering Award",
    recipient: "Substation Design & Automation Team",
    date: "Vishwakarma Day 2024",
    desc: "Honored for developing a custom PLC-based panel layout that reduced relay response times by 30% in high-load industrial sites.",
    image: "/aw4.png",
  },
  {
    title: "Best Project Manager of the Year",
    recipient: "Mr. Amitesh Kumar",
    date: "Annual Milan 2023",
    desc: "Awarded for exceptional leadership in managing three simultaneous site erections in South Bihar with 100% on-time delivery.",
    image: "/aw5.png",
  },
  {
    title: "Fastest Response & Breakdown Recovery",
    recipient: "Emergency Grid Repair Squad",
    date: "Grid Milan 2024",
    desc: "Recognized for restoring high-tension transmission connections within 12 hours after a severe storm shutdown.",
    image: "/aw6.png",
  },
  {
    title: "Project Delivery Milestone Award",
    recipient: "High-Voltage Transmission Team",
    date: "Annual Milan 2024",
    desc: "Recognized for designing a compact dual-circuit line tower layout that saved 15% space and material costs for the Patna Smart Grid.",
    image: "/aw1.png",
  },
  {
    title: "Green Energy Integration Award",
    recipient: "Solar Grid Interconnection Squad",
    date: "Vishwakarma Day 2024",
    desc: "Awarded for the flawless commissioning and grid-synchronization of a 10MW solar farm substation within record time.",
    image: "/aw3.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 75,
      damping: 14,
    },
  },
};

export default function EmployeeAwards() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [awardsList, setAwardsList] = useState(initialAwards);

  // Load from local storage on client mount (populated by admin panel)
  useEffect(() => {
    const saved = localStorage.getItem("employee_awards");
    if (saved) {
      try {
        setAwardsList(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved awards", e);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0b0e1a] text-white relative overflow-hidden flex flex-col md:block">
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .awards-hero-gradient {
            background: linear-gradient(180deg, rgba(11, 14, 26, 0.94) 0%, rgba(11, 14, 26, 0.8) 50%, rgba(11, 14, 26, 0.94) 100%);
          }
          @media (min-width: 768px) {
            .awards-hero-gradient {
              background: linear-gradient(90deg, #0b0e1a 0%, #0b0e1a 35%, rgba(11, 14, 26, 0.85) 55%, rgba(11, 14, 26, 0.3) 75%, transparent 100%);
            }
          }
        `,
          }}
        />

        {/* Red Accent Decors matching Figma (z-20 to prevent hiding) */}
        <div
          className="absolute top-0 right-[12%] w-[150px] h-[24px] bg-[#E61B23] z-20 hidden md:block"
          style={{ clipPath: "polygon(15px 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute bottom-0 left-[6%] w-[200px] h-[28px] bg-[#E61B23] z-20 hidden md:block"
          style={{
            clipPath:
              "polygon(0% 0%, calc(100% - 15px) 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Text Container Wrapper */}
        <div className="max-w-[1440px] mx-auto w-full md:h-[480px] relative overflow-hidden flex items-center px-6 md:px-16 z-20">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:w-[50%] flex flex-col justify-center select-none py-12 md:py-0"
          >
            <nav className="text-xs md:text-sm text-gray-400 mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
              <span>&gt;</span>
              <Link href="/gallery" className="hover:text-red-500 transition">
                Gallery
              </Link>
              <span>&gt;</span>
              <span className="text-white">Employee Awards</span>
            </nav>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-[2px] bg-[#E61B23]"></div>
              <p className="text-[#E61B23] uppercase tracking-widest text-[11px] md:text-[13px] font-semibold">
                OUR ACHIEVEMENTS
              </p>
            </div>

            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-[54px] font-extrabold leading-none tracking-tight">
              AWARDS &
              <span className="block text-[#E61B23] mt-1.5">RECOGNITION</span>
            </h1>

            {/* Red Horizontal Divider Line */}
            <div className="w-16 h-[2px] bg-[#E61B23] my-6"></div>

            <p className="text-gray-300 max-w-xl text-[13px] sm:text-sm md:text-[14px] leading-relaxed">
              Our commitment to quality, innovation, and excellence has been
              recognized by industry leaders and organizations. These awards
              inspire us to continue delivering the best.
            </p>
          </motion.div>
        </div>

        {/* Absolute Image Column on the Right (w-[50%], object-contain keeps trophy size perfect) */}
        <div className="relative w-full md:absolute md:right-0 md:top-0 md:w-[50%] h-[260px] md:h-full z-10 overflow-hidden select-none">
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .awards-mask-container {
              mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.15) 15%, black 45%);
              -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.15) 15%, black 45%);
            }
            @media (max-width: 767px) {
              .awards-mask-container {
                mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.15) 20%, black 55%);
                -webkit-mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.15) 20%, black 55%);
              }
            }
          `,
            }}
          />
          <motion.img
            src="/awards.png"
            alt="Awards & Recognition"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-contain object-center md:object-right awards-mask-container"
          />
        </div>

        {/* Linear Gradient Overlay for seamless blending (dark to transparent) */}
        <div className="awards-hero-gradient absolute inset-0 z-10 pointer-events-none hidden md:block" />
      </section>

      {/* Grid List Section */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
            <FaAward className="text-[#E61B23]" />
            <span>Honoring Our Achievers</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl">
            A celebration of milestones, dedication, and the core engineering
            standards that drive our legacy forward.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {awardsList.map((item, index) => (
            <motion.div
              key={item.title + "-" + index}
              variants={cardVariants}
              whileHover={{
                y: -4,
                borderColor: "rgba(230, 27, 35, 0.3)",
                boxShadow:
                  "0 8px 16px -6px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedAward(item)}
              className="group bg-white rounded-xl border border-gray-100 shadow-xs hover:border-[#E61B23]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none overflow-hidden h-[330px] w-full max-w-[280px] mx-auto"
            >
              <div className="flex flex-col flex-grow overflow-hidden">
                {/* Card Image Container */}
                <div className="relative w-full h-[145px] bg-gray-50 overflow-hidden border-b border-gray-100/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  {/* Floating Trophy Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs shadow-sm rounded-md w-8 h-8 flex items-center justify-center border border-gray-100 z-10">
                    <FaTrophy className="text-[#E61B23] text-sm" />
                  </div>
                </div>

                {/* Content Padding Container */}
                <div className="p-4 pt-3 pb-2 flex-grow flex flex-col justify-start overflow-hidden">
                  {/* Award Heading */}
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2 min-h-[36px] flex items-center">
                    {item.title}
                  </h3>

                  {/* Recipient */}
                  <p className="text-[11px] text-gray-500 font-bold mb-1.5 flex items-center gap-1">
                    <FaUser className="text-[#E61B23]/70 text-[9px]" />
                    <span className="truncate">{item.recipient}</span>
                  </p>

                  {/* Award Description */}
                  <p className="text-gray-600 text-[11px] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Award Dates */}
              <div className="px-4 py-2.5 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-semibold mt-auto">
                <div className="flex items-center gap-1.5">
                  <FaCalendarAlt className="text-gray-400 text-[10px]" />
                  <span>{item.date}</span>
                </div>
                <span className="text-[#E61B23] text-[9px] uppercase font-bold tracking-wider opacity-90 group-hover:text-red-700 transition-colors">
                  Details
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full overflow-y-auto md:overflow-hidden shadow-2xl relative cursor-default border border-gray-100 max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 md:p-2 transition-colors z-20 cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <title>Close</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row h-full md:max-h-[85vh]">
                {/* Image side - fits full height, contains certificate without cutting text */}
                <div className="w-full md:w-3/5 bg-gray-950 flex items-center justify-center p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-100 relative min-h-[220px] md:min-h-full aspect-[4/3] md:aspect-auto">
                  <Image
                    src={selectedAward.image}
                    alt={selectedAward.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-contain p-4"
                    priority
                  />
                </div>

                {/* Details side */}
                <div className="w-full md:w-2/5 p-5 md:p-8 flex flex-col justify-between bg-white md:overflow-y-auto flex-grow">
                  <div>
                    {/* Floating-style trophy badge & text */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center border border-red-100/50">
                        <FaTrophy className="text-[#E61B23] text-lg" />
                      </div>
                      <span className="text-[#E61B23] uppercase tracking-widest text-[11px] font-bold">
                        Award Achievement
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug mb-3">
                      {selectedAward.title}
                    </h3>

                    {/* Recipient */}
                    <div className="flex items-center gap-2 text-sm text-gray-700 font-bold mb-6">
                      <FaUser className="text-[#E61B23]" />
                      <span>{selectedAward.recipient}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                      {selectedAward.desc}
                    </p>
                  </div>

                  {/* Footer metadata */}
                  <div className="border-t border-gray-100 pt-6 flex items-center justify-between text-xs text-gray-500 font-bold">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" />
                      <span>{selectedAward.date}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedAward(null)}
                      className="text-[#E61B23] hover:text-red-700 transition-colors font-bold cursor-pointer"
                    >
                      Close View
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </main>
  );
}
