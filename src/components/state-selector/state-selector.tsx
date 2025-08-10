'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useTransition } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/components/ui/select';
import { APP_PATHS } from '@/constants/app.paths';
import { IStateCode, STATES_ENTRIES } from '@/constants/states';
import { setSettingsState } from '@/lib/actions/settings.actions';
import { cn } from '@/lib/utils';
import { LoaderCircleIcon } from 'lucide-react';

type Props = {
  children: React.ReactNode;
  className?: string;
  defaultValue?: IStateCode | '';
};
const StateSelector = ({ children, className, defaultValue = '' }: Props) => {
  const { push } = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSelectState = useCallback(
    (stateCode: IStateCode) => {
      startTransition(async () => {
        await setSettingsState(stateCode);
        push(APP_PATHS.setStateCodePath(stateCode));
      });
    },
    [push]
  );

  return (
    <Select
      onValueChange={handleSelectState}
      defaultValue={defaultValue}
      disabled={isPending}
    >
      <SelectTrigger
        className={cn(
          'w-fit min-w-[138px] shadow-none bg-[#E6E9EE] min-h-[47px] cursor-pointer',
          className
        )}
      >
        {!isPending ? (
          children
        ) : (
          <LoaderCircleIcon className='animate-spin mx-auto size-[32px] md:size-[20px]' />
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Provincias:</SelectLabel>

          {STATES_ENTRIES.map(([code, name]) => (
            <SelectItem key={code} value={code}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default StateSelector;
