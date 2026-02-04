import Container from "@/components/ui/Container";
import React from "react";

function SectionTripleBox() {
  return (
    <Container>
      <section className="flex flex-col lg:grid grid-cols-2 gap-5 items-center">
        <div className="lg:grid bg-[#1c2b4f] p-5 min-h-70 rounded-xl">
          <p className="font-semibold text-xl mb-2">
            Program Mentoring dan Coaching
          </p>

          <p className="text-justify text-lg">
            Melalui pendekatan mentoring, karyawan yang lebih berpengalaman
            membimbing karyawan junior untuk mengasah kemampuan kepemimpinan.
            Sementara coaching berfokus pada pengembangan individu dengan
            pendekatan yang lebih personal dan terstruktur untuk mengatasi
            kekurangan tertentu serta meningkatkan potensi yang ada.
          </p>
        </div>
        <div className="bg-[#1c2b4f] p-5 min-h-70 rounded-xl items-center">
          <p className="font-semibold text-xl mb-2">Rotational Assignments</p>

          <p className="text-justify text-lg">
            Metode ini melibatkan penempatan karyawan dalam berbagai departemen
            atau fungsi organisasi selama periode tertentu. Dengan demikian,
            karyawan mendapatkan pemahaman menyeluruh mengenai operasi
            perusahaan dan dapat mengembangkan perspektif lintas fungsi yang
            penting bagi kepemimpinan yang efektif.
          </p>
        </div>
      </section>
      <section className="bg-[#1c2b4f] p-5 rounded-xl">
        <p className="text-lg text-justify [text-align-last:center]">
          SG8 Group mengembangkan program “leadership academy” di mana karyawan
          terpilih mengikuti rangkaian pelatihan intensif dan penugasan rotasi
          guna mengasah kemampuan strategis dan operasional, sehingga siap
          mengisi posisi manajerial yang lebih tinggi di masa depan.
        </p>
      </section>
    </Container>
  );
}

export default SectionTripleBox;
