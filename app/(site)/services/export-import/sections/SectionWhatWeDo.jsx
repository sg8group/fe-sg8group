import Container from "@/components/layouts/Container";
import React from "react";
import BoxContainer from "../components/BoxContainer";
import { WhatWeDo }  from "../Data";

function SectionWhatWeDo() {
  return (
    <Container>
      <div className="text-black mx-auto text-center ">
        <div className="text-3xl font-medium mb-3">What We Do</div>
        <p className="text-2xl text-justify [text-align-last:center] mx-auto mb-10">
          We provide comprehensive logistics solutions, specializing in
          export-import, supply chain management, and forwarding services,
          while empowering customers with seamless, reliable, and accurate
          messenger tracking.
        </p>
      </div>

      {/* Perbaikan pada class grid dan penghapusan h-xl agar tinggi fleksibel */}
      <div className="flex flex-col max-w-md mb-15 mx-auto gap-5 lg:max-w-full lg:grid lg:grid-cols-3 lg:gap-10 w-full text-black">
        {WhatWeDo.map((item, index) => (
          <BoxContainer
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
}

export default SectionWhatWeDo;