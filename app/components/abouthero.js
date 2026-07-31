"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { getAboutHeads } from "@/lib/api/aboutHead";

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
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getAboutHeads();
        if (data && data.length > 0) {
          setAboutData(data[0]);
        }
      } catch (err) {
        console.error("Failed to load about head:", err);
      }
    }
    loadData();
  }, []);

  const apiImages = aboutData?.images?.map(img => img.image) || [];
  const slideshowImages = apiImages.length > 0 ? apiImages : ["/dw1.jpg", "/fi2.jpg", "/fi3.jpg"];
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (slideshowImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 px-6 sm:px-10 lg:px-6 pt-16 pb-12 lg:pb-12 items-center [@media(width:1680px)]:max-w-[1550px] [@media(width:1680px)]:pt-28">
        {/* LEFT CONTENT */}
        <div className="w-full">
          <p className="text-[#EB2828] font-bold text-base sm:text-lg lg:text-xl mb-2 lg:mb-1 [@media(width:1680px)]:text-2xl [@media(width:1680px)]:mb-4">ABOUT US</p>

          <h1 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[60px] font-extrabold leading-[1.1] text-[#17212B] tracking-tight [@media(width:1680px)]:text-[5rem]">
            {aboutData?.title ? (
              aboutData.title.includes('<') ? (
                <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
              ) : (
                <>
                  <span className="lg:whitespace-nowrap">
                    {aboutData.title.split('\n')[0]}
                  </span>
                  {aboutData.title.split('\n').length > 1 && (
                    <>
                      <br />
                      <span className="text-[#EB2828]">
                        {aboutData.title.split('\n').slice(1).join('\n')}
                      </span>
                    </>
                  )}
                </>
              )
            ) : (
              <>
                <span className="lg:whitespace-nowrap">Engineering Excellence.</span><br />
                <span className="text-[#EB2828]">Built on Trust</span>.
              </>
            )}
          </h1>

          <p className="mt-4 lg:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed [@media(width:1680px)]:text-2xl [@media(width:1680px)]:mt-10 [@media(width:1680px)]:leading-relaxed">
            {aboutData?.description ? (
              <span dangerouslySetInnerHTML={{ __html: aboutData.description }} />
            ) : (
              "For nearly five decades, Bhagat Engineering Works has delivered integrated electrical, mechanical, and infrastructure engineering solutions with precision, reliability, and innovation. From power infrastructure and railway electrification to turnkey engineering projects, we continue to power India's progress with uncompromising quality."
            )}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-8 lg:mt-10 [@media(width:1680px)]:mt-16 [@media(width:1680px)]:gap-8">
            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl py-5 px-3 flex flex-col justify-center items-center text-center border border-gray-50 [@media(width:1680px)]:p-8 [@media(width:1680px)]:py-10">
              <h2 className="text-[#EB2828] text-2xl lg:text-3xl font-extrabold mb-1 [@media(width:1680px)]:text-5xl">
                <Counter target={48} suffix="+" />
              </h2>
              <p className="text-[11px] lg:text-xs font-bold text-[#17212B] [@media(width:1680px)]:text-xl [@media(width:1680px)]:mt-3">Years of Legacy</p>
            </div>

            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl py-5 px-3 flex flex-col justify-center items-center text-center border border-gray-50 [@media(width:1680px)]:p-8 [@media(width:1680px)]:py-10">
              <h2 className="text-[#EB2828] text-2xl lg:text-3xl font-extrabold mb-1 [@media(width:1680px)]:text-5xl">
                <Counter target={100} suffix="+ Cr" />
              </h2>
              <p className="text-[11px] lg:text-xs font-bold text-[#17212B] [@media(width:1680px)]:text-xl [@media(width:1680px)]:mt-3">Annual Turnover</p>
            </div>

            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl py-5 px-3 flex flex-col justify-center items-center text-center border border-gray-50 [@media(width:1680px)]:p-8 [@media(width:1680px)]:py-10">
              <h2 className="text-[#EB2828] text-2xl lg:text-3xl font-extrabold mb-1 [@media(width:1680px)]:text-5xl">
                <Counter target={500} suffix="+" />
              </h2>
              <p className="text-[11px] lg:text-xs font-bold text-[#17212B] [@media(width:1680px)]:text-xl [@media(width:1680px)]:mt-3">Skilled Professionals</p>
            </div>

            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl py-5 px-3 flex flex-col justify-center items-center text-center border border-gray-50 [@media(width:1680px)]:p-8 [@media(width:1680px)]:py-10">
              <h2 className="text-[#EB2828] text-2xl lg:text-3xl font-extrabold mb-1 [@media(width:1680px)]:text-5xl">
                <Counter target={250} suffix="+" />
              </h2>
              <p className="text-[11px] lg:text-xs font-bold text-[#17212B] [@media(width:1680px)]:text-xl [@media(width:1680px)]:mt-3">Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDESHOW */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] rounded-xl overflow-hidden shadow-lg mt-8 lg:mt-0 [@media(width:1680px)]:h-[700px]">
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
