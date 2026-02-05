"use client";

import Hero from "@/components/sections/Hero";
import OurClient from "@/components/sections/OurClient";
import OurMindset from "@/components/sections/OurMindset";
import OurServices from "@/components/sections/service/OurServices";

import ValueIntro from "./ValueIntro";
import ValueGrid from "./ValueGrid";

export default function CorporateValuePage() {
  return (
    <>
      <Hero title="Corporate Values" />
      
      <ValueIntro />
      <ValueGrid />
      <OurMindset />
      <OurClient />
      <OurServices />
    </>
  );
}