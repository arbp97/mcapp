import React, { useState, useContext, createContext, useEffect } from "react";
import { OrderContextType, IOrder } from "../@types/order";
import { ChildrenProps } from "../@types/childrenProps";
import { STORAGE } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";

const OrderContext = createContext<OrderContextType | null>(null);

export const useOrderContext = () => {
  return useContext(OrderContext) as OrderContextType;
};

export const OrderProvider = ({ children }: ChildrenProps) => {
  const [getStorageItem, setStorageItem] = useLocalStorage();

  const newOrder = (): IOrder => {
    return {
      address: "",
      items: [],
      total: 0,
      confirmed: false,
      paymentType: "",
      isDelivery: false,
    };
  };

  const getInitialState = (): IOrder => {
    const order = getStorageItem(STORAGE.ORDER) as IOrder;

    if (!order) {
      setStorageItem(STORAGE.ORDER, newOrder());
      return getStorageItem(STORAGE.ORDER);
    } else {
      return order;
    }
  };

  const [order, setOrder] = useState(getInitialState);

  useEffect(() => {
    if (!order) {
      setOrder(newOrder());
    }
    setStorageItem(STORAGE.ORDER, order);
  }, [order, setStorageItem]);

  const updateOrder = (order: IOrder) => {
    setOrder(order);
  };

  return (
    <OrderContext.Provider value={{ order, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
