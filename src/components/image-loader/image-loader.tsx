import Image, { type ImageProps } from "next/image";
import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn, getOptimizedImageUrl } from "@/lib/utils";

type Props = {
  src: string;
  height: number;
  width: number;
  className?: string;
  imgClassName?: string;
} & ImageProps;

const ImageLoaderContent = async ({
  alt,
  src,
  height,
  width,
  className,
  imgClassName,
  ...props
}: Props) => {
  const optimizedSrc = await getOptimizedImageUrl(src, width, height);

  return (
    <div className={className}>
      <Image
        {...props}
        alt={alt}
        src={optimizedSrc}
        width={width}
        height={height}
        className={imgClassName}
      />
    </div>
  );
};

const ImageLoader = (props: Props) => {
  return (
    <Suspense
      fallback={<Skeleton className={cn(props?.className, "bg-gray-300")} />}
    >
      <ImageLoaderContent {...props} />
    </Suspense>
  );
};
export default ImageLoader;
