import styles from "./styles.module.scss";

function Grid(props) {
  const images = [
    "https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1635321349302-f91724057317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  ];

  return (
    <div className={styles.row}>
      <img className={styles.img1} src={images} alt="" />
      <img className={styles.img2} src={images} alt="" />
      <img className={styles.img3} src={images} alt="" />
      <img className={styles.img4} src={images} alt="" />
    </div>
  );
}

export default Grid;
