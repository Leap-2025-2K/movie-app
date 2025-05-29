import { getMovieById } from "@/utils";
import { useEffect, useState } from "react";
import { MovieTrailer } from "./MovieTrailer";

export const MovieDetail = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <div>
      <MovieTrailer movieId={movieId} />
    </div>
  );
};
