"use client";

import Hero from "@/components/shared/Hero";
import OurClient from "@/components/shared/OurClient";

import ManpowerManaged from "./ManpowerManaged";
import ManpowerHeadhunting from "./ManpowerHeadhunting";
import ManpowerWhyChoose from "./ManpowerWhyChoose";
import ManpowerBanner from "./ManpowerBanner";

export default function ManpowerSupplyPage() {
  const whyChooseUsData = [
    {
      title: "End-to-End Workforce Solutions",
      desc: "From talent acquisition to long-term workforce management, we provide comprehensive solutions tailored to your business needs.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Talent, Faster Hiring",
      desc: "With an extensive candidate database and a strong industry network, we ensure you get the right talent quickly and efficiently.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Less Risk Workforce Management",
      desc: "We handle all administrative aspects, including payroll, contracts, and legal compliance, so you can focus on growing your business.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
  ];

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
