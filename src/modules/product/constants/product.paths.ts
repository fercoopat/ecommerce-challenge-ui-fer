const MAIN_PATH = '/products' as const;

export const PRODUCT_PATHS = {
  productDetailsPath: (productSlug: string | undefined): string => {
    if (!productSlug) {
      return '#';
    }

    return `${MAIN_PATH}/${productSlug}`;
  },
} as const;
