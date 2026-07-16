export default function Misson() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20 relative overflow-hidden">
      {/* Background blueprint images for mobile/tablet (opacity 15%, no text overlap issues) */}
      <img
        src="/image%2041.png"
        alt="bg-right-mobile"
        className="absolute right-[-120px] top-12 w-[320px] sm:w-[420px] opacity-15 md:hidden pointer-events-none select-none mix-blend-multiply"
      />
      <img
        src="/image%2041.png"
        alt="bg-left-mobile"
        className="absolute left-[-120px] bottom-12 w-[320px] sm:w-[420px] opacity-15 md:hidden scale-x-[-1] pointer-events-none select-none mix-blend-multiply"
      />

      <div className="max-w-[1308px] mx-auto flex flex-col gap-6 md:gap-8 relative z-10 w-full">
        {/* ROW 1 - MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 flex flex-col justify-center">
            <p className="text-red-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              MISSION & VISION
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Mission
            </h2>

            {/* red line */}
            <div className="w-16 h-[3px] bg-red-500 mt-3 mb-6 rounded-full"></div>

            <p className="text-gray-650 leading-relaxed text-lg md:text-xl">
              To deliver innovative, reliable, and sustainable engineering
              solutions that create lasting value for our clients while
              contributing to India's industrial and infrastructure development
              through technical excellence and integrity.
            </p>
          </div>

          {/* Desktop cropped blueprint image (extends right) */}
          <div className="md:col-span-6 relative h-[260px] w-full overflow-visible hidden md:block select-none pointer-events-none">
            <img
              src="/image%2041.png"
              alt="Mission Blueprint"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-[140%] max-w-[650px] object-contain opacity-[0.18] mix-blend-multiply"
            />
          </div>
        </div>

        {/* ROW 2 - VISION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Desktop cropped blueprint image (extends left) */}
          <div className="md:col-span-6 relative h-[260px] w-full overflow-visible hidden md:block select-none pointer-events-none order-2 md:order-1">
            <img
              src="/image%2041.png"
              alt="Vision Blueprint"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-[140%] max-w-[650px] object-contain opacity-[0.18] scale-x-[-1] mix-blend-multiply"
            />
          </div>

          <div className="md:col-span-6 flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Vision
            </h2>

            {/* red line */}
            <div className="w-16 h-[3px] bg-red-500 mt-3 mb-6 rounded-full"></div>

            <p className="text-gray-650 leading-relaxed text-lg md:text-xl">
              To become a globally recognized engineering organization
              delivering world-class electrical and infrastructure solutions
              driven by innovation, quality, and customer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
