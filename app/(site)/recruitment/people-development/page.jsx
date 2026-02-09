import Hero from "@/components/shared/Hero";
import React from "react";
import SectionDiEra from "./sections/SectionDiEra";
import SectionDoubleImage from "./sections/SectionDoubleImage";
import ContainerHeadBody from "./sections/ContainerHeadBody";
import SectionBackImage from "./sections/SectionBackImage";
import SectionPengembangan from "./sections/SectionMiniText";
import SectionTripleBox from "./sections/SectionTripleBox";
import SectionLastBox from "./sections/SectionLastBox";
import SectionHorizonBox from "./sections/SectionHorizonBox";

function page() {
  return (
    <>
      <Hero title="People Development"/>
      <SectionDiEra />
      <SectionDoubleImage />
      <ContainerHeadBody
        title="Peningkatan Kompetensi Karyawan SG8 Group"
        text="Peningkatan kompetensi karyawan merupakan proses sistematis yang bertujuan untuk menambah dan memperdalam pengetahuan, keterampilan, dan sikap kerja karyawan. Hal ini mencakup pengembangan dua jenis kompetensi, yaitu:"
      />
      <SectionBackImage />
      <SectionPengembangan />
      <ContainerHeadBody
        title="Pengembangan Kepemimpinan"
        text="Peningkatan kompetensi karyawan merupakan proses sistematis yang bertujuan untuk menambah dan memperdalam pengetahuan, keterampilan, dan sikap kerja karyawan. Hal ini mencakup pengembangan dua jenis kompetensi, yaitu:"
      />
      <SectionTripleBox />
      <ContainerHeadBody
        title="Manajemen Karir"
        text="Manajemen karir merupakan suatu upaya strategis untuk membantu karyawan merencanakan, mengelola, dan mengarahkan jalur karir mereka di dalam organisasi. Pendekatan ini memastikan bahwa perkembangan profesional karyawan sejalan dengan kebutuhan dan tujuan strategis perusahaan. Hal ini terdapat pada:"
      />
      <SectionHorizonBox />
      <ContainerHeadBody
        title="Evaluasi dan Umpan Balik"
        text="Evaluasi dan umpan balik merupakan suatu proses sistematis untuk menilai perkembangan kompetensi karyawan serta efektivitas program pengembangan yang telah dijalankan. Tujuan utama dari proses ini adalah untuk mengidentifikasi area yang perlu ditingkatkan dan memberikan arahan yang konstruktif untuk pengembangan lebih lanjut. Hal yang biasa Kami lakukan meliputi:"
      />
      <SectionLastBox />
    </>
  );
}

export default page;
