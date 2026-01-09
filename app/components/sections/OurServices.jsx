"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SERVICES = [
    { title: "Manpower Supply", img: "/services/service1.png" },
    { title: "Car Rental", img: "/services/service2.png" },
    { title: "Facility Service", img: "/services/service3.png" },
    { title: "Brand Activation", img: "/services/service4.png" },
    { title: "Cleaning Services", img: "/services/service5.png" },
    { title: "Export Import Services", img: "/services/service6.png" },
    { title: "Consulting", img: "/services/service7.png" },
];

const cardWidth = 260;
const cardGap = 16;

function ServiceCard ({ item }) {
    return (
        <div className="overflow-hidden shadow hover:shadow-lg transition rounded-2xl">
            <div className="relative h-80 w-full">
                <Image 
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover"
                />
                <div className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/95 via-black/20
                    to-transparent
                "/>
                <p className="absolute bottom-4 left-4 section-title text-white text-xl md:text-base leading-snug">{item.title}</p>
            </div>
        </div>
    )
}

export default function OurServices() {
    return (
        <section className="bg-white py-16"> 
            <div className="
                max-w-7xl 
                mx-auto 
                px-4 sm:px-6 lg:px-8 
                md:grid-cols-2 
                md:gap-16
            ">
                <h2 className="section-title text-3xl text-center text-black mb-12">
                    Our Services
                </h2>

                {/* ===== DESKTOP : GRID ===== */}
                <div className="hidden lg:grid grid-cols-4 gap-6">
                    {SERVICES.map((item, index) => {
                        const isLastRow = SERVICES.length % 4 === 3 && index >= SERVICES.length - 3;
                        return (
                            <div
                                key={item.title}
                                className={
                                isLastRow && index === SERVICES.length - 3
                                    ? "col-start-2"
                                    : ""
                                }
                            >
                                <ServiceCard item={item} />
                            </div>
                        )
                    })}
                </div>

                {/* ===== MOBILE : CAROUSEL ===== */}
                <div className="lg:hidden overflow-hidden">
                    <motion.div
                        className="flex gap-4 cursor-grab"
                        drag="x"
                        dragConstraints={{
                        left: -((SERVICES.length - 1) * (cardWidth + cardGap)),
                        right: 0,
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
        </section>
    );
}
