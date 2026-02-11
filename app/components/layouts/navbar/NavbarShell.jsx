import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function NavbarShell({ 
    mobileOpen,
    setMobileOpen,
    isScrolled, 
    children,
}) {
    return (
        <div className={`
            flex items-center justify-between
            px-4 py-3 md:py-3
            transition-all duration-300
            shadow-lg
            ${
                isScrolled
                    ? "min-h-20 md:min-h-24 rounded-2xl bg-white/50 backdrop-blur-xl"
                    : "min-h-24 md:min-h-28 rounded-b-2xl rounded-t-none bg-white/80 backdrop-blur-lg"
            }
        `}>
            <Image
                src="/primLogo_sg8.png"
                alt="SG8 Group Logo"
                width={200}
                height={80}
                priority
                className="h-auto w-32 md:w-40"
            />

            
            <div className="hidden lg:flex flex-1 justify-center">
                {children}
            </div>  
            <div className="hidden lg:flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="text-black/70 hover:text-red-600">
                    <FaInstagram className="h-6 w-6 md:h-10 md:w-10" />
                </a>
                <a href="#" aria-label="Linkedin" className="text-black/70 hover:text-blue-900">
                    <FaLinkedin className="h-6 w-6 md:h-10 md:w-10" />
                </a>
            </div>

            <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden flex flex-col gap-1"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        className={`h-0.5 w-6 bg-black transition-transform duration-300
                            ${
                                mobileOpen &&
                                (i === 0
                                    ? "rotate-45 translate-y-1.5"
                                    : i === 1
                                    ? "opacity-0"
                                    : "-rotate-45 -translate-y-1.5"
                                )
                            }
                        `}
                    />
                ))}
            </button>
        </div>
    );
}
