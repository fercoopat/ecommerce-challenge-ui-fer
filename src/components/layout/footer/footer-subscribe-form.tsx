"use client";

import { MailIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
const FooterSubscribeForm = ({ className }: Props) => {
  const [email, setEmail] = useState<string>("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e?.target?.value?.trim());
    },
    [setEmail],
  );

  const handleSubscribe = useCallback(() => {
    if (!email) {
      return;
    }
    if (window !== undefined && window !== null) {
      window.alert(`El usuario con el correo: ${email} se ha suscrito.`);
      setEmail("");
    }
  }, [email]);

  return (
    <div className={cn("max-w-[388px] space-y-2", className)}>
      <section className="bg-background flex size-full max-h-[48px] items-center rounded-[30px] pl-6">
        <MailIcon className="-mr-2 h-[48px] text-[#363636]/50" />

        <Input
          type="email"
          placeholder="Correo electrónico"
          className="mb-1 h-full min-h-[48px] rounded-r-none border-none !bg-transparent text-[14px] font-light text-[#363636] shadow-none focus-visible:ring-0"
          value={email}
          onChange={handleChange}
        />

        <Button
          aria-label="Send subscribe form data"
          variant="secondary"
          className="h-full min-h-[48px] rounded-l-none rounded-r-[30px] text-[16px] shadow-none"
          onClick={handleSubscribe}
        >
          Enviar
        </Button>
      </section>

      <section className="text-[14px]">
        <span>Al suscribirte aceptas nuestros</span>{" "}
        <Link href="#" className="text-secondary underline">
          Términos y condiciones y Política de privacidad y cookies.
        </Link>
      </section>
    </div>
  );
};
export default FooterSubscribeForm;
