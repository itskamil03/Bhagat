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
          <ul className="space-y-2">
            <li>Erection and Maintenance</li>
            <li>Domestic Wiring</li>
            <li>Transformer Related</li>
            <li>Cable Laying</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#">Original Website</Link>
            </li>
            <li>info@bhagatengg.in</li>
            <li>+91 6299923388</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>
          © 2026 Bhagat Engineering Works. Designed as a modern dynamic website
          concept.
        </p>

        <div className="mt-4 md:mt-0 flex items-center gap-3 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
    </footer>
  );
}
