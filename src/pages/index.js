import { HomePageLoading } from "@/components/HomePageLoading";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Upcoming } from "@/components/Upcoming";
import { fetcher } from "@/utils/fetch";
import useSWR from "swr";

export default function Home() {
  const url = `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`;
  const { data, error, loading } = useSWR(url, fetcher);
  const nowPlayingMovie = data?.results;

  if (loading) return <HomePageLoading />;
  if (error) return <div>error</div>;

  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <Upcoming />
    </div>
  );
}
