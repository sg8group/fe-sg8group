import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { isMenuActive, isMenuOpen } from "@/utils/MenuState";
import { getMenuChildren, hasMenuChildren } from "@/utils/MenuHelpers";

export default function MobileMenuItem({
    item,
    topics,
    activeMenu,
    openMenu,
    setOpenMenu,
    closeMenu,
}) {
    const children = getMenuChildren(item, topics);
    const hasChildren = children.length > 0;
    const active = isMenuActive(item, activeMenu);
    const open = isMenuOpen(item, openMenu);

    return (
        <li className="px-4 py-3">
            {item.path ? (
                <Link
                    href={item.path}
                    onClick={closeMenu}
                    className={`block ${active ? "text-blue-900" : "text-black"}`}
                >
                    {item.name}
                </Link>
            ) : (
                <button
                    onClick={() => setOpenMenu(open ? null : item.name)}
                    aria-expanded={open}
                    aria-haspopup={hasChildren}
                    className="flex w-full justify-between items-center text-black"
                >
                    {item.name}
                <motion.span animate={{ rotate: open ? 180 : 0 }} className="ms-1">
                        <FaChevronDown />
                    </motion.span>
                </button>
            )}

            <AnimatePresence>
                {hasChildren && open && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="ml-3 mt-2 space-y-2 text-sm"
                    >
                        {children.map(child => (
                            <li key={`${child.path}-${child.label}`}>
                                <Link
                                    href={child.path}
                                    onClick={closeMenu}
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
