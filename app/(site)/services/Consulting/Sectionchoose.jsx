
import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

function Sectionchoose() {
  const reasons = [
    {
      no: "01.",
      title: "Strategic Approach for Maximum Impact",
      desc: "We conduct a deep-dive analysis to understand your challenges and design the best action plan."
    },
    {
      no: "02.",
      title: "Experienced Consultants Across Multiple Industries",
      desc: "Our team consists of highly skilled professionals with decades of experience in various sectors."
    },
    {
      no: "03.",
      title: "Data-Driven and Results-Oriented Methodology",
      desc: "We believe in facts, not guesses. Every recommendation is backed by market research and financial analysis."
    },
    {
      no: "04.",
      title: "End-to-End Business Solutions",
      desc: "From startup planning to corporate restructuring, we cover every aspect of your business lifecycle."
    },
    {
      no: "05.",
      title: "Customized Strategies to Fit Your Business Needs",
      desc: "We don't believe in one-size-fits-all solutions. Our approach is fully customized to align with your goals."
    }
  ];

  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
        {/* bagian kiri */}
          <div className="flex flex-col">
            
            <div className="flex items-center gap-4 mb-10">
              <div className="relative w-12 h-12">
                <Image src="/lampu.png" alt="Why Choose Us" fill className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] uppercase tracking-wide">
                Why Choose Us?
              </h2>
            </div>

            {/* untuk item listnya */}
            <div className="space-y-8">
              {reasons.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-[#1a2b4b] font-bold text-lg flex items-center gap-2">
                    <span className="text-[#1a2b4b]">{item.no}</span> {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* posisi kanan */}
          <div className="relative w-full h-[500px] md:h-[650px]">
            <Image 
              src="/gambar2.png" 
              alt="Team Collaboration"
              fill
              className="object-cover rounded-[3rem] shadow-2xl"
            />
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Sectionchoose;