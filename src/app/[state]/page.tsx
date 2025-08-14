import { IStateCode } from '@/constants/states';
import CategoriesSection from '@/modules/home/containers/categories-section';
import HeroSection from '@/modules/home/containers/hero-section';
import RecommendedSection from '@/modules/home/containers/recommended-section';
import SubCategoriesSection from '@/modules/home/containers/sub-categories-section';

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

      <SubCategoriesSection />

      <RecommendedSection />
    </>
  );
}
