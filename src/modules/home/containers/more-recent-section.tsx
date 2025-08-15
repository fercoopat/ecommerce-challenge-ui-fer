import { Suspense } from 'react';

import { SkeletonsList } from '@/components/skeletons';
import { MoreRecentSectionContent } from '@/modules/home/components/more-recent-section';
import { ProductService } from '@/modules/product/services/product.service';

const LoadContent = async () => {
  const { data: products } = await ProductService.getAll({
    size: 8,
    sort: { rating: 'desc' },
  });

  return <MoreRecentSectionContent products={products} />;
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
        <LoadContent />
      </Suspense>
    </section>
  );
};
export default MoreRecentSection;
