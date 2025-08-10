'use client';

import { createContext, use } from 'react';

import { IStateCode } from '@/constants/states';

type SettingsContextValue = {
  state: IStateCode;
};

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined
);

type Props = Readonly<{
  children: React.ReactNode;
  state: IStateCode;
}>;

export function SettingsProvider({ children, state }: Props) {
  return (
    <SettingsContext.Provider value={{ state }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = use(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used inside SettingsProvider');
  }

  return context;
};
