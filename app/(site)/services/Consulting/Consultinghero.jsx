import Image from "next/image";
import { motion } from "framer-motion";

export default function ConsultingHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/consulting.png" alt="Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-3xl md:text-5xl lg:text-4xl font-bold max-w-5xl mx-auto leading-tight"
        >
          Unlock Your Business Potential with <br /> Business Expert Consulting
        </motion.h1>
      </div>
    </section>
  );
}