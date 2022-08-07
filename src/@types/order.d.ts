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

export type OrderContextType = {
  order: Order;
  updateOrder: (order: Order) => void;
};
