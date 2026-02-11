import Image from "next/image";

export default function ManpowerBanner() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/manpower-supply3.png"
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2b4b]/80 mix-blend-multiply"></div>
      </div>
    </section>
  );
}

