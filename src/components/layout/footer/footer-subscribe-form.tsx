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
      <section className='flex items-center size-full max-h-[48px] bg-background rounded-[30px] pl-6'>
        <MailIcon className='text-[#363636]/50 h-[48px] -mr-2' />

        <Input
          type='email'
          placeholder='Correo electrónico'
          className='rounded-r-none shadow-none border-none h-full text-[#363636] text-[14px] font-light min-h-[48px] mb-1 focus-visible:ring-0'
          value={email}
          onChange={handleChange}
        />

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
