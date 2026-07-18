import React from "react";
import Abouthero from "../components/abouthero";
import Overview from "../components/overview";
import Misson from "../components/misson";
import Certification from "../components/certification";
import Contact from "../components/contact";

function page() {
  return (
    <>
      <Abouthero />
      <Overview />
      <Misson />
      <Certification />
      <Contact />
    </>
  );
}

export default page;
