// app/(site)/articles/components/Sidebar.jsx
import React from 'react'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'


function Sidebar() {
  // Data dummy simpel (bisa diedit manual)
  const topics = ["Business", "Capital", "Cleaning & Hygiene", "Hospitality", "Legal", "Organization Development", "Psychology", "Sales Marketing"]


  return (
    <aside className="w-full">
        <div className=" p-6 sticky top-24">

            {/* --- Bagian Topic --- */}
            <div className="mb-8">
                
            <h3 className="text-black text-xl font-bold mb-4 px-2">
                Topic
            </h3>
            <button className="flex flex-col gap-2">
                {topics.map((topic, index) => (
                    <span 
                    key={index} 
                    className=" text-black px-6 py-1 text-md text-left hover:bg-gray-100 rounded cursor-pointer"
                    >
                    {topic}
                </span>
                ))}
            </button>
            </div>
            
            {/* Bagian Follow Us */}
            <div>
            <h3 className="text-black text-xl font-bold mb-4 px-2">
                Follow Us On:
            </h3>
            <div className="flex flex-col gap-3">
                <div href="https://www.facebook.com/sg8group" target="_blank" className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors cursor-pointer">
                    <FaFacebook className="text-xl" />
                    Facebook
                    </div>
                </div>
            </div>
        </div>


      
    </aside>
  )
}

export default Sidebar