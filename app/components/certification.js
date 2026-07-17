"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 lg:px-20 text-center">
      {/* HEADING */}
      <p className="text-red-600 text-2xl font-bold tracking-widest">
        <span className="text-2xl text-black">CERTIFICATIONS</span>
      </p>

      <h2 className="text-3xl lg:text-5xl font-bold mt-3">
        Certified. <span className="text-red-600">Trusted.</span> Committed.
      </h2>

      <p className="text-gray-500 mt-4 font-bold max-w-2xl mx-auto text-sm">
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
              staggerChildren: 0.15
            }
          }
        }}
      >
        {/* ALL IMAGE CARDS */}
        <Card img="/cer1.png" />
        <Card img="/cer2.png" />
        <Card img="/cer3.png" />
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      whileHover={{ 
        scale: 1.04,
        y: -6,
        shadow: "0 25px 50px -12px rgba(230, 27, 35, 0.25)",
        transition: { duration: 0.25 }
      }}
      className="bg-white border-2 border-red-500 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
    >
      <Image
        src={img}
        alt="certificate"
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
