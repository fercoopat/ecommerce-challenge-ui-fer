import { Suspense } from 'react';

import { SkeletonsList } from '@/components/skeletons';
import { IStateCode } from '@/constants/states';
import CategoriesSection from '@/modules/home/containers/categories-section';
import HeroSection from '@/modules/home/containers/hero-section';
import SubCategoriesSection from '@/modules/home/containers/sub-categories-section';

type Props = {
  params: Promise<{
    state: IStateCode;
  }>;
};

export default async function StatePage({ params }: Props) {
  const { state } = await params;

  return (
    <div className='space-y-20'>
      <HeroSection />

      <Suspense fallback={<SkeletonsList size={8} />}>
        <CategoriesSection />
      </Suspense>

      <SubCategoriesSection />
    </div>
  );
}
