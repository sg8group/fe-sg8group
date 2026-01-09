"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavbarShell from "./NavbarShell";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    }, [mobileOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed z-50 transition-all duration-300 ease-out ${
                isScrolled ? "top-5 inset-x-5" : "top-0 inset-x-0"}`}
        >
            <NavbarShell
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                isScrolled={isScrolled}
            >
                <div className="hidden lg:block">
                    <DesktopView
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                    />
                </div>
            </NavbarShell>
            <div className="lg:hidden">
                <MobileView open={mobileOpen} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
        </motion.nav>
    );
}
