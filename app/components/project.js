"use client";
import Image from "next/image";

const data = [
  {
    title: "Power Infrastructure",
    desc: "Substation erection, transformer support and high-voltage electrical networks for industrial and commercial sites.",
    img: "/pk.png",
  },
  {
    title: "Industrial Installations",
    desc: "Cable laying, control panels, fabrication and commissioning for process systems and operational facilities.",
    img: "/pa1.png",
  },
  {
    title: "Energy Efficient Lighting",
    desc: "LED, facade and acrylic lighting systems designed for safety, visibility, low maintenance and reduced energy use.",
    img: "/pk2.png",
  },
];

export default function Project() {
  return (
    <section className="w-full bg-[#f4f6f8] py-14 px-6 md:px-12 mt-4">
      {/* TOP HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-green-600 tracking-widest text-sm font-semibold mb-2">
            PROJECTS
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Built for performance, delivered with discipline.
          </h1>
        </div>

        <button className="hidden md:block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
          Start a Requirement
        </button>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[220px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-2">
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
      </div>
    </section>
  );
}
