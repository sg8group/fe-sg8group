import OurClient from "@/components/sections/OurClient";
import OurServices from "@/components/sections/service/OurServices";
import Employeehero from "./Employeehero";

const { default: Hero } = require("@/components/sections/Hero");

export default function CorporateValuePage() {
  return (
    <>
      <Employeehero/>
      <OurClient/>
      <OurServices/>
      </>
    );
}