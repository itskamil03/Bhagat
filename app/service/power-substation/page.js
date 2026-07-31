"use client";

import React, { useState, useEffect } from "react";
import ServiceDetailTemplate from "../../components/ServiceDetailTemplate";
import Contact from "../../components/contact";
import { getPowerSubstationPortfolio } from "../../../lib/api/powerSubstationPortfolio";
import { submitPowerSubstationContact } from "../../../lib/api/powerSubstationContact";
import {
  FiGrid,
  FiZap,
  FiAward,
  FiShield,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

const expertiseCards = [
  {
    title: "Substation Design",
    desc: "Custom engineering layout, CAD planning, and load calculation for up to 33kV switchyard erections.",
    icon: <FiGrid />,
  },
  {
    title: "Switchgear Installation",
    desc: "Installing high-vacuum circuit breakers, isolators, control panels, and protection relays.",
    icon: <FiZap />,
  },
  {
    title: "Structure Erection",
    desc: "Mounting heavy steel gantries, lattice columns, support structures, and overhead busbar layouts.",
    icon: <FiAward />,
  },
  {
    title: "Earthing Grid Layout",
    desc: "Installing low-resistance earthing grids using copper or galvanized iron electrodes for fault protection.",
    icon: <FiShield />,
  },
  {
    title: "Testing & Commissioning",
    desc: "High-potential testing, CT/PT calibration, insulation resistance checks, and grid synchronization.",
    icon: <FiCheckCircle />,
  },
  {
    title: "Preventive O&M",
    desc: "Scheduled maintenance checks, transformer oil health audits, breaker servicing, and parameter logging.",
    icon: <FiActivity />,
  },
];

const whyChooseUsChecklist = [
  "50+ Years Experience",
  "Up to 33kV Erection Capacity",
  "Railway & Metro Grid Certified",
  "Strict IS/IEC Standard Compliance",
  "High-Voltage Testing Kits",
  "Robust Safety Grounding",
];

const processSteps = [
  {
    num: "01",
    title: "Site Inspection",
    desc: "Evaluating terrain, clearance parameters, and existing grid inputs.",
  },
  {
    num: "02",
    title: "Planning & Design",
    desc: "Developing engineering schematics and equipment bill-of-materials.",
  },
  {
    num: "03",
    title: "Installation",
    desc: "Rigging gantries, mounting breakers, and laying secondary cables.",
  },
  {
    num: "04",
    title: "Testing & Calibration",
    desc: "Performing insulation resistance, ratio tests, and relay trips.",
  },
  {
    num: "05",
    title: "Commissioning",
    desc: "Synchronizing with power grid, safety approvals, and final handover.",
  },
];

const formServicesList = [
  "Substation Erection",
  "Preventive Maintenance",
  "Relay Calibration & Testing",
  "Switchgear Upgrades",
  "Other Substation Works",
];

export default function PowerSubstationPage() {
  const [portfolioData, setPortfolioData] = useState(undefined);
  const [portfolioLoading, setPortfolioLoading] = useState(true);
  const [portfolioError, setPortfolioError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPowerSubstationPortfolio();
        setPortfolioData(data || []);
      } catch (err) {
        setPortfolioError(err.message || "Failed to load portfolio");
        setPortfolioData([]);
      } finally {
        setPortfolioLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleContactSubmit = async (formData) => {
    const payload = {
      fullName: formData.fullName,
      phoneNumber: formData.phone,
      email: formData.email,
      location: formData.location,
      serviceRequired: formData.service,
      otherMessage: formData.service === "Others" ? formData.otherService : "",
      projectDetails: formData.message,
    };
    await submitPowerSubstationContact(payload);
  };

  return (
    <>
      <ServiceDetailTemplate
        breadcrumb="Erection and Maintenance of Power Substation"
        titlePart1="Erection and Maintenance of"
        titlePart2="Power Substation"
        subtext="Operating and maintaining high voltage systems up to 33kV. Complete turnkey planning, gantry erection, switchgear installations, and safety testing."
        description="Bhagat Engineering Works provides complete planning, civil foundations, structural erection, component assembly, and safety testing of electrical substations. We have nearly 50 years of experience serving South Central Railway, Metro lines, state power boards, and heavy industrial units."
        heroImage="/S1.1.jpg"
        formServiceDefault="Substation Erection"
        expertiseTitle="Specialized Substation Services"
        expertiseCards={expertiseCards}
        whyChooseUsTitle="Why Engineers Choose Us for Substation Erection"
        whyChooseUsChecklist={whyChooseUsChecklist}
        whyChooseUsImage="/S1.2.jpg"
        portfolioTitle="Showcasing Substation Excellence"
        portfolioData={portfolioData}
        portfolioLoading={portfolioLoading}
        portfolioError={portfolioError}
        processSteps={processSteps}
        ctaTitle="Need High-Voltage Substation Support?"
        ctaDesc="Get reliable, safe, and high-quality substation erection and operations support from our certified team. Your power grid reliability is our priority."
        formServicesList={formServicesList}
        onSubmitContact={handleContactSubmit}
      />
      <div className="bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
