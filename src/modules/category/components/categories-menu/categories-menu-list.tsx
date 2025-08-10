import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { CategoryService } from '@/modules/category/services/category.service';
import { getCategoryIcon } from '@/modules/category/utils/category.utils';

const CategoriesMenuList = async () => {
  const { data: categories = [] } = await CategoryService.getAll();

  return (
    <DropdownMenuGroup>
      {categories?.map((category) => {
        const CategoryIcon = getCategoryIcon(category?.icon);

        return (
          <DropdownMenuItem
            key={category?.id}
            className={cn(
              'cursor-pointer hover:!text-secondary [&_span_svg]:!text-primary hover:[&_span_svg]:!text-secondary'
            )}
          >
            {category?.name}

            <DropdownMenuShortcut>
              <CategoryIcon className='size-[32px]' />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        );
      })}
    </DropdownMenuGroup>
  );
};
export default CategoriesMenuList;
