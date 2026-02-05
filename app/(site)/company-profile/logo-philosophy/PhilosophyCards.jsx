import Image from 'next/image';

const cards = [
  {
    bg: "bg-[#1a2b4b]",
    textColor: "text-white",
    imgClass: "brightness-0 invert opacity-80",
    text: "On the left side, the rectangular form embodies stability and growth, symbolizing our firm foundations and commitment to building strong relationships.",
  },
  {
    bg: "bg-[#f0f2f5]",
    textColor: "text-gray-800",
    imgClass: "opacity-80",
    text: "On the left side, the rectangular form embodies stability and growth, symbolizing our firm foundations and commitment to building strong relationships.",
  },
  {
    bg: "bg-[#f9a825]",
    textColor: "text-white",
    imgClass: "brightness-0 invert opacity-90",
    text: "On the left side, the rectangular form embodies stability and growth, symbolizing our firm foundations and commitment to building strong relationships.",
  },
];

export default function PhilosophyCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center ${card.bg} rounded-[40px] p-8 md:p-12 shadow-lg overflow-hidden`}>
              <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="relative w-40 h-40">
                  <Image 
                    src="/primLogo_sg8.png" 
                    alt="Logo Symbol"
                    fill
                    className={`object-contain ${card.imgClass}`}
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className={`${card.textColor} text-lg md:text-xl leading-relaxed text-center md:text-left`}>
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}