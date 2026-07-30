"use client";

import React, { useState, useEffect } from "react";
import ServiceDetailTemplate from "../../components/ServiceDetailTemplate";
import Contact from "../../components/contact";
import { getHighMastPortfolio } from "../../../lib/api/highMastPortfolio";
import { submitServoStabilizerContact } from "../../../lib/api/servoStabilizerContact";
import {
  FiGrid,
  FiSettings,
  FiActivity,
  FiSliders,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const expertiseCards = [
  {
    title: "Stabilizer Supply & Sizing",
    desc: "Detailed load auditing and electrical profiling to select the correct air/oil-cooled capacity.",
    icon: <FiGrid />,
  },
  {
    title: "Turnkey Installation",
    desc: "Rigging, mounting, alignment, and terminations of high-capacity stabilizers inside your switch-rooms.",
    icon: <FiSettings />,
  },
  {
    title: "Microcontroller Calibration",
    desc: "Tuning carbon brush sliders, gear motors, servo controllers, and digital displays for speed.",
    icon: <FiActivity />,
  },
  {
    title: "Preventive Maintenance",
    desc: "Lubricating servo gears, inspecting motorized variac contact points, carbon brush changes.",
    icon: <FiSliders />,
  },
  {
    title: "Diagnostic & Repair",
    desc: "Emergency fault repairs on buck-boost coils, electronic driver cards, and servo motor systems.",
    icon: <FiShield />,
  },
  {
    title: "Full-Load Stress Test",
    desc: "Verifying response speed and voltage correction limits under simulated heavy loads.",
    icon: <FiCheckCircle />,
  },
];

const whyChooseUsChecklist = [
  "Automatic microcontroller correction",
  "High operating efficiency up to 98%",
  "Balanced & unbalanced load support",
  "Over & under voltage cutoff shields",
  "Authorized OEM channel partners",
  "Correction speed up to 70V/sec",
];

const processSteps = [
  {
    num: "01",
    title: "Load Assessment",
    desc: "Profiling voltage spikes, phase shifts, and peak load requirements.",
  },
  {
    num: "02",
    title: "Stabilizer Selection",
    desc: "Deciding between air-cooled or oil-cooled buck-boost setups.",
  },
  {
    num: "03",
    title: "Mounting & Wiring",
    desc: "Laying HT/LT bypass cabling and secure switch-room installation.",
  },
  {
    num: "04",
    title: "Calibration & Test",
    desc: "Calibrating servo motorized variacs and checking cut-offs.",
  },
  {
    num: "05",
    title: "System Handover",
    desc: "Providing electrical load reports and operational manuals.",
  },
];

const formServicesList = [
  "New Stabilizer Sizing & Supply",
  "Stabilizer Installation",
  "Servo Maintenance & Repair",
  "Calibration & Load Testing",
  "Emergency Fault Repair",
];

export default function ServoStabilizersPage() {
  const [portfolioData, setPortfolioData] = useState(undefined);
  const [portfolioLoading, setPortfolioLoading] = useState(true);
  const [portfolioError, setPortfolioError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getHighMastPortfolio();
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
    await submitServoStabilizerContact(payload);
  };

  return (
    <>
      <ServiceDetailTemplate
        breadcrumb="Erection and commissioning of High Mast Pole/Tower and Poles"
        titlePart1="Erection and commissioning of"
        titlePart2="High Mast Pole/Tower and Poles"
        subtext="Voltage Regulation. Peak Protection. Stable power for heavy industrial loads and sensitive CNC machines."
        description="Inconsistent utility supply voltage causes premature equipment breakdown. Bhagat Engineering Works offers premium Servo voltage stabilizers to protect your industrial machinery by correcting supply anomalies in milliseconds."
        heroImage="/pa1.png"
        formServiceDefault="New Stabilizer Sizing & Supply"
        expertiseTitle="Specialized Stabilizer Services"
        expertiseCards={expertiseCards}
        whyChooseUsTitle="Why Engineers Choose Us for Servo Stabilizers"
        whyChooseUsChecklist={whyChooseUsChecklist}
        whyChooseUsImage="/pk2.png"
        portfolioTitle="Showcasing Stabilizer Excellence"
        portfolioData={portfolioData}
        portfolioLoading={portfolioLoading}
        portfolioError={portfolioError}
        processSteps={processSteps}
        ctaTitle="Protect Your Industrial Loads with Servo?"
        ctaDesc="Get reliable, stable, and clean power for your manufacturing lines with our expert stabilizer sizing and maintenance support."
        formServicesList={formServicesList}
        onSubmitContact={handleContactSubmit}
      />
      <div className="bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
