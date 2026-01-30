
import React from 'react'
import ArticleCard from "../components/ArticleCard";



function MainContent({ articles, pageTitle }) {
  
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-gray-600">No articles found for {pageTitle}</h2>
      </div>
    );
  }

  return (
    <div className="w-full">
        {/* Judul Kategori (Opsional, agar user tau sedang lihat apa) */}
        <h2 className="text-2xl font-bold mb-6 capitalize text-gray-800 border-b pb-2">
            {pageTitle}
        </h2>

        {/* RESPONSIVE GRID:
            - grid-cols-1: Mobile (1 kartu per baris)
            - sm:grid-cols-2: Tablet (2 kartu per baris)
            - lg:grid-cols-3: Desktop (3 kartu per baris)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {articles.map((item) => (
                <ArticleCard key={item.id} article={item} />
            ))}
        </div>
    </div>
  )
}

export default MainContent