import { getImageProps } from 'next/image';

import ImageFallback from '@/components/image-fallback/image-fallback';
import { HOME_HERO_BANNER_IMAGES } from '@/constants/images/home/banner-images';

const { props: mobileImg } = getImageProps({
  src: HOME_HERO_BANNER_IMAGES.cartMobile,
  alt: 'Carrito de compras',
  width: 800,
  height: 400,
});

const { props: desktopImg } = getImageProps({
  src: HOME_HERO_BANNER_IMAGES.cartDesktop,
  alt: 'Carrito de compras',
  width: 1200,
  height: 600,
});

const HeroSection = () => {
  return (
    <section className='grid gap-4 lg:grid-cols-6 xl:h-full xl:max-h-[477px] lg:min-h-[477px]'>
      <div className='relative rounded-[15px] size-full md:aspect-video lg:col-span-4 lg:aspect-auto min-h-[240px] lg:min-h-[101%]'>
        <picture>
          <source media='(min-width: 1024px)' srcSet={desktopImg.srcSet} />
          <source media='(max-width: 1023px)' srcSet={mobileImg.srcSet} />
          <img
            {...mobileImg}
            alt={desktopImg.alt}
            fetchPriority='high'
            className='rounded-[15px] size-full md:aspect-video lg:aspect-auto'
            style={{ width: '100%', height: '100%' }}
          />
        </picture>
      </div>

      <div className='grid gap-4 lg:col-span-2'>
        <div className='relative rounded-[15px] size-full md:aspect-video lg:aspect-auto min-h-[189px] lg:min-h-auto'>
          <ImageFallback
            priority
            fill
            sizes='(max-width: 1024px) 100vw, 33vw'
            placeholderClassName='rounded-[15px]'
            alt={HOME_HERO_BANNER_IMAGES.takeCare}
            src={HOME_HERO_BANNER_IMAGES.takeCare}
          />
        </div>

        <div className='relative rounded-[15px] size-full md:aspect-video lg:aspect-auto min-h-[189px] lg:min-h-auto'>
          <ImageFallback
            priority
            fill
            sizes='(max-width: 1024px) 100vw, 33vw'
            placeholderClassName='rounded-[15px]'
            alt={HOME_HERO_BANNER_IMAGES.bestPrice}
            src={HOME_HERO_BANNER_IMAGES.bestPrice}
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
