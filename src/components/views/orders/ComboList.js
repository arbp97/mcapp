import "./ComboList.css";
import { useLocation, NavLink } from "react-router-dom";
import Slider from "../../slider/Slider.js";
import useOrder from "../../../hooks/useOrder.js";

const ComboList = (props) => {
  const location = useLocation();
  const data = location.state;
  const [order] = useOrder(data);

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
              <Slider
                items={value.items}
                showPrice={true}
                link={"/orders/add/" + key + "/"}
              />
            </div>
          );
        })}
        {order && order.items.length > 0 && (
          <NavLink className="view-order-link" to={"/orders/cart"}>
            <img src="/img/order-bag.png" alt="" />
            <div className="order-qty">{order.items.length}</div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ComboList;
