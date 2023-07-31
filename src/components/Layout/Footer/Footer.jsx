import styles from "./styles.module.scss";
function Footer(props) {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.company}>
          <div className={styles.top}>
            <img src="src\assets\images\logo.svg" alt="" />
            <div className={styles.socials}>
              <img src="src\assets\images\instagram.svg" alt="" />
              <img src="src\assets\images\facebook.svg" alt="" />
            </div>
          </div>
          <div className={styles.bottom}>
            <p>&copy; B-Interiores- 2023 - All Rights Reserved </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
