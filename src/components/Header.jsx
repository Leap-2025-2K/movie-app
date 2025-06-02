import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { HeaderGenre } from "./HeaderGenre";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <div className="flex gap-3 my-3 max-w-[1280px] mx-auto">
      <HeaderGenre />
      <div className="flex align-bottom ">
        <div className={cn("relative text-muted-foreground", "w-[379px]")}>
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
          />
          <Input
            type="text"
            placeholder="Search..."
            className={cn("pl-[38px]", "border-none shadow-none")}
          />
        </div>
      </div>
      <ModeToggle />
    </div>
  );
};
