import { IStateCode } from '@/constants/states';

export const APP_PATHS = {
  selectStatePath: '/select-state',

  setStateCodePath: (stateCode: IStateCode | undefined): string => {
    if (!stateCode) {
      return APP_PATHS.selectStatePath;
    }

    return `/${stateCode}`;
  },
} as const;
