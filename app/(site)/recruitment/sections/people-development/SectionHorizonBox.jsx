import Container from "@/components/layouts/Container";
import ContainerBox from "./ContainerBox";

function CareerFeatureSection() {
  return (
    <Container>
      <section className="py-5  bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Card kiri */}
          <ContainerBox
            title="Penetapan Tujuan Profesional"
            description="Melibatkan dialog antara karyawan dengan atasan atau HR untuk menetapkan sasaran karir yang jelas dan realistis..."
            image="/recruitment/people-development/people-thumb.jpg"
          />

          {/* Card tengah (highlight) */}
          <ContainerBox
            // title="Platform Manajemen Karir"
            description="SG8 Group menyediakan platform online untuk manajemen karir, di mana karyawan dapat mengakses informasi peluang pengembangan..."
          />

          {/* Card kanan */}
          <ContainerBox
            title="Evaluasi Kompetensi"
            description="Dilakukan secara periodik untuk menilai kesesuaian antara kemampuan yang dimiliki dengan kompetensi yang dibutuhkan..."
            image="/recruitment/people-development/people-thumb.jpg"
          />
        </div>
      </section>
    </Container>
  );
}

export default CareerFeatureSection;
