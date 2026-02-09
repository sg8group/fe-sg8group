import Container from "@/components/ui/Container";
import React from "react";

function SectionDoubleImage() {
  return (
    <Container>
      <div className="flex flex-col md:grid grid-cols-2 text-black place-items-center">
        <div className="stack justify-center items-center m-5">
          <img
            src="/recruitment/people-development/people-thumb.jpg"
            alt="Gambar Abang-Abangan"
            className="h-100 rounded-2xl"
          />
          <img
            src="/recruitment/people-development/people-thumb.jpg"
            alt="Gambar Abang-Abangan"
            className="h-100 rounded-2xl blur-sm"
          />
          <img
            src="/recruitment/people-development/people-thumb.jpg"
            alt="Gambar Abang-Abangan"
            className="h-100 rounded-2xl blur-sm"
          />
        </div>

        <div className="justify-center text-justify text-lg">
          <p>
            People Development bukanlah sekadar program pelatihan formal atau
            serangkaian workshop semata, melainkan merupakan suatu pendekatan
            holistik yang mengintegrasikan pembelajaran formal dan informal,
            mentoring, coaching, serta pengelolaan karir secara menyeluruh.
          </p>

          <p className="my-5">
            Pendekatan ini mengakui bahwa setiap individu memiliki potensi unik
            yang, jika dikembangkan secara sistematis dan berkelanjutan, dapat
            menghasilkan dampak signifikan tidak hanya pada peningkatan kinerja
            individu, tetapi juga pada inovasi, adaptasi, dan pertumbuhan
            organisasi secara keseluruhan.
          </p>

          <p>
            People development dalam SG8 Group berbicara bagaimana investasi
            dalam pengembangan sumber daya manusia, yang meliputi peningkatan
            hard skills dan soft skills yang akan dapat menjadi kunci utama
            dalam menghadapi dinamika persaingan global dan era revolusi
            industri 4.0. People Development menjadi elemen kunci untuk
            memastikan organisasi dapat berinovasi, bertahan, dan berkembang
            dalam menghadapi disrupsi.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default SectionDoubleImage;
