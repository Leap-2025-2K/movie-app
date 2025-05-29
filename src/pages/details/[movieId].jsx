import { MovieDetail } from "@/components/MovieDetail";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const movieId = router.query?.movieId;

  return <MovieDetail movieId={movieId} />;
}
