'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  btnClassName?: string;
  hideBtns?: boolean;
  align?:
    | 'start'
    | 'center'
    | 'end'
    | ((viewSize: number, snapSize: number, index: number) => number);
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

  const scrollTo = useCallback(
    (index: number) => () => {
      if (!carouselAPI) {
        return;
      }

      carouselAPI.scrollTo(index);
    },
    [carouselAPI]
  );

  useEffect(() => {
    if (!carouselAPI) {
      return;
    }

    onSelect();

    setScrollSnaps(carouselAPI.scrollSnapList());

    carouselAPI.on('select', onSelect);
  }, [carouselAPI, onSelect]);

  return (
    <div className={className}>
      <Carousel opts={{ loop, align }} setApi={setCarouselAPI}>
        {children}

        {!hideBtns && (
          <>
            <CarouselPrevious
              className={cn(
                'left-0 border-none size-[47px]',
                'bg-primary [&_svg]:text-primary-foreground hover:bg-secondary hover:[&_svg]:text-secondary-foreground',
                btnClassName
              )}
            />
            <CarouselNext
              className={cn(
                'right-0 border-none size-[47px]',
                'bg-primary [&_svg]:text-primary-foreground hover:bg-secondary hover:[&_svg]:text-secondary-foreground',
                btnClassName
              )}
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
                onClick={scrollTo(index)}
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
