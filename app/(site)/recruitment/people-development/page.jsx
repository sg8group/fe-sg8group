import React from "react";
import SectionDiEra from "../sections/people-development/SectionDiEra";
import SectionDoubleImage from "../sections/people-development/SectionDoubleImage";
import SectionBackImage from "../sections/people-development/SectionBackImage";
import SectionPengembangan from "../sections/people-development/SectionMiniText";
import SectionTripleBox from "../sections/people-development/SectionTripleBox";
import ContainerHeadBody from "../sections/people-development/ContainerHeadBody";
import SectionHorizonBox from "../sections/people-development/SectionHorizonBox";
import SectionLastBox from "../sections/people-development/SectionLastBox";
import Hero from "@/components/sections/Hero";

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
