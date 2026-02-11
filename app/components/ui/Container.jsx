import clsx from "clsx";
import React from 'react'

function Container({ children, className }) {
    return (
        <div className={clsx(
            "w-full container mx-auto px-6 md:px-12 lg:px-24",
            className
        )}>
            {children}
        </div>
    )
}

export default Container