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

const App = () => {
  // nav button values
  const navButtons = {
    home: { text: "Home", img: "logo-black.png" },
    orders: { text: "Pedidos", img: "fries.png" },
    discounts: { text: "Ofertas", img: "ticket.png" },
    coupons: { text: "Cupones", img: "coupon.png" },
    catalogue: { text: "Menú", img: "more.png" },
  };

  // categories & products (add here)
  const categories = {
    burgers: {
      category: "Hamburguesas",
      items: [
        {
          img: "big_mac.png", // first img used as category image
          title: "Big Mac",
          description: "La hamburguesa más famosa del mundo. Un sabor único.",
        },
        {
          img: "mcnifica.png",
          title: "McNífica",
          description:
            "En un mundo donde todos buscan lo nuevo, la McNífica viene a rectificar lo bueno de ser clásico.",
        },
      ],
    },
    chicken: {
      category: "Sándwiches de Pollo",
      items: [
        {
          img: "mc_pollo.png", // first img used as category image
          title: "McPollo",
          description:
            "El auténtico sabor del pollo lo encontrás en nuestro clásico McPollo.",
        },
        {
          img: "mc_pollo_2.png",
          title: "McPollo doble",
          description: "El clásico McPollo, esta vez con doble sabor.",
        },
      ],
    },
  };
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
  };

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/orders"
            element={<Order category={restaurants} />}
          />
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
            element={<Catalogue categories={categories} />}
          />
          {Object.entries(categories).map(([key, value]) => {
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
        <Navigation buttons={navButtons} default="home" />
      </Router>
    </div>
  );
};

export default App;
