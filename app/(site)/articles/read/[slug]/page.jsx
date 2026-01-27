
import Image from "next/image";
import { notFound } from "next/navigation";
import { dummyArticles } from "../../../../constants/dummyArticles";
import Container from "@/components/layouts/Container";
import SideContent from "../../sections/SideContent";

// Fungsi untuk mencari data artikel berdasarkan slug dari file dummy
function getArticleDetail(slug) {
  // Cari artikel yang slug-nya cocok
  const foundArticle = dummyArticles.find((item) => item.slug === slug);

  if (!foundArticle) return null;

  return foundArticle;
}

export default async function ArticleDetailPage({ params }) {
  // Next.js 15 mungkin memerlukan await params, tapi untuk versi 14 ke bawah bisa langsung destructure
  // Jika error "params should be awaited", ubah jadi: const { slug } = await params;
  const { slug } = params;

  const article = getArticleDetail(slug);

  if (!article) {
    notFound(); // Akan menampilkan halaman 404 jika artikel tidak ketemu
  }

  // LOGIKA MEMBERSIHKAN PATH GAMBAR DARI DUMMY DATA
  // Beberapa data kamu tertulis "public/heroImage.jpg", Next.js maunya "/heroImage.jpg"
  let imageUrl = article.image;

  // Jika path dimulai dengan "public/", kita hapus kata "public"
  if (imageUrl && imageUrl.startsWith("public/")) {
    imageUrl = imageUrl.replace("public", "");
  }
  // Jika path tidak diawali "/" dan bukan link http, tambahkan "/"
  if (imageUrl && !imageUrl.startsWith("/") && !imageUrl.startsWith("http")) {
    imageUrl = `/${imageUrl}`;
  }

  return (
    <Container>
      <article className="pb-12 pt-35">
        <div className="mb-8 text-center">
          {article.topic && (
            <span className="border border-blue-700 text-blue-700 px-3 py-1 rounded-full text-md font-medium">
              {article.topic.name}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base gap-x-0 flex justify-center items-center  flex-col md:flex-row md:gap-4">
            Published on{" "}
            {new Date(article.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {article.author && <span>by {article.author}</span>}
          </p>
        </div>

        {imageUrl && (
          <div className="relative w-full h-75 md:h-112.5 mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority // Tambahkan priority karena ini gambar utama (LCP)
            />
          </div>
        )}

        <div className="grid-cols-4 gap-5 md:grid">
          <div
            className="col-span-3 prose prose-lg w-full text-gray-800 leading-relaxed"
            // article.content diambil dari dummyArticles
            dangerouslySetInnerHTML={{ __html: article.body || article.content }}
          />
          <div className="col-span-1">
            <SideContent />
          </div>
        </div>

        {/* Render HTML Content */}
      </article>
    </Container>
  );
}
