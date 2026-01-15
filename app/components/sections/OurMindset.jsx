"use client";

import { MINDSETS } from "@/constants/mindset";
import Container from "../layouts/Container";


export default function OurMindset() {
    return (
        <section className="bg-white py-16">
            <Container>
                <div className="
                    bg-[#142a4f]
                    rounded-2xl
                    px-10 py-10
                    sm:px-10
                    shadow-lg
                    min-h-105 sm:min-h-120
                    flex flex-col
                ">
                    <h2 className="
                        section-title text-white text-center
                        text-xl sm:text-2xl lg:text-3xl
                        font-semibold
                        mb-10
                        pt-8
                        tracking-wide
                    ">
                        OUR MINDSET
                    </h2>
                    <div className="
                        flex-1
                        grid grid-cols-2 sm:grid-cols-4
                        place-items-center
                        px-4 sm:px-12 lg:px-24
                        gap-y-12 gap-x-6
                    ">
                        {MINDSETS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.label}
                                    className="
                                        flex flex-col
                                        items-center
                                        text-center
                                        gap-4
                                    "
                                >
                                    <div
                                        className="
                                            w-20 h-20
                                            sm:w-24 sm:h-24
                                            lg:w-28 lg:h-28
                                            rounded-full
                                            border-2 border-white
                                            flex items-center justify-center
                                        "
                                    >
                                        <Icon className="text-white text-3xl sm:text-4xl lg:text-5xl" />
                                    </div>
                                    <p
                                        className="
                                            text-sm
                                            sm:text-sm
                                            lg:text-base
                                            font-medium
                                            tracking-[0.25em]
                                            h-10
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        {item.label}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-10">
                    <div className="grid md:grid-cols-3 md:grid-rows-[1fr_auto] px-16">
                        {/* QUOTE */}
                        <p
                            className="
                                md:col-span-2
                                md:row-span-1
                                text-black
                                font-semibold
                                text-2xl
                                sm:text-3xl
                                lg:text-4xl
                                leading-relaxed
                                max-w-3xl
                                tracking-tight
                            "
                        >
                            “Make your goal more than money.
                            Make it about helping people and
                            creating a better future.”
                        </p>
                        <div className="hidden md:block" />
                        {/* AUTHOR */}
                        <p
                            className="
                                md:col-start-3
                                md:row-start-2
                                text-black/60
                                md:text-start
                                text-end
                                text-xl
                                sm:text-3xl
                                lg:text-4xl
                                font-medium
                                tracking-wide
                                italic
                            "
                        >
                            — Maxime Legacé
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}