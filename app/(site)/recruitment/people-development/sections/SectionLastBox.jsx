import React from "react";
import ContainerBox from "./ContainerBox";
import Container from "@/components/ui/Container";

function SectionLastBox() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-5 rounded-xl">
        <div className="col-span-2 bg-gray-100 text-black border text-lg border-[1c2b4f] rounded-xl p-8 text-justify shadow-lg shadow-blue-800/30">
          SG8 Group menggunakan sistem evaluasi yang menggabungkan penilaian
          dari berbagai sumber untuk mendapatkan gambaran menyeluruh mengenai
          kinerja individu. Hasil evaluasi ini kemudian diintegrasikan ke dalam
          rencana pengembangan pribadi, sehingga karyawan mendapatkan panduan
          yang jelas untuk perbaikan dan peningkatan kompetensi.
        </div>

        <ContainerBox
          title={"Penilaian Berkala"}
          description={
            "Dilakukan melalui berbagai metode seperti evaluasi kinerja, assessment, dan survei kepuasan karyawan. Penilaian ini memungkinkan organisasi untuk mengukur peningkatan kemampuan individu serta dampaknya terhadap kinerja tim dan organisasi secara keseluruhan."
          }
        />
        <ContainerBox
          title={"Penilaian Berkala"}
          description={
            "Proses umpan balik dilakukan secara rutin dan transparan, baik dari atasan, rekan sejawat, maupun bawahan. Umpan balik yang konstruktif membantu karyawan memahami kekuatan dan kelemahan mereka, serta merumuskan langkah-langkah perbaikan yang spesifik."
          }
        />
      </div>
    </Container>
  );
}

export default SectionLastBox;
