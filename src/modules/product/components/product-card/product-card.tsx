import ImageFallback from '@/components/image-fallback/image-fallback';
import { Rating } from '@/components/rating/rating';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CurrencyValue } from '@/modules/product/components/currency-value';
import ProductCardActions from '@/modules/product/components/product-card/product-card-actions';
import ProductCardFavoriteAction from '@/modules/product/components/product-card/product-card-favorite-action';
import { IProduct } from '@/modules/product/interfaces/product.interface';

type Props = {
  product: IProduct | undefined;
  className?: string;
};
const ProductCard = ({ product, className }: Props) => {
  if (!product) {
    return null;
  }

  return (
    <Card
      className={cn(
        'w-full h-full max-w-[184px] relative shadow-[0_20px_30px_0_rgba(43,52,69,0.04)] p-0 bg-[rgba(255,255,255,0.50)] backdrop-blur-md lg:max-w-[276px] lg:min-h-[405px]',
        className
      )}
    >
      <span className='absolute top-0 left-0 font-bold text-base bg-secondary text-secondary-foreground z-10 px-4 py-1 rounded-tl-[15px] rounded-br-[15px]'>
        Nuevo
      </span>

      <ProductCardFavoriteAction className='absolute top-2 right-2 z-10' />

      <CardContent className='p-0 flex-1'>
        <div className='min-h-[157px] relative w-full lg:min-h-[240px] bg-white rounded-t-[15px]'>
          <ImageFallback
            fill
            priority
            alt={product?.name}
            src={product.image}
            className='object-contain object-center rounded-t-[15px]'
            placeholderClassName='rounded-t-[15px]'
          />
        </div>

        <div className='p-2 space-y-2 text-primary-dark'>
          <CurrencyValue
            value={product.price}
            className='text-[20px] font-medium'
            supClassName='text-[12px] font-light'
          />

          <p
            title={product.name}
            className='text-[14px] leading-snug line-clamp-3'
          >
            {product.name}
          </p>

          <Rating value={product.rating} variant='yellow' />
        </div>
      </CardContent>

      <ProductCardActions />
    </Card>
  );
};
export default ProductCard;
