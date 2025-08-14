import { CATEGORIES_MOCK_DATA } from '@/constants/data';
import { ApiClient, ApiResponse } from '@/lib/api/api-client';
import { ICategory } from '@/modules/category/interfaces/category.interface';

class Service extends ApiClient {
  async getAll(): Promise<ApiResponse<ICategory[]>> {
    // return this.get<ICategory[]>({
    //   config: {
    //     next: {
    //       tags: [CATEGORY_QUERIES.LIST_ALL],
    //     },
    //   },
    // });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: CATEGORIES_MOCK_DATA });
      }, 200);
    });
  }
}

export const CategoryService = new Service('/categories');
