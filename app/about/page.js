import React from "react";
import Abouthero from "../components/abouthero";
import Overview from "../components/overview";
import Misson from "../components/misson";
import Founder from "../components/founder";
import Director from "../components/director";
import Leader from "../components/leader";
import Certification from "../components/certification";
import Contact from "../components/contact";

function page() {
  return (
    <>
      <Abouthero />
      <Overview />
      <Misson />
      <Founder />
      <Director />
      <Leader />
      <Certification />
      <Contact />
    </>
  );
}

export default page;
