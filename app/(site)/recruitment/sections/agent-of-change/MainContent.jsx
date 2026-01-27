import Container from "@/components/layouts/Container";
import React from "react";

function MainContent() {
  return (
    <div className="w-full flex-row justify-center items-center py-25 bg-[#1c2b4f]">
      <Container>
        {/* Konten pertama */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full justify-center">
          <div className="order-1 lg:order-2 lg:col-span-1 relative w-full max-w-sm justify-center items-center">
            <img
              src="/recruitment/agent-of-change/image01.png"
              alt="Agent of Change"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="order-2 lg:order-1 lg:col-span-3 text-white text-base leading-relaxed text-justify space-y-6">
            <p>
              Dalam perusahaan SG8, suatu perubahan harus mampu memengaruhi
              pengambilan keputusan yang inovatif agar dapat sesuai dengan
              tujuan atau harapan perusahaan. Artinya, perubahan ini menjadi
              baik bagi kelangsungan perusahaan. Individu dan kelompok yang
              mengubah atau memengaruhi orang lain untuk mengambil keputusan
              inovatif agar sesuai dengan harapan disebut agen perubahan (Agent
              of Change).
            </p>

            <p>
              Seorang agen perubahan (Agent of Change) dalam perusahaan SG8
              harus mampu menyediakan gagasan atau pikiran dari berbagai sudut
              pandang. Dalam artian bahwa seseorang yang dipercaya sebagai agen
              perubahan harus memiliki pola pikir yang terbuka agar dapat
              melihat suatu permasalahan atau perubahan dari sudut pandang yang
              beragam.
            </p>

            <p>
              Dengan demikian, agen perubahan dapat memengaruhi orang lain untuk
              mengambil keputusan secara inovatif dan mampu memberikan perubahan
              yang positif sesuai dengan tujuan atau harapan perusahaan. Salah
              satu area penting dari perubahan tersebut adalah perubahan mindset
              (pola pikir) dan culture set (budaya kerja).
            </p>
          </div>
        </div>

        {/* Konten kedua */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full py-10">
          {/* Kolom gambar */}
          <div className="order-1 lg:col-span-1 flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              {/* Gambar utama */}
              <img
                src="/recruitment/agent-of-change/image01.png"
                alt="Agent of Change"
                className="w-full h-auto object-cover rounded-xl"
              />

              {/* Gambar overlay */}
              <img
                src="/recruitment/agent-of-change/image01.png"
                alt="Agent of Change Detail"
                className="
                    absolute 
                    -bottom-5 
                    -right-5 
                    w-2/3 
                    h-auto 
                    object-cover 
                    rounded-xl 
                    shadow-lg "
              />
            </div>
          </div>

          {/* Kolom teks */}
          <div className="order-2 lg:col-span-3 text-white text-base leading-relaxed text-justify space-y-6">
            <p>
              Perubahan pola pikir dan budaya kerja karyawan di lingkungan
              perusahaan SG8 ditujukan untuk mewujudkan peningkatan integritas
              serta kinerja yang tinggi. Integritas dimaknai sebagai sikap
              individu karyawan yang mengutamakan perilaku terpuji, tidak
              koruptif, disiplin, dan penuh pengabdian, sehingga mampu mendorong
              terwujudnya perusahaan yang bersih serta bebas dari praktik
              korupsi, kolusi, dan nepotisme.
            </p>

            <p>
              Makna kinerja tinggi adalah individu karyawan perusahaan yang
              memiliki etos kerja yang tinggi, bekerja secara profesional, dan
              mampu mencapai target kinerja yang telah ditetapkan, sehingga
              dapat mendorong terwujudnya pencapaian target kinerja perusahaan.
              Salah satu faktor penting dalam perubahan pola pikir dan budaya
              kerja di lingkungan perusahaan SG8 adalah adanya keteladanan
              perilaku yang nyata dari pimpinan dan karyawan di lingkungan
              perusahaan.
            </p>
          </div>
        </div>

        {/* Teks agen perubahan */}
        <div className="w-full ">
          <h1 className="text-lg font-bold">
            Agen Perubahan (Agent Of Change)
          </h1>
          <p className="text-white text-base leading-relaxed text-justify mt-4">
            dalam perusahaan SG8 bertugas untuk melakukan intervensi terhadap
            sesuatu yang menghalangi dan membuat sesuatu tersebut menjadi
            berkembang lebih baik dan dikenal dengan proses transformasi
            serta metamorphosis, yakni:
          </p>
        </div>

        {/* Poin agen perubahan */}
        <div className="w-full bg-white rounded-xl py-10 px-6 text-black">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div
                className="w-14 h-14 rounded-full border-3 border-black
                      flex items-center justify-center text-2xl font-bold"
              >
                1
              </div>
              <p className="text-regular">
                Dari yang berjalan di tempat menjadi terbang jauh
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div
                className="w-14 h-14 rounded-full border-3 border-black
                      flex items-center justify-center text-2xl font-bold"
              >
                2
              </div>
              <p className="text-regular">Dari yang menjijikkan ke yang dipuja</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div
                className="w-14 h-14 rounded-full border-3 border-black
                      flex items-center justify-center text-2xl font-bold"
              >
                3
              </div>
              <p className="text-regular">Dari tak berguna menjadi berguna</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div
                className="w-14 h-14 rounded-full border-3 border-black
                      flex items-center justify-center text-2xl font-bold"
              >
                4
              </div>
              <p className="text-regular">
                Dari penghambat menjadi penghias/agen perubahan (Agent of
                Change)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainContent;
