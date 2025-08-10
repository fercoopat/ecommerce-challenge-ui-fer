import { SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { CategoriesMenu } from '@/modules/category/components/categories-menu';

type Props = {
  className?: string;
};
const HeaderTopBarSearch = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex w-full items-center max-md:flex-row-reverse rounded-[5px] bg-background max-w-[704px]',
        className
      )}
    >
      <Button className='min-h-[50px] min-w-[50px] max-md:-ml-2 md:-mr-2 z-10 rounded-[5px] md:hidden'>
        <SearchIcon className='size-[21px] md:hidden' />
      </Button>

      <CategoriesMenu
        className='max-md:hidden'
        contentClassName='max-md:hidden'
      />

      <SearchIcon className='size-[32px] max-md:hidden text-primary ml-5 -mr-1' />

      <Input
        type='search'
        placeholder='Busca productos, categorías o marcas...'
        className=' border-none bg-transparent shadow-none text-[#363636] text-[15px] font-light min-h-[50px] w-full focus-visible:ring-0'
      />
    </div>
  );
};
export default HeaderTopBarSearch;
