'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { APP_PATHS } from '@/constants/app.paths';
import { IStateCode, STATES_ENTRIES } from '@/constants/states';
import { MapPinIcon } from 'lucide-react';

const StateSelector = () => {
  const { push } = useRouter();

  const handleSelectState = useCallback(
    (stateCode: IStateCode) => {
      push(APP_PATHS.setStateCodePath(stateCode));
    },
    [push]
  );

  return (
    <Select onValueChange={handleSelectState}>
      <SelectTrigger className='w-fit min-w-[138px]'>
        <MapPinIcon />
        <SelectValue placeholder='Seleccione la provincia' />
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
