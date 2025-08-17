import type { Metadata } from "next";

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
  const { slug } = await params;

  try {
    const { data } = await CategoryService.getOne(slug);

    return {
      title: data?.name
        ? `${data.name} | Categorías`
        : "Categoría no encontrada",
      description: data?.description ?? `Detalles de la categoría ${slug}`,
      openGraph: {
        title: data?.name ?? "Categoría",
        description: data?.description ?? `Detalles de la categoría ${slug}`,
        type: "website",
      },
      alternates: {
        canonical: `/categories/${slug}`,
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
