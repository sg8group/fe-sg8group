"use client";

import { CLIENTS_LOGOS } from "@/constants/clientslogo";
import Image from "next/image";
import { useInView, motion, delay } from "framer-motion";
import { useRef } from "react";

const ITEMS_PER_ROW = 9;

const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks
}

export default function OurClient() {
    const rows = chunkArray(CLIENTS_LOGOS, ITEMS_PER_ROW);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        margin: "-120px"
    })

    const rowVariant = (direction = "left") => ({
        hidden: {
            opacity: 0,
            x: direction === "left" ? -80 : 80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2,
                staggerChildren: 0.1,
            },
        },
    });

    const logoVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    }
    return (
        <section ref={sectionRef} className="py-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="section-title text-2xl sm:text-3xl lg:text-4xl text-center text-black font-semibold mb-12"
            >
                Our Clients
            </motion.h2>
            <div className="space-y-10">
                {rows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 place-items-center"
                        variants={rowVariant(rowIndex % 2 === 0 ? "left" : "right")}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {row.map((client, i) => (
                            <motion.div
                                key={client.title + i}
                                variants={logoVariant}
                                className="opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
                            
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
                ))}
            </div>
        </section>
    );
}