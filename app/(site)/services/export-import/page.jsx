import React from "react";
import Hero from "./components/Hero";
import OurClient from "@/components/sections/OurClient";
import SectionForMore from "./sections/SectionForMore";
import Container from "@/components/layouts/Container";
import SectionWhatWeDo from "./sections/SectionWhatWeDo";

function page() {
  return (
    <>
      <Hero />
      <SectionForMore />
      <SectionWhatWeDo />
      <OurClient />
    </>
  );
}

export default page;
