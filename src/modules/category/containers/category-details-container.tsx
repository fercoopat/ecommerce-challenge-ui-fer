import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ICategory } from "@/modules/category/interfaces/category.interface";
import { getCategoryIcon } from "@/modules/category/utils/category.utils";

type Props = {
  category: ICategory | undefined;
};
const CategoryDetailsContainer = ({ category }: Props) => {
  const CategoryIcon = getCategoryIcon(category?.icon);

  return (
    <main className="flex w-full flex-col items-center justify-center px-4 py-10">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="flex flex-col items-center gap-4 text-center">
          <div className="bg-primary text-primary-foreground flex h-32 w-32 items-center justify-center rounded-2xl shadow-md">
            <CategoryIcon className="size-16" />
          </div>
          <CardTitle className="text-3xl font-bold md:text-5xl">
            {category?.name}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground text-center text-lg leading-relaxed">
            {category?.description ??
              "No hay descripción disponible para esta categoría."}
          </p>
        </CardContent>
      </Card>
    </main>
  );
};
export default CategoryDetailsContainer;
