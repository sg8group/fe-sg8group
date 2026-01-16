"use client";

import Image from "next/image";
import Container from "../layouts/Container";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-white py-10">
            {/* CTA SECTION */}
            <div className="relative w-full h-80 sm:h-90 md:h-105 mt-5">
                <Image
                    src="/footerImg.png" // ganti sesuai asset lu
                    alt="SG8 Team"
                    fill
                    className="object-cover object-[50%_70%] md:object-[50%_10%]"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 h-full flex items-center justify-center">
                    <Container>
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-white text-center text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 max-w-3xl">
                                Hubungi kami untuk menemukan layanan yang tepat untuk anda
                            </h3>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-md font-medium transition cursor-pointer">
                                Hubungi Sekarang
                            </button>
                        </div>
                    </Container>
                </div>
            </div>

            {/* MAIN FOOTER */}
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-gray-700">
                        {/* LEFT COLUMN */}
                        <div>
                            <Image
                                src="/primLogo_sg8.png"
                                alt="SG8 Group"
                                width={150}
                                height={40}
                                className="mb-5"
                            />

                            <p className="section-title font-medium mb-6 leading-relaxed uppercase">
                                PT Dwitunggal Jaya Pratama Maju<br />
                                PT Citra Mandiri Cemerlang Prima
                            </p>
                            <p className="section-title text-lg font-medium leading-relaxed normal-case">
                                Follow us on:
                            </p>

                            <div className="flex gap-4 text-lg my-2.5">
                                <a href="#" className="hover:text-pink-600 transition">
                                    <FaInstagram className="h-6 w-6 md:h-10 md:w-10" />
                                </a>
                                <a href="#" className="hover:text-blue-800 transition">
                                    <FaLinkedinIn className="h-6 w-6 md:h-10 md:w-10" />
                                </a>
                                <a href="#" className="hover:text-blue-800 transition">
                                    <FaFacebookSquare className="h-6 w-6 md:h-10 md:w-10 rounded-md" />
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-8 max-w-sm md:justify-self-end md:text-left">
                            <div className="flex items-start gap-6">
                                <div className="flex items-start pt-1">
                                    <FaLocationDot className="h-6 w-6 md:h-8 md:w-8 text-black shrink-0" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black mb-2">Office</h4>
                                    <p className="text-black/70 leading-relaxed">
                                        Sariha Building 12th Floor<br />
                                        Jl. MH. Thamrin No.11, Menteng, Jakarta Pusat, 10350
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="flex items-start pt-1">
                                    <FiClock className="h-6 w-6 md:h-8 md:w-8 text-black shrink-0" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black mb-2">Office Hours</h4>
                                    <p className="text-black/70">
                                        Monday – Friday<br />
                                        08:00 – 17:00 WIB
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="flex items-start pt-1">
                                    <FaPhone className="h-6 w-6 md:h-8 md:w-8 text-black shrink-0" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black mb-2">Contact</h4>
                                    <p className="text-black/70">Email: info@sg8group.com</p>
                                    <p className="text-black/70">Phone: (021) 390 777</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} SG8 Group. All rights reserved.
            </div>
        </footer>
    );
}
