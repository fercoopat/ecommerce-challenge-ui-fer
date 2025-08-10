import { redirect } from 'next/navigation';

import { APP_PATHS } from '@/constants/app.paths';

export default function HomePage() {
  return redirect(APP_PATHS.selectStatePath);
}
