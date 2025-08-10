'use client';

import { MailIcon } from 'lucide-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};
const FooterSubscribeForm = ({ className }: Props) => {
  const [email, setEmail] = useState<string>('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e?.target?.value?.trim());
    },
    [setEmail]
  );

  const handleSubscribe = useCallback(() => {
    if (!email) {
      return;
    }
    if (window !== undefined && window !== null) {
      window.alert(`El usuario con el correo: ${email} se ha suscrito.`);
      setEmail('');
    }
  }, [email]);

  return (
    <div className={cn('max-w-[388px] space-y-2', className)}>
      <section className='flex items-center size-full max-h-[48px] relative'>
        <Input
          type='email'
          placeholder='Correo electrónico'
          className='bg-background rounded-l-[30px] rounded-r-none shadow-none h-full text-[#363636] pl-10 text-[14px] font-light min-h-[48px]'
          value={email}
          onChange={handleChange}
        />

        <MailIcon className='absolute left-[4%] top-[30%] bottom-0 text-[#363636]/50 size-[20px]' />

        <Button
          variant='secondary'
          className='rounded-r-[30px] rounded-l-none shadow-none font-normal text-[16px] h-full min-h-[48px]'
          onClick={handleSubscribe}
        >
          Enviar
        </Button>
      </section>

      <section className='text-[14px] font-normal'>
        <span>Al suscribirte aceptas nuestros</span>{' '}
        <Link href='#' className='text-secondary underline'>
          Términos y condiciones y Política de privacidad y cookies.
        </Link>
      </section>
    </div>
  );
};
export default FooterSubscribeForm;
