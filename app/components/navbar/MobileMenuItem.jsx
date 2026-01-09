"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function MobileMenuItem({ item, activeMenu, setActiveMenu }) {
    const isOpen = activeMenu === item.name;

    const handleClick = () => {
        if (!item.children) return;
        setActiveMenu(isOpen ? null : item.name)
    }

    return (
        <li className="px-4 py-3 overflow-visible">
            <div
                className="flex justify-between items-center cursor-pointer text-black section-title"
                onClick={handleClick}
            >
                {item.name}
                {item.children && (
                    <motion.span 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaChevronDown />
                    </motion.span>
                )}
            </div>

            <AnimatePresence>
                {item.children && isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 ml-3 space-y-2 text-sm overflow-hidden"
                    >
                        {item.children.map(child => (
                        <li key={child.label} className="text-black/80 cursor-pointer">
                            {child.label}
                        </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
}
