import Container from "@/components/layouts/Container";
import React from "react";
import BoxJob from "./BoxJob";

function NJob() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-2">
        <BoxJob />
        <BoxJob />
        <BoxJob />
        <BoxJob />
      </div>
    </Container>
  );
}

export default NJob;
