const MAIN_PATH = "categories" as const;

export const CATEGORY_PATHS = {
  categoryDetailsPath: (categorySlug: string | undefined): string => {
    if (!categorySlug) {
      return "#";
    }

    return `${MAIN_PATH}/${categorySlug}`;
  },
} as const;
