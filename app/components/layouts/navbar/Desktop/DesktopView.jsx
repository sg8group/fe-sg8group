import { MENU } from "@/constants/menu";
import DesktopMenuItem from "./DesktopMenuItem";

export default function DesktopView({
    topics = [],
    activeMenu,
    openMenu,
    setOpenMenu,
}) {
    return (
        <ul className="flex gap-12 font-medium">
        {MENU.map(item => (
            <DesktopMenuItem
                key={item.name}
                item={item}
                topics={topics}
                activeMenu={activeMenu}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
        ))}
        </ul>
    );
}
