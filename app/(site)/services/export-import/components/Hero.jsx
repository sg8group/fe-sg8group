import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-dvh w-screen overflow-hidden pt20 md:pt-22">
      <Image
        src="/our-services/Container-Ships.png"
        alt="SG8 Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex h-full items-center justify-start pl-10 md:pl-25 lg:pl-40 text-center  ">
        <h1 className="text-white heading text-start max-w-100 lg:max-w-200 text-3xl lg:text-6xl sm:text-4xl">
          Your Trusted Partner for Seamless Import-Export Solutions
        </h1>
      </div>
    </section>
  );
}
