import { Suspense } from 'react';

import { CarouselContainer } from '@/components/carousel-container';
import { SkeletonsList } from '@/components/skeletons';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { CategoryCard } from '@/modules/category/components/category-card';
import { CategoryService } from '@/modules/category/services/category.service';

const CategoriesSectionContent = async () => {
  const { data: categories } = await CategoryService.getAll();

  return (
    <CarouselContainer hideBtns loop align={'start'}>
      <CarouselContent className=''>
        {categories?.map((category, index) => (
          <CarouselItem
            key={category.id + index}
            className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/9'
          >
            <CategoryCard key={category?.id} category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
};

const CategoriesSection = () => {
  return (
    <section className='space-y-4 my-4'>
      <p className='text-primary-dark text-base font-medium md:text-[20px]'>
        Obtén todo, justo aquí
      </p>

      <Suspense
        fallback={
          <SkeletonsList
            containerClassName='flex items-center overflow-x-auto gap-4'
            className='bg-gray-300 h-[169px] w-[146px]'
            size={8}
          />
        }
      >
        <CategoriesSectionContent />
      </Suspense>
    </section>
  );
};
export default CategoriesSection;
