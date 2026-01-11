"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const SERVICES = [
    { title: "Manpower Supply", img: "/services/service1.png" },
    { title: "Car Rental", img: "/services/service2.png" },
    { title: "Facility Service", img: "/services/service3.png" },
    { title: "Brand Activation", img: "/services/service4.png" },
    { title: "Cleaning Services", img: "/services/service5.png" },
    { title: "Export Import Services", img: "/services/service6.png" },
    { title: "Consulting", img: "/services/service7.png" },
];

function ServiceCard ({ item }) {
    return (
        <div className="w-full overflow-hidden rounded-2xl shadow transition hover:shadow-lg bg-white">
            <div className="relative w-full aspect-3/4">
                <Image 
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
                <div className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/95 via-black/20
                    to-transparent
                "/>
                <p className="absolute bottom-4 left-4 section-title text-white text-2xl md:text-base leading-snug">{item.title}</p>
            </div>
        </div>
    )
}

export default function OurServices() {
    const carouselRef = useRef(null);

    return (
        <section className="bg-white py-16">
            <div className="min-w-screen mx-auto px-6">
                <h2 className="section-title text-3xl text-center text-black mb-12">
                    Our Services
                </h2>
                <div className="mx-60 sm:px-6 lg:px-8 border">
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
                    <div className="lg:hidden overflow-hidden">
                        <motion.div
                            ref={carouselRef}
                            className="flex gap-4 cursor-grab"
                            drag="x"
                            dragElastic={0.15}
                            dragMomentum={true}
                            dragConstraints={() => {
                                if (!carouselRef.current) return { left: 0, right: 0 };
                                const scrollWidth = carouselRef.current.scrollWidth;
                                const offsetWidth = carouselRef.current.offsetWidth;
                                return {
                                    left: -(scrollWidth - offsetWidth),
                                    right: 0,
                                };
                            }}
                        >
                            {SERVICES.map((item) => (
                                <motion.div
                                    key={item.title}
                                    className="min-w-65"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ServiceCard item={item} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
