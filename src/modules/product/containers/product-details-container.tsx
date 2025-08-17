import Image from "next/image";

import { Rating } from "@/components/rating/rating";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CurrencyValue } from "@/modules/product/components/currency-value";
import type { IProduct } from "@/modules/product/interfaces/product.interface";

type Props = {
  product: IProduct | undefined;
};
const ProductDetailsContainer = ({ product }: Props) => {
  return (
    <main className="my-10 grid w-full gap-6 lg:grid-cols-12">
      <Card className="flex items-center justify-center bg-white p-4 lg:col-span-4">
        {product?.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />
        ) : (
          <div className="bg-muted text-muted-foreground flex h-80 w-full items-center justify-center">
            Sin imagen
          </div>
        )}
      </Card>

      <div className="flex flex-col gap-4 lg:col-span-5">
        <h1 className="text-2xl font-bold">{product?.name}</h1>

        <div className="flex items-center gap-2">
          <Rating value={product?.rating || 0} readOnly variant="yellow" />
        </div>

        {!!product?.description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {product?.description}
          </p>
        )}

        <p className="text-primary text-3xl font-semibold">
          <CurrencyValue value={product?.price || 0} />
        </p>

        <p className="text-sm font-medium text-green-600">En stock</p>
      </div>

      <Card className="flex flex-col gap-4 p-4 lg:col-span-3">
        <p className="text-primary text-2xl font-semibold">
          <CurrencyValue value={product?.price || 0} />
        </p>

        <p className="text-sm font-medium text-green-600">
          Disponible para envío
        </p>
        <Button className="w-full">Añadir al carrito</Button>

        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Comprar ahora
        </Button>

        <p className="text-muted-foreground text-center text-xs">
          Transacción segura
        </p>
      </Card>
    </main>
  );
};
export default ProductDetailsContainer;
