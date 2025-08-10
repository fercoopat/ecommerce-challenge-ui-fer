import { LoaderCircleIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserAvatar = () => {
  return (
    <Avatar className='size-[43px] md:ml-4'>
      <AvatarImage
        src='https://github.com/shadcn.png'
        alt='avatar placeholder'
      />
      <AvatarFallback>
        <LoaderCircleIcon className='animate-spin mx-auto size-[32px] md:size-[20px]' />
      </AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;
