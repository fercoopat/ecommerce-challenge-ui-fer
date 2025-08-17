import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BASE_URL } from "@/constants/envs";
import { IStateCode } from "@/constants/states";
import ProductDetailsContainer from "@/modules/product/containers/product-details-container";
import { ProductService } from "@/modules/product/services/product.service";

type Props = {
  params: Promise<{
    slug: string;
    state: IStateCode;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, state } = await params;

  try {
    const { data } = await ProductService.getOne(slug);

    if (!data) {
      return {
        title: "Producto no encontrado",
        description: `El producto ${slug} no existe.`,
      };
    }

    const canonicalUrl = `${BASE_URL}/${state}/products/${slug}`;

    return {
      title: `${data.name} | Productos`,
      description: data?.description ?? `Detalles del producto ${data.name}`,
      openGraph: {
        title: data.name,
        description: data?.description ?? `Detalles del producto ${data.name}`,
        type: "article",
        url: canonicalUrl,
        images: data.image ? [{ url: data.image, alt: data.name }] : undefined,
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Error | Productos",
      description: "No se pudo cargar el producto",
    };
  }
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const { data: product } = await ProductService.getOne(slug);

  if (!product) {
    return notFound();
  }

  return <ProductDetailsContainer product={product} />;
}
