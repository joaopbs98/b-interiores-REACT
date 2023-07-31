import React from "react";
import LatestCSS from "./style.module.scss";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";
import Card from "../../UIComponents/Card/Card";
import Btn from "../../UIComponents/Button/Btn";
import productsData from "../../API/products.json";
import { Link } from "react-router-dom";

function LatestProducts(props) {
  const categories = Object.keys(productsData);

  const latestProducts = productsData[categories[0]].slice(0, 3);

  return (
    <div className={LatestCSS.div}>
      <div className={LatestCSS.head}>
        <hr />
        <SectionTitle content="Últimos Produtos" />
      </div>
      <div className={LatestCSS.content}>
        {latestProducts.map((product) => (
          <Card
            key={product.id}
            source={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <div className={LatestCSS.btn}>
        <Link to="/catalog">
          <Btn content="Ver Tudo" />
        </Link>
      </div>
    </div>
  );
}

export default LatestProducts;
