"use client";

import useEmblaCarousel from "embla-carousel-react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/constants/serivce";
import Container from "@/components/layouts/Container";

export default function OurServices() {
    const [emblaRef] = useEmblaCarousel({
        align: "center",
        containScroll: "trimSnaps",
        dragFree: false,
    })
    return (
        <section className="bg-white py-16">
            <Container>
                <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl text-center text-black font-semibold mb-12">
                    Our Services
                </h2>
                <div className="w-full px-4 md:px-6">
                    {/* ===== DESKTOP GRID ===== */}
                    <div className="hidden lg:flex flex-col gap-8">

                        {/* ROW ATAS */}
                        <div className="grid grid-cols-3 gap-6">
                            {SERVICES.slice(0, 3).map((item) => (
                                <ServiceCard key={item.title} item={item} />
                            ))}
                        </div>

                        {/* ROW BAWAH */}
                        <div className="grid grid-cols-4 gap-6">
                            {SERVICES.slice(3).map((item) => (
                                <ServiceCard key={item.title} item={item} />
                            ))}
                        </div>

                    </div>

                    {/* ===== MOBILE CAROUSEL ===== */}
                    <div className="lg:hidden">
                        <div ref={emblaRef} className="overflow-hidden">
                            <div className="flex">
                                {SERVICES.map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex-[0_0_75%] px-2"
                                    >
                                        <ServiceCard item={item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
