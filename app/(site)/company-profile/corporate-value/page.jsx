import OurMindset from "@/components/shared/OurMindset";
import ValueGrid from "./ValueGrid";
import ValueIntro from "./ValueIntro";
import OurClient from "@/components/shared/OurClient";
import OurServices from "@/components/shared/service/OurServices";
import Hero from "@/components/shared/Hero";

export default function CorporateValuePage() {
  return (
    <>
      <Hero title="Corporate Values" />
      <ValueIntro />
      <ValueGrid />
      <OurMindset />
      <OurClient />
      <OurServices />
    </>
  );
}