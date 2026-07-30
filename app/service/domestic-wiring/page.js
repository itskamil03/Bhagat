"use client";

import React, { useState, useEffect } from "react";
import DomesticWiriting from "../../components/domesticwiriting";
import Contact from "../../components/contact";
import { getDomesticWiringPortfolio } from "../../../lib/api/domesticWiringPortfolio";
import { submitDomesticWiringContact } from "../../../lib/api/domesticWiringContact";

export default function DomesticWiringPage() {
  const [portfolioData, setPortfolioData] = useState(undefined);
  const [portfolioLoading, setPortfolioLoading] = useState(true);
  const [portfolioError, setPortfolioError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDomesticWiringPortfolio();
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
    await submitDomesticWiringContact(payload);
  };

  return (
    <>
      <DomesticWiriting 
        portfolioData={portfolioData}
        portfolioLoading={portfolioLoading}
        portfolioError={portfolioError}
        onSubmitContact={handleContactSubmit}
      />
      <div className="bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
