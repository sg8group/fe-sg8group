import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const socials = [
    { Icon: FaInstagram, href: "#", hover: "hover:text-pink-600" },
    { Icon: FaLinkedinIn, href: "#", hover: "hover:text-blue-700" },
    { Icon: FaFacebookSquare, href: "#", hover: "hover:text-blue-800" },
];

export default function SocialLinks({
    iconClass = "h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7",
    className = "",
}) {
    return (
        <div className={`flex gap-4 text-gray-600 ${className}`}>
            {socials.map(({ Icon, href, hover }, i) => (
                <a
                    key={i}
                    href={href}
                    className={`transition hover:scale-110 duration-200 ${hover}`}
                >
                    <Icon className={iconClass} />
                </a>
            ))}
        </div>
    );
}
