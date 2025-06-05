import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { HeaderGenre } from "./HeaderGenre";
import { ModeToggle } from "./ModeToggle";
import { HeaderSearch } from "./Search";

export const Header = () => {
  return (
    <div className="flex gap-3 my-3 max-w-[1280px] mx-auto justify-between">
      <HeaderGenre />
      <div className="flex align-bottom ">
        <div className={cn("relative text-muted-foreground", "w-[379px]")}>
          <Search
            size={16}
            className="absolute -translate-y-1/2 left-3 top-1/2"
          />
          <HeaderSearch />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
};
