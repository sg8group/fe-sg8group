import Container from "@/components/layouts/Container";
import Image from "next/image";
import JoinCard from "./JoinCard";

export default function RecruitmentCTA() {
    return (
    <section className="bg-white py-16">
        <Container>
            {/* IMAGE + CTA */}
            <div className="grid md:grid-cols-3 md:grid-rows-[auto_auto] gap-8 md:px-16">
                {/* IMAGE */}
                <div className="md:col-span-1">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-200">
                        <Image
                            src="/placeholder.jpg"
                            alt="SG8 Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* JOIN CARD */}
                <div className="md:col-span-2">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-200">
                        <JoinCard />
                    </div>
                </div>

                {/* DESCRIPTION */}
                <p className="md:col-span-3 text-lg text-black/70 leading-relaxed">
                    Our commitment to the professional integrated services industry has
                    already positioned us as an outstanding team contributing to
                    society through the delivery of excellent services to all
                    stakeholders.
                </p>
            </div>
        </Container>
    </section>
    );
}
