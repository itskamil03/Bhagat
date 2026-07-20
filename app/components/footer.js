"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 px-6 md:px-8 xl:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 [@media(width:800px)]:grid-cols-1 lg:grid-cols-4 [@media(width:1024px)]:grid-cols-1 xl:grid-cols-[1fr_0.75fr_1.25fr_1fr] gap-8 xl:gap-12 [@media(width:800px)]:gap-10 [@media(width:1024px)]:gap-10">
        {/* LEFT LOGO + TEXT */}
        <div className="xl:-ml-12 lg:mt-0">
          <div className="flex items-center lg:items-start xl:items-center gap-3">
            {/* LOGO IMAGE */}
            <Image
              src="/a1.png"
              alt="Bhagat Engineering Works Logo"
              width={40}
              height={40}
              className="object-contain"
            />

            <div>
              <h2 className="text-sm sm:text-base md:text-xl font-extrabold text-blue-950 font-sans tracking-tight lg:whitespace-normal xl:whitespace-nowrap lg:leading-tight">
                Bhagat Engineering Works
              </h2>

              <p className="text-[11px] font-bold tracking-[0.2em] text-gray-600 uppercase flex items-center gap-2">
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
              <Link href="/service/power-substation">
                Erection and Maintenance of Power Substation
              </Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/service/domestic-wiring">
                Installation and Commissioning of Compact Substation
              </Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/service/transformer-services">
                Overhead and Underground Cable Laying
              </Link>
            </li>
            <li className="hover:text-red-500 transition">
              <Link href="/service/cable-laying">
                Industrial / Quarter Wiring
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="xl:pl-24">
          <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 transition">
              <a
                href="http://bhagatengg.in"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li className="hover:text-red-500 transition">
              <a href="mailto:info@bhagatengg.in">info@bhagatengg.in</a>
            </li>
            <li className="hover:text-red-500 transition">
              <a href="tel:+916299923388">1800 8890 705</a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row [@media(width:800px)]:flex-col [@media(width:1024px)]:flex-col [@media(width:800px)]:text-center [@media(width:1024px)]:text-center items-center justify-between text-sm text-gray-600 gap-4 md:gap-0 [@media(width:800px)]:gap-4 [@media(width:1024px)]:gap-4">
        <p>
          © 2026 Bhagat Engineering Works. Designed as a modern dynamic website
          concept.
        </p>

        <div className="mt-4 md:mt-0 [@media(width:800px)]:mt-0 [@media(width:1024px)]:mt-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white hover:bg-red-600 transition-colors rounded-full shadow-lg"
            title="Scroll to Top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
