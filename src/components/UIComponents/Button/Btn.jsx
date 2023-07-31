import ButtonCSS from "../Button/style.module.scss";

function Btn(props) {
  const content = props.content;
  const children = props.children;
  return (
    <>
      <button className={ButtonCSS.btn}>
        {content}
        {children}
      </button>
    </>
  );
}

export default Btn;
