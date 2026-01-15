"use client";

import Image from "next/image";
import Container from "../layouts/Container";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white py-16">
            {/* CTA SECTION */}
            <div className="relative min-h-100">
                <Image
                    src="/footerImg.png" // ganti sesuai asset lu
                    alt="SG8 Team"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />

                <Container className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <h3 className="text-white text-center text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 max-w-3xl">
                        Hubungi kami untuk menemukan layanan yang tepat untuk anda
                    </h3>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-md font-medium transition">
                        Hubungi Sekarang
                    </button>
                </Container>
            </div>

            {/* MAIN FOOTER */}
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-gray-700">
                        {/* LEFT COLUMN */}
                        <div>
                            <Image
                                src="/logo-sg8.png"
                                alt="SG8 Group"
                                width={150}
                                height={40}
                                className="mb-5"
                            />

                            <p className="font-medium mb-6 leading-relaxed">
                                PT Dwitunggal Jaya Pratama Maju<br />
                                PT Citra Mandiri Cemerlang Prima
                            </p>

                            <div className="flex gap-4 text-lg">
                                <a href="#" className="hover:text-pink-600 transition">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="hover:text-blue-800 transition">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" className="hover:text-blue-800 transition">
                                    <FaFacebookSquare className="rounded-md" />
                                </a>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-black mb-2">Office</h4>
                                <p>
                                    Sariha Building 12th Floor<br />
                                    Jl. MH. Thamrin No.11, Menteng<br />
                                    Jakarta Pusat, 10350
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-black mb-2">Office Hours</h4>
                                <p>
                                    Monday – Friday<br />
                                    08:00 – 17:00 WIB
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-black mb-2">Contact</h4>
                                <p>Email: info@sg8group.com</p>
                                <p>Phone: (021) 390 777</p>
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
