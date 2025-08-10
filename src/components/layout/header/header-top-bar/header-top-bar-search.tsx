import { SearchIcon } from 'lucide-react';

import HeaderTopBarSearchCategoriesMenu from '@/components/layout/header/header-top-bar/header-top-bar-search-categories-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};
const HeaderTopBarSearch = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex w-full items-center md:flex-row-reverse rounded-[5px] bg-background max-w-[704px]',
        className
      )}
    >
      <Input
        type='search'
        placeholder='Busca productos, categorías o marcas...'
        className=' border-none bg-transparent shadow-none text-[#363636] text-[15px] font-light min-h-[50px] w-full focus-visible:ring-0'
      />

      <SearchIcon className='size-[32px] max-lg:hidden text-primary ml-5 -mr-1' />

      <HeaderTopBarSearchCategoriesMenu />
    </div>
  );
};
export default HeaderTopBarSearch;
