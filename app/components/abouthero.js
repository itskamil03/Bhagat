"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

// Reusable animated counter component
function Counter({ target, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Abouthero() {
  const slideshowImages = ["/dw1.jpg", "/fi2.jpg", "/fi3.jpg", "/fi5.jpg"];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  return (
    <section className="w-full lg:min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 px-6 sm:px-10 lg:px-6 pt-16 pb-16 lg:pb-24 items-center">
        {/* LEFT CONTENT */}
        <div className="xl:-ml-[29px]">
          <p className="text-red-500 font-bold text-base sm:text-lg lg:text-xl mb-2 lg:mb-1">ABOUT US</p>

          <h1 className="text-[32px] leading-[1.2] min-[390px]:text-4xl lg:text-5xl font-bold lg:leading-tight text-gray-800">
            Engineering Excellence.
            <br />
            <span className="text-red-500">Built on Trust.</span>
          </h1>

          <p className="mt-4 lg:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
            For nearly five decades, Bhagat Engineering Works has delivered
            integrated electrical, mechanical, and infrastructure engineering
            solutions with precision, reliability, and innovation. From power
            infrastructure and railway electrification to turnkey engineering
            projects, we continue to power India's progress with uncompromising
            quality.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-red-500 text-xl font-bold">
                <Counter target={50} suffix="+" />
              </h2>
              <p className="text-sm text-gray-600">Years of Legacy</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-red-500 text-xl font-bold">
                <Counter target={100} suffix="+ Cr" />
              </h2>
              <p className="text-sm text-gray-600">Annual Turnover</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-red-500 text-xl font-bold">
                <Counter target={500} suffix="+" />
              </h2>
              <p className="text-sm text-gray-600">Skilled Professionals</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-red-500 text-xl font-bold">
                <Counter target={250} suffix="+" />
              </h2>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDESHOW */}
        <div className="relative w-full h-[260px] min-[390px]:h-[300px] md:h-[400px] [@media(width:768px)]:h-[380px] [@media(width:834px)]:h-[400px] [@media(width:1024px)]:h-[450px] lg:h-[450px] xl:h-[500px] rounded-xl overflow-hidden shadow-lg">
          {slideshowImages.map((src, index) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === activeIdx ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={`about slideshow ${index}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* LEFT FADE EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent pointer-events-none z-10 hidden xl:block"></div>
        </div>
      </div>
    </section>
  );
}
