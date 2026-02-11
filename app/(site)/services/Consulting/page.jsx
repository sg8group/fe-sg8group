"use client";

import TailoredSolutions from "./TailoredSolutions";
import Sectionourservices from "./Sectionourservices";
import Sectionchoose from "./Sectionchoose";
import Hero from "@/components/shared/Hero";
import OurClient from "@/components/shared/OurClient";
import OurServices from "@/components/shared/service/OurServices";
import ConsultingIntro from "./Consultingintro";

export default function ConsultingPage() {
  return (
    <main className="bg-white">
      <Hero title="Consulting Services" />
      <ConsultingIntro />
      <TailoredSolutions />
      <Sectionourservices />
      <Sectionchoose />
      <OurServices />
      <OurClient />
    </main>
  );
}