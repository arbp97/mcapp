import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
/* VIEWS */
import Home from "./views/home/Home.js";
import Coupon from "./views/coupons/Coupon.js";
import ViewCoupon from "./views/coupons/ViewCoupon.js";
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
import InfoModal from "./modal/InfoModal.js";
import { OrderProvider } from "../context/OrderContext.js";

import { URLS } from "../config.js";

const App = () => {
  // Order warning
  const [showOrderModal, setShowOrderModal] = useState(false);

  const toggleOrderModal = () => setShowOrderModal(!showOrderModal);

  return (
    <div className="App">
      <OrderProvider>
        <Router>
          <Scroll>
            <Header />
            <Routes>
              <Route path={URLS.ROOT} element={<Home />} />
              <Route path={URLS.ORDERS}>
                <Route
                  index
                  element={<Order toggleOrderModal={toggleOrderModal} />}
                />
                <Route path={URLS.ORDERS_CART} element={<Cart />} />
                <Route path={URLS.ORDERS_CHECKOUT} element={<Checkout />} />
                <Route path={URLS.ORDERS_CURRENT} element={<CurrentOrder />} />
                <Route path={URLS.ORDERS_ADD} element={<ComboList />} />
                <Route
                  path={URLS.ORDERS_ADD + "/:category/:id"}
                  element={<AddItem />}
                />
              </Route>
              <Route path={URLS.DISCOUNTS}>
                <Route index element={<Discount />} />
                <Route path=":category/:id" element={<AddCoupon />} />
              </Route>
              <Route path={URLS.COUPONS}>
                <Route index element={<Coupon />} />
                <Route path=":id" element={<ViewCoupon />} />
              </Route>
              <Route path={URLS.CATALOGUE}>
                <Route index element={<Catalogue />} />
                <Route path=":category" element={<ProductList />} />
              </Route>
            </Routes>
            <Navigation />
            <InfoModal
              toggle={toggleOrderModal}
              isOpen={showOrderModal}
              title="Atención"
              message="Ya existe un pedido en curso. Pulsa 'Ver' para ver tu pedido actual."
              link={URLS.ORDERS_CURRENT}
            />
          </Scroll>
        </Router>
      </OrderProvider>
    </div>
  );
};

export default App;
