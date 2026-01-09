import { motion, AnimatePresence } from "framer-motion";
import { MENU } from "@/constants/menu";
import MobileMenuItem from "./MobileMenuItem";

export default function MobileView({ open, activeMenu, setActiveMenu }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="relative z-40 mt-3 rounded-xl bg-white shadow-lg lg:hidden"
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
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
