import Image from "next/image";

export default function ServiceCard ({ item }) {
    return (
        <div className="w-full overflow-hidden rounded-2xl shadow transition hover:shadow-lg bg-white">
            <div className="relative w-full aspect-3/4">
                <Image 
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
                <div className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/95 via-black/20
                    to-transparent
                "/>
                <p className="absolute bottom-4 px-3 section-title text-white
                            text-lg sm:text-base lg:text-2xl leading-snug
                            font-medium tracking-tight"
                >
                    {item.title}
                </p>
            </div>
        </div>
    )
}