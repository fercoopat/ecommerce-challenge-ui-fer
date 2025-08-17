"use client";

import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import { memo, useMemo } from "react";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  paramsDepth?: number;
} & LinkProps;

const RelativeLink = ({ children, href, paramsDepth, ...props }: Props) => {
  const params = useParams();

  const basePath = useMemo(() => {
    if (!params) return "";
    const values = Object.values(params);
    const selectedValues =
      paramsDepth !== undefined ? values.slice(0, paramsDepth + 1) : values;
    return "/" + selectedValues.join("/");
  }, [params, paramsDepth]);

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
