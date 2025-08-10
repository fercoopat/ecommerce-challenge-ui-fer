'use client';

import { LoaderCircleIcon, MapPinIcon } from 'lucide-react';

import HeaderTopBarSearch from '@/components/layout/header/header-top-bar/header-top-bar-search';
import { StateSelector } from '@/components/state-selector';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SelectValue } from '@/components/ui/select';
import { useSettings } from '@/contexts/settings.context';
import { cn } from '@/lib/utils';

import styles from './header-top-bar-actions.module.css';

const HeaderTopBarActions = () => {
  const { state } = useSettings();

  return (
    <section className='flex items-center md:justify-between md:w-full'>
      <div className='flex items-center gap-4 justify-center md:w-full'>
        <StateSelector
          defaultValue={state}
          className={cn(
            'bg-transparent min-w-fit border-none md:bg-background md:min-h-[50px] xl:min-w-[138px]',
            styles['state-selector']
          )}
        >
          <MapPinIcon className='text-primary size-[32px] md:size-[20px]' />

          <SelectValue placeholder='Seleccione la provincia' />
        </StateSelector>

        <HeaderTopBarSearch className='max-md:hidden' />
      </div>

      <Avatar className='size-[43px] md:ml-4'>
        <AvatarImage
          src='https://github.com/shadcn.png'
          alt='avatar placeholder'
        />
        <AvatarFallback>
          <LoaderCircleIcon className='animate-spin mx-auto size-[32px] md:size-[20px]' />
        </AvatarFallback>
      </Avatar>
    </section>
  );
};
export default HeaderTopBarActions;
