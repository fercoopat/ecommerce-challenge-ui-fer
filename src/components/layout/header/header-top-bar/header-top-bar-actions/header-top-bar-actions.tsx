import HeaderTopBarSearch from '@/components/layout/header/header-top-bar/header-top-bar-search';
import { HeaderTopBarStateSelector } from '@/components/layout/header/header-top-bar/header-top-bar-state-selector';
import { UserAvatar } from '@/modules/user/components/user-avatar';

const HeaderTopBarActions = () => {
  return (
    <section className='flex items-center md:justify-between md:w-full'>
      <div className='flex items-center gap-4 justify-center md:w-full'>
        <HeaderTopBarStateSelector />

        <HeaderTopBarSearch className='max-md:hidden' />
      </div>

      <UserAvatar />
    </section>
  );
};
export default HeaderTopBarActions;
