export default function Misson() {
  return (
    <>
      {/* ==========================================
          SECTION 1: OUR MISSION
          ========================================== */}
      <section className="w-full bg-[#FDF7F8] px-6 relative overflow-hidden">
        {/* Background blueprint image for mobile/tablet (opacity 15%) */}
        <img
          src="/image%2041.png"
          alt="bg-right-mobile"
          className="absolute right-[-120px] top-12 w-[320px] sm:w-[420px] opacity-15 md:hidden pointer-events-none select-none mix-blend-multiply"
        />

        {/* Desktop Blueprint Image on the Right */}
        <img
          src="/ov4.png"
          alt="Mission Blueprint"
          className="
            absolute
            top-[-1%]
            right-0
            h-[120%]
            w-[75%]
            max-w-[1000px]
            object-contain
            object-right-bottom
            opacity-80
            mix-blend-multiply
            pointer-events-none
            select-none
            hidden
            md:block
            z-0
          "
        />

        <div className="max-w-[1400px] mx-auto md:h-[298px] py-8 md:py-0 relative flex items-center w-full z-10">
          {/* Left Content Column */}
          <div className="max-w-[620px] flex flex-col justify-center text-left">
            <p className="text-[#C8102E] font-bold text-sm sm:text-base uppercase tracking-widest mb-3">
              MISSION & VISION
            </p>

            <h2 className="text-3xl md:text-[44px] font-extrabold leading-tight text-[#0B1530]">
              Our Mission
            </h2>

            {/* red underline */}
            <div className="w-[44px] h-[3px] bg-[#E53935] mt-3 mb-6 rounded-full"></div>

            <p className="text-[#5C6270] leading-[1.6] text-lg md:text-[18px]">
              To deliver innovative, reliable, and sustainable engineering
              solutions that create lasting value for our clients while
              contributing to India's industrial and infrastructure development
              through technical excellence and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: OUR VISION
          ========================================== */}
      <section className="w-full bg-[#FDF7F8] py-8 px-6 relative overflow-hidden border-t border-gray-100">
        {/* Background blueprint image for mobile/tablet (opacity 15%) */}
        <img
          src="/image%2041.png"
          alt="bg-left-mobile"
          className="absolute left-[-120px] bottom-12 w-[320px] sm:w-[420px] opacity-15 md:hidden scale-x-[-1] pointer-events-none select-none mix-blend-multiply"
        />

        {/* Desktop Blueprint Image on the Left */}
        <img
          src="/ov4.png"
          alt="Vision Blueprint"
          className="
            absolute
            top-[-1%]
            left-0
            h-[120%]
            w-[75%]
            max-w-[1000px]
            object-contain
            object-right-bottom
            opacity-80
            scale-x-[-1]
            mix-blend-multiply
            pointer-events-none
            select-none
            hidden
            md:block
            z-0
          "
        />

        <div className="max-w-[1400px] mx-auto flex flex-col gap-6 md:gap-8 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Desktop cropped blueprint image spaceholder (extends left) */}
            <div className="order-2 md:order-1 relative h-[164px] w-full overflow-visible hidden md:block select-none pointer-events-none"></div>

            <div className="order-1 md:order-2 flex flex-col justify-center">
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
    </>
  );
}
