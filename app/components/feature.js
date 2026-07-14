"use client";
import Image from "next/image";

const data = [
  {
    tag: "INNOVATION",
    title: "Advanced technologies for better service.",
    desc: "Bhagat Engineering Works develops energy-safe, reliable and green systems, including LED lighting, automation and integrated controls.",
    img: "/c1.png",
  },
  {
    tag: "QUALITY",
    title: "Customer expectations, exceeded by miles.",
    desc: "Every project is aligned around timely delivery, high-voltage compliance, technical precision and uncompromising quality standards.",
    img: "/dy3.png",
  },
  {
    tag: "RELIABILITY",
    title: "On-time delivery without compromising quality.",
    desc: "Experienced engineering teams manage projects from schematic development to commissioning, maintenance and support.",
    img: "/d2.png",
  },
];

export default function Feature() {
  return (
    <div className="grid md:grid-cols-3 w-full h-auto md:h-[500px]">
      {data.map((item, i) => (
        <div key={i} className="relative group h-[300px] md:h-full">
          {/* Background Image */}
          <Image src={item.img} alt="bg" fill className="object-cover" />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Red Divider Line */}
          {i !== 0 && (
            <div className="absolute left-0 top-0 h-full w-[2px] bg-red-600 z-10"></div>
          )}

          {/* Content */}
          <div className="relative z-20 p-10 text-white h-full flex flex-col justify-center">
            <p className="text-green-400 text-sm mb-2">{item.tag}</p>

            <h2 className="text-lg md:text-xl font-semibold mb-3">
              {item.title}
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
