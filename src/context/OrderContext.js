import { useState, useContext, createContext, useEffect } from "react";
import { STORAGE } from "../config.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

const OrderContext = createContext();
const OrderUpdateContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

export const useOrderUpdate = () => {
  return useContext(OrderUpdateContext);
};

const newOrder = (data) => {
  return {
    address: data ? data.address : "",
    items: [],
    total: 0,
    confirmed: false,
    paymentType: "",
    isDelivery: data ? data.isDelivery : false,
  };
};

export const OrderProvider = ({ children }) => {
  const [getStorageItem, setStorageItem] = useLocalStorage();

  const getInitialState = () => {
    const order = getStorageItem(STORAGE.ORDER);

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

  const updateOrder = (order) => {
    setOrder(order);
  };

  return (
    <OrderContext.Provider value={order}>
      <OrderUpdateContext.Provider value={updateOrder}>
        {children}
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  );
};
