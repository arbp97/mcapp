import { useState, useContext, createContext, useEffect } from "react";
import { OrderContextType, OrderType } from "../@types/order";
import { STORAGE } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";

const OrderContext = createContext<OrderContextType | null>(null);

export const useOrderContext = () => {
  return useContext(OrderContext) as OrderContextType;
};

type ChildrenProps = {
  children?: React.ReactNode;
};

export const OrderProvider = ({ children }: ChildrenProps) => {
  const [getStorageItem, setStorageItem] = useLocalStorage();

  const newOrder = (): OrderType => {
    return {
      address: "",
      items: [],
      total: 0,
      confirmed: false,
      paymentType: "",
      isDelivery: false,
    };
  };

  const getInitialState = (): OrderType => {
    const order = getStorageItem(STORAGE.ORDER) as OrderType;

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

  const updateOrder = (order: OrderType) => {
    setOrder(order);
  };

  return (
    <OrderContext.Provider value={{ order, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
