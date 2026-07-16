import Image from "next/image";

import { FaLightbulb, FaUsers, FaStar } from "react-icons/fa";

export default function Founder() {
  return (
    <section className="w-full bg-[#f4f4f4] py-20 px-6">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-500 font-semibold mb-3">
            03 — FOUNDER'S MESSAGE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Vision That <br /> Built a Legacy
          </h2>

          {/* underline */}
          <div className="w-16 h-[3px] bg-red-500 mt-3 mb-6"></div>

          <p className="text-gray-600 leading-relaxed text-sm">
            At Bhagat Engineering Works, our journey has always been driven by
            innovation, engineering excellence, and an unwavering commitment to
            trust. The confidence of our customers and the dedication of our
            people continue to inspire every milestone we achieve.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm mt-4">
            By embracing technological advancements and maintaining the highest
            standards of professionalism, we deliver reliable engineering
            solutions that create long-term value for our clients and industry.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm mt-4">
            As we move forward, our vision remains clear—to build a globally
            respected engineering organization that delivers sustainable
            solutions and creates lasting impact for future generations.
          </p>

          {/* NAME */}
          <h3 className="mt-6 text-red-600 font-semibold">
            Mahavir Prasad Bhagat
          </h3>
          <p className="text-gray-500 text-sm">Founder</p>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-[380px] h-[300px] overflow-hidden rounded-2xl shadow-lg bg-white group">
            <Image
              src="/drim1.png"
              alt="Founder Mahavir Prasad Bhagat"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-5">
          {/* CARD 1 */}
          <div className="bg-red-600 text-white p-5 rounded-xl flex gap-4 items-start shadow-md">
            <span className="text-4xl font-bold opacity-30">01</span>
            <div>
              <h4 className="font-semibold">
                Innovation & Engineering Excellence
              </h4>
              <p className="text-sm mt-2 opacity-90">
                We continuously embrace advanced technologies and modern
                engineering practices.
              </p>
            </div>
            <FaLightbulb className="ml-auto text-xl opacity-80" />
          </div>

          {/* CARD 2 */}
          <div className="bg-red-600 text-white p-5 rounded-xl flex gap-4 items-start shadow-md">
            <span className="text-4xl font-bold opacity-30">02</span>
            <div>
              <h4 className="font-semibold">
                Trust Built Through Relationships
              </h4>
              <p className="text-sm mt-2 opacity-90">
                Our customers, partners, and dedicated workforce drive our
                success.
              </p>
            </div>
            <FaUsers className="ml-auto text-xl opacity-80" />
          </div>

          {/* CARD 3 */}
          <div className="bg-red-600 text-white p-5 rounded-xl flex gap-4 items-start shadow-md">
            <span className="text-4xl font-bold opacity-30">03</span>
            <div>
              <h4 className="font-semibold">A Vision for the Future</h4>
              <p className="text-sm mt-2 opacity-90">
                We aim to become a global benchmark in engineering and
                innovation.
              </p>
            </div>
            <FaStar className="ml-auto text-xl opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
