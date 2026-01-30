import React from 'react'

function Search() {
  return (
    <div className="flex justify-center bg-[#253E9B] px-4 py-8">
    <form className="flex w-full max-w-700px h-10 bg-white rounded-2xl border">
        <input
        type="text"
        placeholder="Search here"
        className="flex-1 px-4 rounded-l-2xl focus:outline-none text-gray-700"
        />

        {/* ICON BUTTON */}
        <button
        type="submit"
        className="
            inline-flex items-center justify-center shrink-0
            text-black bg-brand hover:bg-brand-strong
            w-10 h-10
            rounded-r-2xl
        "
        >
        <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
        </svg>
        <span className="sr-only">Search</span>
        </button>
    </form>
    </div>
  )
}

export default Search