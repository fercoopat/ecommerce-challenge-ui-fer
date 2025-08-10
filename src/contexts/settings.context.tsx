'use client';

import { createContext, useContext } from 'react';

type SettingsContextValue = {
  state: string;
};

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined
);

type Props = Readonly<{
  children: React.ReactNode;
  state: string;
}>;

export function SettingsProvider({ children, state }: Props) {
  return (
    <SettingsContext.Provider value={{ state }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used inside SettingsProvider');
  }

  return context;
};
