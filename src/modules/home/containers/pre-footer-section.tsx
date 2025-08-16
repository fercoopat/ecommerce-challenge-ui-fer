import { Button } from "@/components/ui/button";
import { HOME_PRE_FOOTER_IMAGES } from "@/constants/images/home/banner-images";
import Image from "next/image";

const PreFooterSection = () => {
  return (
    <section className="mt-10 flex flex-col gap-4 sm:gap-6 md:gap-8 xl:flex-row-reverse 2xl:mt-32 2xl:justify-between">
      <div className="flex flex-col gap-2 2xl:mt-10 2xl:w-full 2xl:max-w-[575px]">
        <p className="text-primary text-[42px] leading-[117%] font-bold 2xl:max-w-[475px]">
          Encuentra todo en un solo lugar.
        </p>

        <p className="text-primary-dark text-base 2xl:max-w-[421px]">
          Medicamentos, suplementos, vitaminas, analgésicos y antiinflamatorios,
          cuidado personal y mucho más.
        </p>

        <Button
          aria-label="Explore products pre footer button"
          variant={"default"}
          className="mt-2 w-fit md:mt-4"
          size={"lg"}
        >
          Explorar productos
        </Button>
      </div>

      <article className="relative right-1/2 left-1/2 -mx-[50vw] aspect-video h-[317px] w-screen overflow-hidden md:right-auto md:left-auto md:mx-auto md:w-full xl:w-[781px] 2xl:size-full 2xl:max-h-[475px] 2xl:max-w-[775px]">
        <Image
          fill
          alt="Products basket"
          src={HOME_PRE_FOOTER_IMAGES.productsBasketMobile}
          className="object-cover md:object-contain"
        />
      </article>
    </section>
  );
};
export default PreFooterSection;
