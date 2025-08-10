import AnalgesicsAndAntiInflammatoriesIcon from '@/modules/category/components/category-icon/analgesics-and-anti-inflammatories.icon';
import AntiInfectiveIcon from '@/modules/category/components/category-icon/anti-infective.icon';
import AntiallergicIcon from '@/modules/category/components/category-icon/antiallergic.icon';
import AntidiarrhealsAndLaxativesIcon from '@/modules/category/components/category-icon/antidiarrheals-and-laxatives.icon';
import AntipyreticsIcon from '@/modules/category/components/category-icon/antipyretics.icon';
import AntiulcerAndAntacidsIcon from '@/modules/category/components/category-icon/antiulcer-and-antacids.icon';
import MucolyticsAndAntitussivesIcon from '@/modules/category/components/category-icon/mucolytics-and-antitussives.icon';
import VitaminsIcon from '@/modules/category/components/category-icon/vitamins.icon';

export type IconPickerOptions = Record<string, typeof VitaminsIcon>;

export const CATEGORY_ICONS_MAP: IconPickerOptions = {
  AnalgesicsAndAntiInflammatoriesIcon,
  AntiallergicIcon,
  AntidiarrhealsAndLaxativesIcon,
  AntiInfectiveIcon,
  AntipyreticsIcon,
  AntiulcerAndAntacidsIcon,
  MucolyticsAndAntitussivesIcon,
  VitaminsIcon,
};
