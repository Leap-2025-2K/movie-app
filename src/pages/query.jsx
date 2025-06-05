import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  parseAsArrayOf,
  parseAsInteger,
  useQueryState,
} from "next-usequerystate";
import { Badge } from "@/components/ui/badge";

const Page = () => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);
  const [genreIds2, setGenreIds2] = useState([]);
  const [loading, setLoading] = useState(false);

  const [genreIds, setGenreIds] = useQueryState(
    "genreIds",
    parseAsArrayOf(parseAsInteger).withDefault([])
  );

  const getMovieGenres = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      await new Promise((resolve) => setTimeout(resolve, 5000));
      const movies = await response.json();
      setGenres(movies);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  if (loading) return <div>Loading...</div>;

  const handleSelectGenre = (id) => {
    const newGenreIds = genreIds2.includes(2)
      ? genreIds2.filter((t) => t !== id)
      : [...genreIds2, id];
    router.push(`/genres?genreIds=${newGenreIds}`);
  };
  console.log(loading);
  return (
    <div className="flex flex-wrap gap-4">
      {genres?.genres?.map((genre) => (
        <Badge
          className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold dark:bg-black light:bg-white"
          onClick={() => handleSelectGenre(genre.id)}
        >
          {genre.name}
        </Badge>
      ))}
    </div>
  );
};
export default Page;
