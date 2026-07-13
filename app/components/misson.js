export default function Misson() {
  return (
    <section className="w-full bg-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
        {/* TOP - MISSION */}
        <div className="max-w-3xl">
          <p className="text-red-500 font-bold mb-3 text-2xl">
            02 — MISSION & VISION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Mission
          </h2>

          {/* red line */}
          <div className="w-16 h-[3px] bg-red-500 mt-3 mb-6"></div>

          <p className="text-gray-600 leading-relaxed text-xl mb-2">
            To deliver innovative, reliable, and sustainable engineering
            solutions that create lasting value for our clients while
            contributing to India's industrial and infrastructure development
            through technical excellence and integrity.
          </p>
        </div>

        {/* BOTTOM - VISION */}
        <div className="max-w-3xl ml-auto text-left md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Vision
          </h2>

          {/* red line */}
          <div className="w-16 h-[3px] bg-red-500 mt-3 mb-4"></div>

          <p className="text-gray-600 leading-relaxed mb-9">
            To become a globally recognized engineering organization delivering
            world-class electrical and infrastructure solutions driven by
            innovation, quality, and customer trust.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE BACKGROUND IMAGE */}
      <img
        src="/image 18.png"
        alt="bg"
        className="absolute right-0 top-10 w-[500px] opacity-45"
      />

      {/* LEFT SIDE BACKGROUND IMAGE */}
      <img
        src="/image 18.png"
        alt="bg"
        className="absolute left-0 bottom-10 w-[500px] opacity-45"
      />
    </section>
  );
}
