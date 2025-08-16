import { Suspense } from "react";

import { SkeletonsList } from "@/components/skeletons";
import { MoreRecentSectionContent } from "@/modules/home/components/more-recent-section";
import { ProductService } from "@/modules/product/services/product.service";

const LoadContent = async () => {
  const { data: products } = await ProductService.getAll({
    size: 8,
    sort: { rating: "desc" },
  });

  return <MoreRecentSectionContent products={products} />;
};

const MoreRecentSection = () => {
  return (
    <section className="mt-10 grid gap-8">
      <p className="text-primary-dark text-base font-medium">
        De lo más reciente
      </p>

      <Suspense
        fallback={
          <SkeletonsList
            containerClassName="flex items-center overflow-x-auto gap-4"
            className="h-[313px] w-[184px] bg-gray-300 lg:h-[405px] lg:w-[276px]"
            size={5}
          />
        }
      >
        <LoadContent />
      </Suspense>
    </section>
  );
};
export default MoreRecentSection;
