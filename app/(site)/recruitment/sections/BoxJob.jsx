import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

function BoxJob({ jobname, location, type, salary }) {
  return (
    <div className="bg-white border border-gray-400 p-5 m-2 rounded-xl shadow-sm flex flex-col justify-center">
      <div className="text-black font-semibold text-xl pb-2">
        {jobname}
      </div>
      <div className="text-black flex items-start p-0.5">
        <MdOutlineLocationOn className="w-5 h-5" />
        <p className="px-1">{location}</p>
      </div>
      <div className="text-black flex items-start p-0.5">
        <FiShoppingBag className="w-5 h-5" />
        <p className="px-1">{type}</p>
      </div>
      <div className="text-black flex items-start p-0.5">
        <PiCurrencyCircleDollarBold className="w-5 h-5" />
        <p className="px-1">{salary}</p>
      </div>

      <div className="flex justify-end">
        <button className="text-white bg-blue-500 px-3 py-1 rounded-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default BoxJob;
