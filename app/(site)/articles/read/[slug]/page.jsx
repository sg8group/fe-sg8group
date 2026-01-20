// app/article/read/[slug]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";

// Fetch detail satu artikel
async function getArticleDetail(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`, {
    next: { revalidate: 60 }, // Revalidate data tiap 60 detik (ISR)
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = params;
  const response = await getArticleDetail(slug);

  if (!response || !response.success) {
    notFound(); // Akan menampilkan halaman 404 Next.js
  }

  const article = response.data;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {article.topic?.name}
        </span>
        <h1 className="text-4xl font-bold mt-4 text-gray-900 leading-tight">
          {article.title}
        </h1>
        <p className="text-gray-500 mt-2">
          Published on {new Date(article.created_at).toLocaleDateString('id-ID')}
        </p>
      </div>

      {article.image && (
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${article.image}`}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Render HTML Content dari WYSIWYG Editor (jika ada) */}
      <div 
        className="prose prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: article.body || article.content }} 
      />
    </article>
  );
}