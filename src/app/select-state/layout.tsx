import { PageWidthContainer } from '@/components/layout/containers';

type Props = {
  children: React.ReactNode;
};

export default function SelectStateLayout({ children }: Props) {
  return <PageWidthContainer>{children}</PageWidthContainer>;
}
