"use client";

import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import { memo, useMemo } from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
} & LinkProps;

const RelativeLink = ({ children, href, ...props }: Props) => {
  const params = useParams();

  const basePath = useMemo(() => {
    if (!params) return "";
    return "/" + Object.values(params).join("/");
  }, [params]);

  const path = useMemo(() => {
    return href.startsWith("/") ? `${basePath}${href}` : `${basePath}/${href}`;
  }, [basePath, href]);

  return (
    <Link href={path} {...props}>
      {children}
    </Link>
  );
};

export default memo(RelativeLink);
