import Image from "next/image";
import { motion } from "framer-motion";

export default function TailoredSolutions() {
  return (
    <section className="py-20 bg-[#1a2b4b]">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8 text-white"
          >
            <h2 className="text-3xl font-bold leading-tight">We provide tailored solutions to ensure your business thrives in a competitive environment.</h2>
            <p className="text-gray-300 text-lg">Our Goal is Helping businesses achieve sustainable growth, operational efficiency, and long-term profitability with data-driven strategies.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative h-[300px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/consulting1.png" alt="Strategic" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}