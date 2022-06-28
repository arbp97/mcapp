import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
  // variable used to check if there is a pending order
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // set this variable too when someone opens the app
  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order"));

    if (order && order.confirmed) {
      setIsOrderConfirmed(true);
    }
  }, [setIsOrderConfirmed]);

  // Order warning
  const [showOrderModal, setShowOrderModal] = useState(false);

  const toggleOrderModal = () => setShowOrderModal(!showOrderModal);

  return (
    <div className="App">
      <Router>
        <Scroll>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  links={homeLinks}
                  carouselItems={homeSlides}
                  isOrderConfirmed={isOrderConfirmed}
                />
              }
            />
            <Route path="/orders">
              <Route
                index
                element={
                  <Order
                    markers={markers}
                    isOrderConfirmed={isOrderConfirmed}
                    toggleOrderModal={toggleOrderModal}
                  />
                }
              />
              <Route path="cart" element={<Cart />} />
              <Route
                path="checkout"
                element={<Checkout setIsOrderConfirmed={setIsOrderConfirmed} />}
              />
              <Route
                path="current"
                element={
                  <CurrentOrder
                    setIsOrderConfirmed={setIsOrderConfirmed}
                    isOrderConfirmed={isOrderConfirmed}
                  />
                }
              />
              <Route path="add" element={<ComboList items={combos} />} />
              <Route path="add/:category/:id" element={<AddItem />} />
            </Route>
            <Route path="/discounts">
              <Route
                index
                element={
                  <Discount items={discounts} carouselItems={discountSlides} />
                }
              />
              <Route path=":category/:id" element={<AddCoupon />} />
            </Route>
            <Route path="/coupons">
              <Route index element={<Coupon />} />
              <Route path=":id" element={<ViewCoupon />} />
            </Route>
            <Route path="/catalogue">
              <Route index element={<Catalogue categories={products} />} />
              <Route path=":category" element={<ProductList />} />
            </Route>
          </Routes>
          <Navigation buttons={navButtons} />
          <InfoModal
            toggle={toggleOrderModal}
            isOpen={showOrderModal}
            title="Atención"
            message="Ya existe un pedido en curso. Pulsa 'Ver' para ver tu pedido actual."
            link="/orders/current"
          />
        </Scroll>
      </Router>
    </div>
  );
};

export default App;
