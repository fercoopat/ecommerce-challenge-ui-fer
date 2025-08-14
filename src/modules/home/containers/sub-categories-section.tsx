import { Banner } from '@/components/banner';
import { HOME_CONTENT_BANNER_IMAGES } from '@/constants/images/home/banner-images';

const SubCategoriesSection = () => {
  return (
    <section className='max-w-full relative my-8'>
      <Banner
        desktopSrc={HOME_CONTENT_BANNER_IMAGES.pharmacyTrustDesktop}
        mobileSrc={HOME_CONTENT_BANNER_IMAGES.pharmacyTrustMobile}
        switchAt='xl'
        articleClassName='h-[188px] xl:h-[85px] bg-secondary-light xl:rounded-[6px]'
        className='flex items-center'
        imgClassName='object-contain object-right'
      >
        <div className='p-4 md:p-8 lg:p-2 lg:px-8'>
          <p className='text-[24px] font-bold text-secondary max-w-[70%] leading-tight mb-1 md:max-w-[50%] lg:max-w-full xl:text-[26px]'>
            Tu farmacia online de confianza.
          </p>

          <p className='text-primary text-base max-w-[70%] leading-snug md:max-w-[50%] lg:max-w-[65%] xl:max-w-full xl:text-sm'>
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
export default SubCategoriesSection;
