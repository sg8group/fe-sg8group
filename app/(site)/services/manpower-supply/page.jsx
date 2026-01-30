"use client";

import Image from "next/image";
import Hero from "@/components/sections/Hero";
import OurClient from "@/components/sections/OurClient";
import OurMindset from "@/components/sections/OurMindset";
import { motion } from "framer-motion";

export default function ManpowerSupplyPage() {

  const managedFeatures = [
    "Long-Term Contract Staffing",
    "Workforce Planning & Optimization",
    "End-to-End HR & Payroll Management",
    "Compliance & Risk Management",
    "Training & Skill Development",
    "Flexible Workforce Scaling",
  ];

  
  const headhuntingFeatures = [
    "Executive Search",
    "Professional & Specialist Search",
    "Mass Hiring & Volume Recruitment",
    "Project-Based Recruitment",
    "Confidential Search",
  ];

  
  const whyChooseUs = [
    {
      title: "End-to-End Workforce Solutions",
      desc: "From talent acquisition to long-term workforce management, we provide comprehensive solutions tailored to your business needs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Quality Talent, Faster Hiring",
      desc: "With an extensive candidate database and a strong industry network, we ensure you get the right talent quickly and efficiently.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Less Risk Workforce Management",
      desc: "We handle all administrative aspects, including payroll, contracts, and legal compliance, so you can focus on growing your business.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Hero/>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">Managed <br /> Workforce Solutions</h2>
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">Headhunting & <br /> Executive Search</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With a strategic approach and deep industry insights, we go beyond conventional hiring methods to connect you with high-caliber candidates.
              </p>
              <ul className="space-y-3 pt-4">
                {headhuntingFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="text-orange-500 font-bold hover:underline">Learn More →</button>
            </motion.div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <Image src="/manpower-supply2.png" alt="Headhunting" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] text-center mb-16 tracking-widest uppercase">
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#1a2b4b] p-10 rounded-2xl shadow-xl flex flex-col items-start space-y-5 hover:bg-[#243b66] transition-colors group"
              >
                <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center" overflow="hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/manpower-supply3.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2b4b]/80 mix-blend-multiply"></div>
        </div>
  
        </section>
      

      <OurClient />
    </main>
  );
}