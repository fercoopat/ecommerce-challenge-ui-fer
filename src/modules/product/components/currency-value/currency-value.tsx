'use client';

import { cn } from '@/lib/utils';
import { useMemo } from 'react';

type Props = {
  value: number | string;
  currency?: string;
  supClassName?: string;
} & React.HtmlHTMLAttributes<HTMLSpanElement>;
const CurrencyValue = ({
  value,
  currency = 'USD',
  supClassName,
  ...props
}: Props) => {
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat('es', {
        style: 'currency',
        currency,
        currencyDisplay: 'code',
      }),
    [currency]
  );

  const currencyValue = useMemo(
    (): string => formatter.format(Number(value)).replace(/USD/, '').trim(),
    [formatter, value]
  );

  const isPercent = useMemo((): boolean => currency === '%', [currency]);

  return (
    <span {...props} className={cn('text-[16px]', props?.className)}>
      {!isPercent && currency === 'USD' ? '$' : currency}

      {currencyValue.substring(0, currencyValue.indexOf(','))}

      {isPercent ? (
        '%'
      ) : (
        <sup className={supClassName}>
          {currencyValue.substring(currencyValue.lastIndexOf(',') + 1)}
        </sup>
      )}
    </span>
  );
};
export default CurrencyValue;
