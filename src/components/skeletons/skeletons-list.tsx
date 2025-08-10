import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type Props = {
  size: number;
  className?: string;
  containerClassName?: string;
};
const SkeletonsList = ({ size, className, containerClassName }: Props) => {
  if (!size) {
    return null;
  }

  return (
    <div className={cn('space-y-2', containerClassName)}>
      {Array(size)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} className={cn('h-4 w-[250px]', className)} />
        ))}
    </div>
  );
};
export default SkeletonsList;
