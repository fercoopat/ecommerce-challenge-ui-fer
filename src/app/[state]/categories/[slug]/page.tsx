import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BASE_URL } from "@/constants/envs";
import { STATES_VALUES, type IStateCode } from "@/constants/states";
import CategoryDetailsContainer from "@/modules/category/containers/category-details-container";
import { CategoryService } from "@/modules/category/services/category.service";

export const revalidate = 60;

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

export async function generateStaticParams() {
  const { data: categories } = await CategoryService.getAll();

  if (!categories?.length) {
    return [];
  }

  return categories?.flatMap((cat) =>
    STATES_VALUES.map((state) => ({
      state,
      slug: cat.id,
    })),
  );
}

export default async function CategoriesDetailsPage({ params }: Props) {
  const { slug } = await params;

  const { data: category } = await CategoryService.getOne(slug);

  if (!category) {
    return notFound();
  }

  return <CategoryDetailsContainer category={category} />;
}
