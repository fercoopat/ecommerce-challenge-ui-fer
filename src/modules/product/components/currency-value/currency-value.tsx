import { cn } from '@/lib/utils';

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
  const formatter = new Intl.NumberFormat('es', {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
  });

  const currencyValue = formatter
    .format(Number(value))
    .replace(/USD/, '')
    .trim();

  const isPercent = currency === '%';

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
