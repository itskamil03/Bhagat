"use client";

import React, { useState, useEffect } from "react";
import ServiceDetailTemplate from "../../components/ServiceDetailTemplate";
import Contact from "../../components/contact";
import { getTransformerPortfolio } from "../../../lib/api/transformerPortfolio";
import { submitTransformerOilFiltrationContact } from "../../../lib/api/transformerOilFiltrationContact";
import {
  FiGrid,
  FiActivity,
  FiCheckCircle,
  FiSettings,
  FiSun,
  FiShield,
} from "react-icons/fi";

const expertiseCards = [
  {
    title: "Transformer Erection",
    desc: "Rigging, mounting, alignment, and termination of oil-cooled and dry-type transformers up to 10MVA.",
    icon: <FiGrid />,
  },
  {
    title: "Oil Filtration & Degassing",
    desc: "High-vacuum transformer oil dehydration to improve dielectric breakdown voltage (BDV).",
    icon: <FiActivity />,
  },
  {
    title: "Testing & Diagnostics",
    desc: "BDV checks, insulation resistance, turns ratio, winding resistance, and acidity testing.",
    icon: <FiCheckCircle />,
  },
  {
    title: "Bushing & Gasket Repairs",
    desc: "Inspecting and replacing damaged porcelain HV/LV bushings, gaskets, and fixing oil leaks.",
    icon: <FiSettings />,
  },
  {
    title: "Breather Servicing",
    desc: "Silica gel inspection, charging, replacement, and breather servicing to prevent moisture ingress.",
    icon: <FiSun />,
  },
  {
    title: "Radiator Maintenance",
    desc: "Cleaning, flushing, and pressure testing cooling fins for maximum heat dissipation.",
    icon: <FiShield />,
  },
];

const whyChooseUsChecklist = [
  "Dielectric BDV Improvement Focus",
  "High-Vacuum 6000 LPH filtration",
  "On-site diagnostic testing kits",
  "IS 2026 Testing Compliance",
  "Premium Gaskets & Consumables",
  "24/7 Breakdown Assistance",
];

const processSteps = [
  {
    num: "01",
    title: "Site Assessment",
    desc: "Inspecting physical condition, checking oil level, and detecting leaks.",
  },
  {
    num: "02",
    title: "Diagnostic Testing",
    desc: "Running initial insulation, winding, and dielectric breakdown tests.",
  },
  {
    num: "03",
    title: "Vacuum Oil Filtration",
    desc: "Circulating hot oil under high vacuum to extract moisture and gas.",
  },
  {
    num: "04",
    title: "Mechanical Servicing",
    desc: "Replacing bushings, tightening gaskets, and servicing breathers.",
  },
  {
    num: "05",
    title: "Final Handover",
    desc: "Signing off safety reports and providing oil parameter log sheets.",
  },
];

const formServicesList = [
  "Transformer Oil Filtration",
  "Testing & Diagnostics",
  "Bushing & Leak Repair",
  "New Unit Erection",
  "Breather Servicing & Maintenance",
];

export default function TransformerServicesPage() {
  const [portfolioData, setPortfolioData] = useState(undefined);
  const [portfolioLoading, setPortfolioLoading] = useState(true);
  const [portfolioError, setPortfolioError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTransformerPortfolio();
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
    await submitTransformerOilFiltrationContact(payload);
  };

  return (
    <>
      <ServiceDetailTemplate
        breadcrumb="Installation and Commissioning of Compact Substation"
        titlePart1="Installation and Commissioning of"
        titlePart2="Compact Substation"
        subtext="Complete transformer lifecycle support. Turnkey installation, hot vacuum oil filtration, ratio audits, and gasket repair up to 10MVA."
        description="Transformers represent the heart of your electrical power distribution system. Bhagat Engineering Works offers certified testing engineers to install, test, filter, and commission distribution and power transformers, extending the life cycle of your substation cores."
        heroImage="/S2.1.jpg"
        formServiceDefault="Transformer Installation"
        expertiseTitle="Specialized Transformer Services"
        expertiseCards={expertiseCards}
        whyChooseUsTitle="Why Engineers Choose Us for Transformer Services"
        whyChooseUsChecklist={whyChooseUsChecklist}
        whyChooseUsImage="/S2.2.jpg"
        portfolioTitle="Showcasing Transformer Excellence"
        portfolioData={portfolioData}
        portfolioLoading={portfolioLoading}
        portfolioError={portfolioError}
        processSteps={processSteps}
        ctaTitle="Need Professional Transformer Services?"
        ctaDesc="Get reliable, safe, and high-quality transformer filtration and testing from our certified engineers. Your grid health is our priority."
        formServicesList={formServicesList}
        onSubmitContact={handleContactSubmit}
      />
      <div className="bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
