import { IStateCode } from '@/constants/states';

type Props = {
  params: Promise<{
    slug: string;
    state: IStateCode;
  }>;
};

export default async function CategoriesDetailsPage({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
