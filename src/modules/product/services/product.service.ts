import { PRODUCTS_MOCK_DATA } from "@/constants/data";
import { ApiClient, ApiResponse } from "@/lib/api/api-client";
import { IProduct } from "@/modules/product/interfaces/product.interface";

type IProductKey = keyof IProduct;

type Params = {
  page?: number;
  size?: number;
  sort?: Partial<Record<IProductKey, "asc" | "desc">>;
};

class Service extends ApiClient {
  async getAll(params: Params = {}): Promise<ApiResponse<IProduct[]>> {
    // return this.get<IProduct[]>({
    //   params,
    //   config: {
    //     next: {
    //       tags: [
    //         PRODUCT_QUERIES.LIST_ALL,
    //         JSON.stringify(Object.values(params)),
    //       ],
    //     },
    //   },
    // });

    return new Promise((resolve) => {
      let data = PRODUCTS_MOCK_DATA;

      if (!!params.size) {
        data = data.slice(0, params.size);
      }

      setTimeout(() => {
        resolve({ data });
      }, 200);
    });
  }

  async getOne(slug: string): Promise<ApiResponse<IProduct>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: PRODUCTS_MOCK_DATA.find((prod) => prod.id === slug) });
      }, 200);
    });
  }
}

export const ProductService = new Service("/products");
