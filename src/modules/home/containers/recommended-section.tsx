import { Suspense } from 'react';

import { SkeletonsList } from '@/components/skeletons';
import { ProductCard } from '@/modules/product/components/product-card';
import { ProductService } from '@/modules/product/services/product.service';

const RecommendedSectionContent = async () => {
  const { data: products } = await ProductService.getAll();

  return (
    <div className='grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5'>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const RecommendedSection = () => {
  return (
    <section className='space-y-4 xl:space-y-6'>
      <p className='text-base text-primary-dark font-medium xl:text-[20px]'>
        Recomendado para ti
      </p>

      <Suspense
        fallback={
          <SkeletonsList
            containerClassName='grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-5'
            className='bg-gray-300 h-[313px] w-[184px] lg:w-[276px] lg:h-[405px]'
            size={10}
          />
        }
      >
        <RecommendedSectionContent />
      </Suspense>
    </section>
  );
};
export default RecommendedSection;
