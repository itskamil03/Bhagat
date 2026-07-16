"use client";

import React from "react";
import ServiceDetailTemplate from "../../components/ServiceDetailTemplate";
import Contact from "../../components/contact";
import {
  FiGrid,
  FiSettings,
  FiZap,
  FiShield,
  FiActivity,
  FiSliders,
} from "react-icons/fi";

const expertiseCards = [
  {
    title: "Underground Trenching",
    desc: "Route surveying, excavation, sand-cushioning, protective brick/tile laying, and backfilling.",
    icon: <FiGrid />,
  },
  {
    title: "Overhead Cable Trays",
    desc: "Fitting heavy-duty GI cable trays, hangers, conduits, and brackets along industrial structures.",
    icon: <FiSettings />,
  },
  {
    title: "Joints & Terminations",
    desc: "Professional Raychem heat-shrinkable jointing and terminations to protect against moisture ingress.",
    icon: <FiZap />,
  },
  {
    title: "Megger & Hi-Pot Testing",
    desc: "Insulation resistance megger testing and high-potential checks to verify cable health.",
    icon: <FiShield />,
  },
  {
    title: "HT Cable Winch Pulling",
    desc: "Winch-assisted pulling of high-tension cables, conforming to safety bending radii.",
    icon: <FiActivity />,
  },
  {
    title: "Tray Fabrication & Racks",
    desc: "On-site customized steel bracket fabrication, welding, and structural matching support.",
    icon: <FiSliders />,
  },
];

const whyChooseUsChecklist = [
  "LT/HT Cabling up to 33kV",
  "Raychem & 3M Certified Jointers",
  "Precision Insulation Testing",
  "Trench Depth Regulation Match",
  "GI Heavy Duty Tray Fittings",
  "Robust Shield Grounding",
];

const processSteps = [
  {
    num: "01",
    title: "Route Survey",
    desc: "Profiling depths, crossings, and obstacles along the cabling path.",
  },
  {
    num: "02",
    title: "Tray & Trench Setup",
    desc: "Excavation or gantry brackets installation per engineering design.",
  },
  {
    num: "03",
    title: "Cable Winch Pulling",
    desc: "Mechanical or hand pulling conforming to safety bending limits.",
  },
  {
    num: "04",
    title: "Jointing Kits",
    desc: "Applying Raychem heat-shrink terminations and conductor jointing.",
  },
  {
    num: "05",
    title: "High-Pot Testing",
    desc: "Performing high-voltage testing, shield grounding, and signoff.",
  },
];

const formServicesList = [
  "Underground Cable Laying",
  "Overhead Cable Trays",
  "HT Termination & Jointing",
  "Megger & Hi-Pot Testing",
  "Other Cabling Support",
];

export default function CableLayingPage() {
  return (
    <>
      <ServiceDetailTemplate
        breadcrumb="Cable Laying"
        titlePart1="Cable Laying"
        titlePart2="& Jointing"
        subtext="Underground trenching, overhead conduit fitting, and certified heat-shrink jointing terminations up to 33kV."
        description="Laying high voltage cabling requires strict compliance with mechanical bending radii, trench depth regulations, and loop reserves. Bhagat Engineering Works offers professional underground excavation, sand-cushioning, protective tiling, and overhead cabling options."
        heroImage="/dw1.jpg"
        formServiceDefault="Underground Cable Laying"
        expertiseTitle="Specialized Cable Laying Services"
        expertiseCards={expertiseCards}
        whyChooseUsTitle="Why Engineers Choose Us for Cable Laying"
        whyChooseUsChecklist={whyChooseUsChecklist}
        whyChooseUsImage="/a6.png"
        portfolioTitle="Showcasing Cable Laying Excellence"
        portfolioBigImage="/dw1.jpg"
        portfolioBigTag="HT Cabling"
        portfolioBigTitle="Underground High-Tension (HT) Power Cable Laying"
        portfolioStackedImage1="/pk.png"
        portfolioStackedTag1="Terminations"
        portfolioStackedTitle1="Raychem Heat-Shrink Cable Terminations & Joints"
        portfolioStackedImage2="/a9.png"
        portfolioStackedTag2="Overhead Trays"
        portfolioStackedTitle2="Substation Structural Overhead Cable Trays & Racks"
        processSteps={processSteps}
        ctaTitle="Need Heavy-Duty Cable Laying Solutions?"
        ctaDesc="Get reliable, safe, and high-quality power transmission cabling from our certified team. Your power distribution stability is our priority."
        formServicesList={formServicesList}
      />
      <div className="bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
