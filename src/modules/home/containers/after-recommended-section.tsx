import ImageFallback from '@/components/image-fallback/image-fallback';
import { HOME_AFTER_RECOMMENDED_BANNER_IMAGES } from '@/constants/images/home/banner-images';

const AfterRecommendedSection = () => {
  return (
    <section className='grid gap-4 my-8 lg:grid-cols-2 xl:grid-cols-3 xl:my-12'>
      {Object.entries(HOME_AFTER_RECOMMENDED_BANNER_IMAGES).map(
        ([key, image], index) => (
          <article
            key={key + index}
            className='min-w-[189px] min-h-[190px] rounded-[15px] relative md:min-h-[229px] aspect-video xl:aspect-auto'
          >
            <ImageFallback
              fill
              priority
              alt={key}
              src={image}
              sizes='(max-width: 1024px) 100vw, 33vw'
              placeholderClassName='rounded-[15px]'
            />
          </article>
        )
      )}
    </section>
  );
};
export default AfterRecommendedSection;
