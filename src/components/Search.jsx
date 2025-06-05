import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { SearchResult } from "./SearchResult";

export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovie();
  }, [searchValue]);

  return (
    <div className="relative">
      <Input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search..."
        className={cn("pl-[38px]", "border-none shadow-none")}
      />
      {movies?.results?.length > 0 && (
        <SearchResult movies={movies} setSearchValue={setSearchValue} />
      )}
    </div>
  );
};
