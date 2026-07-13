"use client";

export default function Banner() {
  return (
    <div className="w-full grid md:grid-cols-2 h-[450px]">
      {/* ================= LEFT SIDE ================= */}
      <div
        className="relative flex items-center"
        style={{
          backgroundImage: "url('/d1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-white pl-16 pr-10 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            “We aim to be the leading provider of highest-quality
            techno-commercial solutions for all electrical projects.”
          </h1>

          <p className="mt-4 text-sm text-gray-300">Bhagat Engineering Works</p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="relative bg-[#f5f5f5] flex items-center overflow-hidden">
        {/* Background faded image */}
        <div
          className="absolute inset-0 bg-right bg-contain bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/image 18.png')",
          }}
        />

        {/* 🔴 CURVED RED STRIP (FIXED) */}
        <div className="absolute left-0 top-0 h-full w-[90px]">
          <svg
            viewBox="0 0 90 420"
            preserveAspectRatio="none"
            className="w-1/2 min-h-full"
          >
            <path
              d="
                M0,0 
                L100,0 
                L100,320 
                Q100,370 60,400 
                L0,450 
                Z
              "
              fill="#b91c1c"
            />
          </svg>

          {/* pattern inside red */}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 pl-28 pr-10 w-full">
          <p className="text-red-600 text-sm font-semibold pb-4">
            Why Choose Us?
          </p>
          <div className=" w-12 h-[3px] bg-red-600"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Engineering Excellence.
            <br />
            <span className="text-red-600">Built on Trust.</span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm max-w-lg">
            Seasoned electrical and mechanical engineering expertise, authorized
            channel partnerships, manufacturer tie-ups and an economical
            execution model built around safety, reliability and quality.
          </p>

          {/* CARD */}
          <div className="mt-8 bg-white rounded-xl shadow-md flex items-center w-fit overflow-hidden">
            {/* BIG 01 */}
            <div className="bg-red-700 text-white text-[70px] font-bold px-4 py-2 leading-none">
              01
            </div>

            {/* TEXT */}
            <div className="px-6 py-4 border-l">
              <p className="text-gray-800 font-semibold">
                Quality management systems
                <br />
                that guarantee consistency
              </p>
            </div>
          </div>
        </div>

        {/* 🔺 BUTTON */}
        <div className="absolute bottom-0 right-0">
          <button className="bg-red-700 text-white px-8 py-4 text-lg font-medium relative">
            Next →
            <span className="absolute left-[-40px] bottom-0 w-0 h-0 border-r-[40px] border-r-red-700 border-t-[40px] border-t-transparent"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
