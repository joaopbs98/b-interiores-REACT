import styles from "./styles.module.scss";
import CatalogCard from "../CatalogCard/CatalogCard";
import { useProductContext } from "../ProductsProvider/ProductProvider";
import { useCartContext } from "../CartContext/CartContext";

function CatalogRow() {
  const productsData = useProductContext();

  if (!productsData || productsData.length === 0) {
    return <div>Loading...</div>;
  }

  const categories = Object.keys(productsData);

  return (
    <div>
      {categories.map((category) => (
        <div key={category} className={styles.categoryContainer}>
          <h2>{category}</h2>
          <div className={styles.items}>
            {productsData[category].map((product) => (
              <CatalogCard
                key={product.id}
                productName={product.name}
                productPrice={product.price}
                imageSource={product.image}
                onClick={() => addToCart()}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatalogRow;
