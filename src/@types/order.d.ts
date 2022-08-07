// @types.order.ts
export interface IOrder {
  address: string;
  items: IOrderItem[];
  total: number;
  confirmed: boolean;
  paymentType: string;
  isDelivery: boolean;
}

export interface IOrderItem {
  quantity: number;
  name: string;
  img: string;
  pricePerUnit: number;
}

export type OrderContextType = {
  order: IOrder;
  updateOrder: (order: IOrder) => void;
};
