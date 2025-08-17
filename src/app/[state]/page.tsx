import { IStateCode } from "@/constants/states";
import AfterCategoriesSection from "@/modules/home/containers/after-categories-section";
import AfterRecommendedSection from "@/modules/home/containers/after-recommended-section";
import BestsellerSection from "@/modules/home/containers/bestseller-section";
import CategoriesSection from "@/modules/home/containers/categories-section";
import HeroSection from "@/modules/home/containers/hero-section";
import LowerBannerCarouselSection from "@/modules/home/containers/lower-banner-carousel-section";
import MoreRecentSection from "@/modules/home/containers/more-recent-section";
import PillsSection from "@/modules/home/containers/pills-section";
import PreFooterSection from "@/modules/home/containers/pre-footer-section";
import RecommendedSection from "@/modules/home/containers/recommended-section";

export const revalidate = 60;

type Props = {
  params: Promise<{
    state: IStateCode;
  }>;
};

export default async function StatePage({}: Props) {
  return (
    <>
      <HeroSection />

      <CategoriesSection />

      <AfterCategoriesSection />

      <RecommendedSection />

      <AfterRecommendedSection />

      <BestsellerSection />

      <PillsSection />

      <MoreRecentSection />

      <LowerBannerCarouselSection />

      <PreFooterSection />
    </>
  );
}
