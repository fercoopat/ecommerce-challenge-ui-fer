import { redirect } from 'next/navigation';

import { APP_PATHS } from '@/constants/app.paths';
import { COOKIES_SETTINGS_STATE_KEY } from '@/constants/settings-cookies-keys';
import { IStateCode } from '@/constants/states';
import { getCookieValue } from '@/lib/cookies.utils';

export default async function HomePage() {
  const cookieState = await getCookieValue(COOKIES_SETTINGS_STATE_KEY);

  if (!cookieState?.value) {
    return redirect(APP_PATHS.selectStatePath);
  }

  return redirect(APP_PATHS.setStateCodePath(cookieState.value as IStateCode));
}
