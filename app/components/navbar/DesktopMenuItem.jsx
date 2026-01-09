"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function DesktopMenuItem({ item, activeMenu, setActiveMenu }) {
    const isActive = activeMenu === item.name;

    return (
        <li
            className="relative"
            onMouseEnter={() => setActiveMenu(item.name)}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <span className="flex items-center gap-1 cursor-pointer section-title text-xl text-black hover:text-blue-900">
                {item.name}
                {item.children && (
                    <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs"
                    >
                        <FaChevronDown/>
                    </motion.span>
                )}
            </span>

            <AnimatePresence>
                {item.children && isActive  && (
                    <motion.ul
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute top-full mt-3 w-60 rounded-xl bg-white shadow-lg overflow-hidden"
                    >
                        {item.children.map(child => (
                            <li
                                key={child.label}
                                className="px-5 py-3 text-sm hover:bg-gray-100 cursor-pointer text-black/80"
                            >
                                {child.label}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
}
