import React from 'react'

function FilterBar({
    selectedType = "",
    onTypeChange,
}) {
    return (
        <div className="flex flex-wrap gap-4 my-5">
            <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="border rounded-md px-3 py-2"
            >
                <option value="">Semua Tipe</option>
                <option value="onsite">Onsite</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
            </select>
        </div>
    )
}

export default FilterBar