import React from "react";
import Boxcontainer from "./Boxcontainer";
import Container from "@/components/layouts/Container";

function Sectionourservices() {

  
  return (
    <Container>
      <div className="rounded-2xl p-5 items-center font-semibold text-3xl flex flex-col justify-center h-full ">
        Our Services
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Boxcontainer
          img="/business1.png"
          title="Business Strategy"
          description="Crafting tailored strategies to drive growth and competitive advantage."
        />
        <Boxcontainer
          img="/business2.png"
          title="Market Analysis"
          description="In-depth market research to identify opportunities and threats."
        />
        <Boxcontainer
          img="/business3.png"
          title="Operational Improvement"
          description="Optimizing processes for enhanced efficiency and productivity."
        />
        <Boxcontainer
          img="/business1.png"
          title="Financial Advisory"
          description="Providing expert financial insights to support informed decision-making."
        />
      </div>
    </Container>
  );
}

export default Sectionourservices;
