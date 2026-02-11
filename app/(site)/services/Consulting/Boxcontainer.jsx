import React from "react";


function Boxcontainer({ img, title, points }) {
  return (
    <div className="rounded-[2rem] p-8 flex flex-col shadow-lg h-full border bg-white border-gray-100 hover:shadow-xl transition-shadow duration-300">
      
      <div className="flex justify-center mb-6">
        <img src={img} alt={title} className="w-20 h-20 object-contain" />
      </div>

      
      <h3 className="text-xl font-bold text-[#1a2b4b] mb-6 text-center leading-tight">
        {title}
      </h3>

      
      <ul className="space-y-5">
        {points && points.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-left">
            
            <div className="min-w-[8px] h-[8px] rounded-full bg-[#1a2b4b] mt-2" />
            
            <div className="flex flex-col">
              
              <p className="font-bold text-[#1a2b4b] text-[15px] leading-tight">
                {item.name}
              </p>
              
              <p className="text-gray-500 text-[13px] mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Boxcontainer;