export function isMenuActive(item, activeMenu) {
    return item.name === activeMenu;
}

export function isMenuOpen(item, openMenu) {
    return item.name === openMenu;
}