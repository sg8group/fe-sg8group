export default function InfoBlock({
    icon: Icon,
    title,
    children,
    className = "",
}) {
    return (
        <div className={`flex items-start gap-6 ${className}`}>
            {/* Icon */}
            <div className="flex items-start pt-1">
                {Icon && (
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-black shrink-0"  />
                )}
            </div>

            {/* Text */}
            <div>
                <h4 className="font-semibold text-black mb-2">
                    {title}
                </h4>

                <div className="text-black/70 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
