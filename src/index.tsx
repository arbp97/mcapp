import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./components/App";
import { register } from "./serviceWorkerRegistration.js";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// service worker
register();
