"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function DesktopMenuItem({ item, activeMenu, setActiveMenu }) {
    const isActive = activeMenu === item.name;
    const itemsRefs = useRef([]);

    useEffect(() => {
        if (!isActive) itemsRefs.current = [];
    }, [isActive]);

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveMenu(item.name);
            requestAnimationFrame(() => {
                itemsRefs.current[0]?.focus();
            });
        }

        if (e.key === "Escape") {
            setActiveMenu(null);
        }
    }

    const Wrapper = item.path ? Link : "button";
    const wrapperProps = item.path
        ? { href: item.path }
        : {
            type: "button",
            "aria-haspopup": true,
            "aria-expanded": isActive,
            onClick: () => setActiveMenu(isActive ? null : item.name),
            onKeyDown: handleKeyDown,
        };

    return (
        <li
            className="relative"
            onMouseEnter={() => setActiveMenu(item.name)}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <Wrapper
                {...wrapperProps}
                className="flex items-center gap-1 section-title text-xl text-black
                            hover:text-blue-900 cursor-pointer
                            group focus:outline-none"
            >
                <span className="relative">
                    {item.name}
                <span
                    className="
                    absolute left-0 -bottom-1 h-0.5 w-full
                    scale-x-0 bg-blue-900
                    transition-transform duration-300
                    group-focus-within:scale-x-100
                    origin-left
                    "
                />
                </span>
                {item.children && (
                    <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs"
                    >
                        <FaChevronDown />
                    </motion.span>
                )}
            </Wrapper>
            <AnimatePresence>
                {item.children && isActive  && (
                    <motion.ul
                        role="menu"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute top-full mt-3 w-60 rounded-xl bg-white shadow-lg overflow-hidden"
                        onKeyDown={(e) => {
                            if (e.key === "Escape") setActiveMenu(null);
                        }}
                    >
                        {item.children.map((child, index) => (
                            <li key={child.label}>
                                <Link 
                                    href={child.path}
                                    role="menuitem"
                                    aria-label={`${item.name} submenu`}
                                    tabIndex={-1}
                                    ref={(el) => (itemsRefs.current[index] = el)}
                                    onKeyDown={(e) => {
                                        const lastIndex = item.children.length - 1;

                                        if (e.key === "ArrowDown") {
                                            e.preventDefault();
                                            itemsRefs.current[
                                                index === lastIndex ? 0 : index + 1
                                            ]?.focus();
                                        }

                                        if (e.key === "ArrowUp") {
                                            e.preventDefault();
                                            itemsRefs.current[
                                                index === 0 ? lastIndex : index - 1
                                            ]?.focus();
                                        }

                                        if (e.key === "Home") {
                                            e.preventDefault();
                                            itemsRefs.current[0]?.focus();
                                        }

                                        if (e.key === "End") {
                                            e.preventDefault();
                                            itemsRefs.current[lastIndex]?.focus();
                                        }

                                        if (e.key === "Escape") {
                                            e.preventDefault();
                                            setActiveMenu(null);
                                        }
                                    }}
                                    className="block px-5 py-3
                                            text-sm cursor-pointer text-black/80
                                            hover:bg-gray-100 focus:bg-gray-100
                                            focus:outline-none focus:underline focus:underline-offset-4"
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
