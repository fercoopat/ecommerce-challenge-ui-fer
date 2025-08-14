import { IStateCode } from '@/constants/states';
import AfterCategoriesSection from '@/modules/home/containers/after-categories-section';
import AfterRecommendedSection from '@/modules/home/containers/after-recommended-section';
import CategoriesSection from '@/modules/home/containers/categories-section';
import HeroSection from '@/modules/home/containers/hero-section';
import RecommendedSection from '@/modules/home/containers/recommended-section';

type Props = {
  params: Promise<{
    state: IStateCode;
  }>;
};

export default async function StatePage({ params }: Props) {
  const { state } = await params;

  return (
    <>
      <HeroSection />

      <CategoriesSection />

      <AfterCategoriesSection />

      <RecommendedSection />

      <AfterRecommendedSection />
    </>
  );
}
