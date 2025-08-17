"use client";

import { CircleIcon, LoaderCircleIcon, PaletteIcon } from "lucide-react";
import { useCallback, useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useSettings } from "@/contexts/settings.context";
import { setSettingsPrimaryColor } from "@/lib/actions/settings.actions";
import { cn } from "@/lib/utils";

import styles from "./primary-color-selector.module.css";

const PRIMARY_COLORS: Record<string, string> = {
  "#264092": "Original",
  blue: "Azul",
  red: "Rojo",
  green: "Verde",
  orange: "Naranja",
  purple: "Morado",
  teal: "Turquesa",
};

type Props = {
  className?: string;
};
const PrimaryColorSelector = ({ className }: Props) => {
  const [isPending, startTransition] = useTransition();

  const { primaryColor, onChangePrimaryColor } = useSettings();

  const handleSelectColor = useCallback(
    (newColor: string) => {
      startTransition(async () => {
        await setSettingsPrimaryColor(newColor);
        onChangePrimaryColor(newColor);
      });
    },
    [onChangePrimaryColor],
  );

  return (
    <Select
      onValueChange={handleSelectColor}
      defaultValue={primaryColor}
      disabled={isPending}
    >
      <SelectTrigger
        aria-label="Primary color selector trigger"
        className={cn(
          "!w-fit cursor-pointer !border-none !bg-transparent !p-0 !shadow-none focus-visible:ring-0",
          className,
          styles["primary-color-selector"],
        )}
      >
        {!isPending ? (
          <PaletteIcon
            color={primaryColor}
            className="size-[32px] md:size-[20px]"
          />
        ) : (
          <LoaderCircleIcon
            aria-label="Loader state selector"
            className="mx-auto size-[32px] animate-spin md:size-[20px]"
          />
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {Object.entries(PRIMARY_COLORS).map(([code, name]) => (
            <SelectItem
              key={code}
              value={code}
              aria-label={`Select item from primary color selector: ${name}`}
            >
              <CircleIcon color={code} className="size-full max-w-[24px]" />

              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default PrimaryColorSelector;
