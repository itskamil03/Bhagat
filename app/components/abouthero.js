import Image from "next/image";

export default function Abouthero() {
  return (
    <section className="w-full min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 px-6 pt-16 mb-0 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-500 font-bold text-xl mb-1">ABOUT US</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Engineering Excellence.
            <br />
            <span className="text-red-500">Built on Trust.</span>
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
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
              <h2 className="text-red-500 text-xl font-bold">48+</h2>
              <p className="text-sm text-gray-600">Years of Legacy</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-red-500 text-xl font-bold">100+ Cr</h2>
              <p className="text-sm text-gray-600">Annual Turnover</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-red-500 text-xl font-bold">500+</h2>
              <p className="text-sm text-gray-600">Skilled Professionals</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h2 className="text-red-500 text-xl font-bold">250+</h2>
              <p className="text-sm text-gray-600">Satisfied Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/dw1.jpg" // 👈 apna image yaha rakho
            alt="about"
            fill
            className="object-cover"
          />

          {/* LEFT FADE EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/15 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
