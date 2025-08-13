import { IStateCode } from '@/constants/states';
import HeroSection from '@/modules/home/containers/hero-section';

type Props = {
  params: Promise<{
    state: IStateCode;
  }>;
};

export default async function StatePage({ params }: Props) {
  // const { state } = await params;

  return (
    <>
      <HeroSection />
    </>
  );
}
