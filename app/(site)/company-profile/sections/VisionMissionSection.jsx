const items = [
    {
        title: "Our Vision",
        text: "To be a trusted leader in integrated solutions, setting new standards in Facility Services, Car Rental, Manpower Supply, and Business Consulting.",
    },
    {
        title: "Our Mission",
        text: "To provide exceptional value through integrated services, focusing on innovation, reliability, and sustainability.",
    },
];

export default function VisionMissionSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-12 lg:px-24 grid md:grid-cols-2 gap-16">
                {items.map((item, i) => (
                    <div key={i} className="space-y-6">
                        <h2 className="text-4xl font-bold text-black">{item.title}</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
