import { ChevronDownIcon, Grid2X2Icon, SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const HeaderTopBarSearchCategoriesMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='min-h-[50px] min-w-[50px] max-md:-ml-2 md:-mr-2 z-10 rounded-[5px]'>
          <SearchIcon className='size-[21px] lg:hidden' />

          <Grid2X2Icon className='size-[20px] max-lg:hidden' />

          <span className='font-light max-lg:hidden'>Categorías</span>

          <ChevronDownIcon className='max-lg:hidden' />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='max-lg:hidden'>Categories List</PopoverContent>
    </Popover>
  );
};
export default HeaderTopBarSearchCategoriesMenu;
