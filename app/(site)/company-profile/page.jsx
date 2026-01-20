import React from 'react';
import Image from 'next/image';
import Hero from '@/components/sections/Hero';

function CompanyProfilePage() {
  return (
    <>
      <Hero />

      {/* Section About Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Sisi Teks (Kiri) */}
            <div className="w-full lg:w-3/5 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                About Us
              </h2>
              
              <div className="text-gray-800 text-lg space-y-4 leading-relaxed">
                <p>
                  Sutanto Group (SG8) is a holding company that has existed since 1989 for 
                  PT Citra Mandiri Cemerlang Prima and PT Dwitunggal Jaya Pratama Maju.
                </p>
                
                <p>
                  For 35+ years, we have been helping many clients from local and 
                  multinational companies. SG8 Group is our new brand for the holding 
                  company that also owns:
                </p>
              </div>

              {/* List Bisnis */}
              <ol className="list-decimal list-inside text-gray-800 text-lg space-y-1 ml-2">
                <li>SG8 Clean (For Cleaning Services)</li>
                <li>SG8 Recruit (For Manpower Supply Services)</li>
                <li>SG8 Drive (For Car Rental Services)</li>
                <li>SG8 Care (For Hospitality Services)</li>
                <li>SG8 Consulting (For Business Growth Services)</li>
              </ol>
            </div>

            {/* Sisi Gambar (Kanan) - Efek Parallelogram/Miring */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3]">
                {/* Pastikan lo punya gambar ini di folder public lo brok */}
                <Image
                  src="/images/about us-collage.png" 
                  alt="About SG8 Group Collage"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Sisi Gambar Target (Kiri) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px] aspect-square flex items-center">
                {/* Background Biru Kotak di belakang gambar target */}
                <div className="absolute left-0 top-0 w-2/3 h-full bg-[#1e3a8a] rounded-r-lg -z-10 shadow-lg"></div>
                
                {/* Gambar Target (Pastikan lo simpan filenya di public/images/vision-mission.png) */}
                <div className="relative w-full h-4/5 ml-auto">
                   <Image
                    src="/images/vision-mission.png" 
                    alt="Our Vision and Mission Target"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Sisi Teks Visi Misi (Kanan) */}
            <div className="w-full lg:w-1/2 space-y-12">
              
              {/* Vision */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Our Vision
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  SG8 Company strives to be trusted leader in integrated solutions, 
                  setting new standards in Facility Services, Car Rental, Manpower 
                  Supply, and Business Consulting, while fostering sustainable 
                  growth and a world-class work environment.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-black">
                  Our Mission
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  SG8 mission is to provide exceptional value through integrated 
                  services, focusing on innovation, reliability, and sustainability, 
                  while empowering our workforce and positively impacting communities.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      
    </>
  );
}

export default CompanyProfilePage;