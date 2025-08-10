import { PageWidthContainer } from '@/components/layout/containers';
import FooterSubscribeForm from '@/components/layout/footer/footer-subscribe-form';

const Footer = () => {
  return (
    <footer className='bg-primary w-full min-h-[337px] text-white'>
      <PageWidthContainer className='grid gap-2 mt-8'>
        <section className='flex flex-col gap-6 md:flex-row md:justify-between md:items-center'>
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

        <section className=''></section>
      </PageWidthContainer>
    </footer>
  );
};
export default Footer;
