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
            bg-white/80 backdrop-blur-md
            px-4 py-3 md:px-8 md:py-4
            transition-all duration-300
            ${
                isScrolled
                    ? "rounded-2xl shadow-lg"
                    : "rounded-b-2xl rounded-t-none shadow-none"
            }
        `}>
            <Image
                src="/primLogo_sg8.png"
                alt="SG8 Group Logo"
                width={200}
                height={80}
                priority
                className="h-auto w-28 md:w-40 sm:w-32"
            />

            <div className="hidden lg:flex flex-1 justify-center">
                {children}
            </div>  
            <div className="hidden lg:flex items-center gap-4">
                <FaInstagram size={40} className="cursor-pointer hover:text-blue-900 text-black" />
                <FaLinkedin size={40} className="cursor-pointer hover:text-blue-900 text-black" />
            </div>

            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-1"
            >
                {["", "", ""].map((_, i) => (
                    <span
                        key={i}
                        className={`h-0.5 w-6 bg-black transition ${
                        mobileOpen &&
                        (i === 0
                            ? "rotate-45 translate-y-1.5"
                            : i === 1
                            ? "opacity-0"
                            : "-rotate-45 -translate-y-1.5")
                        }`}
                    />
                ))}
            </button>
        </div>
    );
}
