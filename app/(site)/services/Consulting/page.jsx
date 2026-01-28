"use client";

import Consultinghero from "./Consultinghero";
import Consultingintro from "./Consultingintro"; 
import TailoredSolutions from "./TailoredSolutions";
import Sectionourservices from "./Sectionourservices";
import OurServices from "@/components/sections/service/OurServices";
import OurClient from "@/components/sections/OurClient";

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Consultinghero />
      <Consultingintro />
      <TailoredSolutions />
      <Sectionourservices />
      <OurServices />
      <OurClient />
    </main>
  );
}