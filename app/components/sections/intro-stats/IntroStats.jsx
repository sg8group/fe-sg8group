import Container from "@/components/layouts/Container";
import Counter from "./Counter";

export default function IntroStats() {
    return (
        <section className="bg-white py-16">
            <Container className="md:grid-cols-2 md:gap-16 items-center">
                {/* LEFT - TEXT */}
                <div className="text-center md:text-left">
                    <h2 className="section-title text-4xl text-black mb-4">
                        Discover Our Experience
                    </h2>
                    <p className="body-text text-lg text-gray-600 leading-relaxed">
                        We deliver integrated facility services and business solutions
                        with proven experience and trusted partners across industries.
                    </p>
                </div>

                {/* RIGHT - STATS */}
                <div className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2
                    gap-8 
                    text-center
                ">
                    <div>
                        <Counter value={35} suffix="+"/>
                        <p className="body-text text-gray-600">Years Experience</p>
                    </div>

                    <div>
                        <Counter value={100} suffix="+"/>
                        <p className="body-text text-gray-600">Clients</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
