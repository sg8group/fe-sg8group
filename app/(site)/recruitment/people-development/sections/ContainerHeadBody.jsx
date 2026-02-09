import React from "react";
import Container from "@/components/ui/Container";

function ContainerHeadBody({ title, text }) {
  return (
    <Container>
      <div className="flex flex-col text-black text-center justify-center my-12">
        <p className="text-start font-bold text-2xl my-2 ">{title}</p>

        <p className="text-start text-lg max-w-300">{text}</p>
      </div>
    </Container>
  );
}

export default ContainerHeadBody;
