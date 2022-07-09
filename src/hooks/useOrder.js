import { useState, useEffect } from "react";

const useOrder = (data) => {
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem("order")));

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
  }, [order, data]);

  const handleSetOrder = (order) => {
    setOrder(order);
    localStorage.setItem("order", JSON.stringify(order));
  };

  const handleNewOrderItem = (item) => {
    let auxOrder = order;
    auxOrder.items.push(item);
    handleSetOrder(auxOrder);
  };

  return [order, handleSetOrder, handleNewOrderItem];
};

export default useOrder;
