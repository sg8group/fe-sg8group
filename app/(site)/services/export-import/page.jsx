import React from "react";
import Hero from "./components/Hero";
import OurClient from "@/components/sections/OurClient";
import SectionForMore from "./sections/SectionForMore";
import SectionWhatWeDo from "./sections/SectionWhatWeDo";
import SectionOurPremium from "./sections/SectionOurPremium";

function page() {
  return (
    <>
      <Hero />
      <SectionForMore />
      <SectionWhatWeDo />
      <SectionOurPremium />
      <OurClient />
    </>
  );
}

export default page;
