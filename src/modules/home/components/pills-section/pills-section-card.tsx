import CardTickOutlineIcon from '@/components/icons/card-tick-outline.icon';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  icon: typeof CardTickOutlineIcon;
  title: string;
  description: string;
};
const PillsSectionCard = ({ description, icon: Icon, title }: Props) => {
  return (
    <Card className='bg-white rounded-[20px] p-0 shadow-none border-none'>
      <CardContent className='space-y-4 p-8 min-h-[235px] 2xl:max-w-[276px] 2xl:max-h-[251px] 2xl:p-4'>
        <span className='size-fit p-[14px] bg-secondary rounded-full flex flex-col items-center justify-center'>
          <Icon className='text-secondary-foreground size-[44px] 2xl:size-[40px]' />
        </span>

        <section className='grid gap-2'>
          <p className='text-primary font-bold text-[20px] leading-tight'>
            {title}
          </p>

          <p className='text-primary-dark font-medium text-base leading-snug 2xl:text-[14px]'>
            {description}
          </p>
        </section>
      </CardContent>
    </Card>
  );
};
export default PillsSectionCard;
