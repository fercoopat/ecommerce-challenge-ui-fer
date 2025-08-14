'use client';

import { MinusIcon, PlusIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import AddProductIcon from '@/components/icons/add-product.icon';
import { Button } from '@/components/ui/button';
import { CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ProductCardActions = () => {
  const [productAmount, setProductAmount] = useState<number>(0);

  const handleChangeAmount = useCallback(
    (value: number) => () => {
      setProductAmount((prev) => {
        if (prev === 0 && value === -1) {
          return prev;
        }

        return prev + value;
      });
    },
    [setProductAmount]
  );

  return (
    <CardFooter className='flex items-center justify-between p-2 pt-0'>
      <div className='flex items-center justify-between bg-white rounded-[10px] min-w-[92px]'>
        <Button
          size={'icon'}
          variant={'ghost'}
          className='rounded-r-none'
          onClick={handleChangeAmount(-1)}
        >
          <MinusIcon />
        </Button>

        <Separator
          className='min-h-[20px] text-primary-dark'
          orientation='vertical'
        />

        <span className='text-primary-dark text-[15px] w-8 text-center'>
          {productAmount}
        </span>

        <Separator
          className='min-h-[20px] text-primary-dark'
          orientation='vertical'
        />

        <Button
          size={'icon'}
          variant={'ghost'}
          className='rounded-l-none'
          onClick={handleChangeAmount(1)}
        >
          <PlusIcon />
        </Button>
      </div>

      <Button
        size={'icon'}
        variant={'ghost'}
        className='rounded-full text-primary hover:bg-background p-1 size-fit'
      >
        <AddProductIcon className='size-[27px]' />
      </Button>
    </CardFooter>
  );
};
export default ProductCardActions;
