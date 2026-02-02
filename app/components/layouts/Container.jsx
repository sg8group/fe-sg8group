import clsx from "clsx";
import React from 'react'

function Container({ children, className }) {
    return (
        <div className={clsx(
            "mx-auto max-w-7xl px-6 grid grid-cols-1 gap-8 md:gap-16",
            className
        )}>
            {children}
        </div>
    )
}

export default Container