import Container from "@/components/layouts/Container";
import React from "react";

function SectionHorizonBox() {
  return (
    <Container>
      <section className="grid grid-cols-3 gap-15 items-start my-10 text-center">
        <div className="bg-[#1c2b4f] p-2 grid ">
          <p className="font-bold text-xl p-2">Penetapan Tujuan Professional</p>

          <p>
            Melibatkan dialog antara karyawan dengan atasan atau HR untuk
            menetapkan sasaran karir yang jelas dan realistis. Hal ini mencakup
            identifikasi posisi atau peran yang diinginkan di masa depan.
          </p>
        </div>

        {/* <div className="bg-[#1c2b4f] p-2">asdsad</div>

        <div className="bg-[#1c2b4f] p-2">
          <p className="font-bold text-xl p-2">Evaluasi Kompetensi</p>

          <p>
            Dilakukan secara periodik untuk menilai kesesuaian antara kemampuan
            yang dimiliki dengan kompetensi yang dibutuhkan untuk mencapai
            tujuan karir tersebut. Evaluasi ini bisa dilakukan melalui
            assessment, review kinerja, atau feedback 360 derajat.
          </p>
        </div> */}
      </section>
    </Container>
  );
}

export default SectionHorizonBox;
