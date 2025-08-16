import Image from "next/image";

import { HOME_AFTER_RECOMMENDED_BANNER_IMAGES } from "@/constants/images/home/banner-images";

const AfterRecommendedSection = () => {
  return (
    <section className="my-8 grid gap-4 lg:grid-cols-2 xl:my-12 xl:grid-cols-3">
      {Object.entries(HOME_AFTER_RECOMMENDED_BANNER_IMAGES).map(
        ([key, image], index) => (
          <article
            key={key + index}
            className="relative aspect-video min-h-[190px] min-w-[189px] rounded-[15px] md:min-h-[229px] xl:aspect-auto"
          >
            <Image
              fill
              alt={key}
              src={image}
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </article>
        ),
      )}
    </section>
  );
};
export default AfterRecommendedSection;
