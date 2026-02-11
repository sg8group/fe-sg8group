import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

const currency = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function getTypeStyle(type) {
  const map = {
    remote: "bg-green-100 text-green-700",
    onsite: "bg-blue-100 text-blue-700",
    hybrid: "bg-purple-100 text-purple-700",
  };

  return map[type?.toLowerCase()] || "bg-gray-100 text-gray-600";
}

export default function JobCard({ job }) {
  if (!job) return null;

  return (
    <Link
      href={job.link}
      className="
        block bg-white border rounded-2xl p-5
        shadow-sm hover:shadow-lg hover:-translate-y-1
        transition-all duration-200
        "
    >
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-lg leading-snug">{job.title}</h3>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MdOutlineLocationOn />
            {job.location}
          </div>

          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeStyle(job.type_label)}`}>
            {job.type_label}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
          <PiCurrencyCircleDollarBold />
          {currency.format(job.salary)}
        </div>
        {/* CTA */}
        <div className="text-right text-sm font-medium text-blue-600 group-hover:underline">
          Apply →
        </div>
      </div>
    </Link>
  )
}