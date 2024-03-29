import { STORAGE } from "../config";
import { useState, useContext, createContext, useEffect } from "react";
import { OrderContextType, OrderType } from "../@types/order";
import useLocalStorage from "../hooks/useLocalStorage";

const OrderContext = createContext<OrderContextType | null>(null);

export const useOrderContext = () =>
  useContext(OrderContext) as OrderContextType;

type OrderProviderProps = {
  children?: React.ReactNode;
};

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const { getStorageItem, setStorageItem } = useLocalStorage();

  const getNewOrder = (): OrderType => {
    return {
      items: [],
      details: {
        name: "",
        address: "",
        img: "",
        isDelivery: false,
      },
      total: 0,
      confirmed: false,
      paymentType: "",
    };
  };

  const getInitialState = () => {
    const order = getStorageItem(STORAGE.ORDER) as OrderType;

    if (!order) {
      setStorageItem(STORAGE.ORDER, getNewOrder());
      return getStorageItem(STORAGE.ORDER) as OrderType;
    }

    return order;
  };

  const [order, setOrder] = useState(getInitialState);

  useEffect(() => {
    if (!order) setOrder(getNewOrder());
    setStorageItem(STORAGE.ORDER, order);
    // eslint-disable-next-line
  }, [order]);

  const updateOrder = (order: OrderType) => setOrder(order);

  const resetOrder = () => setOrder(getNewOrder());

  return (
    <OrderContext.Provider value={{ order, updateOrder, resetOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
