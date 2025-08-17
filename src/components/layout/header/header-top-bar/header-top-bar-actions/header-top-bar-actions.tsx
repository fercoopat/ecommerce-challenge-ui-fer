import HeaderTopBarSearch from "@/components/layout/header/header-top-bar/header-top-bar-search";
import { HeaderTopBarStateSelector } from "@/components/layout/header/header-top-bar/header-top-bar-state-selector";
import { PrimaryColorSelector } from "@/components/primary-color-selector";
import { UserAvatar } from "@/modules/user/components/user-avatar";

const HeaderTopBarActions = () => {
  return (
    <section className="flex items-center md:w-full md:justify-between">
      <div className="flex items-center justify-center gap-4 md:w-full">
        <HeaderTopBarStateSelector />

        <HeaderTopBarSearch className="max-md:hidden" />
      </div>

      <div className="flex items-center gap-2">
        <PrimaryColorSelector />

        <UserAvatar />
      </div>
    </section>
  );
};
export default HeaderTopBarActions;
