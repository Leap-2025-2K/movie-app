import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MovieTrailer } from "./MovieTrailer";

export const MovieCarouselItem = ({
  imageUrl,
  title,
  vote_average,
  overview,
  id,
}) => {
  return (
    <div className="relative">
      <Link href={`/details/${id}`}>
        <div className={"h-[246px] lg:h-150 w-full"}>
          <Image
            src={imageUrl}
            layout="fill"
            alt="poster"
            priority
            objectFit="cover"
          />
          <div className="absolute inset-0 z-10 transition-all duration-300 group-hover:bg-primary/30" />
        </div>
      </Link>
      <div className="static text-foreground lg:absolute lg:top-1/2 lg:left-[140px] lg:-translate-y-1/2 lg:text-white z-10">
        <div className="p-5 space-y-4 lg:p-0">
          <div className="flex justify-between lg:flex-col lg:space-y-1">
            <div>
              <h4 className="text-sm">Now Playing:</h4>
              <h3 className="w-52 text-2xl font-semibold truncate">{title}</h3>
            </div>

            <div className="flex items-center gap-x-1">
              <Star size={16} fill="#fde047" color="#fde047" />

              <div className="font-medium">
                <span className="text-foreground text-sm">
                  {vote_average.toFixed(1)}
                </span>
                <span className="text-muted-foreground text-xs">/10</span>
              </div>
            </div>
          </div>

          <p className="w-[302px] text-sm line-clamp-5">{overview}</p>
          <MovieTrailer movieId={id} />
        </div>
      </div>
    </div>
  );
};
