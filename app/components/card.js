"use client";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

export default function Card({ img, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
      {/* IMAGE */}
      <Image
        src={img}
        alt="card"
        width={500}
        height={500}
        className="w-full h-[420px] object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* TEXT CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        {/* ICON */}
        <div className="mb-3 w-10 h-10 flex items-center justify-center rounded-full bg-black">
          <span className="text-white text-2xl">
            <FaRegUserCircle />
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>

        {/* LINE */}
        <div className="w-10 h-[2px] bg-white mb-3"></div>

        {/* DESC */}
        <p className="text-gray-200 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
