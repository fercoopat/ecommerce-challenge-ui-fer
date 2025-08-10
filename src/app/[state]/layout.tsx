import { redirect } from 'next/navigation';

import { APP_PATHS } from '@/constants/app.paths';
import { IStateCode, STATES_CODES } from '@/constants/states';
import { SettingsProvider } from '@/contexts/settings.context';

type Props = React.PropsWithChildren<{
  params: Promise<{
    state: IStateCode;
  }>;
}>;

export default async function StateLayout({ children, params }: Props) {
  const { state } = await params;

  if (!STATES_CODES?.includes(state)) {
    return redirect(APP_PATHS.selectStatePath);
  }

  return <SettingsProvider state={state}>{children}</SettingsProvider>;
}
