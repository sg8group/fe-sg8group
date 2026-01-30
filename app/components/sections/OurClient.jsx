"use client";

import { CLIENTS_LOGOS } from "@/constants/clientslogo";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ITEMS_PER_ROW = 9;

const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

export default function OurClient() {
    const rows = chunkArray(CLIENTS_LOGOS, ITEMS_PER_ROW);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-120px",
    });

    const rowVariant = (direction) => ({
        hidden: {
            opacity: 0,
            x: direction === "left" ? -60 : 60,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.08,
            },
        },
    });

    const logoVariant = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section ref={sectionRef} className="py-16 w-full overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="section-title text-2xl sm:text-3xl lg:text-4xl text-center text-black font-semibold mb-12"
            >
                Our Clients
            </motion.h2>

            <div className="space-y-12">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex}>
                        {/* ================= MOBILE AUTO CAROUSEL ================= */}
                        <div className="sm:hidden overflow-hidden">
                            <div
                                className={`flex gap-6 w-max animate-carousel ${
                                rowIndex % 2 !== 0 ? "animate-carousel-reverse" : ""
                                }`}
                            >
                                {[...row, ...row].map((client, i) => (
                                    <div
                                        key={client.title + i}
                                        className="min-w-35 opacity-80"
                                    >
                                        <Image
                                            src={client.img}
                                            alt={client.title}
                                            width={140}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ================= DESKTOP GRID ================= */}
                        <motion.div
                            variants={rowVariant(rowIndex % 2 === 0 ? "left" : "right")}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="
                                hidden sm:grid
                                grid-cols-6 lg:grid-cols-9
                                gap-6 px-4
                                place-items-center
                                will-change-transform
                            "
                        >
                        {row.map((client, i) => (
                            <motion.div
                                key={client.title + i}
                                variants={logoVariant}
                                className="opacity-80 hover:opacity-100 hover:scale-105 transition-transform duration-300"
                            >
                            <Image
                                src={client.img}
                                alt={client.title}
                                width={140}
                                height={80}
                                className="object-contain"
                            />
                            </motion.div>
                        ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
