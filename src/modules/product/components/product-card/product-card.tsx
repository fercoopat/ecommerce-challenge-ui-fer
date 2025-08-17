import Image from "next/image";

import { Rating } from "@/components/rating/rating";
import { RelativeLink } from "@/components/relative-link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CurrencyValue } from "@/modules/product/components/currency-value";
import ProductCardActions from "@/modules/product/components/product-card/product-card-actions";
import ProductCardFavoriteAction from "@/modules/product/components/product-card/product-card-favorite-action";
import { PRODUCT_PATHS } from "@/modules/product/constants/product.paths";
import type { IProduct } from "@/modules/product/interfaces/product.interface";

type Props = {
  product: IProduct | undefined;
  className?: string;
};
const ProductCard = ({ product, className }: Props) => {
  if (!product) return null;

  return (
    <RelativeLink
      href={PRODUCT_PATHS.productDetailsPath(product.id)}
      className="max-w-[184px] no-underline lg:max-w-[276px]"
    >
      <Card
        className={cn(
          "relative size-full max-w-[184px] bg-[rgba(255,255,255,0.50)] p-0 shadow-[0_20px_30px_0_rgba(43,52,69,0.04)] backdrop-blur-md lg:min-h-[405px] lg:max-w-[276px]",
          "hover:shadow-primary/20 hover:shadow-[0px_8px_8px_8px]",
          className,
        )}
      >
        <span className="bg-secondary text-secondary-foreground absolute top-0 left-0 z-10 rounded-tl-[15px] rounded-br-[15px] px-4 py-1 text-base font-bold">
          Nuevo
        </span>

        <ProductCardFavoriteAction className="absolute top-2 right-2 z-10" />

        <CardContent className="flex-1 p-0">
          <article className="relative min-h-[157px] w-full rounded-t-[15px] rounded-b-none bg-white lg:h-[240px]">
            <Image
              priority
              alt={product.name}
              src={product.image}
              height={184}
              width={184}
              className="size-full rounded-t-[15px] object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </article>

          <div className="text-primary-dark space-y-2 p-2">
            <CurrencyValue
              value={product.price}
              className="text-[20px] font-medium"
              supClassName="text-[12px] font-light"
            />

            <p
              title={product.name}
              className="line-clamp-3 text-[14px] leading-snug"
            >
              {product.name}
            </p>

            <Rating readOnly value={product.rating} variant="yellow" />
          </div>
        </CardContent>

        <ProductCardActions />
      </Card>
    </RelativeLink>
  );
};
export default ProductCard;
