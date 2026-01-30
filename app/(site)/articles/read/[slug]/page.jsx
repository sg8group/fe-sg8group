import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/layouts/Container";
import SideContent from "../../sections/SideContent";

// Fungsi untuk mengambil data dari API Backend (Laravel)
async function getArticleDetail(slug) {
  try {
    // Pastikan URL backend benar. Ganti localhost:8000 dengan URL API kamu jika berbeda.
    // Gunakan environment variable agar lebih aman: process.env.NEXT_PUBLIC_API_BASE_URL
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";
    
    console.log(`Fetching article with slug: ${slug} from ${baseUrl}`); // Debugging

    const res = await fetch(`${baseUrl}/api/articles/${slug}`, {
      // 'no-store' = SSR (selalu ambil data terbaru tiap refresh)
      // 'force-cache' = SSG (data di-cache)
      cache: "no-store", 
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    
    // Sesuaikan dengan struktur JSON dari Laravel kamu.
    // Biasanya Laravel membungkus data di dalam properti "data".
    return json.data || json; 

  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function ArticleDetailPage({ params }) {
  // --- PERBAIKAN PENTING UNTUK NEXT.JS 15 ---
  // params adalah Promise, jadi harus di-await sebelum destructuring slug
  const { slug } = await params; 

  const article = await getArticleDetail(slug);

  // Jika artikel tidak ditemukan di API, tampilkan halaman 404 Not Found
  if (!article) {
    notFound(); 
  }

  // LOGIKA URL GAMBAR (Menyesuaikan response dari API)
  let imageUrl = article.image;
  const isExternalUrl = imageUrl && imageUrl.startsWith("http");

  if (imageUrl && !isExternalUrl) {
    // Bersihkan path jika backend mengirim path lokal (misal: "public/heroImage.jpg")
    if (imageUrl.startsWith("public/")) {
      imageUrl = imageUrl.replace("public", "");
    }
    // Pastikan diawali "/" jika path relative
    if (!imageUrl.startsWith("/")) {
      imageUrl = `/${imageUrl}`;
    }
    // Opsi: Jika Laravel menyimpan di folder storage, uncomment baris bawah:
    // imageUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/storage${imageUrl}`;
  }

  return (
    <Container>
      <article className="pb-12 pt-35">
        <div className="mb-8 text-center">
          {article.topic && (
            <span className="border border-blue-700 text-blue-700 px-3 py-1 rounded-full text-md font-medium">
              {/* Pastikan akses property sesuai JSON API (misal: article.topic.name atau article.topic) */}
              {article.topic?.name || article.topic}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base gap-x-0 flex justify-center items-center flex-col md:flex-row md:gap-4">
            Published on{" "}
            {article.created_at ? new Date(article.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }) : "-"}
            {article.author && <span>by {article.author}</span>}
          </p>
        </div>

        {imageUrl && (
          <div className="relative w-full h-75 md:h-112.5 mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={article.title || "Article Image"}
              fill
              className="object-cover"
              priority 
            />
          </div>
        )}

        <div className="grid-cols-4 gap-10 md:grid">
          <div
            className="col-span-3 prose prose-lg max-w-full text-gray-800 leading-relaxed text-justify mb-10"
            // Pastikan field body/content sesuai respons API
            dangerouslySetInnerHTML={{ __html: article.body || article.content }}
          />
          <div className="col-span-1">
            <SideContent />
          </div>
        </div>
      </article>
    </Container>
  );
}