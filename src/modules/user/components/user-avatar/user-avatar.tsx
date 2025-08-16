import { LoaderCircleIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  return (
    <Avatar className="size-[43px] md:ml-4">
      <AvatarImage src="/images/avatar.webp" alt="avatar placeholder" />
      <AvatarFallback className="p-1">
        <LoaderCircleIcon className="size-full animate-spin" />
      </AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;
