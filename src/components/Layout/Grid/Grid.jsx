import styles from "./styles.module.scss";

function Grid(props) {
  return (
    <div className={styles.row}>
      <img className={styles.img1} src="public/sala1.png" alt="" />
      <img className={styles.img2} src="public/quarto1.png" alt="" />
      <img className={styles.img3} src="public/salajantar1.png" alt="" />
      <img className={styles.img4} src="public/sala2.png" alt="" />
    </div>
  );
}

export default Grid;
