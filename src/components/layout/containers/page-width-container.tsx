import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageWidthContainer = ({ children, className }: Props) => {
  return (
    <div className={cn('max-w-[90dvw] 2xl:max-w-[1447px] mx-auto', className)}>
      {children}
    </div>
  );
};
export default PageWidthContainer;
