import { ChevronDownIcon, Grid2X2Icon } from "lucide-react";
import { Suspense } from "react";

import { SkeletonsList } from "@/components/skeletons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import CategoriesMenuList from "@/modules/category/components/categories-menu/categories-menu-list";

type Props = {
  className?: string;
  contentClassName?: string;
};
const CategoriesMenu = ({ className, contentClassName }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Categories dropdown menu button"
          className={cn(
            "z-10 min-h-[50px] min-w-[50px] rounded-[5px] max-md:-ml-2 md:-mr-2",
            className,
          )}
        >
          <Grid2X2Icon className="size-[20px]" aria-hidden="true" />

          <span className="font-light">Categorías</span>

          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn("w-56", contentClassName)}
        align="start"
      >
        <Suspense fallback={<SkeletonsList size={8} />}>
          <CategoriesMenuList />
        </Suspense>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CategoriesMenu;
