import React from 'react'
import ArticleCard from "../components/ArticleCard";

const articles = [
  {
    id: 1,
    title: "Digital Transformation Strategies for 2025",
    slug: "digital-transformation-2025",
    image: "/heroImage.jpg", // Pastikan path gambar benar
    category: "Technology",
    date: "20 Jan 2024"
  },
  {
    id: 2,
    title: "Understanding Next.js App Router",
    slug: "understanding-nextjs",
    image: "/services/service1.png",
    category: "Development",
    date: "18 Jan 2024"
  },
  // ... artikel lainnya
];

function MainContent() {
  return (
    <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {articles.map((item) => (
            <ArticleCard key={item.id} article={item} />
            ))}
        </div>
    </div>
  )
}

export default MainContent