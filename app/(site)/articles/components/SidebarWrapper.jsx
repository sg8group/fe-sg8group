import React from 'react'
import Sidebar from './Sidebar'

function SidebarWrapper({ topics = [], activeCategory = [] }) {
    return (
        <Sidebar topics={topics} activeCategory={activeCategory} />
    )
}

export default SidebarWrapper