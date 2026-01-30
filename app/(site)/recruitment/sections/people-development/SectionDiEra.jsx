import Container from "@/components/layouts/Container";
import React from "react";

function SectionDiEra() {
  return (
    <Container>
      <div className="flex flex-col text-black my-10 text-justify [text-align-last:center] gap-3">
        <div className="text-3xl font-semibold">
          Di era globalisasi dan transformasi digital saat ini, keunggulan
          kompetitif suatu organisasi tidak lagi semata-mata ditentukan oleh
          kemampuan teknologinya, melainkan juga oleh kualitas sumber daya
          manusianya.
        </div>

        <div className="text-lg font-medium px-4">
          Konsep People Development muncul sebagai suatu pendekatan strategis
          yang menekankan pada peningkatan kompetensi, pengembangan potensi, dan
          pemberdayaan individu agar dapat berkontribusi secara maksimal
          terhadap pencapaian tujuan organisasi.
        </div>
      </div>
    </Container>
  );
}

export default SectionDiEra;
