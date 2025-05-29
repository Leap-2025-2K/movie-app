import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";

export const Upcoming = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1>Upcoming</h1>
        <div className="flex gap-2">
          See more
          <ArrowRight />
        </div>
      </div>
      <div className="flex gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <MovieCard />
        ))}
      </div>
    </div>
  );
};
