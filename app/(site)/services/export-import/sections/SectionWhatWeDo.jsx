import Container from "@/components/layouts/Container";
import React from "react";
import BoxContainer from "../components/BoxContainer";

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
        <div className="flex flex-col col-auto max-w-md justify-items-center mb-15 mx-auto gap-5 lg:max-w-full lg:grid grid-cols-3 lg:gap-10 w-full h-xl text-black">
          <BoxContainer
            img="mdi:truck-fast"
            title="Messenger Service"
            description="We provide easy delivery options across town, around Jakarta through one technology enabled service provider."
          />
          <BoxContainer
            img="lucide:monitor-cog"
            title="DO Messenger Service"
            description="The easy-to-use DJPM tracking tool gives you real-time information about the location and status of your shipment."
          />
          <BoxContainer
            img="uil:bill"
            title="Billing Process"
            description="Manages billing cycle, from receiving and verifying invoices to processing payments accurately and on time, ensuring smooth financial operations for your business."
          />
        </div>
      </Container>
    </>
  );
  x;
}

export default SectionWhatWeDo;
