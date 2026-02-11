export default function Pagination({ current, last, onChange }) {
    if (last <= 1) return null;

    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: last }).map((_, i) => {
                const page = i + 1;
                
                return (
                    <button
                        key={page}
                        onClick={() => onChange(page)}
                        className={`px-3 py-1 rounded-md border ${
                            page === current
                                ? "bg-blue-600 text-white"
                                : "bg-white hover:bg-gray-100"
                        }`}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    )
}