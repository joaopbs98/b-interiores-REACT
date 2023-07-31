import styles from "./styles.module.scss";

function ContactMain(props) {
  return (
    <div className={styles.main}>
      <div className={styles.cta}>
        <p>Interessado?</p>
        <span>Fale Connosco.</span>
      </div>
      <div className={styles.addresses}>
        <hr />
        <div className={styles.box}>
          <div className={styles.location}>
            <p>Paços de Ferreira</p>
            <span>
              Pavilhão Domóvel, Shop 108A B, R. Do Comércio, 4590-079 Carvalhosa
            </span>
          </div>
          <div className={styles.contact}>
            <p>geral@b-interiores.com</p>
            <span>+351 065 121 387</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMain;
