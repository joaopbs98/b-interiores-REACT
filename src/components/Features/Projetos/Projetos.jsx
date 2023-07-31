import styles from "./style.module.scss";
import SectionTitle from "../../Layout/SectionTitle/SectionTitle";
import Grid from "../../Layout/Grid/Grid";

function Projetos(props) {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <hr />
        <SectionTitle content="Projetos" />
      </div>
      <Grid />
    </div>
  );
}

export default Projetos;
