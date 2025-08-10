import { cookies } from 'next/headers';

export async function getCookieValue(cookieKey: string) {
  const cookieStore = await cookies();

  const value = cookieStore.get(cookieKey);

  return value;
}
