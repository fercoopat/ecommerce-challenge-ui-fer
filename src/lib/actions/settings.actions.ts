'use server';

import { cookies } from 'next/headers';

import { COOKIES_SETTINGS_STATE_KEY } from '@/constants/settings-cookies-keys';
import { IStateCode } from '@/constants/states';

export async function setSettingsState(stateCode: IStateCode) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIES_SETTINGS_STATE_KEY, stateCode, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: false,
    sameSite: 'lax',
  });
}
