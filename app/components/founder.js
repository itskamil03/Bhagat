"use client";
import Image from "next/image";
import { FaLightbulb, FaUsers, FaStar } from "react-icons/fa";

export default function Founder() {
  return (
    <section className="w-full bg-[#F7F7F7] h-auto lg:h-[620px] py-16 lg:py-0 px-6 lg:px-20 relative overflow-hidden flex items-center">
      {/* CSS Floating Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatFounder {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-founder {
          animation: floatFounder 6s ease-in-out infinite;
        }
      `}} />

      {/* Red ambient background glow behind the spotlight */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(230,27,35,0.035) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="max-w-[1308px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10 w-full h-full">
        {/* LEFT COLUMN: Founder's Message Content (Span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <p className="text-red-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            FOUNDER'S MESSAGE
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-gray-900 leading-tight tracking-tight">
            A Vision That <br className="hidden sm:block" /> Built a Legacy
          </h2>

          {/* Underline */}
          <div className="w-16 h-[3px] bg-[#E61B23] mt-3 mb-4 rounded-full"></div>

          {/* Large decorative red quotation mark icon */}
          <span className="text-5xl text-[#E61B23] font-serif leading-none block -mb-3 select-none opacity-45">“</span>

          {/* Message Paragraphs */}
          <div className="space-y-2.5 text-gray-600 text-[13px] leading-relaxed font-medium">
            <p>
              At Bhagat Engineering Works, our journey has always been driven by
              innovation, engineering excellence, and an unwavering commitment to
              trust. The confidence of our customers and the dedication of our
              people continue to inspire every milestone we achieve.
            </p>
            <p>
              By embracing technological advancements and maintaining the highest
              standards of professionalism, we deliver reliable engineering
              solutions that create long-term value for our clients and industry.
            </p>
            <p>
              I sincerely thank our customers, partners, and dedicated team whose
              trust, expertise, and collaboration have been the foundation of our
              continued growth.
            </p>
            <p>
              As we move forward, our vision remains clear—to build a globally
              respected engineering organization that delivers sustainable
              solutions, empowers industries, and creates lasting impact for
              future generations.
            </p>
          </div>

          {/* Founder Name & Designation */}
          <div className="mt-4">
            <h3 className="text-[#E61B23] text-lg font-bold">
              Mahavir Prasad Bhagat
            </h3>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-0.5">Founder</p>
          </div>
        </div>

        {/* CENTER COLUMN: Founder Image (Standalone transparent PNG floating flush with bottom of section) */}
        <div className="lg:col-span-4 relative flex items-end justify-center h-full lg:h-[620px] py-8 lg:py-0 lg:-mx-8 z-20">
          {/* Radial Spotlight & Ambient Glow behind the founder image */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] pointer-events-none z-0 rounded-full"
            style={{
              background: `
                radial-gradient(
                  circle at center,
                  rgba(255,255,255,0.95) 0%,
                  rgba(255,255,255,0.6) 30%,
                  transparent 70%
                ),
                radial-gradient(
                  circle at center,
                  rgba(227,6,19,0.08) 0%,
                  transparent 65%
                )
              `
            }}
          />

          {/* Subtle blueprint pattern circles behind the founder */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0 flex items-center justify-center">
            <svg className="w-80 h-80 text-[#E61B23]" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="50%" cy="50%" r="130" />
              <circle cx="50%" cy="50%" r="90" />
              <line x1="0" y1="50%" x2="100%" y2="50%" />
              <line x1="50%" y1="0" x2="50%" y2="100%" />
            </svg>
          </div>

          {/* Transparent portrait with outline contour drop-shadow and floating animation */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px] h-[400px] sm:h-[480px] lg:h-[590px] mx-auto animate-float-founder hover:scale-[1.03] transition-transform duration-500 origin-bottom">
            <Image
              src="/ov1.png"
              alt="Founder Mahavir Prasad Bhagat"
              fill
              className="object-contain object-bottom select-none pointer-events-none"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.15))"
              }}
              priority
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Vertically Stacked Crimson Cards (Span 4) */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full py-2">
          {/* CARD 1 */}
          <div 
            className="flex gap-4 items-center relative overflow-hidden bg-gradient-to-br from-[#E30613] to-[#C5000D] text-white p-6 rounded-[20px] transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(227,6,19,0.25)] group cursor-pointer" 
            style={{ boxShadow: "0 15px 40px rgba(227,6,19,0.15)" }}
          >
            {/* Blueprint SVG overlay lines (low opacity 7%) */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="0" y1="20" x2="100%" y2="20" />
                <line x1="0" y1="50" x2="100%" y2="50" />
                <line x1="25%" y1="0" x2="25%" y2="100%" />
                <circle cx="85%" cy="30%" r="45" />
                <circle cx="85%" cy="30%" r="28" />
              </svg>
            </div>
            
            <div className="relative z-10 flex gap-4 items-center w-full">
              {/* Number */}
              <span className="text-4xl font-extrabold text-white/30 select-none font-mono shrink-0">01</span>
              {/* Description */}
              <div className="flex-grow pr-2">
                <h4 className="font-bold text-base leading-snug">
                  Innovation & Engineering Excellence
                </h4>
                <p className="text-xs text-white/80 mt-1 leading-relaxed font-medium">
                  We continuously embrace advanced technologies and modern engineering practices to deliver reliable, future-ready solutions that exceed industry standards.
                </p>
              </div>
              {/* White Icon Container */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E61B23] shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                <FaLightbulb className="text-lg" />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div 
            className="flex gap-4 items-center relative overflow-hidden bg-gradient-to-br from-[#E30613] to-[#C5000D] text-white p-6 rounded-[20px] transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(227,6,19,0.25)] group cursor-pointer" 
            style={{ boxShadow: "0 15px 40px rgba(227,6,19,0.15)" }}
          >
            {/* Blueprint SVG overlay lines (low opacity 7%) */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="0" y1="30" x2="100%" y2="30" />
                <line x1="0" y1="60" x2="100%" y2="60" />
                <line x1="30%" y1="0" x2="30%" y2="100%" />
                <circle cx="80%" cy="40%" r="40" />
                <circle cx="80%" cy="40%" r="20" />
              </svg>
            </div>
            
            <div className="relative z-10 flex gap-4 items-center w-full">
              {/* Number */}
              <span className="text-4xl font-extrabold text-white/30 select-none font-mono shrink-0">02</span>
              {/* Description */}
              <div className="flex-grow pr-2">
                <h4 className="font-bold text-base leading-snug">
                  Trust Built Through Relationships
                </h4>
                <p className="text-xs text-white/80 mt-1 leading-relaxed font-medium">
                  The confidence of our customers, partners, and dedicated workforce has been the driving force behind nearly five decades of sustainable growth and successful project delivery.
                </p>
              </div>
              {/* White Icon Container */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E61B23] shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                <FaUsers className="text-lg" />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div 
            className="flex gap-4 items-center relative overflow-hidden bg-gradient-to-br from-[#E30613] to-[#C5000D] text-white p-6 rounded-[20px] transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(227,6,19,0.25)] group cursor-pointer" 
            style={{ boxShadow: "0 15px 40px rgba(227,6,19,0.15)" }}
          >
            {/* Blueprint SVG overlay lines (low opacity 7%) */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0">
              <svg className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="1">
                <line x1="0" y1="20" x2="100%" y2="20" />
                <line x1="0" y1="45" x2="100%" y2="45" />
                <line x1="20%" y1="0" x2="20%" y2="100%" />
                <circle cx="85%" cy="35%" r="42" />
                <circle cx="85%" cy="35%" r="24" />
              </svg>
            </div>
            
            <div className="relative z-10 flex gap-4 items-center w-full">
              {/* Number */}
              <span className="text-4xl font-extrabold text-white/30 select-none font-mono shrink-0">03</span>
              {/* Description */}
              <div className="flex-grow pr-2">
                <h4 className="font-bold text-base leading-snug">
                  A Vision for the Future
                </h4>
                <p className="text-xs text-white/80 mt-1 leading-relaxed font-medium">
                  Guided by integrity, excellence, and customer-centric values, we are committed to becoming a global benchmark in engineering, innovation, and technical solutions.
                </p>
              </div>
              {/* White Icon Container */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E61B23] shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                <FaStar className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
