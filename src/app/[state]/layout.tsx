import { redirect } from 'next/navigation';

import MainLayoutContainer from '@/components/layout/containers/main-layout-container';
import { APP_PATHS } from '@/constants/app.paths';
import { COOKIES_SETTINGS_STATE_KEY } from '@/constants/settings-cookies-keys';
import { IStateCode, STATES_CODES } from '@/constants/states';
import { SettingsProvider } from '@/contexts/settings.context';
import { getCookieValue } from '@/lib/cookies.utils';

type Props = React.PropsWithChildren<{
  params: Promise<{
    state: IStateCode;
  }>;
}>;

export default async function StateLayout({ children, params }: Props) {
  const { state: stateParam } = await params;

  const cookieState = await getCookieValue(COOKIES_SETTINGS_STATE_KEY);

  const state = stateParam ?? cookieState?.value;

  if (!state || !STATES_CODES?.includes(state)) {
    return redirect(APP_PATHS.selectStatePath);
  }

  return (
    <SettingsProvider state={state}>
      <MainLayoutContainer>{children}</MainLayoutContainer>
    </SettingsProvider>
  );
}
