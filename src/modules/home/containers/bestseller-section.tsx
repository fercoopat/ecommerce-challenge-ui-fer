import { Suspense } from 'react';

import { CarouselContainer } from '@/components/carousel-container';
import { SkeletonsList } from '@/components/skeletons';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ProductCard } from '@/modules/product/components/product-card';
import { ProductService } from '@/modules/product/services/product.service';

const BestsellerSectionContent = async () => {
  const { data: products } = await ProductService.getAll({
    sort: { rating: 'desc' },
  });

  return (
    <CarouselContainer loop align={'start'} btnClassName='max-md:hidden'>
      <CarouselContent>
        {products?.map((product, index) => (
          <CarouselItem
            key={product.id + index}
            className='basis-1/2 md:basis-1/4 xl:basis-1/5'
          >
            <ProductCard key={product?.id} product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
};

const BestsellerSection = () => {
  return (
    <section className='my-8 space-y-4 xl:my-12'>
      <p className='text-primary-dark font-medium text-base xl:text-[20px]'>
        Lo más vendido
      </p>

      <Suspense
        fallback={
          <SkeletonsList
            containerClassName='flex items-center overflow-x-auto gap-4'
            className='bg-gray-300 h-[313px] w-[184px] lg:w-[276px] lg:h-[405px]'
            size={5}
          />
        }
      >
        <BestsellerSectionContent />
      </Suspense>
    </section>
  );
};
export default BestsellerSection;
