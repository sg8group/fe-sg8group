import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/layouts/Container";
import SideContent from "../../sections/SideContent";
import { getArticleDetailBySlug } from "@/services/api";

export default async function ArticleDetailPage({ params }) {
  const { slug } = params;

  const article = await getArticleDetailBySlug(slug);

  // Jika artikel tidak ditemukan di API, tampilkan halaman 404 Not Found
  if (!article) notFound();

  const { title, image, content, author, created_at, topic } = article;

  return (
    <Container>
      <article className="pb-12 pt-35">
        {/* Header */}
        <div className="mb-8 text-center">
          {topic && (
            <span className="border border-blue-700 text-blue-700 px-3 py-1 rounded-full text-md font-medium">
              {/* Pastikan akses property sesuai JSON API (misal: article.topic.name atau article.topic) */}
              {topic.name}
            </span>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 leading-tight">
            {title}
          </h1>

          <p className="text-gray-500 mt-2 text-sm md:text-base gap-x-0 flex justify-center items-center flex-col md:flex-row md:gap-4">
            Published on{" "}
            {created_at
              ? new Date(created_at).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "-"}
            {author && <span>by {author}</span>}
          </p>
        </div>

        {/* Image */}
        {image && (
          <div className="relative w-full h-72 md:h-112.5 mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={image}
              alt={title || "Article Image"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="grid md:grid-cols-4 gap-10">
          <div
            className="
            md:col-span-3 
            prose prose-lg prose-black max-w-none 
            leading-relaxed text-justify mb-10
            prose-headings:text-black 
            prose-strong:text-black
            prose-p:text-black
            prose-li:text-black"
            // Pastikan field body/content sesuai respons API
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="col-span-1">
            <SideContent />
          </div>
        </div>
      </article>
    </Container>
  );
}
