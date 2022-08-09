import "./AddItem.css";
import { IMG_PATH, URLS } from "../../../config";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import McButton from "../../buttons/McButton";
import { useState } from "react";
import COMBOS from "../../../data/combos";
import { useOrderContext } from "../../../context/OrderContext";
import useFormat from "../../../hooks/useFormat";
import { OrderItemType } from "../../../@types/order";

const AddItem = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  const itemData = COMBOS.find((comboCategory) => comboCategory.id === category)
    ?.items[Number(id)];
  const [count, setCount] = useState(1);
  const { order, updateOrder } = useOrderContext();
  const [currencyFormatter] = useFormat();
  const priceTag = itemData ? currencyFormatter().format(itemData.price) : "";

  if (!itemData) return <Navigate to={URLS.ORDERS_ADD} replace />;

  // add selected qty of this item and adds them to the order
  const handleClick = () => {
    let existingItem = order.items.find(
      (item) => item.name === itemData?.title
    );
    // if the item exists in the current order,
    //just add the count to it to avoid duplications
    if (existingItem) {
      existingItem.quantity += count;
      updateOrder(order);
    } else {
      const newItem: OrderItemType = {
        quantity: count,
        name: itemData!.title,
        img: itemData!.img,
        pricePerUnit: itemData!.price,
      };

      order.items.push(newItem);

      updateOrder({
        ...order,
        // eslint-disable-next-line
        ["total"]: order.total + newItem.pricePerUnit * count,
      });
    }

    navigate(-1);
  };

  return (
    <div className="AddItem">
      <p className="title">{itemData?.title}</p>
      <img src={IMG_PATH + itemData?.img} alt="" />
      <p className="price">{priceTag}</p>
      <div className="counter-container">
        <button onClick={() => setCount(count === 1 ? count : count - 1)}>
          <img src={IMG_PATH + "minus.png"} alt="" />
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count >= 5 ? count : count + 1)}>
          <img src={IMG_PATH + "plus.png"} alt="" />
        </button>
      </div>
      <McButton
        text={"Agregar al pedido"}
        onClick={() => handleClick()}
        fixed
      />
    </div>
  );
};

export default AddItem;
