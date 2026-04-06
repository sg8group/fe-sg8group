"use client";

import React from "react";
import Hero from "@/components/sections/Hero";
import Container from "@/components/layouts/Container";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function SG8CleanPage() {
  const services = [
    {
      title: "Commercial Cleaning",
      desc: "Professional cleaning services for offices, malls, and industrial buildings.",
      icon: <Sparkles className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Specialized Sanitation",
      desc: "Deep cleaning and virus disinfection using international standard chemicals.",
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Bungkus Hero dengan div h-screen supaya gambar full.
        Pastiin komponen Hero lo pake bg-cover & bg-center.
      */}
      <div className="h-screen w-full relative overflow-hidden">
        <Hero title="SG8 Clean" />
      </div>
      
      <Container>
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-6 uppercase tracking-wider">
              Excellence in Cleaning & Hygiene
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-lg">
              We provide premium cleaning solutions tailored for businesses that prioritize 
              health, safety, and a spotless professional environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              {services.map((item, idx) => (
                <div key={idx} className="p-10 border border-gray-100 rounded-3xl hover:shadow-2xl transition-all bg-white flex items-start space-x-8 group">
                  <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a2b4b] mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}