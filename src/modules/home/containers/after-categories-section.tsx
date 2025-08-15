import { Banner } from '@/components/banner';
import { HOME_AFTER_CATEGORIES_BANNER_IMAGES } from '@/constants/images/home/banner-images';

const AfterCategoriesSection = () => {
  return (
    <section className='max-w-full relative my-8'>
      <Banner
        desktopSrc={HOME_AFTER_CATEGORIES_BANNER_IMAGES.pharmacyTrustDesktop}
        mobileSrc={HOME_AFTER_CATEGORIES_BANNER_IMAGES.pharmacyTrustMobile}
        switchAt='xl'
        articleClassName='h-[188px] xl:h-[85px] bg-secondary-light xl:rounded-[6px]'
        className='flex items-center size-full'
        imgClassName='object-cover object-center aspect-video xl:object-contain xl:object-right'
      >
        <div className='p-4 md:p-8 lg:p-2 lg:px-8'>
          <p className='text-[24px] font-bold text-secondary max-w-[80%] sm:max-w-[70%] leading-tight mb-1 md:max-w-[50%] lg:max-w-full xl:text-[26px]'>
            Tu farmacia online de confianza.
          </p>

          <p className='text-primary text-base leading-snug sm:max-w-[70%] md:max-w-[50%] lg:max-w-[65%] xl:max-w-full xl:text-sm'>
            Amplio catálogo de medicamentos y productos para tu bienestar.{' '}
            <span className='font-semibold underline'>
              Explora nuestro catálogo
            </span>
          </p>
        </div>
      </Banner>
    </section>
  );
};
export default AfterCategoriesSection;
