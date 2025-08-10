import { IStateCode } from '@/constants/states';

type Props = {
  params: Promise<{
    state: IStateCode;
  }>;
};

export default async function StatePage({ params }: Props) {
  const { state } = await params;

  return (
    <>
      <h1>{state}</h1>
    </>
  );
}
