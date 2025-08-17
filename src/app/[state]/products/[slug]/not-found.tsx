import type { Metadata } from "next";

import { RelativeLink } from "@/components/relative-link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Producto no encontrado | Botifarma",
  description: "El producto que buscas no existe o fue eliminado.",
};

export default async function ProductNotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 py-20">
      <h2 className="text-2xl font-bold">Producto no encontrado</h2>
      <p className="text-muted-foreground">
        Lo sentimos, el producto que buscas no existe o fue eliminado.
      </p>

      <RelativeLink
        href="/"
        className="text-primary hover:text-primary/80 w-fit no-underline"
        paramsDepth={0}
      >
        <Button variant={"link"}>Volver al inicio</Button>
      </RelativeLink>
    </main>
  );
}
