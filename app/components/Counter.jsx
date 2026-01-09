"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Counter({ value, suffix = "", duration = 1200 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const incrementTime = Math.max(duration / end, 20);

        const counter = setInterval(() => {
            start += 1;
            setCount(start);

            if (start >= end) {
                clearInterval(counter);
            }
        }, incrementTime);

        return () => clearInterval(counter);
    }, [isInView, value, duration]);

    return (
        <motion.span
            ref={ref}
            className="heading text-4xl text-black"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
        >
            {count}
            {suffix}
        </motion.span>
    );
}
