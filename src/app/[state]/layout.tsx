import type { Metadata } from "next";
import { redirect } from "next/navigation";

import MainLayoutContainer from "@/components/layout/containers/main-layout-container";
import { APP_PATHS } from "@/constants/app.paths";
import { COOKIES_SETTINGS_STATE_KEY } from "@/constants/settings-cookies-keys";
import { IStateCode, STATES, STATES_CODES } from "@/constants/states";
import { SettingsProvider } from "@/contexts/settings.context";
import { getCookieValue } from "@/lib/cookies.utils";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    state: IStateCode;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateParam } = await params;

  const formattedState = STATES[stateParam];

  return {
    title: `Farmacia Online en ${formattedState} | Productos de Salud | Botifarma`,
    description: `Compra medicamentos, cosméticos y productos de farmacia en ${formattedState}. Envíos rápidos, precios competitivos y asesoramiento profesional.`,
    keywords: [
      `farmacia online ${formattedState}`,
      `medicamentos en ${formattedState}`,
      `entrega rápida ${formattedState}`,
    ],
    openGraph: {
      type: "website",
      locale: "es_CU",
      title: `Botifarma - Farmacia Online en ${formattedState}`,
      description: `Envío de medicamentos a toda ${formattedState} | Compra segura 24/7`,
      url: `https://www.botifarma.com/${stateParam}`,
      siteName: "Botifarma",
      images: [
        {
          url: `https://www.botifarma.com/og-${stateParam}.jpg`,
          width: 1200,
          height: 630,
          alt: `Cobertura de Botifarma en ${formattedState}`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.botifarma.com/${stateParam}`,
      languages: {
        "es-CU": `https://www.botifarma.com/es/${stateParam}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

export default async function StateLayout({ children, params }: Props) {
  const { state: stateParam } = await params;

  const cookieState = await getCookieValue(COOKIES_SETTINGS_STATE_KEY);

  const state = stateParam ?? cookieState?.value;

  if (!state || !STATES_CODES?.includes(state)) {
    return redirect(APP_PATHS.selectStatePath);
  }

  return (
    <SettingsProvider state={state}>
      <MainLayoutContainer>{children}</MainLayoutContainer>
    </SettingsProvider>
  );
}
