import { Banner } from '@/components/banner';
import { CarouselContainer } from '@/components/carousel-container';
import { CarouselItem } from '@/components/ui/carousel';
import { HOME_MORE_RECENT_BANNER_IMAGES } from '@/constants/images/home/banner-images';
import { ProductCard } from '@/modules/product/components/product-card';
import { IProduct } from '@/modules/product/interfaces/product.interface';

const BannerContent = () => (
  <Banner
    desktopSrc={HOME_MORE_RECENT_BANNER_IMAGES.manyProducts}
    alt='more recent section many products banner'
    articleClassName='text-primary-foreground max-h-[278px] max-w-[90dvw] md:col-span-3 md:row-span-1 md:max-h-[405px] lg:col-span-2'
    imgClassName='object-cover object-center lg:aspect-video'
  >
    <div className='p-4 space-y-1'>
      <p className='text-[20px] font-bold leading-tight md:text-[30px] md:max-w-[80%] lg:max-w-full'>
        Completo de vitaminas y analgésicos
      </p>

      <p className='underline text-[14px] md:text-[20px]'>Comprar ya</p>
    </div>
  </Banner>
);

type Props = {
  products: IProduct[] | undefined;
};
const MoreRecentSectionContent = ({ products }: Props) => {
  return (
    <>
      <div className='grid gap-4 md:hidden'>
        <BannerContent />

        <CarouselContainer
          hideBtns
          loop
          align={'start'}
          className='max-w-[90dvw]'
        >
          {products?.map((product, index) => (
            <CarouselItem key={product.id + index} className='basis-1/2'>
              <ProductCard key={product?.id} product={product} />
            </CarouselItem>
          ))}
        </CarouselContainer>
      </div>

      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-md:hidden'>
        <BannerContent />

        {products?.map((product) => (
          <ProductCard
            key={product?.id}
            product={product}
            className='md:max-w-[276px]'
          />
        ))}
      </div>
    </>
  );
};
export default MoreRecentSectionContent;
