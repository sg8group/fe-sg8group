export default function JoinCard() {
    return (
        <div className="
        h-full
        bg-[#1e2f57]
        rounded-2xl
        p-10
        flex flex-col
        gap-6
        shadow-lg
        ">
            <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
                Join the SG8 Group team to create the highest standards!
            </h3>

            <button
                className="
                w-fit
                bg-[#f5a623]
                text-white
                px-6
                py-3
                rounded-lg
                font-medium
                hover:bg-[#e6951f]
                transition
                "
            >
                Join Us
            </button>
        </div>
    );
}
