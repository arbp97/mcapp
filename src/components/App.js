import "../theme/App.css";
import Navigation from "./Navigation.js";

const App = () => {

  // nav button values
  const navButtons = {
    home: { text: "Home", img: "logo-black.png" },
    orders: { text: "Pedidos", img: "fries.png" },
    discounts: { text: "Ofertas", img: "ticket.png" },
    coupons: { text: "Cupones", img: "coupon.png" },
    more: { text: "Más", img: "more.png" },
  };

  return (
    <div className="App">
      <Navigation buttons={navButtons} default="home"/>
    </div>
  );
};

export default App;
