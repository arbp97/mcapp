import "./ComboList.css";
import { IMG_PATH, URLS } from "../../../config";
import COMBOS from "../../../data/combos";
import Slider from "../../slider/Slider";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useOrderContext } from "../../../context/OrderContext";
import { OrderAddressDetailsType } from "../../../@types/order";

const ComboList = () => {
  const location = useLocation();
  const orderAddressDetails = location.state as OrderAddressDetailsType;
  const { order, updateOrder } = useOrderContext();

  useEffect(() => {
    // update order with current location info
    updateOrder({
      ...order,
      // eslint-disable-next-line
      ["address"]: orderAddressDetails.address,
      // eslint-disable-next-line
      ["isDelivery"]: orderAddressDetails.isDelivery,
    });
    // eslint-disable-next-line
  }, [orderAddressDetails]);

  return (
    <div className="ComboList">
      <div className="restaurant">
        <img src={IMG_PATH + orderAddressDetails.img} alt="" />
        <div className="address">
          <p>{orderAddressDetails.name}</p>
          <p>{orderAddressDetails.address}</p>
        </div>
      </div>
      <div className="ComboList-slides">
        {COMBOS.map((value, index) => {
          return (
            <div className="slider-container" key={index}>
              <p>{value.category}</p>
              <Slider
                items={value.items}
                showPrice={true}
                link={URLS.ORDERS_ADD + index + "/"}
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
