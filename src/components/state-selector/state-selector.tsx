"use client";

import { useRouter } from "next/navigation";
import { useCallback, useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { APP_PATHS } from "@/constants/app.paths";
import { IStateCode, STATES_ENTRIES } from "@/constants/states";
import { setSettingsState } from "@/lib/actions/settings.actions";
import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";

type Props = {
  children: React.ReactNode;
  className?: string;
  defaultValue?: IStateCode | "";
};
const StateSelector = ({ children, className, defaultValue = "" }: Props) => {
  const { push } = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSelectState = useCallback(
    (stateCode: IStateCode) => {
      startTransition(async () => {
        await setSettingsState(stateCode);
        push(APP_PATHS.setStateCodePath(stateCode));
      });
    },
    [push],
  );

  return (
    <Select
      onValueChange={handleSelectState}
      defaultValue={defaultValue}
      disabled={isPending}
    >
      <SelectTrigger
        aria-label="State selector trigger"
        className={cn(
          "min-h-[47px] w-fit min-w-[138px] cursor-pointer bg-[#E6E9EE] shadow-none",
          className,
        )}
      >
        {!isPending ? (
          children
        ) : (
          <LoaderCircleIcon
            aria-label="Loader state selector"
            className="mx-auto size-[32px] animate-spin md:size-[20px]"
          />
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Provincias:</SelectLabel>

          {STATES_ENTRIES.map(([code, name]) => (
            <SelectItem
              key={code}
              value={code}
              aria-label={`Select item from state selector: ${name}`}
            >
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default StateSelector;
