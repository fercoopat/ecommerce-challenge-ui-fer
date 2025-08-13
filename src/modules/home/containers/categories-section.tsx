import { CarouselContainer } from '@/components/carousel-container';
import { CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { CategoryCard } from '@/modules/category/components/category-card';
import { CategoryService } from '@/modules/category/services/category.service';

const CategoriesSection = async () => {
  const { data } = await CategoryService.getAll();

  return (
    <section className='space-y-4 my-4'>
      <p className='text-primary-dark text-base font-medium md:text-[20px]'>
        Obtén todo, justo aquí
      </p>

      <CarouselContainer hideBtns loop align={'start'}>
        <CarouselContent className=''>
          {data?.map((category, index) => (
            <CarouselItem
              key={category.id + index}
              className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/9'
            >
              <CategoryCard key={category?.id} category={category} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselContainer>
    </section>
  );
};
export default CategoriesSection;
