import { cn } from '@/lib/utils';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const BANNER_BREAKPOINTS: Record<Breakpoint, string> = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;

type BannerProps = {
  desktopSrc: string;
  mobileSrc?: string;
  alt?: string;
  articleClassName?: string;
  children?: React.ReactNode;
  className?: string;
  imgClassName?: string;
  switchAt?: Breakpoint;
};

const Banner = ({
  children,
  articleClassName,
  className,
  desktopSrc,
  mobileSrc = desktopSrc,
  imgClassName,
  alt = 'Banner',
  switchAt = 'md',
}: BannerProps) => {
  return (
    <article
      className={cn(
        'relative w-full rounded-[15px] overflow-hidden',
        articleClassName
      )}
    >
      <picture>
        <source srcSet={desktopSrc} media={BANNER_BREAKPOINTS[switchAt]} />
        <img
          src={mobileSrc}
          alt={alt}
          className={cn('size-full', imgClassName)}
        />
      </picture>

      <div className={cn('absolute inset-0 z-10', className)}>{children}</div>
    </article>
  );
};

export default Banner;
