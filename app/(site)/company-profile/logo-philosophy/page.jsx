import Hero from "@/components/shared/Hero";
import PhilosophyMain from "./PhilosophyMain";
import PhilosophyCards from "./PhilosophyCards";
import OurClient from "@/components/shared/OurClient";

export default function LogoPhilosophyPage() {
  return (
    <>
      <Hero title="Logo Philosophy" />
      
      <PhilosophyMain />
      <PhilosophyCards />
      <OurClient />
    </>
  );
}