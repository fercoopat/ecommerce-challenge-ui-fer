import type { Metadata } from "next";

import { PageWidthContainer } from "@/components/layout/containers";

export const metadata: Metadata = {
  title: "Selecciona tu provincia | Botifarma - Farmacia Online",
  description:
    "Elige tu provincia para ver los productos disponibles en tu zona y disfrutar de envíos rápidos en tu farmacia online de confianza.",
  keywords: [
    "farmacia por provincia",
    "cobertura farmacéutica",
    "envíos por provincia",
    "disponibilidad por región",
    "farmacia en tu zona",
    "seleccionar ubicación",
  ],
  openGraph: {
    title: "Selecciona tu provincia | Botifarma",
    description:
      "Descubre los productos disponibles en tu zona con entrega rápida en tu farmacia online",
    url: "https://www.botifarma.com/seleccionar-provincia",
  },
  alternates: {
    canonical: "https://www.botifarma.com/seleccionar-provincia",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function SelectStateLayout({ children }: Props) {
  return <PageWidthContainer>{children}</PageWidthContainer>;
}
