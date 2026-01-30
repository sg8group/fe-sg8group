import Hero from "../sections/Hero";
import Sidebar from "../components/Sidebar";
import MainContent from "../sections/MainContent";
import Container from "@/components/layouts/Container";
import React from "react";


async function getArticles(topicSlug) {
  try {
    // Pastikan menggunakan environment variable yang sesuai dengan backend Anda
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?topic=${topicSlug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error("API Error Status:", res.status);
      return { data: [] };
    }

    return res.json();
  } catch (error) {
    console.error("Fetch Failed:", error);
    return { data: [] };
  }
}

export default async function ArticleCategoryPage({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  
  const response = await getArticles(category);
  const articles = response.data || [];

  const pageTitle = category ? category.replace(/-/g, ' ') : 'Articles';


  return (
    <>
      <Hero />
      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 py-8 lg:py-12">
          <div className="w-full lg:col-span-1 order-1 lg:order-1">
            <Sidebar activeCategory={category} />  
          </div>
          <div className="w-full lg:col-span-3 order-2 lg:order-2">
            <MainContent articles={articles} pageTitle={pageTitle} />
          </div>
        </div>
      </Container>
    </>
  );
}