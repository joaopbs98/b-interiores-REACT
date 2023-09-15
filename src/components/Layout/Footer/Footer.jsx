import styles from "./styles.module.scss";
function Footer(props) {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.company}>
          <div className={styles.top}>
            <img src="src\assets\images\logo.svg" alt="" />
            <div className={styles.socials}>
              <a href="https://www.instagram.com/b_interiores_/">
                <img src="src\assets\images\instagram.svg" alt="" />
              </a>
              <a href="https://www.facebook.com/binteriores.pt/">
                <img src="src\assets\images\facebook.svg" alt="" />
              </a>
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
