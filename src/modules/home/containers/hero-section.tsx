import ImageFallback from "@/components/image-fallback/image-fallback";
import { HOME_HERO_BANNER_IMAGES } from "@/constants/images/home/banner-images";

const HeroSection = () => {
  return (
    <section className="grid gap-4 lg:min-h-[477px] lg:grid-cols-6 xl:h-full xl:max-h-[477px]">
      <div className="relative aspect-video size-full min-h-[189px] rounded-[15px] lg:col-span-4 lg:aspect-auto lg:min-h-[101%]">
        <ImageFallback
          fill
          priority
          alt="Cart shopping banner image"
          className="rounded-[15px]"
          placeholderClassName="rounded-[15px]"
          sizes="(max-width: 1024px) 100vw, 33vw"
          src={HOME_HERO_BANNER_IMAGES.cartDesktop}
        />
      </div>

      <div className="grid gap-4 lg:col-span-2">
        <div className="relative size-full min-h-[189px] rounded-[15px] md:aspect-video lg:aspect-auto lg:min-h-auto">
          <ImageFallback
            fill
            priority
            alt="Take care banner image"
            placeholderClassName="rounded-[15px]"
            sizes="(max-width: 1024px) 100vw, 33vw"
            src={HOME_HERO_BANNER_IMAGES.takeCare}
          />
        </div>

        <div className="relative size-full min-h-[189px] rounded-[15px] md:aspect-video lg:aspect-auto lg:min-h-auto">
          <ImageFallback
            fill
            priority
            alt="Best price banner image"
            placeholderClassName="rounded-[15px]"
            sizes="(max-width: 1024px) 100vw, 33vw"
            src={HOME_HERO_BANNER_IMAGES.bestPrice}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
