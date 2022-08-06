import { URLS } from "../config.js";

// Navigation bar text & icons
const navButtons = [
  { text: "Home", img: "logo-black.png", path: URLS.ROOT },
  { text: "Pedidos", img: "fries.png", path: URLS.ORDERS },
  { text: "Ofertas", img: "ticket.png", path: URLS.DISCOUNTS },
  { text: "Cupones", img: "coupon.png", path: URLS.COUPONS },
  { text: "Menú", img: "more.png", path: URLS.CATALOGUE },
];

export default navButtons;
