import CardCSS from "./style.module.scss";

function Card(props) {
  const imageSource = props.source;
  const productName = props.name;
  const productPrice = props.price;

  return (
    <div className={CardCSS.div}>
      <img src={imageSource} alt="" />
      <div className={CardCSS.info}>
        <p>{productName}</p>
        <span>{productPrice}</span>
      </div>
    </div>
  );
}

export default Card;
