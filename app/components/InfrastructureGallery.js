"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import imgOffice from "../../public/office work.jpg";
import imgIn3 from "../../public/in3.png";
import imgIn2 from "../../public/in2.png";
import imgIn1 from "../../public/in1.png";
import imgInfra1 from "../../public/infra1.jpg";
import imgInfra2 from "../../public/infra2.jpg";
import imgInfra3 from "../../public/infra3.jpg";
import imgIng2 from "../../public/ing2.jpg";
import imgIng3 from "../../public/ing3.jpg";
import imgInf4 from "../../public/inf4.jpg";
import imgIng5 from "../../public/ing5.jpg";
import imgIng6 from "../../public/ing6.jpg";
import imgIng7 from "../../public/ing7.jpg";
import imgIng9 from "../../public/ing9.jpg";
import imgIng10 from "../../public/ing10.jpg";

const allImages = [
  { src: imgOffice, alt: 'Office workspace' },
  { src: imgIn1, alt: 'Infrastructure view 1' },
  { src: imgIn2, alt: 'Infrastructure view 2' },
  { src: imgIn3, alt: 'Infrastructure view 3' },
  { src: imgInfra1, alt: 'Infrastructure facility 1' },
  { src: imgInfra2, alt: 'Infrastructure facility 2' },
  { src: imgInfra3, alt: 'Infrastructure facility 3' },
  { src: imgIng2, alt: 'Engineering setup 2' },
  { src: imgIng3, alt: 'Engineering setup 3' },
  { src: imgInf4, alt: 'Infrastructure detail' },
  { src: imgIng5, alt: 'Engineering setup 5' },
  { src: imgIng6, alt: 'Engineering setup 6' },
  { src: imgIng7, alt: 'Engineering setup 7' },
  { src: imgIng9, alt: 'Engineering setup 9' },
  { src: imgIng10, alt: 'Engineering setup 10' },
];

export default function InfrastructureGallery({ adminImages = null }) {
  // Use admin provided images if available, otherwise fallback to our highly-curated static images
  const displayImages = adminImages && adminImages.length > 0 ? adminImages : allImages;

  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, displayImages.length));
  };

  const visibleImages = displayImages.slice(0, visibleCount);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] lg:pt-[100px] pb-[100px]">
      <div className="text-center mb-[50px] lg:mb-[60px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2545] mb-4 tracking-tight">
          Infrastructure Gallery
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore our state-of-the-art infrastructure, advanced manufacturing facilities, testing laboratories, engineering expertise, and project execution capabilities.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4">
        <AnimatePresence>
          {visibleImages.map((image, index) => {
            const isStatic = typeof image.src === 'object';

            return (
              <motion.div
                key={isStatic ? index : image.src} // Use stable string URL for dynamic, index for static
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index >= 12 ? (index - 12) * 0.1 : 0 }}
                className="break-inside-avoid mb-3 md:mb-4 relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.05, filter: 'brightness(1.05)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative w-full h-auto"
                >
                  <Image
                    src={image.src}
                    alt={image.alt || "Infrastructure Photo"}
                    {...(isStatic ? { placeholder: "blur" } : { width: 800, height: 800 })}
                    className="w-full h-auto object-cover rounded-2xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {visibleCount < displayImages.length ? (
        <div className="mt-12 flex justify-center">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-[#0B2545] hover:bg-[#133c70] text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Load More
          </button>
        </div>
      ) : (
        <div className="mt-16 mb-8 flex justify-center">
          <Link
            href="/gallery"
            className="px-10 py-3.5 bg-transparent border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white font-semibold rounded-full shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View More
          </Link>
        </div>
      )}
    </section>
  );
}
