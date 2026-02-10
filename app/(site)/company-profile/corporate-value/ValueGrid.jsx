import React from "react";

function ValueGrid() {
  return (

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
  );
}
          

export default ValueGrid;
