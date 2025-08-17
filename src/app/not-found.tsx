import Link from "next/link";

import { APP_PATHS } from "@/constants/app.paths";
import { COOKIES_SETTINGS_STATE_KEY } from "@/constants/settings-cookies-keys";
import type { IStateCode } from "@/constants/states";
import { getCookieValue } from "@/lib/cookies.utils";

export default async function NotFound() {
  let path: string = APP_PATHS.selectStatePath;

  const cookieState = await getCookieValue(COOKIES_SETTINGS_STATE_KEY);

  if (cookieState?.value) {
    path = APP_PATHS.setStateCodePath(cookieState.value as IStateCode);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="mb-4 text-5xl font-bold">404</h1>

      <p className="mb-6 text-lg">
        Lo sentimos, la página que buscas no existe.
      </p>

      <Link
        href={path}
        className="bg-primary hover:bg-primary/90 rounded px-6 py-3 text-white transition"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
