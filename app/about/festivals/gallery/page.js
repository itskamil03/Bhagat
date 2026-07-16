"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import { FaCamera, FaChevronLeft, FaTimes } from "react-icons/fa";
import Contact from "../../../components/contact";

const festivalGalleries = {
  puja: {
    title: "Vishwakarma Puja Celebration",
    description:
      "As engineers and creators, Vishwakarma Puja holds special significance at Bhagat Engineering Works. We clean and worship our machines, tools, and heavy erection gears, followed by community feasts with our site workers, engineers, and executive teams.",
    date: "September 17, Annual",
    mainImage: "/fi1.jpg",
    images: [
      "/fi1.jpg",
      "/fi1.jpg",
      "/fi1.jpg",
      "/fi1.jpg",
      "/fi1.jpg",
      "/fi1.jpg",
    ],
  },
  diwali: {
    title: "Diwali & Corporate Milan",
    description:
      "Celebrating the festival of lights with sweets distribution, office lighting, and an annual milan ceremony that brings families of our employees together to honor our year-round accomplishments.",
    date: "October/November, Annual",
    mainImage: "/fi2.jpg",
    images: [
      "/fi2.jpg",
      "/fi2.jpg",
      "/fi2.jpg",
      "/fi2.jpg",
      "/fi2.jpg",
      "/fi2.jpg",
    ],
  },
  patriot: {
    title: "Independence Day and Republic Day",
    description:
      "Flag hoisting ceremonies at our corporate head office in Patna and major railway site substations across India, commemorating our pride in building the country's utility infrastructure.",
    date: "National Festivals",
    mainImage: "/fi3.jpg",
    images: [
      "/fi3.jpg",
      "/fi3.jpg",
      "/fi3.jpg",
      "/fi3.jpg",
      "/fi3.jpg",
      "/fi3.jpg",
    ],
  },
  chhath: {
    title: "Chhath Puja Celebration",
    description:
      "Deeply rooted in the cultural fabric of Bihar, we celebrate Chhath Puja with spiritual devotion. We support our team members with festive breaks, distribute traditional offerings (Thekua), and organize community support camps at the Ganga ghats in Patna.",
    date: "October/November, Annual",
    mainImage: "/fi4.jpg",
    images: [
      "/fi4.jpg",
      "/fi4.jpg",
      "/fi4.jpg",
      "/fi4.jpg",
      "/fi4.jpg",
      "/fi4.jpg",
    ],
  },
  holi: {
    title: "Holi & Spring Milan",
    description:
      "Welcoming the spring season with vibrant colors, organic gulal, traditional music, and special festive delicacies. Our offices and sites come together for a special pre-Holi milan, reinforcing our team bonds.",
    date: "March, Annual",
    mainImage: "/fi5.jpg",
    images: [
      "/fi5.jpg",
      "/fi5.jpg",
      "/fi5.jpg",
      "/fi5.jpg",
      "/fi5.jpg",
      "/fi5.jpg",
    ],
  },
};

function GalleryContent() {
  const searchParams = useSearchParams();
  const festivalKey = searchParams.get("festival") || "puja";

  const queryTitle = searchParams.get("title");
  const queryDesc = searchParams.get("description");
  const queryImage = searchParams.get("image");

  let gallery = festivalGalleries[festivalKey];

  if (queryTitle && queryImage) {
    gallery = {
      title: queryTitle,
      description: queryDesc || "",
      date: "Event Gallery",
      mainImage: queryImage,
      images: [
        queryImage,
        queryImage,
        queryImage,
        queryImage,
        queryImage,
        queryImage,
      ],
    };
  } else if (!gallery) {
    gallery = festivalGalleries.puja;
  }

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  return (
    <main className="min-h-screen bg-gray-100 font-sans">
      {/* ================= HERO SECTION (MATCHING MAIN FESTIVAL HERO DESIGN) ================= */}
      <section className="bg-[#17162b] text-white relative overflow-hidden w-full min-h-[473px] flex flex-col md:block">
        {/* Background Image Container on the Right (Uses selected festival's mainImage) */}
        <div className="relative w-full md:absolute md:right-0 md:top-0 md:w-1/2 h-[260px] md:h-full z-10 pointer-events-none select-none overflow-hidden">
          <Image
            src={gallery.mainImage}
            alt={`${gallery.title} background`}
            fill
            className="object-cover object-center md:object-right"
            priority
          />
          {/* Crimson & Dark Navy Gradient Blend Overlay matching main page */}
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,22,43,1) 0%, rgba(95,16,26,0.85) 15%, rgba(130,25,35,0.4) 40%, rgba(23,22,43,0) 75%)",
            }}
          />
          <div
            className="absolute inset-y-0 left-0 w-full md:w-1/3 pointer-events-none hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(23,22,43,1) 0%, rgba(23,22,43,0) 100%)",
            }}
          />
        </div>

        <div className="max-w-[1240px] mx-auto w-full relative z-20 grid md:grid-cols-2 items-center pl-6 md:pl-0 pr-6 md:pr-8 md:h-[473px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-2 py-12 md:py-0 z-20 flex flex-col justify-center"
          >
            {/* Breadcrumbs */}
            <nav className="text-xs md:text-sm text-gray-400 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <span>&gt;</span>
              <Link
                href="/gallery"
                className="hover:text-red-500 transition-colors"
              >
                Gallery
              </Link>
              <span>&gt;</span>
              <Link
                href="/about/festivals"
                className="hover:text-red-500 transition-colors"
              >
                Festivals & Culture
              </Link>
              <span>&gt;</span>
              <span className="text-white">Gallery</span>
            </nav>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FaCamera className="text-[#E61B23] text-xs" />
                <span className="text-red-500 uppercase tracking-wider text-xs font-semibold">
                  Event Gallery
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mt-1 leading-tight">
                {gallery.title}
              </h1>

              <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed mt-4">
                {gallery.description}
              </p>

              <Link
                href="/about/festivals"
                className="mt-6 flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 transition-colors font-bold group w-fit decoration-none"
              >
                <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
                <span>Back to Festivals</span>
              </Link>
            </div>
          </motion.div>

          {/* Spacer Column */}
          <div className="hidden md:block h-[473px]" />
        </div>
      </section>

      {/* Grid Images Section */}
      <section className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {gallery.images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => setActiveImageIndex(index)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-200 cursor-zoom-in transition-all duration-300 relative aspect-[4/3]"
            >
              <Image
                src={src}
                alt={`${gallery.title} moment ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-xs z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2.5 transition-colors z-20 cursor-pointer shadow-md"
              aria-label="Close lightbox"
            >
              <FaTimes className="text-lg" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[70vh] md:h-[80vh] flex items-center justify-center select-none"
            >
              <Image
                src={gallery.images[activeImageIndex]}
                alt={`${gallery.title} full view`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Prev/Next arrows */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/50 backdrop-blur-xs border border-white/10 px-4 py-2 rounded-full text-xs text-white z-20 font-medium">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) =>
                    prev === 0 ? gallery.images.length - 1 : prev - 1,
                  );
                }}
                className="hover:text-red-500 transition-colors font-bold cursor-pointer px-2"
              >
                Prev
              </button>
              <span className="text-gray-400">
                {activeImageIndex + 1} / {gallery.images.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) =>
                    prev === gallery.images.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="hover:text-red-500 transition-colors font-bold cursor-pointer px-2"
              >
                Next
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
    </main>
  );
}

export default function FestivalGalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-500 text-sm font-semibold">
          Loading gallery...
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
