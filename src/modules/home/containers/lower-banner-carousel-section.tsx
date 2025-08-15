import { Banner } from "@/components/banner";
import { CarouselContainer } from "@/components/carousel-container";
import ImageFallback from "@/components/image-fallback/image-fallback";
import { CarouselItem } from "@/components/ui/carousel";
import {
  HOME_LOWER_BANNER_IMAGES,
  HOME_LOWER_CAROUSEL_IMAGES,
} from "@/constants/images/home/banner-images";

const PRODUCT_CAROUSEL_IMAGES = Object.entries(HOME_LOWER_CAROUSEL_IMAGES);

const LowerBannerCarouselSection = () => {
  return (
    <section className="2xl:bg-secondary-light mt-10 flex flex-col gap-4 2xl:mt-6 2xl:rounded-[6px] 2xl:bg-[url('/images/home/lower-banner-carousel-section/minus-50.webp')] 2xl:bg-contain 2xl:bg-[40%] 2xl:bg-no-repeat">
      <Banner
        desktopSrc={HOME_LOWER_BANNER_IMAGES.minus50PercentDesktop}
        mobileSrc={HOME_LOWER_BANNER_IMAGES.minus50Percent}
        articleClassName="h-[188px] aspect-video md:aspect-auto md:h-[85px] md:rounded-[6px] lg:bg-transparent lg:rounded-[6px] 2xl:aspect-video 2xl:flex 2xl:items-center 2xl:justify-end 2xl:overflow-visible"
        className="p-4"
        switchAt="lg"
        imgClassName="md:object-contain md:object-right 2xl:h-[126px]"
      >
        <p className="text-secondary text-[24px] leading-tight font-bold md:text-[26px]">
          ¡Ahorra en tu Cuidado!
        </p>

        <p className="text-primary text-base leading-tight md:text-[14px]">
          Aprovechas las ofertas que tenemos este mes.{" "}
          <span className="font-bold underline">Revisar ofertas</span>
        </p>
      </Banner>

      <CarouselContainer
        hideBtns
        loop
        align={"center"}
        className="max-w-[90dvw] lg:hidden"
      >
        {PRODUCT_CAROUSEL_IMAGES.map(([key, img], index) => (
          <CarouselItem
            key={index}
            className="relative aspect-square h-fit w-full min-w-[128px] basis-1/2 rounded-[15px] pl-2 md:aspect-video md:basis-1/4"
          >
            <ImageFallback
              fill
              alt={key}
              src={img}
              className="rounded-[15px] object-contain object-center"
              placeholderClassName="rounded-[15px]"
            />
          </CarouselItem>
        ))}
      </CarouselContainer>
    </section>
  );
};
export default LowerBannerCarouselSection;
