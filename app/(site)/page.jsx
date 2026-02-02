import RecruitmentCTA from "@/components/sections/recruitment-CTA/RecruitmentCTA";
import Hero from "../components/sections/Hero";
import IntroStats from "../components/sections/intro-stats/IntroStats";
import OurMindset from "../components/sections/OurMindset";
import OurServices from "../components/sections/service/OurServices";
import OurClient from "@/components/sections/OurClient";

export default function Home() {
  return (
    <>
      <Hero title="SG8 Group" />
      <main className="flex flex-col gap-10 md:gap-16">
        <IntroStats />
        <OurServices />
        <OurMindset />
        <RecruitmentCTA />
        <OurClient />
      </main>
    </>
  );
}