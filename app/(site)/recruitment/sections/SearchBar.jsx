import React from 'react'

function SearchBar({ value, onChange }) {
    return (
        <div>
            <input 
                type='text' 
                placeholder='Cari pekerjaan, lokasi, tipe, atau gaji ...' 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='bg-blue-50 w-full my-8 p-3 rounded-xl border border-gray-400 '
            />
        </div>
    )
}

export default SearchBar