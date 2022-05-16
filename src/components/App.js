import "../theme/App.css";
import Navigation from "./Navigation.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../views/Home.js";
import Coupon from "../views/Coupon.js";
import Discount from "../views/Discount.js";
import Order from "../views/Order.js";
import More from "../views/More.js";
import Catalogue from "../views/Catalogue.js";

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/discounts" element={<Discount />} />
          <Route path="/coupons" element={<Coupon />} />
          <Route path="/more" element={<Catalogue />} />
        </Routes>
        <Navigation buttons={navButtons} default="home" />
      </Router>
    </div>
  );
};

export default App;
