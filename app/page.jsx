import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import IntroStats from "./components/sections/IntroStats";
import OurServices from "./components/sections/OurServices";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="pointer-events-auto">
          <Navbar />
        </div>
      </div>
      <main className="flex flex-col gap-7 items-center">
        {/* <h1 className="heading text-4xl text-black">SG8 Group</h1>
        <h2 className="section-title text-black text-2xl">Our Services</h2>
        <p className="text-black">Ini otomatis poppins</p> */}
        <Hero />
        <IntroStats />
        <OurServices />
      </main>
    </div>
  );
}
