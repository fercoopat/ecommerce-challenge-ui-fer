import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import CategoryCardHoverIcon from '@/modules/category/components/category-card/category-card-hover-icon';
import { ICategory } from '@/modules/category/interfaces/category.interface';
import { getCategoryIcon } from '@/modules/category/utils/category.utils';

type Props = {
  category: ICategory | undefined;
};
const CategoryCard = ({ category }: Props) => {
  const CategoryIcon = getCategoryIcon(category?.icon);

  if (!category) {
    return null;
  }

  return (
    <Card
      key={category.id}
      title={category.name}
      className={cn(
        'min-w-[146px] max-w-[146px] min-h-[169px] hover:bg-white cursor-pointer hover:text-secondary shadow-none border-none',
        '[&_svg]:text-primary hover:[&_svg]:text-secondary relative size-full [&>svg]:hidden hover:[&>svg]:block',
        'transition duration-300 ease-in-out'
      )}
    >
      <CategoryCardHoverIcon
        className={cn(
          'absolute top-[-2px] right-0 size-[53px] overflow-hidden',
          'transition-all'
        )}
      />

      <CardContent className='size-full flex flex-col items-center justify-center gap-4 text-center'>
        <div className='max-h-[60px] mx-auto'>
          <CategoryIcon className='size-full' />
        </div>

        <p className='text-sm font-medium leading-snug'>{category.name}</p>
      </CardContent>
    </Card>
  );
};
export default CategoryCard;
