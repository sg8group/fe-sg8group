import Link from "next/link";
import Image from "next/image";
import Hero from "../sections/Hero";
import Sidebar from "../components/Sidebar";
import MainContent from "../sections/MainContent";
import Container from "@/components/layouts/Container";
import React from "react";




// Fungsi untuk fetch data dari Laravel
  async function getArticles(topicSlug) {
    // Debugging: Cek apakah slug terbaca
    console.log("Fetching topic:", topicSlug);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?topic=${topicSlug}`, {
        cache: 'no-store', // Biar data selalu fresh
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
    // PERBAIKAN PENTING: Await params agar category tidak undefined
    const resolvedParams = await params;
    const category = resolvedParams.category;
    
    // Panggil API
    const response = await getArticles(category);
    const articles = response.data || [];

    // Format judul halaman (hilangkan tanda strip)
    const pageTitle = category ? category.replace(/-/g, ' ') : 'Articles';

  return (
    <>
      <Hero />
      <Container>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-8 md:py-5 lg:py-10">
        <div className="col-span-1">
          <Sidebar />  
        </div>
        <div className="sm:col-span-2 md:col-span-3 ">
          <MainContent articles={articles} pageTitle={pageTitle} />
        </div>
      </div>
      </Container>
    </>
  );
}
