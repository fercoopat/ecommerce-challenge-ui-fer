"use client";

import { MapPinIcon } from "lucide-react";

import { StateSelector } from "@/components/state-selector";
import { SelectValue } from "@/components/ui/select";
import { useSettings } from "@/contexts/settings.context";
import { cn } from "@/lib/utils";

import styles from "./header-top-bar-state-selector.module.css";

const HeaderTopBarStateSelector = () => {
  const { state } = useSettings();

  return (
    <StateSelector
      defaultValue={state}
      className={cn(
        "md:bg-background min-w-fit !border-none !bg-transparent md:min-h-[50px] xl:min-w-[138px]",
        styles["state-selector"],
      )}
    >
      <MapPinIcon className="text-primary size-[32px] md:size-[20px]" />

      <SelectValue placeholder="Seleccione la provincia" />
    </StateSelector>
  );
};
export default HeaderTopBarStateSelector;
