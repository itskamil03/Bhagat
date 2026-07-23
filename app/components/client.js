"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const defaultData = [
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
  {
    logo: "/j1.png",
    text: `"Exceptional speed and precision. The entire infrastructure was modernized without interrupting our daily operations."`,
    name: "Amit Desai",
    role: "Director of Operations",
    avatar: "/k1.jpg",
  },
];

export default function Client() {
  const [data, setData] = useState(defaultData);
  const [active, setActive] = useState(null); // for hover effect
  const ref = useRef();

  // Slider states
  const [scrollIndex, setScrollIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Resize listener
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, data.length - itemsPerPage);

  const slidePrev = () => setScrollIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const slideNext = () => setScrollIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!touchStart) return;
    const currentX = e.targetTouches[0].clientX;
    const deltaX = currentX - touchStart;

    let finalOffset = deltaX;
    if (scrollIndex === 0 && deltaX > 0) {
      finalOffset = deltaX * 0.3;
    } else if (scrollIndex === maxIndex && deltaX < 0) {
      finalOffset = deltaX * 0.3;
    }
    setDragOffset(finalOffset);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || dragOffset === 0) {
      setTouchStart(null);
      setDragOffset(0);
      return;
    }

    const distance = dragOffset;
    const isLeftSwipe = distance < -minSwipeDistance;
    const isRightSwipe = distance > minSwipeDistance;

    let nextIndex = scrollIndex;
    if (isLeftSwipe && scrollIndex < maxIndex) {
      nextIndex = scrollIndex + 1;
    } else if (isRightSwipe && scrollIndex > 0) {
      nextIndex = scrollIndex - 1;
    }

    setScrollIndex(nextIndex);
    setTouchStart(null);
    setDragOffset(0);
  };

  useEffect(() => {
    const API_ENDPOINT = ""; // TODO: Provide the API endpoint here

    async function fetchClients() {
      if (!API_ENDPOINT) return;
      try {
        const res = await fetch(API_ENDPOINT);
        if (res.ok) {
          const apiData = await res.json();
          if (Array.isArray(apiData)) {
            setData(apiData);
          } else if (apiData.clients && Array.isArray(apiData.clients)) {
            setData(apiData.clients);
          }
        }
      } catch (error) {
        console.error("Failed to fetch dynamic clients:", error);
      }
    }
    fetchClients();
  }, []);

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
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .client-slider-track {
          transform: var(--slider-transform);
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .client-slider-track {
            transform: translateX(calc(-1 * min(var(--scroll-index), var(--max-index-tablet)) * (50% + 20px))) !important;
          }
        }
        @media (min-width: 1024px) {
          .client-slider-track {
            transform: translateX(calc(-1 * min(var(--scroll-index), var(--max-index-desktop)) * (33.333% + 13.33px))) !important;
          }
        }
      `,
        }}
      />

      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-12 -mt-[68px]">
        <h2 className="text-3xl md:text-5xl [@media(width:800px)]:text-center [@media(width:1024px)]:text-center font-bold mb-4">Client voices</h2>
        <p className="text-base md:text-lg [@media(width:800px)]:text-center [@media(width:1024px)]:text-center text-gray-600">
          What our partners say
        </p>
      </div>

      {/* CARDS VIEWPORT */}
      <div className="max-w-7xl mx-auto w-full relative">
        <div
          className="w-full overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* TRACK */}
          <div
            ref={ref}
            className={`client-slider-track flex gap-10 ${isDragging
                ? "transition-none"
                : "transition-transform duration-500 ease-out"
              }`}
            style={{
              "--scroll-index": scrollIndex,
              "--max-index-tablet": maxIndex,
              "--max-index-desktop": maxIndex,
              "--slider-transform": isDragging
                ? `translateX(calc(-1 * ${scrollIndex} * (100% + 40px) + ${dragOffset}px))`
                : `translateX(calc(-1 * ${scrollIndex} * (100% + 40px)))`,
            }}
          >
            {data.map((item, i) => {
              const isActive = active === i;

              return (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : i)}
                  className={`w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-26.66px)] flex-shrink-0 relative border border-red-500 overflow-hidden cursor-pointer transition-all duration-500 h-[390px] rounded-xl shadow-sm testimonial-card-desktop ${isActive ? "active" : ""
                    }`}
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

                    {/* LINK */}
                    <p className="flex items-center gap-2 font-medium">
                      Read case study →
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SLIDER BUTTON (UI ONLY - shown if there are more items than fit on the screen) */}
      {maxIndex > 0 && (
        <div className="flex justify-center mt-10">
          <div className="bg-black text-white px-6 py-3 rounded-full flex gap-6 items-center shadow-lg">
            <button
              onClick={slidePrev}
              className="cursor-pointer hover:text-red-500 transition text-xl font-bold px-2"
              aria-label="Previous Clients"
            >
              ‹
            </button>
            <button
              onClick={slideNext}
              className="cursor-pointer hover:text-red-500 transition text-xl font-bold px-2"
              aria-label="Next Clients"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
