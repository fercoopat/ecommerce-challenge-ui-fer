import { ApiClient } from '@/lib/api/api-client';
import { CATEGORY_QUERIES } from '@/modules/category/constants/category.queries';
import { ICategory } from '@/modules/category/interfaces/category.interface';

class Service extends ApiClient {
  async getAll() {
    return this.get<ICategory[]>({
      config: {
        next: {
          tags: [CATEGORY_QUERIES.LIST_ALL],
        },
      },
    });
  }
}

export const CategoryService = new Service('/categories');
