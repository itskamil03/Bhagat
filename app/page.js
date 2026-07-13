import React from "react";

import Hero from "./components/hero";
import Section from "./components/section";
import Service from "./components/service";
import Banner from "./components/banner";
import Project from "./components/project";
import Feature from "./components/feature";
import Content from "./components/content";
// import Icon from './components/Icon'

import Client from "./components/client";
import Contact from "./components/contact";
import Org from "./components/Org";

function page() {
  return (
    <>
      <Hero />
      <Section />
      <Service />
      <Banner />
      <Project />
      <Feature />
      <Content />
      <Org />

      <Client />
      <Contact />
    </>
  );
}

export default page;
