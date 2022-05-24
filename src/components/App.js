import "./App.css";
import Navigation from "./navbar/Navigation.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import Coupon from "./views/Coupon.js";
import Discount from "./views/Discount.js";
import Order from "./views/orders/Order.js";
import Catalogue from "./views/Catalogue.js";
import ProductList from "./product/ProductList.js";
import Header from "./header/Header.js";
import navButtons from "../data/navButtons.js";
import products from "../data/products.js";

const App = () => {
  // ________--------------_________________----------------_____________________

  const restaurants = {
    restaurant1: {
      title: "BOULEVARD ADROGUE SHOPPING",
      img: "indicador.png",
      location: "H. Yrigoyen 13200 Adrogue",
    },
    restaurant2: {
      title: "AV. ESPORA ADROGUE",
      img: "indicador.png",
      location: "Av. Tomas Espora 611 1846",
    },
    restaurant3: {
      title: "LOMAS CENTRO SHOPPING",
      img: "indicador.png",
      location: "Av. Antartida Arg. 703 L. de Zamora",
    },
    restaurant4: {
      title: "TEMPERLEY COTO",
      img: "indicador.png",
      location: "Av. Presidente Hipolito Yrigoyen 10699",
    },
    restaurant5: {
      title: "PEATONAL LOMAS DE ZAMORA",
      img: "indicador.png",
      location: "Peatona Laprida 177 L. de Zamora",
    },
    restaurant6: {
      title: "LOMAS DE ZAMORA",
      img: "indicador.png",
      location: "Av. Hipolito Yrigoyen 8230 L. de Zamora",
    },
    restaurant7: {
      title: "9 DE JULIO - LANUS",
      img: "indicador.png",
      location: "9 de Julio 1194",
    },
    restaurant8: {
      title: "LANUS",
      img: "indicador.png",
      location: "Av. Hipolito Yrigoyen 4475 Lanus",
    },
    restaurant9: {
      title: "BANFIELD",
      img: "indicador.png",
      location: "Av. Hipolito Yrigoyen 7545 Banfield",
    },
    restaurant10: {
      title: "ALTO AVELLANEDA AUTOMAC",
      img: "indicador.png",
      location: "Guemes 897",
    },
    restaurant11: {
      title: "AV. MITRE AVELLANEDA",
      img: "indicador.png",
      location: "Av. Mitre 639 Avellaneda",
    },
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Order category={restaurants} />} />
          {Object.entries(categories).map(([key, value]) => {
            // map all categories to routes
            return (
              <Route
                key={key}
                path={"/orders/" + key}
                element={
                  <ProductList
                    category={value.description}
                    products={value.title}
                  />
                }
              />
            );
          })}
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
