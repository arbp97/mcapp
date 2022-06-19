import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* VIEWS */
import Home from "./views/home/Home.js";
import Coupon from "./views/Coupon.js";
import Discount from "./views/discounts/Discount.js";
import AddCoupon from "./views/discounts/AddCoupon.js";
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
import Scroll from "./common/Scroll.js";
/* DATASETS */
import navButtons from "../data/navButtons.js";
import products from "../data/products.js";
import combos from "../data/combo.js";
import markers from "../data/markers.js";
import homeLinks from "../data/homeLinks.js";
import homeSlides from "../data/homeSlides.js";
import discountSlides from "../data/discountSlides.js";
import discounts from "../data/discounts.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Scroll>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home links={homeLinks} carouselItems={homeSlides} />}
            />
            <Route
              path="/orders"
              element={<Order active={"pickup"} markers={markers} />}
            />
            <Route path="/orders/add">
              <Route index element={<ComboList items={combos} />} />
              <Route path="/orders/add/:category/:id" element={<AddItem />} />
            </Route>
            <Route path="/orders/cart" element={<Cart />} />
            <Route path="/orders/checkout" element={<Checkout />} />
            <Route path="/orders/current" element={<CurrentOrder />} />
            <Route path="/discounts">
              <Route
                index
                element={
                  <Discount items={discounts} carouselItems={discountSlides} />
                }
              />
              <Route path=":category/:id" element={<AddCoupon />} />
            </Route>
            <Route path="/coupons" element={<Coupon />} />
            <Route path="/catalogue">
              <Route index element={<Catalogue categories={products} />} />
              <Route path=":category" element={<ProductList />} />
            </Route>
          </Routes>
          <Navigation buttons={navButtons} />
        </Scroll>
      </Router>
    </div>
  );
};

export default App;
