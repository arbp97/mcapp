import "./App.css";
import Navigation from "./navbar/Navigation.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home.js";
import Coupon from "./views/Coupon.js";
import Discount from "./views/Discount.js";
import Order from "./views/orders/Order.js";
import Catalogue from "./views/catalogue/Catalogue.js";
import ProductList from "./product/ProductList.js";
import Header from "./header/Header.js";
import navButtons from "../data/navButtons.js";
import products from "../data/products.js";
import markers from "../data/markers.js";
import homeLinks from "../data/homeLinks.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home links={homeLinks} />} />
          <Route path="/orders" element={<Order markers={markers} />} />
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
