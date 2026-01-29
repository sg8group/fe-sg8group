import React from "react";
import Image from "next/image";

function Boxcontainer({ img, title, description }) {
  return (
    <div className="rounded-2xl p-8 flex flex-col items-center text-center shadow-lg h-full border bg-white">
      <img src={img} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p  className="text-gray-600">{description}</p>
    </div>

  );
}

export default Boxcontainer;
