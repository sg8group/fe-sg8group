import OurClient from "@/components/shared/OurClient";
import OurMindset from "@/components/shared/OurMindset";
import OurServices from "@/components/shared/service/OurServices";
import Corporatehero from "./Corporatehero";

const { default: Hero } = require("@/components/shared/Hero");

export default function CorporateValuePage() {
  return (
    <>
      <Corporatehero />
       <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto text-center space-y-10">
          
            <p className="text-2xl md:text-2xl lg:text-2xl font-bold text-black leading-[1.2]">
              Growth Mindset will help our stakeholder for always adapt and 
              giving our best in serving all clients that rely on us for their 
              Business Management.
            </p>
            <p className="text-gray-800 text-xl md:text-2xl font-medium pt-4">
              From the Right Mindset, we continuously promote <br className="hidden md:block" />
              Our Values as Company Culture in our daily life and workspace
            </p>
          </div>
        </div>
      </section>
   
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-24">
         
          <div className="text-center mb-16">
            <h2 className="text-[#1a2b4b] font-bold text-xl tracking-[0.3em] uppercase">
              Our Value
            </h2>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex flex-col items-center group">
                <div className="relative w-full aspect-square max-w-[280px] bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
                 
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[150%] h-[1px] bg-gray-400 rotate-45 transform origin-center"></div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[150%] h-[1px] bg-gray-400 -rotate-45 transform origin-center"></div>
                  </div>
                </div>

            
                <div className="mt-6 w-full max-w-[200px] space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
                  <div className="h-3 bg-gray-100 rounded w-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            

      <OurMindset/>
      <OurClient/>
      <OurServices/>

    </>
  );
}

