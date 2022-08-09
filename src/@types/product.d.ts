// @types.product.ts

export type ProductType = {
  img: string;
  title: string;
  description: string;
};

export type ProductCategoryType = {
  category: string;
  id: string;
  items: ProductType[];
};
