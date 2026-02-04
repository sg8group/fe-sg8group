"use client";

import Image from "next/image";
import Container from "../ui/Container";
import SocialLinks from "../ui/SocialLinks";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import InfoBlock from "../ui/InfoBlock";

export default function Footer() {
    return (
        <footer className="bg-white py-8">
            {/* CTA SECTION */}
            <section className="relative h-80 sm:h-96">
                <Image
                    src="/footerImg.png"
                    alt="SG8 Team"
                    fill
                    className="object-cover object-center"
                    priority
                />

                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Container>
                        <div className="text-center space-y-5">
                            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold max-w-2xl mx-auto">
                                Hubungi kami untuk menemukan layanan yang tepat untuk anda
                            </h3>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-md font-medium transition">
                                Hubungi Sekarang
                            </button>
                        </div>
                    </Container>
                </div>
            </section>

            {/* MAIN FOOTER */}
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-gray-700">
                        {/* LEFT COLUMN */}
                        <div>
                            <Image
                                src="/footerLogo.png"
                                alt="SG8 Group"
                                width={200}
                                height={40}
                                className="mb-5 -ms-2.5 w-auto"
                            />

                            <p className="section-title font-medium mb-6 leading-relaxed uppercase">
                                PT Dwitunggal Jaya Pratama Maju<br />
                                PT Citra Mandiri Cemerlang Prima
                            </p>
                            <p className="section-title text-lg font-medium leading-relaxed normal-case">
                                Follow us on:
                            </p>
                            <SocialLinks iconClass="h-6 w-6 md:h-10 md:w-10" />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-8 max-w-sm md:justify-self-end md:text-left">
                            <InfoBlock
                                icon={FaLocationDot}
                                title="Office"
                            >
                                Sariha Building 12th Floor <br />
                                Jl. MH. Thamrin No.11, Menteng, Jakarta Pusat, 10350
                            </InfoBlock>

                            <InfoBlock
                                icon={FiClock}
                                title="Office Hours"
                            >
                                Monday – Friday <br />
                                08:00 – 17:00 WIB
                            </InfoBlock>

                            <InfoBlock
                                icon={FaPhone}
                                title="Contact"
                            >
                                <p>Email: info@sg8group.com</p>
                                <p>Phone: (021) 390 777</p>
                            </InfoBlock>
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
