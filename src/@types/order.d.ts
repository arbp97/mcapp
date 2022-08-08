// @types.order.ts
export type OrderType = {
  address: string;
  items: OrderItemType[];
  total: number;
  confirmed: boolean;
  paymentType: string;
  isDelivery: boolean;
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
  removeOrder: () => void;
};
