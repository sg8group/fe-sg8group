'use client' // WAJIB ADA DI BARIS PALING ATAS

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation' 
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Sidebar({ activeCategory }) {
  const router = useRouter();

  // Pastikan slug di sini HURUF KECIL semua & sesuai URL
  const topics = [
    { name: "Business", slug: "business" },
    { name: "Capital", slug: "capital" },
    { name: "Cleaning & Hygiene", slug: "cleaning-hygiene" },
    { name: "Hospitality", slug: "hospitality" },
    { name: "Legal", slug: "legal" },
    { name: "Organization Development", slug: "organization-development" },
    { name: "Psychology", slug: "psychology" },
    { name: "Sales Marketing", slug: "sales-marketing" },
    { name: "Technology", slug: "technology" }
  ];

  // Helper: Pastikan activeCategory selalu jadi string lowercase agar cocok dengan value option
  const currentSlug = activeCategory ? activeCategory.toLowerCase() : "";

  const handleMobileChange = (e) => {
    const slug = e.target.value;
    
    // Cek di Console Browser (F12) jika masih tidak pindah
    console.log("Navigasi ke:", slug); 

    if (slug) {
        router.push(`/articles/${slug}`);
    } else {
        router.push('/articles'); 
    }
  };

  return (
    <aside className="w-full lg:sticky lg:top-24 bg-white rounded-lg border border-gray-100 p-5 shadow-sm">
        
        {/* --- Bagian Topic --- */}
        <div className="mb-8">
            <h3 className="text-black text-xl font-bold mb-4 px-1 border-l-4 border-blue-600">
                Topics
            </h3>
            
            {/* === TAMPILAN MOBILE (Dropdown) === */}
            <div className="block lg:hidden">
                <div className="relative">
                    <select 
                        onChange={handleMobileChange}
                        // Value dikontrol oleh URL saat ini
                        value={currentSlug} 
                        className="w-full appearance-none bg-gray-50 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition-colors cursor-pointer font-medium"
                    >
                        
                        {topics.map((topic, index) => (
                            <option key={index} value={topic.slug}>
                                {topic.name}
                            </option>
                        ))}
                    </select>
                    
                    {/* Icon Panah (Pointer events none agar klik tembus ke select di bawahnya) */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* === TAMPILAN DESKTOP (List) === */}
            <div className="hidden lg:flex flex-col gap-2">
                {topics.map((topic, index) => {
                    const isActive = currentSlug === topic.slug;
                    return (
                        <Link 
                            key={index} 
                            href={`/articles/${topic.slug}`}
                            className={`
                                block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                                ${isActive 
                                    ? 'bg-blue-600 text-white shadow-md' 
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                }
                            `}
                        >
                            {topic.name}
                        </Link>
                    )
                })}
                 <Link 
                    href="/articles" 
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${!currentSlug ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                >
                    View All
                </Link>
            </div>
        </div>
        
        {/* Bagian Follow Us */}
        <div className="hidden lg:block text-gray-700">
            <p className="section-title text-lg font-medium leading-relaxed normal-case">
                Follow us on:
            </p>

            <div className="flex gap-4 text-lg my-2.5">
                <a href="#" className="hover:text-pink-600 transition">
                    <FaInstagram className="h-6 w-6 md:h-8 md:w-8" />
                </a>
                <a href="#" className="hover:text-blue-800 transition">
                    <FaLinkedinIn className="h-6 w-6 md:h-8 md:w-8" />
                </a>
                <a href="#" className="hover:text-blue-800 transition">
                    <FaFacebookSquare className="h-6 w-6 md:h-8 md:w-8 rounded-md" />
                </a>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar