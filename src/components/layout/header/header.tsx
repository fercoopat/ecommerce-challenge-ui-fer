import HeaderNavbar from '@/components/layout/header/header-navbar/header-navbar';
import { HeaderTopBar } from '@/components/layout/header/header-top-bar';

const Header = () => {
  return (
    <header className='bg-white min-h-[151px] max-md:pt-4 flex flex-col justify-between'>
      <HeaderTopBar />

      <HeaderNavbar className='max-md:hidden' />
    </header>
  );
};
export default Header;
