import { ICategory } from "@/modules/category/interfaces/category.interface";

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  image: string;
  price: number;
  rating: number;
  category: ICategory;
}
