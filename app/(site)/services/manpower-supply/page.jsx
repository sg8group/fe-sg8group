"use client";

import Hero from "@/components/sections/Hero";
import OurClient from "@/components/sections/OurClient";
import Container from "@/components/layouts/Container";

import ManpowerManaged from "./ManpowerManaged";
import ManpowerHeadhunting from "./ManpowerHeadhunting";
import ManpowerWhyChoose from "./ManpowerWhyChoose";
import ManpowerBanner from "./ManpowerBanner";

export default function ManpowerSupplyPage() {
  const whyChooseUsData = [];

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
