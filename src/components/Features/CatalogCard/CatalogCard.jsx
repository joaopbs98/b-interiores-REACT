import React from "react";
import styles from "./styles.module.scss";
import { useCartContext } from "../CartContext/CartContext";

function CatalogCard(props) {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(1);
  };

  return (
    <div style={{ width: `${props.width}` }} className={styles.div}>
      <img style={{ width: `${props.width}` }} src={props.imageSource} alt="" />
      <div className={styles.info}>
        <p>{props.productName}</p>
        <span>{props.productPrice}</span>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default CatalogCard;
