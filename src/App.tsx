import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Layout from "./components/layout/Layout";

import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter basename="/mini-ecom">
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
