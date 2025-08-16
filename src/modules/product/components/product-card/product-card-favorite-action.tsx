"use client";

import { HeartIcon } from "lucide-react";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
const ProductCardFavoriteAction = ({ className }: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleToggleFav = useCallback(() => {
    setIsFavorite((prev) => !prev);
  }, [setIsFavorite]);

  return (
    <Button
      size="icon"
      variant="outline"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className={cn("size-fit rounded-full bg-transparent p-2", className, {
        "hover:[&_svg]:fill-secondary/75": isFavorite,
      })}
      onClick={handleToggleFav}
    >
      <HeartIcon
        className={cn("size-[16px] lg:size-[22px]", {
          "fill-secondary text-secondary": isFavorite,
        })}
        aria-hidden="true"
      />
    </Button>
  );
};
export default ProductCardFavoriteAction;
