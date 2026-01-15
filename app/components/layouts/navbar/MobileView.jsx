import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "@/constants/menu";
import MobileMenuItem from "./MobileMenuItem";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function MobileView({ open, setMobileOpen, activeMenu, setActiveMenu }) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/10"
                        onClick={() => {
                            setActiveMenu(null);
                            setMobileOpen(false);
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-50 mt-3 mx-4 sm:mx-6 rounded-xl bg-white lg:hidden shadow-lg"
                    >
                        <ul className="divide-y">
                            {MENU.map(item => (
                                <MobileMenuItem
                                    key={item.name}
                                    item={item}
                                    activeMenu={activeMenu}
                                    setActiveMenu={setActiveMenu}
                                />
                            ))}
                            <div className="flex justify-center gap-6 py-4">
                                <a href="#" aria-label="Instagram" className="text-black/70 hover:text-blue-900">
                                    <FaInstagram className="h-8 w-8" />
                                </a>
                                <a href="#" aria-label="Linkedin" className="text-black/70 hover:text-blue-900">
                                    <FaLinkedin className="h-8 w-8" />
                                </a>
                            </div>
                        </ul>
                        
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
