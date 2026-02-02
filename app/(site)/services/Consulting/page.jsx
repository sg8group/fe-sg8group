"use client";

import Consultinghero from "./Consultinghero";
import Consultingintro from "./Consultingintro"; 
import TailoredSolutions from "./TailoredSolutions";
import Sectionourservices from "./Sectionourservices";
import OurServices from "@/components/sections/service/OurServices";
import OurClient from "@/components/sections/OurClient";
import Sectionchoose from "./Sectionchoose";
import Hero from "@/components/sections/Hero";

export default function ConsultingPage() {
  return (
    <main className="bg-white">
      <Hero title="Consulting Services" />
      <Consultingintro />
      <TailoredSolutions />
      <Sectionourservices />
      <Sectionchoose />
      <OurServices />
      <OurClient />
    </main>
  );
}