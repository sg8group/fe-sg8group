import Container from "@/components/layouts/Container";
import React from "react";

function SectionWhatWeDo() {
  return (
    <>
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
      </Container>
    </>
  );
}

export default SectionWhatWeDo;
