import Image from "next/image";
import { motion } from "framer-motion";

const headhuntingFeatures = [
  "Executive Search",
  "Professional & Specialist Search",
  "Mass Hiring & Volume Recruitment",
  "Project-Based Recruitment",
  "Confidential Search",
];

export default function ManpowerHeadhunting() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Headhunting & <br /> Executive Search
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a strategic approach and deep industry insights, we go beyond
              conventional hiring...
            </p>
            <ul className="space-y-3 pt-4">
              {headhuntingFeatures.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-3 text-gray-700 font-medium"
                >
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="text-orange-500 font-bold hover:underline">
              Learn More →
            </button>
          </motion.div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/manpower-supply2.png"
                alt="Headhunting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
