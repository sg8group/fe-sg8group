import React from "react";
import Boxcontainer from "./Boxcontainer";
import Container from "@/components/ui/Container";

function Sectionourservices() {
  const services = [
    {
      img: "/business1.png",
      title: "Business Strategy & Growth",
      points: [
        {
          name: "Business Assessment",
          desc: "In-depth analysis to identify strengths, weaknesses, and opportunities.",
        },
        {
          name: "Business Improvement",
          desc: "Enhancing efficiency, productivity, and profitability.",
        },
        {
          name: "Business Growth Advisory",
          desc: "Strategic planning for sustainable expansion.",
        },
        {
          name: "C-Level Business Growth Advisory",
          desc: "Executive-level insights to drive growth.",
        },
      ],
    },
    {
      img: "/business2.png",
      title: "Finance, Tax & Compliance",
      points: [
        {
          name: "Tax and Financial Planning",
          desc: "Smart tax strategies and financial structuring.",
        },
        {
          name: "Business Audit",
          desc: "Independent assessment to ensure compliance and financial health.",
        },
      ],
    },
    {
      img: "/business3.png",
      title: "Business Operations & Automation",
      points: [
        {
          name: "Business Automation",
          desc: "Leveraging technology to streamline operations.",
        },
        {
          name: "Business Management",
          desc: "Optimizing business processes for better efficiency.",
        },
        {
          name: "Company Restructuring",
          desc: "Organizational transformation for improved performance.",
        },
      ],
    },
    {
      img: "/business1.png",
      title: "Manpower & New Business Setup",
      points: [
        {
          name: "Manpower Provision",
          desc: "Connecting businesses with top-tier professionals..",
        },
        {
          name: "New Business Setup",
          desc: "Guidance and support for launching new venturesStep-by-step guidance to launch and establish your business.",
        },
         {
          name: "F&B Business Setup and Consultation",
          desc: "Specialized consulting for food & beverage businesses.",
        },
      ],
    },
  ];

  return (
    <Container>
      <h2 className="text-3xl font-bold text-center my-12 text-[#1a2b4b]">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <Boxcontainer
            key={index}
            img={item.img}
            title={item.title}
            points={item.points}
          />
        ))}
      </div>
    </Container>
  );
}

export default Sectionourservices;
