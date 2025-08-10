export type FooterContactSectionProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};
const FooterContactSection = ({
  title,
  subtitle,
  icon,
}: FooterContactSectionProps) => {
  return (
    <div className='flex items-center gap-4'>
      {icon}

      <div className='text-[#FFFFFF]'>
        <p className='font-light text-sm opacity-[60%]'>{title}</p>

        <p className='font-bold text-[20px]'>{subtitle}</p>
      </div>
    </div>
  );
};
export default FooterContactSection;
