import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

function BoxJob({ jobname, location, type, salary }) {
  return (
    <div className="bg-white border border-gray-400 p-2 m-2 rounded-xl shadow-sm flex flex-col items-start">
      <h2 className="text-black font-semibold text-lg">Cleaning Service</h2>
      <p className="text-black flex items-start">
        <MdOutlineLocationOn />
        Jakarta
      </p>
      <p className="text-black flex items-start">
        <FiShoppingBag />
        Jakarta
      </p>
      <p className="text-black flex items-start">
        <PiCurrencyCircleDollarBold />
        Jakarta
      </p>
    </div>
  );
}

export default BoxJob;
