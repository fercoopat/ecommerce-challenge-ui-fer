import { RelativeLink } from "@/components/relative-link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import CategoryCardHoverIcon from "@/modules/category/components/category-card/category-card-hover-icon";
import { CATEGORY_PATHS } from "@/modules/category/constants/category.paths";
import { ICategory } from "@/modules/category/interfaces/category.interface";
import { getCategoryIcon } from "@/modules/category/utils/category.utils";

type Props = {
  category: ICategory | undefined;
};
const CategoryCard = ({ category }: Props) => {
  const CategoryIcon = getCategoryIcon(category?.icon);

  if (!category) {
    return null;
  }

  return (
    <RelativeLink
      key={category.id}
      href={CATEGORY_PATHS.categoryDetailsPath(category.id)}
      className="max-w-[146px] no-underline"
    >
      <Card
        key={category.id}
        title={category.name}
        className={cn(
          "hover:text-secondary min-h-[169px] max-w-[146px] min-w-[146px] cursor-pointer border-none shadow-none hover:bg-white",
          "[&_svg]:text-primary hover:[&_svg]:text-secondary relative size-full [&>svg]:hidden hover:[&>svg]:block",
          "transition duration-300 ease-in-out",
          "hover:border-secondary hover:shadow-secondary hover:border",
        )}
      >
        <CategoryCardHoverIcon
          className={cn(
            "absolute top-[-2px] right-0 size-[53px] overflow-hidden rounded-tr-[15px]",
            "transition-all",
          )}
        />

        <CardContent className="flex size-full flex-col items-center justify-center gap-4 text-center">
          <div className="mx-auto max-h-[60px]">
            <CategoryIcon className="size-full" />
          </div>

          <p className="text-sm leading-snug font-medium">{category.name}</p>
        </CardContent>
      </Card>
    </RelativeLink>
  );
};
export default CategoryCard;
