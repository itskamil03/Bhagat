"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const data = [
  {
    logo: "/j1.png",
    text: `"Bhagat Engineering completed our substation project on schedule and with zero safety incidents. Their attention to detail is unmatched."`,
    name: "Rajesh Kumar",
    role: "Chief Engineer, State Power Board",
    avatar: "/k1.jpg",
  },
  {
    logo: "/j4.png",
    text: `"Their railway electrification work has been reliable for over a decade. We trust them with our most critical infrastructure."`,
    name: "Vikram Singh",
    role: "Operations Director, Indian Railways",
    avatar: "/k2.jpg",
  },
  {
    logo: "/j5.png",
    text: `"Professional, knowledgeable, and committed to excellence. They transformed our facility's electrical systems completely."`,
    name: "Priya Sharma",
    role: "Plant Manager, Industrial Manufacturing",
    avatar: "/k3.jpg",
    invertOnActive: true,
  },
];

export default function Client() {
  const [active, setActive] = useState(null);
  const ref = useRef();

  // click outside reset
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current.contains(e.target)) {
        setActive(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-6">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Client voices</h2>
        <p className="text-base md:text-lg text-gray-600">What our partners say</p>
      </div>

      {/* CARDS */}
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {data.map((item, i) => {
          const isActive = active === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : i)}
              className="relative border border-red-500 overflow-hidden cursor-pointer transition-all duration-500 h-[390px] rounded-xl shadow-sm testimonial-card-desktop"
            >
              {/* OVERLAY */}
              <div
                className={`absolute bottom-0 left-0 w-full bg-red-600 transition-all duration-500 z-10
                ${isActive ? "h-full" : "h-0"}`}
              />

              {/* CONTENT */}
              <div
                className={`relative z-20 p-8 flex flex-col justify-between h-full transition-colors duration-500
                ${isActive ? "text-white" : "text-gray-900"}`}
              >
                {/* LOGO */}
                <div className="relative w-[140px] h-[40px] mb-6">
                  <Image
                    src={item.logo}
                    alt="logo"
                    fill
                    className="object-contain transition-all duration-500"
                    style={{
                      filter:
                        isActive && item.invertOnActive
                          ? "brightness(0) invert(1)"
                          : "none",
                    }}
                  />
                </div>

                {/* TEXT */}
                <h3 className="mb-6 leading-relaxed font-semibold">
                  {item.text}
                </h3>

                {/* USER */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12">
                    <Image
                      src={item.avatar}
                      alt="user"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-sm opacity-80 font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* LINK */}
                <p className="flex items-center gap-2 font-medium">
                  Read case study →
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* SLIDER BUTTON (UI ONLY) */}
      {/* <div className="flex justify-center mt-10">
        <div className="bg-black text-white px-6 py-3 rounded-full flex gap-6 items-center shadow-lg">
          <button 
            onClick={() => setActive((prev) => (prev === null || prev === 0 ? data.length - 1 : prev - 1))}
            className="cursor-pointer hover:text-red-500 transition text-xl font-bold px-2"
          >
            ‹
          </button>
          <button 
            onClick={() => setActive((prev) => (prev === null || prev === data.length - 1 ? 0 : prev + 1))}
            className="cursor-pointer hover:text-red-500 transition text-xl font-bold px-2"
          >
            ›
          </button>
        </div>
      </div> */}
    </section>
  );
}
