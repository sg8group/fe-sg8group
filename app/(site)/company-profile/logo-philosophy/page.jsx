import React from 'react';
import Hero from '@/components/sections/Hero';
import OurClient from '@/components/sections/OurClient';
import Image from 'next/image';

export default function LogoPhilosophyPage() {
  return (
    <>
      <Hero />
      
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center space-y-12 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Logo Philosophy
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[16/9]">
                <Image 
                  src="/primLogo_sg8.png" 
                  alt="SG8 Logo Philosophy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8 text-left">
              <div className="space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
                  The SG8 logo captures Sutanto Group’s philosophy through a harmonious blend of 
                  elements that symbolize the core aspects of its ventures and values. The 
                  circular shape represents unity and inclusivity, reflecting an integrated 
                  approach across diverse sectors.
                </p>
                <p className="text-gray-800 text-lg leading-relaxed">
                  The initials “SG” stand for Sutanto Group, while the number 8 signifies infinity, 
                  embodying the continuous flow of abundant energy and limitless opportunities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-12 lg:px-24">
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      
     
      <div className="flex flex-col md:flex-row items-center bg-[#1a2b4b] rounded-[40px] p-8 md:p-12 shadow-lg overflow-hidden">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative w-40 h-40">
          
            <Image 
              src="/primLogo_sg8.png" 
              alt="Stability Symbol"
              fill
              className="object-contain brightness-0 invert opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-white text-lg md:text-xl leading-relaxed text-center md:text-left">
            On the left side, the rectangular form embodies stability and growth, 
            symbolizing our firm foundations and commitment to building strong relationships.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#f0f2f5] rounded-[40px] p-8 md:p-12 shadow-md overflow-hidden">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative w-40 h-40">
            <Image 
              src="/primLogo_sg8.png" 
              alt="Growth Symbol"
              fill
              className="object-contain opacity-80"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center md:text-left">
            On the left side, the rectangular form embodies stability and growth, 
            symbolizing our firm foundations and commitment to building strong relationships.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#f9a825] rounded-[40px] p-8 md:p-12 shadow-lg overflow-hidden">
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <div className="relative w-40 h-40">
            <Image 
              src="/primLogo_sg8.png" 
              alt="Commitment Symbol"
              fill
              className="object-contain brightness-0 invert opacity-90"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-white text-lg md:text-xl leading-relaxed text-center md:text-left">
            On the left side, the rectangular form embodies stability and growth, 
            symbolizing our firm foundations and commitment to building strong relationships.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      <OurClient />
    </>
  );
}