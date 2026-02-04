import RecruitmentCTA from "@/components/shared/recruitment-CTA/RecruitmentCTA";
import Hero from "../components/shared/Hero";
import IntroStats from "../components/shared/intro-stats/IntroStats";
import OurMindset from "../components/shared/OurMindset";
import OurServices from "../components/shared/service/OurServices";
import OurClient from "@/components/shared/OurClient";

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