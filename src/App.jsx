import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Contact from "./pages/Contact";
import { ProductProvider } from "./components/Features/ProductsProvider/ProductProvider";
import { CartProvider } from "./components/Features/CartContext/CartContext";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
