import Container from "@/components/layouts/Container";
import Image from "next/image";
import React from "react";

function SectionBackImage() {
  return (
    <section className="relative flex min-h-90 w-screen overflow-hidden items-center justify-center pt20 ">
      <Image
        alt="Gambar adek"
        src={"/recruitment/people-development/clean-building.jpg"}
        fill
        className="object-cover blur-xs"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />

      <Container>
        <div className="relative z-10 py-5 md:flex grid-cols-2 text-white gap-8 text-justify">
          <div className="bg-[#1c2b4f] p-5 rounded-xl my-5">
            <p className="font-semibold mb-2">
                Keterampilan Teknis (Hard Skills)
            </p>
            Mencakup pengetahuan dan kemampuan spesifik yang dibutuhkan untuk
            menjalankan tugas-tugas operasional atau teknis. Contohnya adalah
            penguasaan bahasa pemrograman dalam industri TI, kemampuan analisis
            data dalam sektor keuangan, atau teknik pemasaran digital dalam
            dunia bisnis modern.
          </div>

          <div className="bg-[#1c2b4f] p-5 rounded-xl my-5">
            <p className="font-semibold mb-2">
                Keterampilan Interpersonal (Soft Skills)
            </p>
            Mencakup aspek komunikasi, kerja sama tim, kepemimpinan, kemampuan
            menyelesaikan konflik, serta keterampilan negosiasi dan empati. Soft
            skills ini penting untuk menciptakan lingkungan kerja yang kondusif
            dan meningkatkan efektivitas kolaborasi antar individu dalam
            organisasi
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionBackImage;
