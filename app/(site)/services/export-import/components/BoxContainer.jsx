"use client";

import React from "react";
import { Icon } from "@iconify/react";

function BoxContainer({ img, title, description }) {
  return (
    <div className="rounded-2xl p-5 py-10 items-center flex flex-col text-justify shadow-lg h-full border border-gray-300">
      <Icon
        icon={img}
        className="mb-2 text-6xl" // Gunakan text-size untuk mengatur ukuran icon
      />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="[text-align-last:center] text-lg">{description}</p>
    </div>
  );
}

export default BoxContainer;
