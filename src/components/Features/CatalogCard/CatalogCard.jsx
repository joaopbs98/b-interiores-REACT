import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useCartContext } from "../CartContext/CartContext";

function CatalogCard(props) {
  const { addToCart } = useCartContext();
  const [isImageClicked, setIsImageClicked] = useState(false);
  const imageRef = useRef(null);

  const handleAddToCart = () => {
    addToCart(1);
  };

  const handleImageClick = () => {
    setIsImageClicked(!isImageClicked);
  };

  const handleClickOutside = (e) => {
    if (isImageClicked && !imageRef.current.contains(e.target)) {
      setIsImageClicked(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isImageClicked]);

  return (
    <div
      style={{ width: `${props.width}` }}
      className={`${styles.div} ${isImageClicked ? styles.imageClicked : ""}`}
    >
      <img
        ref={imageRef}
        style={{ width: `${props.width}` }}
        src={props.imageSource}
        alt=""
        onClick={handleImageClick}
      />
      <div className={styles.info}>
        <p>{props.productName}</p>
      </div>
    </div>
  );
}

export default CatalogCard;
