import { MovieCarousel } from "@/components/MovieCarousel";
import { Upcoming } from "@/components/Upcoming";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();

      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <Upcoming />
    </div>
  );
}
