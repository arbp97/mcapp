import "./ComboList.css";
import { IMG_PATH, URLS } from "../../../config";
import { useLocation, NavLink } from "react-router-dom";
import Slider from "../../slider/Slider";
import { useEffect } from "react";
import COMBOS from "../../../data/combos";
import { useOrderContext } from "../../../context/OrderContext";

const ComboList = () => {
  const location = useLocation();
  const data = location.state;
  const { order, updateOrder } = useOrderContext();

  useEffect(() => {
    // update order with current location info
    updateOrder({
      ...order,
      // eslint-disable-next-line
      ["address"]: data.address,
      // eslint-disable-next-line
      ["isDelivery"]: data.isDelivery,
    });
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="ComboList">
      <div className="restaurant">
        <img src={IMG_PATH + data.img} alt="" />
        <div className="address">
          <p>{data.name}</p>
          <p>{data.address}</p>
        </div>
      </div>
      <div className="ComboList-slides">
        {Object.entries(COMBOS).map(([key, value]) => {
          return (
            <div className="slider-container" key={key}>
              <p>{value.category}</p>
              <Slider
                items={value.items}
                showPrice={true}
                link={URLS.ORDERS_ADD + key + "/"}
              />
            </div>
          );
        })}
        {order && order.items.length > 0 && (
          <NavLink className="view-order-link" to={URLS.ORDERS_CART}>
            <img src={IMG_PATH + "order-bag.png"} alt="" />
            <div className="order-qty">{order.items.length}</div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ComboList;
