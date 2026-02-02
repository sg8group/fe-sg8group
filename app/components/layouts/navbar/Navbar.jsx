"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavbarShell from "./NavbarShell";
import DesktopView from "./Desktop/DesktopView";
import MobileView from "./Mobile/MobileView";
import { useNavbarState } from "./hooks/useNavbarState";
import { useActiveMenu } from "./hooks/UseActiveMenu";

export default function Navbar({ topics=[] }) {
    const pathname = usePathname();
    const activeFromPath = useActiveMenu(pathname);

    const {
        mobileOpen,
        setMobileOpen,
        openMenu,
        setOpenMenu,
        isScrolled,
    } = useNavbarState(pathname, activeFromPath);

    return (
        <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed z-50 transition-all duration-300 ease-out ${
                isScrolled ? "top-5 inset-x-5" : "top-0 inset-x-0"
            }`}
        >
            <NavbarShell
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                isScrolled={isScrolled}
            >
                <DesktopView
                    topics={topics}
                    activeMenu={activeFromPath}
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                />
            </NavbarShell>

            <MobileView
                topics={topics}
                open={mobileOpen}
                setMobileOpen={setMobileOpen}
                activeMenu={activeFromPath}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
        </motion.nav>
    );
}
