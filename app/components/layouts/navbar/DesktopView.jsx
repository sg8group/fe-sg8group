import DesktopMenuItem from "./DesktopMenuItem";
import { MENU } from "@/constants/menu";

export default function DesktopView({ activeMenu, setActiveMenu }) {
    return (
        <ul className="flex gap-10 font-medium">
            {MENU.map(item => (
                <DesktopMenuItem
                    key={item.name}
                    item={item}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            ))}
        </ul>
    );
}
