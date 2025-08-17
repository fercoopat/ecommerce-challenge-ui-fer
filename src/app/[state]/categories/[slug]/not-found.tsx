import type { Metadata } from "next";

import { RelativeLink } from "@/components/relative-link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Categoría no encontrada | Botifarma",
  description: "El categoría que buscas no existe o fue eliminada.",
};

export default async function CategoryNotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 py-20">
      <h2 className="text-2xl font-bold">Categoría no encontrada</h2>
      <p className="text-muted-foreground">
        Lo sentimos, el categoría que buscas no existe o fue eliminada.
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
