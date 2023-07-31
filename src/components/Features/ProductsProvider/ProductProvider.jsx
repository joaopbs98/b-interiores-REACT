import React, { useEffect, useState, createContext, useContext } from "react";
import productData from "../../API/products.json";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {!loading && children}
    </ProductContext.Provider>
  );
};
