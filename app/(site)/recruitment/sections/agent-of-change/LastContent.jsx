import Container from "@/components/ui/Container";
import React from "react";

function LastContent() {
  return (
    <section className="bg-[#1c2b4f] my-10 px-6 py-10 md:px-12">
      <Container>
        <div className="mx-auto text-slate-100 text-justify">
          {/* Intro */}
          <p className="text-xl leading-relaxed mb-6">
            Implementasi agen perubahan pada praktiknya dalam perusahaan SG8
            ialah menjalankan peran dan tugas sebagai berikut:
          </p>

          {/* List */}
          <ol className="list-decimal pl-6 space-y-4 text-lg leading-relaxed mb-8">
            <li>
              <span className="font-medium">Sebagai katalis</span>, yang
              bertugas memberikan keyakinan kepada seluruh karyawan di
              lingkungan area kerjanya masing-masing tentang pentingnya
              perubahan arah kerja menuju ke arah yang lebih baik.
            </li>
            <li>
              <span className="font-medium">Sebagai penggerak perubahan</span>,
              yang bertugas mendorong dan menggerakkan karyawan untuk ikut
              berpartisipasi dalam perubahan menuju ke arah unit kerja yang
              lebih baik.
            </li>
            <li>
              <span className="font-medium">Sebagai pemberi solusi</span>, yang
              bertugas memberikan alternatif solusi kepada para karyawan atau
              pimpinan di lingkungan area kerja yang menghadapi kendala dalam
              proses berjalan perubahan area kerja menuju yang lebih baik.
            </li>
            <li>
              <span className="font-medium">Sebagai mediator</span>, yang
              bertugas membantu memperlancar proses perubahan, terutama
              menyelesaikan masalah yang muncul dalam pelaksanaannya dan membina
              hubungan antara pihak-pihak yang ada di dalam dan di luar area
              kerja.
            </li>
            <li>
              <span className="font-medium">Sebagai penghubung</span>, yang
              bertugas menghubungkan komunikasi dua arah antara para karyawan di
              lingkungan area kerjanya dengan para pengambil keputusan.
            </li>
          </ol>

          {/* Paragraphs */}
          <p className="leading-relaxed text-xl mb-4 text-slate-200">
            Dalam menyikapi perubahan, manusia tidak dapat berdiam diri melihat
            semua berubah tanpa adanya upaya mengimbangi perubahan itu sendiri.
            Perlu adanya upaya yang dilakukan agar tidak hanyut dalam arus
            perubahan yang semakin hari semakin deras.
          </p>

          <p className="leading-relaxed text-xl mb-4 text-slate-200">
            Arus perubahan terbagi menjadi dua, yaitu arus perubahan baik dan
            arus perubahan yang buruk.
          </p>

          <p className="leading-relaxed text-xl mb-4 text-slate-200">
            Agen perubahan (<span className="italic">Agent of Change</span>)
            harus mampu mengarahkan perubahan pada inovasi yang positif, membawa
            perubahan atau inovasi, serta mempengaruhi orang lain sehingga
            menuju pengambilan keputusan yang sesuai dengan harapan dan tujuan
            yang baik.
          </p>

          <p className="leading-relaxed  text-slate-200">
            Terdapat banyak cara untuk mengubah, termasuk kunci keberhasilan
            dari perubahan itu sendiri. Tinggal bagaimana setiap individu
            menilai dan menyikapi perubahan tersebut. Mari bersama menjadi
            bagian dari agen perubahan (
            <span className="italic">Agent of Change</span>) dalam perusahaan
            SG8 agar dapat bertumbuh dan berkembang bersama.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default LastContent;
