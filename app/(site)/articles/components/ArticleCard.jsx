import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <Link 
      href={`/articles/read/${article.slug}`} 
      className="group block w-full h-full"
    >
      <div className=":w-full h-full overflow-hidden rounded-2xl shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white relative">
        
        {/* Image Container 
           Saya ubah aspect rationya sedikit menjadi aspect-[4/3] agar lebih 
           cocok untuk thumbnail artikel, tapi tetap mempertahankan gaya full image.
        */}
        <div className="relative w-full aspect-4/3 overflow-hidden">
        
          <Image 
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Gradient Overlay 
             Menggunakan style yang sama persis dengan ServiceCard
             agar teks putih terbaca jelas di atas gambar.
          */}
          <div className="
              absolute inset-0
              bg-linear-to-t
              from-black/95 via-black/40
              to-transparent
          "/>

          {/* Content Wrapper */}
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
            
            {/* Kategori & Tanggal (Tambahan khusus Artikel) */}
            <div className="flex items-center gap-3 mb-2 opacity-90">
              <span className="text-xs font-semibold text-black bg-white px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="text-xs text-gray-300 font-medium">
                {article.date}
              </span>
            </div>

            {/* Title */}
            {/* Menggunakan class .section-title sesuai globals.css */}
            <h3 className="section-title text-white text-lg sm:text-xl leading-snug font-medium tracking-tight line-clamp-2 group-hover:text-gray-200 transition-colors">
              {article.title}
            </h3>

          </div>
        </div>
      </div>
    </Link>
  );
}