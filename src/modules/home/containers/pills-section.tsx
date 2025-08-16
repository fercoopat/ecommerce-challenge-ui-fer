import CardTickOutlineIcon from "@/components/icons/card-tick-outline.icon";
import HouseMarkerOutlineIcon from "@/components/icons/house-marker-outline.icon";
import TruckFastOutlineIcon from "@/components/icons/truck-fast-outline.icon";
import {
  PillsSectionCard,
  PillsSectionWrapper,
} from "@/modules/home/components/pills-section";

const CARDS_INFO = [
  {
    icon: CardTickOutlineIcon,
    title: "Paga desde donde estés",
    description:
      "Paga con tarjeta de débito o crédito desde cualquier parte del mundo donde te encuentres.",
  },
  {
    icon: TruckFastOutlineIcon,
    title: "Envío gratis desde $50 USD",
    description:
      "Con solo estar registrado, tienes envíos gratis para un grupo de productos.",
  },
  {
    icon: HouseMarkerOutlineIcon,
    title: "Entregas en todo el país",
    description:
      "LLevamos tu pedido seguro y con garantía hasta la puerta de tu casa.",
  },
];

const PillsSection = () => {
  return (
    <PillsSectionWrapper>
      <div className="text-primary-foreground relative z-10 mx-auto grid w-full max-w-[90dvw] gap-10 py-10 lg:gap-8 2xl:max-w-[1447px] 2xl:grid-cols-2">
        <p className="mx-auto text-center text-[34px] leading-snug font-bold lg:max-w-[40%] 2xl:max-w-[475px] 2xl:pt-10 2xl:text-start 2xl:text-[42px]">
          Lo que necesitas, cuando lo necesitas
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CARDS_INFO.map((info, index) => (
            <PillsSectionCard key={index} {...info} />
          ))}
        </div>
      </div>
    </PillsSectionWrapper>
  );
};
export default PillsSection;
