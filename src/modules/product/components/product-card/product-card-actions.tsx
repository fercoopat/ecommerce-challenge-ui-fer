"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useCallback, useState } from "react";

import AddProductIcon from "@/components/icons/add-product.icon";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ProductCardActions = () => {
  const [productAmount, setProductAmount] = useState<number>(0);

  const handleChangeAmount = useCallback(
    (value: number) => () => {
      setProductAmount((prev) => {
        if (prev === 0 && value === -1) {
          return prev;
        }

        return prev + value;
      });
    },
    [setProductAmount],
  );

  return (
    <CardFooter className="flex items-center justify-between p-2 pt-0">
      <div className="flex min-w-[92px] items-center justify-between rounded-[10px] bg-white">
        <Button
          aria-label="Subtract product amount"
          size={"icon"}
          variant={"ghost"}
          className="rounded-r-none"
          onClick={handleChangeAmount(-1)}
        >
          <MinusIcon aria-hidden="true" />
        </Button>

        <Separator
          className="text-primary-dark min-h-[20px]"
          orientation="vertical"
        />

        <span className="text-primary-dark w-8 text-center text-[15px]">
          {productAmount}
        </span>

        <Separator
          className="text-primary-dark min-h-[20px]"
          orientation="vertical"
        />

        <Button
          aria-label="Add product amount"
          size={"icon"}
          variant={"ghost"}
          className="rounded-l-none"
          onClick={handleChangeAmount(1)}
        >
          <PlusIcon aria-hidden="true" />
        </Button>
      </div>

      <Button
        aria-label="Add product to cart button"
        size={"icon"}
        variant={"ghost"}
        className="text-primary hover:bg-background size-fit rounded-full p-1"
      >
        <AddProductIcon aria-hidden="true" className="size-[27px]" />
      </Button>
    </CardFooter>
  );
};
export default ProductCardActions;
