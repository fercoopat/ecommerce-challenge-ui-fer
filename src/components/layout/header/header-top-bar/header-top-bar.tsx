import { PageWidthContainer } from "@/components/layout/containers";
import { HeaderNavMenu } from "@/components/layout/header/header-top-bar/header-nav-menu";
import { HeaderTopBarActions } from "@/components/layout/header/header-top-bar/header-top-bar-actions";
import HeaderTopBarLogo from "@/components/layout/header/header-top-bar/header-top-bar-logo";
import HeaderTopBarSearch from "@/components/layout/header/header-top-bar/header-top-bar-search";

const HeaderTopBar = () => {
  return (
    <PageWidthContainer className="flex w-full flex-col max-md:gap-5 md:flex-1 md:flex-row">
      <section className="flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-1 md:w-full md:max-w-fit">
          <HeaderNavMenu className="md:hidden" contentClassName="md:hidden" />

          <HeaderTopBarLogo />
        </div>

        <HeaderTopBarActions />
      </section>

      <HeaderTopBarSearch className="md:hidden" />
    </PageWidthContainer>
  );
};
export default HeaderTopBar;
