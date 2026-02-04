import Image from "next/image";

const companies = [
    "SG8 Clean (For Cleaning Services)",
    "SG8 Recruit (For Manpower Supply Services)",
    "SG8 Drive (For Car Rental Services)",
    "SG8 Care (For Hospitality Services)",
    "SG8 Consulting (For Business Growth Services)",
];

export default function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-3/5 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold section-title text-black">About Us</h2>

                        <div className="text-lg text-gray-800 leading-relaxed space-y-4">
                            <p>
                                Sutanto Group (SG8) is a holding company established since 1989
                                for PT Citra Mandiri Cemerlang Prima and PT Dwitunggal Jaya
                                Pratama Maju.
                            </p>
                            <p>
                                For 35+ years, we’ve helped local and multinational clients. SG8
                                Group now operates through several business units:
                            </p>
                        </div>

                        <ol className="list-decimal list-inside text-lg space-y-1 text-black">
                            {companies.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ol>
                    </div>

                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative w-full max-w-112.5 aspect-4/3">
                            <Image
                                src="/about-us.png"
                                alt="About SG8 Group"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
