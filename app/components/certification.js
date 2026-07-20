"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 lg:px-20 text-center">
      {/* HEADING */}
      <p className="text-red-600 text-lg sm:text-xl lg:text-2xl font-bold tracking-widest">
        <span className="text-black">CERTIFICATIONS</span>
      </p>

      <h2 className="text-[28px] leading-tight min-[390px]:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 lg:mt-3">
        Certified. <span className="text-red-600">Trusted.</span> Committed.
      </h2>

      <p className="text-gray-500 mt-3 md:mt-4 font-bold max-w-2xl mx-auto text-sm md:text-base">
        Our internationally recognized certifications reflect our commitment to
        quality management, safety standards, operational excellence, and
        continuous improvement.
      </p>

      {/* CARDS */}
      <motion.div
        className="mt-12 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* ALL IMAGE CARDS */}
        <Card img="/cer2_page-0001.jpg" />
        <Card img="/cer1_page-0001.jpg" />
        <Card img="/cer3_page-0001.jpg" />
      </motion.div>
    </section>
  );
}

/* CARD COMPONENT */
function Card({ img }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      whileHover={{
        scale: 1.04,
        y: -6,
        shadow: "0 25px 50px -12px rgba(230, 27, 35, 0.25)",
        transition: { duration: 0.25 },
      }}
      className="group bg-white border-2 border-red-500 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer relative w-full aspect-[4/3]"
    >
      <Image
        src={img}
        alt="certificate"
        fill
        className="object-cover transition-all duration-300 group-hover:object-contain bg-white"
        sizes="(max-w-768px) 100vw, 33vw"
      />
    </motion.div>
  );
}
