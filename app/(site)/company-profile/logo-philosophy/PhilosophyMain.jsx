import Image from 'next/image';

export default function PhilosophyMain() {
  return (
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

          <div className="w-full lg:w-1/2 space-y-8 text-justify">
            <div className="space-y-6">
              <p className="text-gray-800 text-lg leading-relaxed ">
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
  );
}