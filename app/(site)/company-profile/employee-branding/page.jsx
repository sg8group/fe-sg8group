import OurClient from "@/components/shared/OurClient";
import OurServices from "@/components/shared/service/OurServices";
import Employeehero from "./Employeehero";

const { default: Hero } = require("@/components/shared/Hero");

export default function CorporateValuePage() {
  return (
    <>
      <Employeehero/>
      <OurClient/>
      <OurServices/>
      </>
    );
}