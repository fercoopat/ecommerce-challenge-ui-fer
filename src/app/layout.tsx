import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Botifarma - Tu Farmacia Online de Confianza",
  description:
    "Compra medicamentos, productos de farmacia, dermocosmética y cuidado personal con envío rápido. Los mejores precios y asesoramiento farmacéutico profesional.",
  keywords: [
    "farmacia online",
    "comprar medicamentos",
    "medicamentos en línea",
    "dermocosmética",
    "cuidado personal",
    "entrega rápida",
    "farmacia 24 horas",
    "productos de salud",
  ],
  authors: [{ name: "Botifarma", url: "https://www.botifarma.com" }],
  openGraph: {
    title: "Botifarma - Tu Farmacia Online de Confianza",
    description:
      "Todo para tu salud y bienestar en un solo click. Envíos rápidos y discretos.",
    url: "https://www.botifarma.com",
    siteName: "Botifarma",
    images: [
      {
        url: "https://www.botifarma.com/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Botifarma - Farmacia Online",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Botifarma - Tu Farmacia Online de Confianza",
    description: "Todo para tu salud y bienestar en un solo click",
    images: ["https://www.botifarma.com/images/twitter-card.jpg"],
  },
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
