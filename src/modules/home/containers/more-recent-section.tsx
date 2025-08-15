import { Suspense } from 'react';

import { Banner } from '@/components/banner';
import { CarouselContainer } from '@/components/carousel-container';
import { SkeletonsList } from '@/components/skeletons';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { HOME_MORE_RECENT_BANNER_IMAGES } from '@/constants/images/home/banner-images';
import { ProductCard } from '@/modules/product/components/product-card';
import { ProductService } from '@/modules/product/services/product.service';

const MoreRecentSectionContent = async () => {
  const { data: products } = await ProductService.getAll({
    size: 8,
    sort: { rating: 'desc' },
  });

  return (
    <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
      <Banner
        desktopSrc={HOME_MORE_RECENT_BANNER_IMAGES.manyProducts}
        alt='more recent section many products banner'
        articleClassName='text-primary-foreground max-h-[278px] max-w-[90dvw] md:col-span-3 md:row-span-1 md:max-h-[405px] lg:col-span-2'
        imgClassName='object-cover object-center lg:aspect-video'
      >
        <div className='p-4 space-y-1'>
          <p className='text-[20px] font-bold leading-tight md:text-[30px] md:max-w-[80%] lg:max-w-full'>
            Completo de vitaminas y analgésicos
          </p>

          <p className='underline text-[14px] md:text-[20px]'>Comprar ya</p>
        </div>
      </Banner>

      <CarouselContainer
        hideBtns
        loop
        align={'start'}
        className='max-w-[90dvw] md:hidden'
      >
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

      {products?.map((product) => (
        <ProductCard
          key={product?.id}
          product={product}
          className='md:max-w-[276px]'
        />
      ))}
    </div>
  );
};

const MoreRecentSection = () => {
  return (
    <section className='grid gap-8 mt-[1125px] sm:mt-[1025px] md:mt-[750px] lg:mt-[550px] 2xl:mt-[400px]'>
      <p className='font-medium text-base text-primary-dark'>
        De lo más reciente
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
        <MoreRecentSectionContent />
      </Suspense>
    </section>
  );
};
export default MoreRecentSection;
