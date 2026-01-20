import Link from "next/link";
import Image from "next/image";
import Hero from "../sections/Hero";

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
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold capitalize mb-8">
          Article: {pageTitle}
        </h1>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => {
              // Logic Pintar: Cek apakah gambar dari API sudah full URL atau belum
              const imageUrl = article.image?.startsWith('http') 
                  ? article.image 
                  : `${process.env.NEXT_PUBLIC_STORAGE_URL}/${article.image}`;

              return (
                  <div key={article.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col bg-white">
                    {/* Gambar Artikel */}
                    <div className="relative h-48 w-full bg-gray-200">
                      {article.image ? (
                        <Image 
                          src={imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                      )}
                    </div>
                    
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">
                        {article.topic?.name}
                      </span>
                      <h2 className="text-xl font-bold mb-2 line-clamp-2 text-gray-800">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3 text-sm mb-4 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <Link 
                        href={`/article/read/${article.slug}`} 
                        className="text-blue-900 font-medium hover:underline mt-auto inline-flex items-center"
                      >
                        Read More 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </Link>
                    </div>
                  </div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <h3 className="text-xl text-gray-600 font-semibold">Belum ada artikel</h3>
              <p className="text-gray-500 mt-2">
                  Tidak ditemukan artikel untuk kategori <span className="font-mono text-blue-600">"{category}"</span>.
              </p>
          </div>
        )}
      </div>
    </>
  );
}