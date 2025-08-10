import { MailIcon, PhoneCallIcon } from 'lucide-react';

import { PageWidthContainer } from '@/components/layout/containers';
import FooterContactSection, {
  FooterContactSectionProps,
} from '@/components/layout/footer/footer-contact-section';
import FooterSubscribeForm from '@/components/layout/footer/footer-subscribe-form';

const FOOTER_CONTACTS_SECTIONS: FooterContactSectionProps[] = [
  {
    title: 'Lunes a viernes: 08 a. m. a 9 p. m.',
    subtitle: '0 800 300-353',
    icon: <PhoneCallIcon className='text-secondary size-[28px]' />,
  },
  {
    title: '¿Necesitas ayuda con tu pedido?',
    subtitle: 'info@example.com',
    icon: <MailIcon className='text-secondary size-[28px]' />,
  },
];

const Footer = () => {
  return (
    <footer className='bg-primary w-full min-h-[337px] text-white'>
      <PageWidthContainer className='flex flex-col items-start gap-10 py-8 h-full md:gap-20'>
        <section className='flex flex-col gap-6 md:flex-row md:justify-between md:items-center w-full'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-xl md:max-w-[347px]'>
              Subscríbete aquí para conocer más de nuestras ofertas
            </p>

            <p className='font-light text-sm md:max-w-[423px]'>
              Regístrese ahora para recibir las últimas actualizaciones sobre
              promociones y cupones. ¡No te preocupes, no enviamos spam!
            </p>
          </div>

          <FooterSubscribeForm />
        </section>

        <section className='flex flex-col gap-2 items-start md:flex-row md:items-center md:gap-6'>
          {FOOTER_CONTACTS_SECTIONS?.map((section, index) => (
            <FooterContactSection key={index} {...section} />
          ))}
        </section>
      </PageWidthContainer>
    </footer>
  );
};
export default Footer;
