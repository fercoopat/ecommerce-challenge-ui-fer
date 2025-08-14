'use client';

import Image, { ImageProps } from 'next/image';
import { memo, useCallback, useState } from 'react';

import { FALLBACK_IMAGE } from '@/constants/images/no-available-images';
import { cn } from '@/lib/utils';

type Props = ImageProps & {
  fallbackSrc?: string;
  placeholderClassName?: string;
};

const ImageFallback = ({
  src,
  alt = '',
  fallbackSrc = FALLBACK_IMAGE,
  blurDataURL,
  placeholder = 'blur',
  className,
  placeholderClassName,
  ...props
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src as string);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (e.currentTarget.naturalWidth === 0) {
        setImgSrc(fallbackSrc);
      } else {
        setIsLoaded(true);
      }
    },
    [fallbackSrc]
  );

  const handleError = useCallback(() => {
    setImgSrc(fallbackSrc);
    setIsLoaded(true);
  }, [fallbackSrc]);

  return (
    <>
      {!isLoaded && (
        <div
          className={cn(
            'absolute inset-0 animate-pulse bg-gray-200',
            placeholderClassName
          )}
          style={{
            width: props?.fill ? '100%' : props?.width,
            height: props?.fill ? '100%' : props?.height,
          }}
        ></div>
      )}

      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        blurDataURL={blurDataURL}
        placeholder={blurDataURL ? placeholder : 'empty'}
        className={cn(
          'opacity-0 transition-opacity duration-300',
          { 'opacity-100': isLoaded },
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  );
};

export default memo(ImageFallback);
