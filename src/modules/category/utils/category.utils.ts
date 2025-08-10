import { CATEGORY_ICONS_MAP } from '@/modules/category/components/category-icon';
import VitaminsIcon from '@/modules/category/components/category-icon/vitamins.icon';

export const getCategoryIcon = (
  icon: string | undefined
): typeof VitaminsIcon => {
  return !icon ? VitaminsIcon : CATEGORY_ICONS_MAP?.[icon] ?? VitaminsIcon;
};
