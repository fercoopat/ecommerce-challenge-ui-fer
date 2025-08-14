'use client';

import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const NAV_BTN_BASE = cn(
  'border-none',
  'bg-primary [&_svg]:text-primary-foreground hover:bg-secondary hover:[&_svg]:text-secondary-foreground',
  'z-[1200]'
);

type AlignProp =
  | 'start'
  | 'center'
  | 'end'
  | ((viewSize: number, snapSize: number, index: number) => number);

type Props = {
  children: React.ReactNode;
  className?: string;
  btnClassName?: string;
  hideBtns?: boolean;
  align?: AlignProp;
  loop?: boolean;
};
const CarouselContainer = ({
  children,
  className,
  btnClassName,
  hideBtns = false,
  align = 'center',
  loop = false,
}: Props) => {
  const [carouselAPI, setCarouselAPI] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!carouselAPI) return;

    setSelectedIndex(carouselAPI.selectedScrollSnap());
  }, [carouselAPI]);

  const handleScrollTo = useCallback(
    (index: number) => () => {
      if (carouselAPI) {
        carouselAPI.scrollTo(index);
      }
    },
    [carouselAPI]
  );

  useEffect(() => {
    if (!carouselAPI) return;

    onSelect();
    setScrollSnaps(carouselAPI.scrollSnapList());

    carouselAPI.on('select', onSelect);

    return () => {
      carouselAPI.off('select', onSelect);
    };
  }, [carouselAPI, onSelect]);

  return (
    <div className={cn('px-4', className)}>
      <Carousel opts={{ loop, align }} setApi={setCarouselAPI}>
        {children}

        {!hideBtns && (
          <>
            <CarouselPrevious
              aria-label='Go to previous slide'
              className={cn(NAV_BTN_BASE, '-left-4', btnClassName)}
            />

            <CarouselNext
              aria-label='Go to next slide'
              className={cn(NAV_BTN_BASE, '-right-4', btnClassName)}
            />
          </>
        )}
      </Carousel>

      {scrollSnaps?.length > 1 && (
        <div className='flex justify-center mt-4 space-x-2 overflow-x-auto'>
          {scrollSnaps.map((_, index) => {
            const isSelected = selectedIndex === index;

            return (
              <Button
                key={index}
                onClick={handleScrollTo(index)}
                size='icon'
                className={cn('w-2 h-2 rounded-full bg-gray-300', {
                  'bg-secondary w-[23px]': isSelected,
                })}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CarouselContainer;
