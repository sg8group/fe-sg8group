"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function MobileMenuItem({ item, activeMenu, setActiveMenu }) {
    const isOpen = activeMenu === item.name;

    return (
        <li className="px-4 py-3 overflow-visible">
            {item.path ? (
                <Link href={item.path} className="block section-title text-black">
                    {item.name}
                </Link>
            ) : (
                <button
                    onClick={() =>
                        setActiveMenu(isOpen ? null : item.name)
                    }
                    className="flex w-full justify-between items-center section-title text-black"
                >
                    {item.name}
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FaChevronDown />
                    </motion.span>
                </button>
            )}

            <AnimatePresence>
                {item.children && isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 ml-3 space-y-2 text-sm overflow-hidden"
                    >
                        {item.children.map(child => (
                        <li key={child.label}>
                            <Link
                                href={child.path}
                                className="block text-black/80"
                            >
                                {child.label}
                            </Link>
                        </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </li>
    );
}
