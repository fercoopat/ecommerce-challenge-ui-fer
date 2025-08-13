import LogoIcon from '@/components/icons/logo.icon';
import { PageWidthContainer } from '@/components/layout/containers';
import { HeaderNavMenu } from '@/components/layout/header/header-top-bar/header-nav-menu';
import { HeaderTopBarActions } from '@/components/layout/header/header-top-bar/header-top-bar-actions';
import HeaderTopBarSearch from '@/components/layout/header/header-top-bar/header-top-bar-search';

const HeaderTopBar = () => {
  return (
    <PageWidthContainer className='flex flex-col md:flex-1 md:flex-row w-full max-md:gap-5'>
      <section className='flex items-center justify-between w-full gap-4'>
        <div className='flex items-center gap-1 md:w-full md:max-w-fit'>
          <HeaderNavMenu className='md:hidden' contentClassName='md:hidden' />

          <div className='flex items-center md:flex-row-reverse'>
            <h1 className='font-bold text-xl max-md:mb-2'>Botifarma</h1>
            <LogoIcon className='size-[24px] md:size-[32px]' />
          </div>
        </div>

        <HeaderTopBarActions />
      </section>

      <HeaderTopBarSearch className='md:hidden' />
    </PageWidthContainer>
  );
};
export default HeaderTopBar;
