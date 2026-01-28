import { motion } from "framer-motion";

export default function ConsultingIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-18 text-center max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-bold text-black mb-8"
        >
          Empowering Businesses with Strategic Solutions
        </motion.h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          In today's fast-paced business landscape, making the right decisions is critical to success...
        </p>
      </div>
    </section>
  );
}