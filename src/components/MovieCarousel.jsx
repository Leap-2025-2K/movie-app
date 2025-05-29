import Autoplay from "embla-carousel-autoplay";
import { MovieCarouselItem } from "./MovieCarouselItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const MovieCarousel = ({ nowPlayingMovie }) => {
  return (
    <div>
      <Carousel
        className="relative  w-screen overflow-hidden"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {nowPlayingMovie?.slice(0, 3).map((movie, index) => {
            const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/original${movie.backdrop_path}`;
            return (
              <CarouselItem key={index}>
                <MovieCarouselItem
                  imageUrl={imageUrl}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  overview={movie.overview}
                  id={movie.id}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-[50px]" />
        <CarouselNext className="right-[50px]" />
      </Carousel>
    </div>
  );
};
