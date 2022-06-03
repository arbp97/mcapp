import "./ComboList.css";
import { useLocation } from "react-router-dom";
import Slider from "../../slider/Slider.js";
import { useEffect } from "react";

const ComboList = (props) => {
  const location = useLocation();
  const data = location.state;
  const order = JSON.parse(localStorage.getItem("order"));

  useEffect(() => {
    /* create a new order or, in case that it exists & its not sent, 
    change the address to the current selected restaurant */
    if (!order) {
      localStorage.setItem(
        "order",
        JSON.stringify({
          address: data.address,
          items: [],
          status: "pending",
        })
      );
    } else {
      if (order.status !== "accepted" && order.address !== data.address) {
        order.address = data.address;
        localStorage.setItem("order", JSON.stringify(order));
      }
    }
  }, [order, data]);

  return (
    <div className="ComboList">
      <div className="restaurant">
        <img src={"/img/" + data.img} alt="" />
        <div className="address">
          <p>{data.name}</p>
          <p>{data.address}</p>
        </div>
      </div>
      <div className="ComboList-slides">
        {Object.entries(props.items).map(([key, value]) => {
          return (
            <div className="slider-container" key={key}>
              <p>{value.category}</p>
              <Slider items={value.items} />
            </div>
          );
        })}
        {order.items.length > 0 && (
          <div className="view-order-link">
            <img src="/img/order-bag.png" alt="" />
            <div className="order-qty">{order.items.length}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboList;
