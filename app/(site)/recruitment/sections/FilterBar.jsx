import React from 'react'

function FilterBar({
    locations,
    types,
    salaryRange,
    selectedLocation,
    selectedType,
    onLocationChange,
    onTypeChange,
    onSalaryChange,
}) {
    return (
        <div className="flex flex-wrap gap-4 ">

            <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="border rounded-md px-3 py-2"
            >
                <option value="">Semua Lokasi</option>
                {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                ))}
            </select>

            <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="border rounded-md px-3 py-2"
            >
                <option value="">Semua Tipe</option>
                {types.map((type) => (
                    <option key={type} value={type}>{type == 1 ? "On-Site" : type == 2 ? "Remote" : "Hybrid"}</option>
                ))}
            </select>

            <select
                value={salaryRange}
                onChange={(e) => onSalaryChange(e.target.value)}
                className="border rounded-md px-3 py-2"
            >
                <option value="">Semua Gaji</option>
                <option value="low">&lt; 3 Juta</option>
                <option value="mid">3 - 5 Juta</option>
                <option value="high">&gt; 5 Juta</option>
            </select>

        </div>
    )
}

export default FilterBar