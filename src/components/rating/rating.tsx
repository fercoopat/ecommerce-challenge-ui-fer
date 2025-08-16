"use client";

import { LucideProps, StarIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

const ratingVariants = {
  default: {
    full: "fill-current text-foreground",
    empty: "fill-transparent text-muted-foreground",
  },

  destructive: {
    full: "fill-current text-red-500",
    empty: "fill-transparent text-red-200",
  },

  yellow: {
    full: "fill-current text-yellow-400",
    empty: "fill-transparent stroke-[#a09799]",
  },
};

const DEFAULT_PRECISION = 0.5;
const DEFAULT_MAX_STARS = 5;
const DEFAULT_STAR_SIZE = 20;
const DEFAULT_ICON = <StarIcon className="px-0.5" />;

const checkPrecision = (precision: number) => {
  if (precision <= 0 || precision > 1) {
    console.error("Precision must be greater than 0 and less than 1");
    return false;
  }
  return true;
};

interface RatingItemProps extends React.HTMLAttributes<HTMLLabelElement> {
  variant?: keyof typeof ratingVariants;
  size: number;
  value: number;
  hoveredValue: number | null;
  point: number;
  name: string;
  readOnly?: boolean;
  disabled?: boolean;
  precision: number;
  Icon: React.ReactElement<LucideProps>;
  onMouseLeave: React.MouseEventHandler<HTMLLabelElement>;
  onValueHover: (value: number) => void;
  onValueChange?: (value: number) => void;
}

const RatingItem = ({
  size,
  variant = "default",
  value,
  point,
  hoveredValue,
  name,
  readOnly = false,
  disabled = false,
  precision,
  Icon,
  onMouseLeave,
  onValueChange,
  onValueHover,
}: RatingItemProps) => {
  const Comp = readOnly ? "span" : "label";
  const ref = React.useRef<HTMLLabelElement>(null);
  const isFirstRender = React.useRef(true);
  const id = React.useId();
  const ratingIconId = `rating-icon-${id}`;
  const isInteractive = !readOnly && !disabled;
  const partialPoint = point % 1;
  const isPartialPoint = partialPoint !== 0;
  const shouldShowFilled = (hoveredValue || value) >= point;
  const partialPointWidth =
    isPartialPoint && shouldShowFilled ? `${partialPoint * 100}%` : undefined;

  const icons = React.useMemo(() => {
    const emptyIcon = React.cloneElement(Icon, {
      size,
      className: cn(ratingVariants[variant].empty, Icon.props.className),
      "aria-hidden": "true",
    });
    const fullIcon = React.cloneElement(Icon, {
      size,
      className: cn(ratingVariants[variant].full, Icon.props.className),
      "aria-hidden": "true",
    });
    return { emptyIcon, fullIcon };
  }, [Icon, size, variant]);

  const getRatingPoint = React.useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      const { left, width } = event.currentTarget.getBoundingClientRect();
      if (width === 0 || !checkPrecision(precision)) return 0;
      const x = event.clientX - left;
      const fillRatio = x / width;
      const base = Math.ceil(point) - 1;
      return base + Math.ceil(fillRatio / precision) * precision;
    },
    [precision, point],
  );

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      if (!isInteractive) return;
      onValueHover(getRatingPoint(event));
    },
    [isInteractive, onValueHover, getRatingPoint],
  );

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLLabelElement>) => {
      if (!isInteractive) return;

      const newPoint = getRatingPoint(event);

      onValueHover(0);

      onValueChange?.(newPoint === value ? 0 : newPoint);
    },
    [isInteractive, getRatingPoint, value, onValueHover, onValueChange],
  );

  React.useEffect(() => {
    if (!ref.current) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (value === point) {
      ref.current.focus();
    } else if (value === 0 && ref.current.parentElement?.parentElement) {
      ref.current.parentElement?.parentElement?.focus();
    }
  }, [value, point, ref]);

  return (
    <>
      <Comp
        ref={ref}
        htmlFor={!readOnly ? `${ratingIconId}-${point}` : undefined}
        aria-label={`${point} Stars`}
        role={!readOnly ? "radio" : undefined} // <-- agregado
        aria-checked={!readOnly ? value === point : undefined} // <-- agregado
        onClick={!readOnly ? handleClick : undefined}
        onMouseMove={!readOnly ? handleMouseMove : undefined}
        onMouseLeave={!readOnly ? onMouseLeave : undefined}
        className={cn(
          "[&_svg]:pointer-events-none",
          isPartialPoint &&
            "pointer-events-none absolute top-0 left-0 overflow-hidden",
          isInteractive && "cursor-pointer",
        )}
        style={{ width: partialPointWidth }}
      >
        {!isPartialPoint && !shouldShowFilled && icons.emptyIcon}
        {shouldShowFilled && icons.fullIcon}
      </Comp>

      {!readOnly && (
        <input
          type="radio"
          id={`${ratingIconId}-${point}`}
          name={name}
          value={point}
          className="sr-only"
          tabIndex={-1}
        />
      )}
    </>
  );
};

interface RatingProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  value: number;
  name?: string;
  max?: number;
  size?: number;
  Icon?: React.ReactElement<LucideProps>;
  variant?: keyof typeof ratingVariants;
  readOnly?: boolean;
  disabled?: boolean;
  precision?: number;
  onValueChange?: (value: number) => void;
  onValueHover?: (value: number) => void;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value,
      name,
      max = DEFAULT_MAX_STARS,
      size = DEFAULT_STAR_SIZE,
      Icon = DEFAULT_ICON,
      variant = "default",
      className,
      readOnly = false,
      disabled = false,
      precision = DEFAULT_PRECISION,
      onValueChange,
      onValueHover,
      ...props
    },
    ref,
  ) => {
    const id = React.useId();
    const ratingName = name ?? `rating-${id}`;
    const [hoveredValue, setHoveredValue] = React.useState<number>(0);
    const isInteractive = !readOnly && !disabled;

    const handleValueHover = React.useCallback<(value: number) => void>(
      (point) => {
        setHoveredValue(point);
        onValueHover?.(point);
      },
      [onValueHover],
    );

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (!isInteractive) return;

        switch (event.key) {
          case "ArrowRight":

          case "ArrowUp":
            event.preventDefault();

            if (value + precision > max) {
              onValueChange?.(0);
            } else {
              onValueChange?.(value + precision);
            }
            break;

          case "ArrowLeft":

          case "ArrowDown":
            event.preventDefault();

            if (value - precision < 0) {
              onValueChange?.(max);
            } else {
              onValueChange?.(value - precision);
            }
            break;

          default:
            break;
        }
      },
      [isInteractive, value, max, precision, onValueChange],
    );

    const stars = React.useMemo(() => {
      if (!checkPrecision(precision)) return [];
      return Array.from({ length: max }, (_, index) => ({
        key: index,
        points: Array.from({ length: Math.floor(1 / precision) }).map(
          (__, i) => index + precision * (i + 1),
        ),
      }));
    }, [max, precision]);

    return (
      <div
        ref={ref}
        role={!readOnly ? "radiogroup" : "meter"} // <-- cambiado img → meter
        onKeyDown={!readOnly ? handleKeyDown : undefined}
        tabIndex={!readOnly && value === 0 ? 0 : undefined}
        className={cn("flex", className)}
        aria-label={readOnly ? `${value} stars` : "Rating"}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={`${value} of ${max} stars`}
        {...props}
      >
        {stars.map(({ key, points }) => (
          <span
            key={key}
            className={cn(
              "relative",
              isInteractive && "transition-transform hover:scale-110",
              disabled && "cursor-not-allowed opacity-50",
            )}
            aria-disabled={disabled}
          >
            {points.map((point) => (
              <RatingItem
                key={point}
                name={ratingName}
                disabled={disabled}
                hoveredValue={hoveredValue}
                point={point}
                precision={precision}
                readOnly={readOnly}
                size={size}
                value={value}
                variant={variant}
                Icon={Icon}
                onMouseLeave={() => setHoveredValue(0)}
                onValueHover={handleValueHover}
                onValueChange={onValueChange}
              />
            ))}
          </span>
        ))}
      </div>
    );
  },
);
Rating.displayName = "Rating";

export { Rating };
