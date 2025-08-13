import { CategoryCard } from '@/modules/category/components/category-card';
import { CategoryService } from '@/modules/category/services/category.service';

const CategoriesSection = async () => {
  const { data } = await CategoryService.getAll();

  return (
    <section className='space-y-4 py-4'>
      <p className='text-primary-dark text-base font-medium md:text-[20px]'>
        Obtén todo, justo aquí
      </p>

      <div className='flex gap-4 overflow-x-auto'>
        {data?.map((category) => (
          <CategoryCard key={category?.id} category={category} />
        ))}
      </div>
    </section>
  );
};
export default CategoriesSection;
