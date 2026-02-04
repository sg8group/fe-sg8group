import Image from "next/image";
import { motion } from "framer-motion";

const managedFeatures = [
  "Long-Term Contract Staffing", "Workforce Planning & Optimization",
  "End-to-End HR & Payroll Management", "Compliance & Risk Management",
  "Training & Skill Development", "Flexible Workforce Scaling",
];

export default function ManpowerManaged() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Managed <br /> Workforce Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our comprehensive service for providing skilled workers on a one-year contract basis...
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {managedFeatures.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-gray-700 font-medium">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <Image src="/manpower-supply.png" alt="Manpower" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}