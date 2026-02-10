"use client";

import Hero from "@/components/sections/Hero";
import OurClient from "@/components/sections/OurClient";

import ManpowerManaged from "./ManpowerManaged";
import ManpowerHeadhunting from "./ManpowerHeadhunting";
import ManpowerWhyChoose from "./ManpowerWhyChoose";
import ManpowerBanner from "./ManpowerBanner";
import { whyChooseUsData } from "@/constants/whychoose";

export default function ManpowerSupplyPage() {
  return (
    <main className="min-h-screen">
      <Hero title="Manpower Supply" />
      <ManpowerManaged />
      <ManpowerHeadhunting />
      <ManpowerWhyChoose data={whyChooseUsData} />
      <ManpowerBanner />

      <OurClient />
    </main>
  );
}
