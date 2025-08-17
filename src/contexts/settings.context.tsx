"use client";

import { createContext, use, useCallback, useEffect, useState } from "react";

import { IStateCode } from "@/constants/states";

type SettingsContextValue = {
  state: IStateCode;
  primaryColor: string;
  onChangePrimaryColor: (newColor: string) => void;
};

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined,
);

type Props = Readonly<{
  children: React.ReactNode;
  state: IStateCode;
  primaryColor?: string;
}>;

export function SettingsProvider({
  children,
  state,
  primaryColor: initialPrimaryColor = "#264092",
}: Props) {
  const [primaryColor, setPrimaryColor] = useState(initialPrimaryColor);

  const onChangePrimaryColor = useCallback(
    (newColor: string) => {
      setPrimaryColor(newColor);
    },
    [setPrimaryColor],
  );

  useEffect(() => {
    if (typeof window === "undefined" && typeof document === "undefined") {
      return;
    }

    document.documentElement.style.setProperty("--primary", primaryColor);
  }, [primaryColor]);
  return (
    <SettingsContext.Provider
      value={{ state, primaryColor, onChangePrimaryColor }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = use(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }

  return context;
};
