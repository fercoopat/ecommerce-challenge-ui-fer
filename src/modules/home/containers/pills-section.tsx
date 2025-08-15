import CardTickOutlineIcon from '@/components/icons/card-tick-outline.icon';
import HouseMarkerOutlineIcon from '@/components/icons/house-marker-outline.icon';
import TruckFastOutlineIcon from '@/components/icons/truck-fast-outline.icon';
import { PillsSectionCard } from '@/modules/home/components/pills-section';

const CARDS_INFO = [
  {
    icon: CardTickOutlineIcon,
    title: 'Paga desde donde estés',
    description:
      'Paga con tarjeta de débito o crédito desde cualquier parte del mundo donde te encuentres.',
  },
  {
    icon: TruckFastOutlineIcon,
    title: 'Envío gratis desde $50 USD',
    description:
      'Con solo estar registrado, tienes envíos gratis para un grupo de productos.',
  },
  {
    icon: HouseMarkerOutlineIcon,
    title: 'Entregas en todo el país',
    description:
      'LLevamos tu pedido seguro y con garantía hasta la puerta de tu casa.',
  },
];

const PillsSection = () => {
  return (
    <>
      <section className='my-8 max-w-screen w-full absolute left-0 bg-primary'>
        <div className='relative z-10 text-primary-foreground max-w-[90dvw] w-full mx-auto py-10 grid gap-4 lg:gap-8 2xl:max-w-[1447px] 2xl:grid-cols-2'>
          <p className='font-bold text-[34px] text-center leading-snug lg:max-w-[40%] mx-auto 2xl:max-w-[475px] 2xl:text-start 2xl:text-[42px] 2xl:pt-10'>
            Lo que necesitas, cuando lo necesitas
          </p>

          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {CARDS_INFO.map((info, index) => (
              <PillsSectionCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      <div className='h-[1000px]'></div>
    </>
  );
};
export default PillsSection;
