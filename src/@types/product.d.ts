// @type.product.ts

export interface IProduct {
  img: string;
  title: string;
  description: string;
}

export interface IProductCategory {
  category: string;
  id: string;
  items: Product[];
}

export type ProductListType = IProductCategory[];
