"use client";

import useEmblaCarousel from "embla-carousel-react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/constants/serivce";
import Container from "@/components/ui/Container";

export default function OurServices() {
    const [emblaRef] = useEmblaCarousel({
        align: "center",
        containScroll: "trimSnaps",
        dragFree: false,
    })
    return (
        <section className="bg-white py-16">
            <Container>
                <div className="space-y-10">
                    <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl text-center text-black font-semibold">
                        Our Services
                    </h2>

                    {/* ===== DESKTOP ===== */}
                    <div className="hidden lg:flex flex-col gap-8">
                        <div className="grid grid-cols-3 gap-6">
                            {SERVICES.slice(0, 3).map((item) => (
                                <ServiceCard key={item.title} item={item} />
                            ))}
                        </div>

                        <div className="grid grid-cols-4 gap-6">
                            {SERVICES.slice(3).map((item) => (
                                <ServiceCard key={item.title} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* ===== MOBILE ===== */}
                    <div className="lg:hidden overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {SERVICES.map((item) => (
                                <div key={item.title} className="flex-[0_0_75%] pl-4">
                                    <ServiceCard item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
