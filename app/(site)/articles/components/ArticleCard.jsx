import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
  // Format tanggal (aman jika tanggal kosong)
  const formattedDate = article.created_at 
    ? new Date(article.created_at).toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' })
    : "";

  // LOGIKA BARU UNTUK GAMBAR:
  let imageUrl = article.image || "/heroImage.jpg"; // Default fallback

  // Cek apakah ini gambar lokal (dari folder public)
  // Cirinya: diawali dengan "/" (seperti /services atau /hero) DAN bukan dari storage backend
  const isLocalImage = imageUrl.startsWith('/') && !imageUrl.includes('storage');
  const isExternalImage = imageUrl.startsWith('http');

  // Jika bukan lokal dan bukan link full (http), maka tambahkan prefix storage server
  if (!isLocalImage && !isExternalImage && process.env.NEXT_PUBLIC_STORAGE_URL) {
      imageUrl = `${process.env.NEXT_PUBLIC_STORAGE_URL}/${imageUrl}`;
  }

  return (
    <Link 
      href={`/articles/read/${article.slug}`} 
      className="group block w-full h-full"
    >
      <div className="w-full h-full flex flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
        
        {/* Image Container */}
        <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
          <Image 
            src={imageUrl} 
            alt={article.title || "Article Image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // Tambahkan unoptimized jika gambar lokal bermasalah saat dev
            unoptimized={isLocalImage}
          />
          
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80"/>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
             {/* Kategori Badge */}
             <div className="flex flex-wrap items-center gap-2 mb-2">
                {article.topic && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-blue-800 bg-white/90 px-2 py-1 rounded-sm shadow-sm backdrop-blur-sm">
                        {article.topic.name}
                    </span>
                )}
             </div>

            <h3 className="text-white text-lg sm:text-xl font-bold leading-tight line-clamp-2 group-hover:text-blue-200 transition-colors">
              {article.title}
            </h3>
            
            <span className="text-xs text-gray-300 font-medium mt-2">
                {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}