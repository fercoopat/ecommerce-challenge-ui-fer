import type { Metadata } from "next";

import { BASE_URL } from "@/constants/envs";
import type { IStateCode } from "@/constants/states";
import CategoryDetailsContainer from "@/modules/category/containers/category-details-container";
import { CategoryService } from "@/modules/category/services/category.service";

type Props = {
  params: Promise<{
    slug: string;
    state: IStateCode;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, state } = await params;

  try {
    const { data } = await CategoryService.getOne(slug);

    const title = data?.name
      ? `${data.name} | Categorías`
      : "Categoría no encontrada";

    const description = data?.description ?? `Detalles de la categoría ${slug}`;

    const canonicalUrl = `${BASE_URL}/${state}/categories/${slug}`;

    return {
      title,
      description,
      openGraph: {
        title: data?.name ?? "Categoría",
        description,
        type: "website",
        url: canonicalUrl, // 👈 también en openGraph.url
      },
      alternates: {
        canonical: canonicalUrl, // 👈 ahora es absoluta
      },
    };
  } catch (e) {
    console.error(e);

    return {
      title: "Error | Categorías",
      description: "No se pudo cargar la categoría",
    };
  }
}

export default async function CategoriesDetailsPage({ params }: Props) {
  const { slug } = await params;

  const { data: category } = await CategoryService.getOne(slug);

  return <CategoryDetailsContainer category={category} />;
}
