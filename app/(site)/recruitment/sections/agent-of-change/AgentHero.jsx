import Image from "next/image";

export default function RecruitHero() {
    return (
        <section className="relative h-dvh w-screen overflow-hidden pt20 md:pt-22">
            <Image
                src="/recruitment/recruitHero.jpg"
                alt="SG8 Background"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                <h1 className="text-white heading text-4xl lg:text-7xl sm:text-5xl">Agent Of Change</h1>
            </div>
        </section>
    );
}