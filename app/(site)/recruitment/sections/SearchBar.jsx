import React, { useEffect, useRef, useState } from 'react'

function SearchBar({ value = "", onChange }) {
    const [localValue, setLocalValue] = useState(value);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(localValue);
        }, 400);

        return () => clearTimeout(timer);
    }, [localValue])

    return (
        <div>
            <input
                ref={inputRef}
                type='text'
                placeholder='Cari pekerjaan, lokasi, tipe, atau gaji ...'
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)}
                className="bg-blue-50 w-full my-8 p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
        </div>
    )
}

export default SearchBar