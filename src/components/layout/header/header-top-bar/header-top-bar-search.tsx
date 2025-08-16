import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CategoriesMenu } from "@/modules/category/components/categories-menu";

type Props = {
  className?: string;
};
const HeaderTopBarSearch = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "bg-background flex w-full max-w-[704px] items-center rounded-[5px] max-md:flex-row-reverse",
        className,
      )}
    >
      <Button
        aria-label="Search bar header icon button"
        className="z-10 min-h-[50px] min-w-[50px] rounded-[5px] max-md:-ml-2 md:-mr-2 md:hidden"
      >
        <SearchIcon className="size-[21px] md:hidden" aria-hidden="true" />
      </Button>

      <CategoriesMenu
        className="max-md:hidden"
        contentClassName="max-md:hidden"
      />

      <SearchIcon className="text-primary -mr-1 ml-5 size-[32px] max-md:hidden" />

      <Input
        type="search"
        placeholder="Busca productos, categorías o marcas..."
        className="min-h-[50px] w-full border-none bg-transparent text-[15px] font-light text-[#363636] shadow-none focus-visible:ring-0"
      />
    </div>
  );
};
export default HeaderTopBarSearch;
