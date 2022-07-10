import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";

const useOrder = (data) => {
  const [getStorageItem, setStorageItem, removeStorageItem] = useLocalStorage();
  const [order, setOrder] = useState(getStorageItem("order"));

  useEffect(() => {
    /* create a new order or, in case that it exists & its not sent, 
    change the address to the current selected restaurant */
    if (!order) {
      const newOrder = {
        address: data ? data.address : "",
        items: [],
        total: 0,
        confirmed: false,
        paymentType: "",
        isDelivery: data ? data.isDelivery : false,
      };

      handleSetOrder(newOrder);
    } else {
      if (!order.confirmed && data && order.address !== data.address) {
        handleSetOrder({
          ...order,
          // eslint-disable-next-line
          ["address"]: data.address,
          // eslint-disable-next-line
          ["isDelivery"]: data.isDelivery,
        });
      }
    }
  });

  const handleSetOrder = (order) => {
    setOrder(order);
    setStorageItem("order", order);
  };

  const handleNewOrderItem = (item) => {
    let auxOrder = order;
    auxOrder.items.push(item);
    handleSetOrder(auxOrder);
  };

  const handleRemoveOrder = () => {
    removeStorageItem("order");
    setOrder(null);
  };

  return [order, handleSetOrder, handleNewOrderItem, handleRemoveOrder];
};

export default useOrder;
