import Container from "@/components/ui/Container";
import { Content } from "next/font/google";
import React from "react";
import BoxContainer from "./BoxContainer";

function NextContent() {
  return (
    <div>
      <Container>
        <div className="text-black my-10 text-center">
          <p className="text-2xl font-bold">Agen Perubahan (Agent of Change)</p>

          <p className="mt-5 text-xl text-justify">
            Bermunculan dengan membawa ide-ide yang segar dan baru, serta
            membawa pengaruh baik bagi yang ingin merasakan dan ingin melakukan
            perubahan. Agen Perubahan (Agent of Change) di perusahaan SG8 ialah
            berperan sebagai berikut:
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="hidden md:grid grid-cols-3 gap-4 text-black text-center ">
              <BoxContainer number="01" text="Membangun kesadaran bahwa mereka memerlukan perubahan (To develop a need for change)" />
              <BoxContainer number="02" text="Mengembangkan hubungan dengan saling tukar informasi (To establish an information exchange relationship)" />
              <BoxContainer number="03" text="Melakukan identifikasi masalah (To diagnose problems)" />
          </div>

          <div className="hidden md:grid grid-cols-2 gap 4 gap-4 max-w-200 text-center mx-auto">
              <BoxContainer number="04" text="Mendorong niat untuk berubah (To create an intent in the client to change)" />
              <BoxContainer number="05" text="Mentransformasikan sekedar niat menjadi tindakan nyata (To translate an intent to action)" />
          </div>

          <div className="flex flex-col gap-5 text-center items-center md:hidden">
              <BoxContainer number="01" text="Membangun kesadaran bahwa mereka memerlukan perubahan (To develop a need for change)" />
              <BoxContainer number="02" text="Mengembangkan hubungan dengan saling tukar informasi (To establish an information exchange relationship)" />
              <BoxContainer number="03" text="Melakukan identifikasi masalah (To diagnose problems)" />
              <BoxContainer number="04" text="Mendorong niat untuk berubah (To create an intent in the client to change)" />
              <BoxContainer number="05" text="Mentransformasikan sekedar niat menjadi tindakan nyata (To translate an intent to action)" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NextContent;
