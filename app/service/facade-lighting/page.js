"use client";

import React from "react";
import ServiceDetailTemplate from "../../components/ServiceDetailTemplate";
import Contact from "../../components/contact";
import {
  FiGrid,
  FiSun,
  FiActivity,
  FiAward,
  FiShield,
  FiCheckCircle
} from "react-icons/fi";

const expertiseCards = [
  {
    title: "Facade Lighting Design",
    desc: "Developing architectural lighting schematics, 3D renderings, and load matching specifications.",
    icon: <FiGrid />
  },
  {
    title: "Aesthetic LED Washers",
    desc: "Installing linear wall washers, projection floods, and high-luminosity architectural spots.",
    icon: <FiSun />
  },
  {
    title: "Smart DMX Controls",
    desc: "Programming DMX512 dynamic controllers for color fades, chases, and automated light shows.",
    icon: <FiActivity />
  },
  {
    title: "Acrylic Signage Boards",
    desc: "Designing and mounting weather-proof custom illuminated acrylic brand logos and signages.",
    icon: <FiAward />
  },
  {
    title: "Weatherproof Conduit Laying",
    desc: "Outdoor-grade IP67/IP68 cable running, moisture sealing, and protective enclosures.",
    icon: <FiShield />
  },
  {
    title: "Energy Efficiency Audit",
    desc: "Upgrading legacy facade lamps to modern, energy-safe LEDs to lower power footprints.",
    icon: <FiCheckCircle />
  }
];

const whyChooseUsChecklist = [
  "IP65 / IP67 / IP68 protection standards",
  "High-efficiency LED burning hours",
  "DMX512 dynamic control protocols",
  "Aesthetic 3D render mockups",
  "Safe boom-lift aerial operations",
  "Eco-friendly low wattage runs"
];

const processSteps = [
  { num: "01", title: "Building Survey", desc: "Evaluating building structure, height, angles, and power hookups." },
  { num: "02", title: "Visual Designing", desc: "Providing 3D rendering designs showing fixture distributions." },
  { num: "03", title: "IP67 Cabling", desc: "Laying weatherproof outdoor conduits and cabling paths safely." },
  { num: "04", title: "Fixture Mounting", desc: "Installing LED washes, spots, and controller panel setups." },
  { num: "05", title: "Programming", desc: "Programming DMX dynamic fade transitions and finalizing handover." }
];

const formServicesList = [
  "Facade Lighting Design",
  "LED Washer Installation",
  "DMX Control Programming",
  "Acrylic Signage Panels",
  "Other Outdoor Lighting"
];

export default function FacadeLightingPage() {
  return (
    <>
      <ServiceDetailTemplate
        breadcrumb="Facade Lighting"
        titlePart1="Facade &"
        titlePart2="Acrylic Lighting"
        subtext="State-of-the-art exterior lighting designs, LED installations, architectural highlights, and acrylic structures."
        description="Aesthetically engineered exterior lighting transforms commercial and public buildings, while guaranteeing safety, structural highlight, and low power consumption. Bhagat Engineering Works offers end-to-end weatherproof IP67 LED lighting structures."
        heroImage="/pk2.png"
        formServiceDefault="Facade Lighting Design"
        expertiseTitle="Specialized Facade Services"
        expertiseCards={expertiseCards}
        whyChooseUsTitle="Why Engineers Choose Us for Facade Lighting"
        whyChooseUsChecklist={whyChooseUsChecklist}
        whyChooseUsImage="/a4.png"
        portfolioTitle="Showcasing Facade Lighting Excellence"
        portfolioBigImage="/pk2.png"
        portfolioBigTag="Facade Design"
        portfolioBigTitle="Dynamic Facade LED Lighting Erection & Programming"
        portfolioStackedImage1="/a4.png"
        portfolioStackedTag1="Dynamic Color"
        portfolioStackedTitle1="Multi-Color DMX512 Facade Controller Projects"
        portfolioStackedImage2="/a3.png"
        portfolioStackedTag2="Landscape Lighting"
        portfolioStackedTitle2="Aesthetic Building Landscape & Path Illumination"
        processSteps={processSteps}
        ctaTitle="Aesthetic Illumination for Your Building?"
        ctaDesc="Get a custom design proposal and energy-efficient LED installation for your property. Your branding visibility is our specialty."
        formServicesList={formServicesList}
      />
      <div className="bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
