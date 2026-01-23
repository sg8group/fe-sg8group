import OurClient from "@/components/sections/OurClient";
import OurServices from "@/components/sections/service/OurServices";

const { default: Hero } = require("@/components/sections/Hero");

export default function CorporateValuePage() {
  return (
    <>
      <Hero/>
      <OurClient/>
      <OurServices/>
      </>
    );
}