import Image from "next/image";

export default function ServiceCard ({ item }) {
    return (
        <div className="w-full overflow-hidden rounded-2xl shadow transition hover:shadow-lg bg-white">
            <div className="relative w-full aspect-3/4 md:aspect-4/5">
                <Image 
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        25vw
                    "
                    className="object-cover"
                />
                <div className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/95 via-black/20
                    to-transparent
                "/>
                <p className="absolute bottom-3 md:bottom-4 px-3 section-title text-white
                            text-base sm:text-lg lg:text-xl leading-snug
                            font-medium tracking-tight"
                >
                    {item.title}
                </p>
            </div>
        </div>
    )
}