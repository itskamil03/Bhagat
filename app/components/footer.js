"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT LOGO + TEXT */}
        <div>
          <div className="flex items-center gap-3">
            {/* LOGO IMAGE */}
            <Image
              src="/a1.png"
              alt="Bhagat Engineering Works Logo"
              width={40}
              height={40}
              className="object-contain"
            />

            <div>
              <h2 className="text-lg font-bold text-blue-950">
                Bhagat Engineering Works
              </h2>

              <p className="text-sm text-gray-500 flex items-center gap-2">
                A SYMBOL OF TRUST
                <span className="w-6 h-[2px] bg-red-500 inline-block"></span>
              </p>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 transition">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/service">Services</Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/project">Projects</Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 transition">
              <Link href="/service/power-substation">Erection and Maintenance</Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/service/domestic-wiring">Domestic Wiring</Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/service/transformer-services">Transformer Related</Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/service/cable-laying">Cable Laying</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 transition">
              <a href="http://bhagatengg.in" target="_blank" rel="noopener noreferrer">
                Original Website
              </a>
            </li>
            <li className="hover:text-red-500 transition">
              <a href="mailto:info@bhagatengg.in">info@bhagatengg.in</a>
            </li>
            <li className="hover:text-red-500 transition">
              <a href="tel:+916299923388">+91 6299923388</a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>
          © 2026 Bhagat Engineering Works. Designed as a modern dynamic website
          concept.
        </p>

        <div className="mt-4 md:mt-0 flex items-center gap-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-red-500 transition font-bold px-2 text-base"
            title="Scroll to Top"
          >
            {"<"}
          </button>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="hover:text-red-500 transition font-bold px-2 text-base"
            title="Scroll to Bottom"
          >
            {">"}
          </button>
        </div>
      </div>
    </footer>
  );
}
