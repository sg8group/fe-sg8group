import React from 'react'

function Search() {
  return (
    <div className="flex justify-center items-center bg-[#253E9B] px-15 py-8">
        <div className="flex box w-full h-10 rounded-2xl bg-white border border-gray-300 items-center justify-center">
            <input
                type="text"
                placeholder="Search for jobs..."
                className="grow h-full px-4 rounded-l-2xl focus:outline-none text-gray-700"
            />
            <button
                className="bg-[#f5a623] hover:bg-[#e6951f] text-white px-6 py-2 rounded-r-2xl transition"
            >
                Search
            </button>
        </div>
    </div>
  )
}

export default Search