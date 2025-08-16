import Link from "next/link";

import HamburgerMenuIcon from "@/components/icons/hamburger-menu.icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAVBAR_OPTIONS } from "@/constants/navbar-options";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  contentClassName?: string;
};
const HeaderNavMenu = ({ className, contentClassName }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button
          aria-label="Hamburger header nav menu icon button"
          variant={"ghost"}
          className="!p-0"
        >
          <HamburgerMenuIcon
            className="text-primary size-[32px]"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn("w-56", contentClassName)}
        align="start"
      >
        <DropdownMenuGroup>
          {NAVBAR_OPTIONS?.map((option, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link
                key={index}
                href="#"
                className="min-w-fit text-[18px] font-light no-underline hover:underline"
              >
                {option}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default HeaderNavMenu;
