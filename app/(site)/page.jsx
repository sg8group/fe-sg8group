import RecruitmentCTA from "@/components/sections/recruitment-CTA/RecruitmentCTA";
import Navbar from "../components/layouts/navbar/Navbar";
import Hero from "../components/sections/Hero";
import IntroStats from "../components/sections/intro-stats/IntroStats";
import OurMindset from "../components/sections/OurMindset";
import OurServices from "../components/sections/service/OurServices";


export default function Home() {
  return (
    <>
      <Hero />
      <main className="flex flex-col gap-16">
        {/* <h1 className="heading text-4xl text-black">SG8 Group</h1>
        <h2 className="section-title text-black text-2xl">Our Services</h2>
        <p className="text-black">Ini otomatis poppins</p> */}
        <IntroStats />
        <OurServices />
        <OurMindset />
        <RecruitmentCTA />
      </main>
    </>
  );
}
