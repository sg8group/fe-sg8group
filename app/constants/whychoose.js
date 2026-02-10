import { ChartNoAxesCombined, Lightbulb } from "lucide-react";
import { Rocket } from "lucide-react";
import { Target } from "lucide-react";
import { Search } from "lucide-react";
import { Shield } from "lucide-react";
import { ThumbsUp } from "lucide-react";


export const whyChooseUsData = [
  {
    title: "End-to-End Workforce Solutions",
    desc: "From talent acquisition to long-term workforce management, we provide comprehensive solutions tailored to your business needs.",
    icon:  <Rocket className="w-6 h-6 text-white" />,
  },

  {
    title: "Quality Talent, Faster Hiring",
    desc: "With an extensive candidate database and a strong industry network, we ensure you get the right talent quickly and efficiently.",
    icon:  <Target className="w-6 h-6 text-white" />,
  },
  {
    title: "Less Risk Workforce Management",
    desc: "We handle all administrative aspects, including payroll, contracts, and legal compliance, so you can focus on growing your business.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    title: "Scalable & Flexible Solutions",
    desc: "Whether you need workforce support for expansion, short-term projects, or strategic positions, our solutions are fully adaptable to your needs.",
    icon:   <ChartNoAxesCombined className="w-6 h-6 text-white" />,
  },
  {
    title: "Industry-Specific Expertise",
    desc: "Our team understands various industries and provides workforce solutions that align with your business challenges.",
    icon: <Search className="w-6 h-6 text-white" />,
  },
  {
    title: "Compliance & Legal Assurance",
    desc: "We ensure full compliance with labor laws and regulations, minimizing legal risks for your company.",
    icon: <Shield className="w-6 h-6 text-white" />,
  },
  {
    title: "Innovative Approach",
    desc: "Leveraging technology and modern recruitment strategies, we offer workforce solutions that are both efficient and effective.",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
  },
  {
    title: "Your Success, Our Priority",
    desc: "We are more than just a workforce provider—we are a strategic partner dedicated to helping you achieve your business goals with the right team.",
    icon:   <ThumbsUp className="w-6 h-6 text-white" />,
  },
];
