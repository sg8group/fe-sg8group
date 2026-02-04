import {
    useState,
    useEffect
} from "react";

export function useNavbarState(pathname, activeFromPath) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 120);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setOpenMenu(null);
    }, [pathname]);

    return {
        mobileOpen,
        setMobileOpen,
        openMenu,
        setOpenMenu,
        isScrolled,
        activeFromPath,
    };
}