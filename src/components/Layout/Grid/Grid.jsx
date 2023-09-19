import styles from "./styles.module.scss";

function Grid(props) {
  return (
    <div className={styles.row}>
      <img className={styles.img1} src="/sala1.png" alt="" />
      <img className={styles.img2} src="/quarto1.png" alt="" />
      <img className={styles.img3} src="/salajantar1.png" alt="" />
      <img className={styles.img4} src="/sala2.png" alt="" />
    </div>
  );
}

export default Grid;
