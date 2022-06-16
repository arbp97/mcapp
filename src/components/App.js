import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* VIEWS */
import Home from "./views/home/Home.js";
import Coupon from "./views/Coupon.js";
import Discount from "./views/Discount.js";
import Order from "./views/orders/Order.js";
import ComboList from "./views/orders/ComboList.js";
import Catalogue from "./views/catalogue/Catalogue.js";
import ProductList from "./views/catalogue/ProductList.js";
import AddItem from "./views/orders/AddItem.js";
import Cart from "./views/orders/Cart.js";
import Checkout from "./views/orders/Checkout.js";
import CurrentOrder from "./views/orders/CurrentOrder.js";
/* COMMON COMPONENTS */
import Header from "./header/Header.js";
import Navigation from "./navbar/Navigation.js";
/* DATASETS */
import navButtons from "../data/navButtons.js";
import products from "../data/products.js";
import combos from "../data/combo.js";
import markers from "../data/markers.js";
import homeLinks from "../data/homeLinks.js";
import discounts from "../data/discounts.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home links={homeLinks} carouselItems={homeLinks} />}
          />
          <Route
            path="/orders"
            element={<Order active={"pickup"} markers={markers} />}
          />
          <Route path="/orders/add" element={<ComboList items={combos} />} />
          <Route path="/orders/add/item" element={<AddItem />} />
          <Route path="/orders/cart" element={<Cart />} />
          <Route path="/orders/checkout" element={<Checkout />} />
          <Route path="/orders/current" element={<CurrentOrder />} />
          <Route path="/discounts" element={<Discount items={discounts} />} />
          <Route path="/coupons" element={<Coupon />} />
          <Route
            path="/catalogue"
            element={<Catalogue categories={products} />}
          />
          {Object.entries(products).map(([key, value]) => {
            // map all categories to routes
            return (
              <Route
                key={key}
                path={"/catalogue/" + key}
                element={
                  <ProductList
                    category={value.category}
                    products={value.items}
                  />
                }
              />
            );
          })}
        </Routes>
        <Navigation buttons={navButtons} />
      </Router>
    </div>
  );
};

export default App;
