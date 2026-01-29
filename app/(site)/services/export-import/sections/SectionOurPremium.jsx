import Container from "@/components/layouts/Container";
import React from "react";

function SectionOurPremium() {
  return (
    <div className="w-full bg-gray-300 text-black">
      <Container>
        <div className="flex flex-col lg:grid grid-cols-2 py-20 gap-10 text-justify">
          <div className="order-2 lg;:order-1 flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-5">
              Our premium services stand out through our expertise and the
              exceptional experiences we deliver.
            </h3>
            <p className="text-xl">
              With a focus on safe, efficient, and professional solutions. We
              cater to Indonesian businesses of all sizes, both locally and
              globally, and are trusted for handling complex client needs.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 w-full order-1 lg:order-2">
            <div class="overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <img
                src="/compro.png"
                alt="Office"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="overflow-hidden rounded-tr-3xl rounded-bl-3xl row-span-2">
              <img
                src="/compro.png"
                alt="Logistics"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="overflow-hidden rounded-bl-3xl rounded-tr-3xl">
              <img
                src="/compro.png"
                alt="Meeting"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionOurPremium;
