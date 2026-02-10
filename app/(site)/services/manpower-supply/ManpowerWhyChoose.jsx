"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ManpowerWhyChoose({ data }) {
  // Logic Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    loop: true,
    slidesToScroll: 1 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] text-center mb-16 tracking-widest uppercase">
          Why Choose Us
        </h2>

        <div className="relative flex items-center">
          {/* Tombol Kiri */}
          <button 
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-16 z-10 text-[#f9a825] hover:scale-110 transition-transform"
          >
            <ChevronLeft size={60} strokeWidth={2.5} />
          </button>

          {/* Viewport Embla */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {data.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
                >
                  <div className="bg-[#1a2b4b] p-10 rounded-2xl shadow-xl h-[400px] flex flex-col items-start space-y-5 hover:bg-[#243b66] transition-colors group">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Kanan */}
          <button 
            onClick={scrollNext}
            className="absolute -right-4 md:-right-16 z-10 text-[#f9a825] hover:scale-110 transition-transform"
          >
            <ChevronRight size={60} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}