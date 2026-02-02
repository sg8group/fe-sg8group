'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { isMenuActive, isMenuOpen } from "@/utils/MenuState";
import { getMenuChildren, hasMenuChildren } from "@/utils/MenuHelpers";

export default function DesktopMenuItem({
    item,
    topics = [],
    activeMenu,
    openMenu,
    setOpenMenu,
}) {
    const children = getMenuChildren(item, topics);
    const hasChildren = children.length > 0;
    const active = isMenuActive(item, activeMenu);
    const open = isMenuOpen(item, openMenu);

    const Wrapper = item.path ? Link : "button";
    const wrapperProps = item.path
        ? { href: item.path }
        : {
            type: "button",
            onClick: () =>
            setOpenMenu(open ? null : item.name),
            "aria-expanded": open,
        };

    return (
        <li
            className="relative"
            onMouseEnter={() => hasChildren && setOpenMenu(item.name)}
            onMouseLeave={() => hasChildren && setOpenMenu(null)}
        >
            <Wrapper
                {...wrapperProps}
                className={`flex items-center gap-1 text-xl cursor-pointer
                ${active ? "text-blue-900" : "text-black hover:text-blue-900"}
                `}
            >
                <span className="relative">
                    {item.name}
                    <span
                        className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-900
                        transition-transform duration-300 origin-left
                        ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                        `}
                    />
                </span>

                {hasChildren && (
                    <motion.span
                        animate={{ rotate: open ? 180 : 0 }}
                        className="text-xs ms-1"
                    >
                        <FaChevronDown />
                    </motion.span>
                )}
            </Wrapper>

            <AnimatePresence>
                {hasChildren && open && (
                    <motion.ul
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute top-full mt-3 w-60 rounded-xl bg-white shadow-lg overflow-hidden"
                    >
                        {children.map(child => (
                            <li key={`${child.path}-${child.label}`}>
                                <Link
                                href={child.path}
                                className="block px-5 py-3 text-sm text-black/80 hover:bg-gray-100"
                                onClick={() => setOpenMenu(null)}
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
