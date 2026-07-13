"use client";

import React from "react";
import DomesticWiriting from "../../components/domesticwiriting";
import Contact from "../../components/contact";

export default function DomesticWiringPage() {
  return (
    <>
      <DomesticWiriting />
      <div className="bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
