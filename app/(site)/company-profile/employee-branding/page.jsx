import Hero from "@/components/shared/Hero";
import BrandingIntro from "./BrandingIntro";
import BrandingValues from "./BrandingValues";
import OurMindset from "@/components/shared/OurMindset";
import OurClient from "@/components/shared/OurClient";
import OurServices from "@/components/shared/service/OurServices";

export default function EmployeeBrandingPage() {
  return (
    <>
      <Hero title="Employee Branding" />
      <BrandingIntro />
      <BrandingValues />
      <OurMindset />
      <OurClient />
      <OurServices />
    </>
  );
}
