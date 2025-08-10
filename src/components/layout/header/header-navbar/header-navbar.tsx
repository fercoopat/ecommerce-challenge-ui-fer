import Link from 'next/link';

import { PageWidthContainer } from '@/components/layout/containers';
import { NAVBAR_OPTIONS } from '@/constants/navbar-options';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};
const HeaderNavbar = ({ className }: Props) => {
  return (
    <>
      <nav className={cn('bg-primary text-primary-foreground', className)}>
        <PageWidthContainer className='flex items-center min-h-[48px] gap-4 overflow-x-auto'>
          {NAVBAR_OPTIONS?.map((option, index) => (
            <Link
              key={index}
              href='#'
              className='no-underline hover:underline text-[18px] font-light min-w-fit'
            >
              {option}
            </Link>
          ))}
        </PageWidthContainer>
      </nav>
    </>
  );
};
export default HeaderNavbar;
