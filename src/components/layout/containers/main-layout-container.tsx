import PageWidthContainer from '@/components/layout/containers/page-width-container';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

type Props = {
  children: React.ReactNode;
};
const MainLayoutContainer = ({ children }: Props) => {
  return (
    <section className='grid grid-rows-[auto_1fr_auto] gap-2 min-h-dvh'>
      <Header />

      <PageWidthContainer className='overflow-auto size-full my-4'>
        {children}
      </PageWidthContainer>

      <Footer />
    </section>
  );
};
export default MainLayoutContainer;
