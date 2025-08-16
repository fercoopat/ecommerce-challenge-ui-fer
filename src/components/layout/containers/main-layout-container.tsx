import PageWidthContainer from "@/components/layout/containers/page-width-container";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

type Props = {
  children: React.ReactNode;
};
const MainLayoutContainer = ({ children }: Props) => {
  return (
    <section className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />

      <PageWidthContainer className="mt-4 size-full">
        {children}
      </PageWidthContainer>

      <Footer />
    </section>
  );
};
export default MainLayoutContainer;
