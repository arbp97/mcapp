// @types.order.ts
export type OrderType = {
  details: OrderAddressDetailsType;
  items: OrderItemType[];
  total: number;
  confirmed: boolean;
  paymentType: string;
};

export type OrderItemType = {
  quantity: number;
  name: string;
  img: string;
  pricePerUnit: number;
};

export type OrderAddressDetailsType = {
  name: string;
  address: string;
  img: string;
  isDelivery: boolean;
};

export type OrderContextType = {
  order: OrderType;
  updateOrder: (order: OrderType) => void;
  resetOrder: () => void;
};
