"use client";

import Link from "next/link";

import LogoIcon from "@/components/icons/logo.icon";
import { useSettings } from "@/contexts/settings.context";

const HeaderTopBarLogo = () => {
  const { state } = useSettings();

  return (
    <Link
      href={`/${state}`}
      className="flex w-fit items-center no-underline md:flex-row-reverse"
    >
      <h1 className="text-xl font-bold max-md:mb-2">Botifarma</h1>
      <LogoIcon className="size-[24px] md:size-[32px]" />
    </Link>
  );
};
export default HeaderTopBarLogo;
