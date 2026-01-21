import React from 'react';
import Hero from '@/components/sections/Hero';
import OurClient from '@/components/sections/OurClient';
import Image from 'next/image';

export default function LogoPhilosophyPage() {
  return (
    <>
      <Hero />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Logo Philosophy
            </h2>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-50 rounded-2xl p-8 shadow-sm">
              <Image 
                src="/primLogo_sg8.png" // Pastikan file logo ada di folder public
                alt="SG8 Logo Philosophy Symbol"
                fill
                className="object-contain p-4"
              />
            </div>
            </div>
          </div>
          
      </section>
      

      <OurClient />
    </>
  );
}