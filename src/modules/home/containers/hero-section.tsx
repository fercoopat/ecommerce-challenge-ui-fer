import Image from 'next/image';

import { HOME_HERO_BANNER_IMAGES } from '@/constants/images/home/home-hero-banner-images';

const HeroSection = () => {
  return (
    <section className='flex flex-col gap-4 lg:grid lg:grid-cols-6 xl:h-full xl:max-h-[477px] lg:min-h-[477px]'>
      <div className='relative rounded-[15px] size-full md:aspect-video lg:col-span-4 lg:aspect-auto min-h-[240px] lg:min-h-auto xl:min-h-[101%]'>
        <Image
          fill
          alt={HOME_HERO_BANNER_IMAGES.cartMobile}
          src={HOME_HERO_BANNER_IMAGES.cartMobile}
          className='lg:hidden'
        />

        <Image
          fill
          alt={HOME_HERO_BANNER_IMAGES.cartDesktop}
          src={HOME_HERO_BANNER_IMAGES.cartDesktop}
          className='max-lg:hidden'
        />
      </div>

      <div className='grid gap-4 lg:col-span-2'>
        <div className='relative rounded-[15px] size-full md:aspect-video lg:aspect-auto min-h-[189px] lg:min-h-auto'>
          <Image
            fill
            alt={HOME_HERO_BANNER_IMAGES.takeCare}
            src={HOME_HERO_BANNER_IMAGES.takeCare}
          />
        </div>

        <div className='relative rounded-[15px] size-full md:aspect-video lg:aspect-auto min-h-[189px] lg:min-h-auto'>
          <Image
            fill
            alt={HOME_HERO_BANNER_IMAGES.bestPrice}
            src={HOME_HERO_BANNER_IMAGES.bestPrice}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
