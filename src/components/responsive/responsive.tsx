'use client';

import { useMediaQuery } from '@/hooks/use-media-query';

type Props = {
  children: React.ReactNode;
  query?: string;
};

const Mobile = ({ children, query = '(max-width: 767px)' }: Props) => {
  const isMobile = useMediaQuery(query);

  return isMobile ? <>{children}</> : null;
};

const Desktop = ({ children, query = '(min-width: 768px)' }: Props) => {
  const isDesktop = useMediaQuery(query);

  return isDesktop ? <>{children}</> : null;
};

const Responsive = {
  Mobile,
  Desktop,
};

export default Responsive;
