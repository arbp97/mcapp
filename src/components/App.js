import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* VIEWS */
import Home from "./views/home/Home.js";
import Coupon from "./views/Coupon.js";
import Discount from "./views/Discount.js";
import Order from "./views/orders/Order.js";
import RestaurantList from "./views/orders/RestaurantList.js";
import Delivery from "./views/orders/Delivery.js";
import ComboList from "./views/orders/ComboList.js";
import Catalogue from "./views/catalogue/Catalogue.js";
import ProductList from "./views/catalogue/ProductList.js";
import AddItem from "./views/orders/AddItem.js";
import Cart from "./views/orders/Cart.js";
/* COMMON COMPONENTS */
import Header from "./header/Header.js";
import Navigation from "./navbar/Navigation.js";
/* DATASETS */
import navButtons from "../data/navButtons.js";
import products from "../data/products.js";
import combos from "../data/combo.js";
import markers from "../data/markers.js";
import homeLinks from "../data/homeLinks.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home links={homeLinks} />} />
          <Route
            path="/orders"
            element={
              <>
                <Order active={"pickup"} />
                <RestaurantList markers={markers} />
              </>
            }
          />
          <Route
            path="/orders/delivery"
            element={
              <>
                <Order active={"delivery"} />
                <Delivery />
              </>
            }
          />
          <Route
            path="/orders/pickup/add"
            element={<ComboList items={combos} />}
          />
          <Route path="/orders/pickup/add/item" element={<AddItem />} />
          <Route path="/orders/pickup/cart" element={<Cart />} />
          <Route path="/discounts" element={<Discount />} />
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
