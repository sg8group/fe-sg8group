import React from "react";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import OurMindset from "@/components/sections/OurMindset";
import OurClient from "@/components/sections/OurClient";
import OurServices from "@/components/sections/service/OurServices";

function CompanyProfilePage() {
  return (
    <>
      <Hero title="Company Profile" />

      <section className="py-16 bg-white text-justify">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-3/5 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                About Us
              </h2>
              <div className="text-gray-800 text-lg space-y-4 leading-relaxed">
                <p>
                  Sutanto Group (SG8) is a holding company that has existed
                  since 1989 for PT Citra Mandiri Cemerlang Prima and PT
                  Dwitunggal Jaya Pratama Maju.
                </p>
                <p>
                  For 35+ years, we have been helping many clients from local
                  and multinational companies. SG8 Group is our new brand for
                  the holding company that also owns:
                </p>
              </div>
              <ol className="list-decimal list-inside text-gray-800 text-lg space-y-1 ml-2">
                <li>SG8 Clean (For Cleaning Services)</li>
                <li>SG8 Recruit (For Manpower Supply Services)</li>
                <li>SG8 Drive (For Car Rental Services)</li>
                <li>SG8 Care (For Hospitality Services)</li>
                <li>SG8 Consulting (For Business Growth Services)</li>
              </ol>
            </div>

            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-[4/3]">
                <Image
                  src="/about-us.png"
                  alt="About SG8 Group Collage"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden text-justify">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="pr-0 md:pr-16 pb-12 md:pb-0 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                SG8 Company strives to be trusted leader in integrated
                solutions, setting new standards in Facility Services, Car
                Rental, Manpower Supply, and Business Consulting.
              </p>
            </div>
            <div className="pl-0 md:pl-16 border-t md:border-t-0 md:border-l border-gray-200 pt-12 md:pt-0 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                SG8 mission is to provide exceptional value through integrated
                services, focusing on innovation, reliability, and
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <p className="text-2xl md:text-2xl lg:text-2xl font-bold text-black leading-[1.2]">
              Growth Mindset will help our stakeholder for always adapt and
              giving our best in serving all clients that rely on us for their
              Business Management.
            </p>
            <p className="text-gray-800 text-xl md:text-2xl font-medium pt-4">
              From the Right Mindset, we continuously promote{" "}
              <br className="hidden md:block" />
              Our Values as Company Culture in our daily life and workspace
            </p>
          </div>
        </div>
      </section>
      <OurMindset />
      <OurServices />
      <OurClient />
    </>
  );
}

export default CompanyProfilePage;
