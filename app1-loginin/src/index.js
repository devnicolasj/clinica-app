import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/login";
import Detalle from "./routes/detalle";
import Checkout from "./routes/checkout";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="detalle" element={<Detalle />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
  rootElement
);
