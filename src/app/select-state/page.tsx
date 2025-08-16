import { MapPinIcon } from "lucide-react";
import { redirect } from "next/navigation";

import { StateSelector } from "@/components/state-selector";
import { Card, CardContent } from "@/components/ui/card";
import { SelectValue } from "@/components/ui/select";
import { APP_PATHS } from "@/constants/app.paths";
import { COOKIES_SETTINGS_STATE_KEY } from "@/constants/settings-cookies-keys";
import { IStateCode } from "@/constants/states";
import { getCookieValue } from "@/lib/cookies.utils";

export default async function SelectStatePage() {
  const cookieState = await getCookieValue(COOKIES_SETTINGS_STATE_KEY);

  if (!!cookieState?.value) {
    return redirect(
      APP_PATHS.setStateCodePath(cookieState.value as IStateCode),
    );
  }

  return (
    <main className="mt-[10%] flex w-full flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardContent className="space-y-4">
          <h2 className="text-center text-xl font-bold">¡Bienvenido!</h2>

          <p>
            Antes de continuar por favor seleccione la provincia donde reside o
            desea enviar los productos
          </p>

          <StateSelector className="mx-auto">
            <MapPinIcon aria-hidden="true" className="text-primary" />

            <SelectValue
              aria-label="State selector value"
              placeholder="Seleccione la provincia"
            />
          </StateSelector>
        </CardContent>
      </Card>
    </main>
  );
}
