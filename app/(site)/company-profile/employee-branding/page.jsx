"use client";

import Hero from "@/components/sections/Hero";
import OurClient from "@/components/sections/OurClient";
import OurMindset from "@/components/sections/OurMindset";
import OurServices from "@/components/sections/service/OurServices";

// Import Container Baru
import BrandingIntro from "./BrandingIntro";
import BrandingValues from "./BrandingValues";

export default function EmployeeBrandingPage() {
  return (
    <>
      <Hero title="Employee Branding" />
      <BrandingIntro />
      <BrandingValues />
      <OurMindset />
      <OurClient />
      <OurServices />
    </>
  );
}
