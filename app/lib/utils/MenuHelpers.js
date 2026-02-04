export function getMenuChildren(item, topics = []) {
    if (item.name === "Article") {
        return (topics || []).map(t => ({
            label: t.name,
            path: `/articles/${t.slug}`
        }));
    }
    return item.children || [];
}

export function hasMenuChildren(item, topics = []) {
    return getMenuChildren(item, topics).length > 0;
}