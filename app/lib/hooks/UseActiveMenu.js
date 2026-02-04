import {
    MENU
} from "@/constants/Navigation";

export function useActiveMenu(pathname) {

    if (pathname.startsWith("/articles")) {
        return "Article";
    }
    
    for (const item of MENU) {
        if (item.path === "/" && pathname === "/") return item.name;

        if (
            item.path &&
            item.path !== "/" &&
            pathname.startsWith(item.path)
        ) {
            return item.name;
        }

        if (item.children) {
            const match = item.children.find(child =>
                pathname.startsWith(child.path)
            );
            if (match) return item.name;
        }
    }

    return null;
}