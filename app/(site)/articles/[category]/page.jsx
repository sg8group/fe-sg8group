// app/article/[category]/page.jsx
import Link from "next/link";
import Image from "next/image";

// 1. Fungsi untuk fetch data dari Laravel
async function getArticles(topicSlug) {
  // Kita kirim parameter 'topic' sesuai slug dari URL
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?topic=${topicSlug}`, {
    cache: 'no-store', // atau 'force-cache' jika ingin SSG (Static Site Generation)
  });

  if (!res.ok) {
    // Handle error (bisa return array kosong atau throw error)
    return { data: [] };
  }

  return res.json();
}

// 2. Component Halaman Utama
export default async function ArticleCategoryPage({ params }) {
  // Ambil slug kategori dari URL (misal: 'business')
  const { category } = params;
  
  // Panggil API
  const { data: articles } = await getArticles(category);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold capitalize mb-8">
        Article: {category.replace('-', ' ')}
      </h1>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              {/* Gambar Artikel */}
              <div className="relative h-48 w-full bg-gray-200">
                {article.image && (
                   <Image 
                     src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${article.image}`}
                     alt={article.title}
                     fill
                     className="object-cover"
                   />
                )}
              </div>
              
              <div className="p-4">
                <span className="text-sm text-blue-600 font-semibold">
                  {article.topic?.name}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-2 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 text-sm mb-4">
                  {article.excerpt} {/* Pastikan di resource ada excerpt/body */}
                </p>
                
                {/* Link ke Detail Artikel */}
                <Link 
                  href={`/article/read/${article.slug}`} 
                  className="text-blue-900 font-medium hover:underline"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Belum ada artikel di kategori ini.</p>
      )}
    </div>
  );
}