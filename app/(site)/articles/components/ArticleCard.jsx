import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
  const {
    slug,
    title,
    image,
    author,
    created_at,
    topic,
  } = article;
  // Format tanggal (aman jika tanggal kosong)
  const formattedDate = created_at 
    ? new Date(created_at).toLocaleDateString("id-ID", {
      day: 'numeric',
      month: 'short',
      year: 'numeric' })
    : "";

    const imageSrc = image || "/heroImage.jpg"

  return (
    <Link
      href={`/articles/read/${slug}`}
      className="group block h-full"
    >
      <article className="relative overflow-hidden rounded-2xl shadow-md bg-white transition hover:-translate-y-1 hover:shadow-xl">

        {/* Image */}
        <div className="relative aspect-4/3">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-5 text-white w-full">

          {topic && (
            <span className="text-[10px] uppercase tracking-wider font-bold text-blue-800 bg-white/90 px-2 py-1 rounded">
              {topic.name}
            </span>
          )}

          <h3 className="mt-2 text-lg font-bold line-clamp-2 group-hover:text-blue-200 transition">
            {title}
          </h3>

          <p className="text-xs text-gray-300 mt-2">
            {formattedDate}
            {author && ` • ${author}`}
          </p>
        </div>

      </article>
    </Link>
  );
}