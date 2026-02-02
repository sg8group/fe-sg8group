import Link from "next/link";
import Image from "next/image";
import Hero from "../sections/Hero";
import Sidebar from "../components/Sidebar";
import MainContent from "../sections/MainContent";
import Container from "@/components/layouts/Container";
import React from "react";
import { dummyArticles } from "@/constants/dummyArticles"; 




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

    

    // Update fungsi fetch
    async function getArticles(topicSlug) {
      console.log("Fetching topic:", topicSlug);

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?topic=${topicSlug}`, {
          cache: 'no-store',
        });

        if (!res.ok) {
          console.warn("API Error, using dummy data. Status:", res.status);
          // Fallback ke dummy data jika API error
          return { data: filterDummyData(topicSlug) };
        }

        const json = await res.json();
        
        // Jika API return kosong, pakai dummy juga (opsional, buat testing enak)
        if (!json.data || json.data.length === 0) {
            return { data: filterDummyData(topicSlug) };
        }

        return json;

      } catch (error) {
        console.error("Fetch Failed, using dummy data:", error);
        // Fallback ke dummy data jika fetch gagal (misal backend mati)
        return { data: filterDummyData(topicSlug) };
      }
    }

    // Helper untuk filter dummy data berdasarkan kategori/slug
    function filterDummyData(slug) {
        // Jika tidak ada slug (halaman utama artikel), kembalikan semua
        if (!slug || slug === 'all') return dummyArticles;
        
        // Filter berdasarkan topic name (case insensitive & replace dash)
        // misal slug: "cleaning-hygiene" -> cocokkan dengan "Cleaning & Hygiene" atau simple includes
        const formattedSlug = slug.replace(/-/g, ' ').toLowerCase();
        
        return dummyArticles.filter(article => 
          article.topic.name.toLowerCase().includes(formattedSlug) ||
            article.topic.name.toLowerCase() === formattedSlug
        );
    }

  return (
    <>
      <Hero />
      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 py-8 lg:py-12">
          
          {/* Sidebar: Full width di mobile, 1 kolom di desktop */}
          <div className="w-full lg:col-span-1 order-1 lg:order-1">
            <Sidebar activeCategory={category} />  
          </div>

          {/* Main Content: Full width di mobile, 3 kolom di desktop */}
          <div className="w-full lg:col-span-3 order-2 lg:order-2">
            <MainContent articles={articles} pageTitle={pageTitle} />
          </div>
          
        </div>
      </Container>
    </>
  );
}
